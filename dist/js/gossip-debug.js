"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
      var failedAttempts = 0;
      var lastDataSize = 0;
      var checkAndPublish = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var currentData, currentDataSize, success;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                currentData = _this.safeGetItem(_this.localStorageKey);
                currentDataSize = currentData ? JSON.parse(currentData).length : 0;
                if (!(failedAttempts >= 5 && currentDataSize === lastDataSize)) {
                  _context.next = 5;
                  break;
                }
                console.log('Max failures reached and no new data. Skipping publish attempt.');
                return _context.abrupt("return");
              case 5:
                if (currentDataSize !== lastDataSize) {
                  failedAttempts = 0; // Reset failed attempts if data size changed
                  lastDataSize = currentDataSize;
                }
                _context.prev = 6;
                _context.next = 9;
                return _this.publish(url, method, headers);
              case 9:
                success = _context.sent;
                if (!success) {
                  failedAttempts++;
                  console.error("Publish attempt failed. Total failed attempts: ".concat(failedAttempts));
                } else {
                  failedAttempts = 0; // Reset failed attempts on success
                  lastDataSize = 0; // Reset last data size on successful publish
                }
                _context.next = 17;
                break;
              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);
                console.error('Error in checkAndPublish:', _context.t0);
                failedAttempts++;
              case 17:
              case "end":
                return _context.stop();
            }
          }, _callee, null, [[6, 13]]);
        }));
        return function checkAndPublish() {
          return _ref.apply(this, arguments);
        };
      }();
      setInterval(checkAndPublish, interval);
    }

    // Deliver data to the remote server
  }, {
    key: "publish",
    value: function () {
      var _publish = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
        var _this2 = this;
        var method,
          headers,
          lockFn,
          isLockedFn,
          moveDataFn,
          existingData,
          response,
          newLogsDuringPublish,
          tmpLogs,
          mergedLogs,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              method = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'POST';
              headers = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : {};
              lockFn = function lockFn() {
                _this2.safeSetItem(_this2.localStorageLockKey, Date.now().toString());
              };
              isLockedFn = function isLockedFn() {
                var lockedSince = _this2.safeGetItem(_this2.localStorageLockKey);
                return lockedSince && Date.now() - parseInt(lockedSince, 10) < 30000;
              };
              moveDataFn = function moveDataFn(from, to) {
                var logs = _this2.safeGetItem(from);
                if (logs) {
                  _this2.safeSetItem(to, logs);
                  _this2.safeRemoveItem(from);
                }
              };
              if (!isLockedFn()) {
                _context2.next = 8;
                break;
              }
              console.log('Delivery is locked, skipping...');
              return _context2.abrupt("return", false);
            case 8:
              existingData = this.safeGetItem(this.localStorageKey);
              if (existingData) {
                _context2.next = 11;
                break;
              }
              return _context2.abrupt("return", true);
            case 11:
              // No data to send

              lockFn();
              moveDataFn(this.localStorageKey, this.localStorageTmpKey);
              _context2.prev = 13;
              _context2.next = 16;
              return fetch(url, {
                method: method,
                headers: _objectSpread({
                  'Content-Type': 'application/json'
                }, headers),
                body: existingData
              });
            case 16:
              response = _context2.sent;
              if (response.ok) {
                _context2.next = 19;
                break;
              }
              throw new Error("Failed to publish data: ".concat(response.status, " - ").concat(response.statusText));
            case 19:
              this.safeRemoveItem(this.localStorageTmpKey);
              return _context2.abrupt("return", true);
            case 23:
              _context2.prev = 23;
              _context2.t0 = _context2["catch"](13);
              console.error('Publish error:', _context2.t0);

              // Merge the temporary data back to the original
              newLogsDuringPublish = this.safeGetItem(this.localStorageKey);
              tmpLogs = JSON.parse(existingData);
              mergedLogs = newLogsDuringPublish ? JSON.parse(newLogsDuringPublish).concat(tmpLogs) : tmpLogs;
              this.safeSetItem(this.localStorageKey, JSON.stringify(mergedLogs));
              this.safeRemoveItem(this.localStorageTmpKey);
              return _context2.abrupt("return", false);
            case 32:
              _context2.prev = 32;
              this.safeRemoveItem(this.localStorageLockKey);
              return _context2.finish(32);
            case 35:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[13, 23, 32, 35]]);
      }));
      function publish(_x) {
        return _publish.apply(this, arguments);
      }
      return publish;
    }()
  }]);
}();
_defineProperty(Gossip, "localStorageKey", 'gossipQueue');
_defineProperty(Gossip, "localStorageTmpKey", 'gossipTmpQueue');
_defineProperty(Gossip, "localStorageLockKey", 'gossipLockedSince');
;