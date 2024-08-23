class Gossip {
	static localStorageKey = 'gossipQueue';
	static localStorageTmpKey = 'gossipTmpQueue';
	static localStorageLockKey = 'gossipLockedSince';

	// Helper method to safely access localStorage
	static safeGetItem(key) {
		try {
			return localStorage.getItem(key);
		} catch (error) {
			console.error(`Failed to get item from localStorage with key "${key}":`, error);
			return null;
		}
	}

	// Helper method to safely set localStorage item
	static safeSetItem(key, value) {
		try {
			localStorage.setItem(key, value);
		} catch (error) {
			console.error(`Failed to set item in localStorage with key "${key}":`, error);
		}
	}

	// Helper method to safely remove a localStorage item
	static safeRemoveItem(key) {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error(`Failed to remove item from localStorage with key "${key}":`, error);
		}
	}

	// Append data to localStorage
	static whisper(jsonObj) {
		try {
			const existingData = this.safeGetItem(this.localStorageKey);
			const dataArray = existingData ? JSON.parse(existingData) : [];
			dataArray.push(jsonObj);
			this.safeSetItem(this.localStorageKey, JSON.stringify(dataArray));
		} catch (error) {
			console.error('Failed to whisper gossip data:', error);
			return false;
		}

		return true;
	}

	// schedule auto-publishing of data
	static autoPublish(url, method = 'POST', headers = {}, interval = 30000) {
		setInterval(() => {
			this.publish(url, method, headers);
		}, interval);
	}

	// Deliver data to the remote server
	static publish(url, method = 'POST', headers = {}) {
		const lockFn = () => {
			this.safeSetItem(this.localStorageLockKey, Date.now().toString());
		};

		const isLockedFn = () => {
			const lockedSince = this.safeGetItem(this.localStorageLockKey);
			return lockedSince && (Date.now() - parseInt(lockedSince, 10)) < 30000;
		};

		const moveDataFn = (from, to) => {
			const logs = this.safeGetItem(from);
			if (logs) {
				this.safeSetItem(to, logs);
				this.safeRemoveItem(from);
			}
		};

		if (isLockedFn()) {
			console.log('Delivery is locked, skipping...');
			return;
		}

		const existingData = this.safeGetItem(this.localStorageKey);
		if (!existingData) return; // No data to send

		lockFn();
		moveDataFn(this.localStorageKey, this.localStorageTmpKey);

		fetch(url, {
			method,
			headers: {
				'Content-Type': 'application/json',
				...headers,
			},
			body: existingData,
		})
			.then(response => {
				if (!response.ok) {
					throw new Error(`Failed to publish data: ${response.status} - ${response.statusText}`);
				}
				this.safeRemoveItem(this.localStorageTmpKey); // Clear storage on successful publish
			})
			.catch(error => {
				console.error('Publish error:', error);

				// Merge the temporary data back to the original
				const newLogsDuringPublish = this.safeGetItem(this.localStorageKey);
				const tmpLogs = JSON.parse(existingData);
				const mergedLogs = newLogsDuringPublish ? JSON.parse(newLogsDuringPublish).concat(tmpLogs) : tmpLogs;

				this.safeSetItem(this.localStorageKey, JSON.stringify(mergedLogs));
				this.safeRemoveItem(this.localStorageTmpKey);
			})
			.finally(() => {
				this.safeRemoveItem(this.localStorageLockKey); // Clear lock
			});
	}
};