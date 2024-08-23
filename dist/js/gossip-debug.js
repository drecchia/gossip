"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Gossip = /*#__PURE__*/function () {
  function Gossip() {
    _classCallCheck(this, Gossip);
  }
  return _createClass(Gossip, null, [{
    key: "safeGetItem",
    value:
    // Helper method to safely access localStorage
    function safeGetItem(key) {
      try {
        return localStorage.getItem(key);
      } catch (error) {
        console.error("Failed to get item from localStorage with key \"".concat(key, "\":"), error);
        return null;
      }
    }

    // Helper method to safely set localStorage item
  }, {
    key: "safeSetItem",
    value: function safeSetItem(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch (error) {
        console.error("Failed to set item in localStorage with key \"".concat(key, "\":"), error);
      }
    }

    // Helper method to safely remove a localStorage item
  }, {
    key: "safeRemoveItem",
    value: function safeRemoveItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        console.error("Failed to remove item from localStorage with key \"".concat(key, "\":"), error);
      }
    }

    // Append data to localStorage
  }, {
    key: "whisper",
    value: function whisper(jsonObj) {
      try {
        var existingData = this.safeGetItem(this.localStorageKey);
        var dataArray = existingData ? JSON.parse(existingData) : [];
        dataArray.push(jsonObj);
        this.safeSetItem(this.localStorageKey, JSON.stringify(dataArray));
      } catch (error) {
        console.error('Failed to whisper gossip data:', error);
        return false;
      }
      return true;
    }

    // schedule auto-publishing of data
  }, {
    key: "autoPublish",
    value: function autoPublish(url) {
      var _this = this;
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var interval = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30000;
      setInterval(function () {
        _this.publish(url, method, headers);
      }, interval);
    }

    // Deliver data to the remote server
  }, {
    key: "publish",
    value: function publish(url) {
      var _this2 = this;
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'POST';
      var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var lockFn = function lockFn() {
        _this2.safeSetItem(_this2.localStorageLockKey, Date.now().toString());
      };
      var isLockedFn = function isLockedFn() {
        var lockedSince = _this2.safeGetItem(_this2.localStorageLockKey);
        return lockedSince && Date.now() - parseInt(lockedSince, 10) < 30000;
      };
      var moveDataFn = function moveDataFn(from, to) {
        var logs = _this2.safeGetItem(from);
        if (logs) {
          _this2.safeSetItem(to, logs);
          _this2.safeRemoveItem(from);
        }
      };
      if (isLockedFn()) {
        console.log('Delivery is locked, skipping...');
        return;
      }
      var existingData = this.safeGetItem(this.localStorageKey);
      if (!existingData) return; // No data to send

      lockFn();
      moveDataFn(this.localStorageKey, this.localStorageTmpKey);
      fetch(url, {
        method: method,
        headers: _objectSpread({
          'Content-Type': 'application/json'
        }, headers),
        body: existingData
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("Failed to publish data: ".concat(response.status, " - ").concat(response.statusText));
        }
        _this2.safeRemoveItem(_this2.localStorageTmpKey); // Clear storage on successful publish
      })["catch"](function (error) {
        console.error('Publish error:', error);

        // Merge the temporary data back to the original
        var newLogsDuringPublish = _this2.safeGetItem(_this2.localStorageKey);
        var tmpLogs = JSON.parse(existingData);
        var mergedLogs = newLogsDuringPublish ? JSON.parse(newLogsDuringPublish).concat(tmpLogs) : tmpLogs;
        _this2.safeSetItem(_this2.localStorageKey, JSON.stringify(mergedLogs));
        _this2.safeRemoveItem(_this2.localStorageTmpKey);
      })["finally"](function () {
        _this2.safeRemoveItem(_this2.localStorageLockKey); // Clear lock
      });
    }
  }]);
}();
_defineProperty(Gossip, "localStorageKey", 'gossipQueue');
_defineProperty(Gossip, "localStorageTmpKey", 'gossipTmpQueue');
_defineProperty(Gossip, "localStorageLockKey", 'gossipLockedSince');
;