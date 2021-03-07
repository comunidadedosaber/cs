(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/assets/js/app"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/corejs-typeahead/dist/typeahead.bundle.js":
/*!****************************************************************!*\
  !*** ./node_modules/corejs-typeahead/dist/typeahead.bundle.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * typeahead.js 1.3.1
 * https://github.com/corejavascript/typeahead.js
 * Copyright 2013-2020 Twitter, Inc. and other contributors; Licensed MIT
 */


(function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js") ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(a0) {
            return root["Bloodhound"] = factory(a0);
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            guid: function() {
                function _p8(s) {
                    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
                }
                return "tt-" + _p8() + _p8(true) + _p8(true) + _p8();
            },
            noop: function() {}
        };
    }();
    var VERSION = "1.3.1";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            ngram: ngram,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace),
                ngram: getObjTokenizer(ngram)
            }
        };
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
        }
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
        }
        function ngram(str) {
            str = _.toStr(str);
            var tokens = [], word = "";
            _.each(str.split(""), function(char) {
                if (char.match(/\s+/)) {
                    word = "";
                } else {
                    tokens.push(word + char);
                    word += char;
                }
            });
            return tokens;
        }
        function getObjTokenizer(tokenizer) {
            return function setKey(keys) {
                keys = _.isArray(keys) ? keys : [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(keys, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                    });
                    return tokens;
                };
            };
        }
    }();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
            }
        }
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
                    this.size--;
                }
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
                } else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
                }
            },
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
                }
            },
            reset: function reset() {
                this.size = 0;
                this.hash = {};
                this.list = new List();
            }
        });
        function List() {
            this.head = this.tail = null;
        }
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
                }
                this.head = node;
                this.tail = this.tail || node;
            },
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
            },
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
            }
        });
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
        }
        return LruCache;
    }();
    var PersistentStorage = function() {
        "use strict";
        var LOCAL_STORAGE;
        try {
            LOCAL_STORAGE = window.localStorage;
            LOCAL_STORAGE.setItem("~~~", "!");
            LOCAL_STORAGE.removeItem("~~~");
        } catch (err) {
            LOCAL_STORAGE = null;
        }
        function PersistentStorage(namespace, override) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
            this.ls = override || LOCAL_STORAGE;
            !this.ls && this._noop();
        }
        _.mixin(PersistentStorage.prototype, {
            _prefix: function(key) {
                return this.prefix + key;
            },
            _ttlKey: function(key) {
                return this._prefix(key) + this.ttlKey;
            },
            _noop: function() {
                this.get = this.set = this.remove = this.clear = this.isExpired = _.noop;
            },
            _safeSet: function(key, val) {
                try {
                    this.ls.setItem(key, val);
                } catch (err) {
                    if (err.name === "QuotaExceededError") {
                        this.clear();
                        this._noop();
                    }
                }
            },
            get: function(key) {
                if (this.isExpired(key)) {
                    this.remove(key);
                }
                return decode(this.ls.getItem(this._prefix(key)));
            },
            set: function(key, val, ttl) {
                if (_.isNumber(ttl)) {
                    this._safeSet(this._ttlKey(key), encode(now() + ttl));
                } else {
                    this.ls.removeItem(this._ttlKey(key));
                }
                return this._safeSet(this._prefix(key), encode(val));
            },
            remove: function(key) {
                this.ls.removeItem(this._ttlKey(key));
                this.ls.removeItem(this._prefix(key));
                return this;
            },
            clear: function() {
                var i, keys = gatherMatchingKeys(this.keyMatcher);
                for (i = keys.length; i--; ) {
                    this.remove(keys[i]);
                }
                return this;
            },
            isExpired: function(key) {
                var ttl = decode(this.ls.getItem(this._ttlKey(key)));
                return _.isNumber(ttl) && now() > ttl ? true : false;
            }
        });
        return PersistentStorage;
        function now() {
            return new Date().getTime();
        }
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
        }
        function decode(val) {
            return $.parseJSON(val);
        }
        function gatherMatchingKeys(keyMatcher) {
            var i, key, keys = [], len = LOCAL_STORAGE.length;
            for (i = 0; i < len; i++) {
                if ((key = LOCAL_STORAGE.key(i)).match(keyMatcher)) {
                    keys.push(key.replace(keyMatcher, ""));
                }
            }
            return keys;
        }
    }();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {}, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {};
            this.maxPendingRequests = o.maxPendingRequests || 6;
            this.cancelled = false;
            this.lastReq = null;
            this._send = o.transport;
            this._get = o.limiter ? o.limiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
        }
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            this.maxPendingRequests = num;
        };
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
        };
        _.mixin(Transport.prototype, {
            _fingerprint: function fingerprint(o) {
                o = o || {};
                return o.url + o.type + $.param(o.data || {});
            },
            _get: function(o, cb) {
                var that = this, fingerprint, jqXhr;
                fingerprint = this._fingerprint(o);
                if (this.cancelled || fingerprint !== this.lastReq) {
                    return;
                }
                if (jqXhr = pendingRequests[fingerprint]) {
                    jqXhr.done(done).fail(fail);
                } else if (pendingRequestsCount < this.maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[fingerprint] = this._send(o).done(done).fail(fail).always(always);
                } else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
                }
                function done(resp) {
                    cb(null, resp);
                    that._cache.set(fingerprint, resp);
                }
                function fail() {
                    cb(true);
                }
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[fingerprint];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                    }
                }
            },
            get: function(o, cb) {
                var resp, fingerprint;
                cb = cb || $.noop;
                o = _.isString(o) ? {
                    url: o
                } : o || {};
                fingerprint = this._fingerprint(o);
                this.cancelled = false;
                this.lastReq = fingerprint;
                if (resp = this._cache.get(fingerprint)) {
                    cb(null, resp);
                } else {
                    this._get(o, cb);
                }
            },
            cancel: function() {
                this.cancelled = true;
            }
        });
        return Transport;
    }();
    var SearchIndex = window.SearchIndex = function() {
        "use strict";
        var CHILDREN = "c", IDS = "i";
        function SearchIndex(o) {
            o = o || {};
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
            }
            this.identify = o.identify || _.stringify;
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.matchAnyQueryToken = o.matchAnyQueryToken;
            this.reset();
        }
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
            },
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    that.datums[id = that.identify(datum)] = datum;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node[CHILDREN][ch] || (node[CHILDREN][ch] = newNode());
                            node[IDS].push(id);
                        }
                    });
                });
            },
            get: function get(ids) {
                var that = this;
                return _.map(ids, function(id) {
                    return that.datums[id];
                });
            },
            search: function search(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0 && !that.matchAnyQueryToken) {
                        return false;
                    }
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node[CHILDREN][ch];
                    }
                    if (node && chars.length === 0) {
                        ids = node[IDS].slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                    } else {
                        if (!that.matchAnyQueryToken) {
                            matches = [];
                            return false;
                        }
                    }
                });
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
                }) : [];
            },
            all: function all() {
                var values = [];
                for (var key in this.datums) {
                    values.push(this.datums[key]);
                }
                return values;
            },
            reset: function reset() {
                this.datums = {};
                this.trie = newNode();
            },
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
                };
            }
        });
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
            });
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
            });
            return tokens;
        }
        function newNode() {
            var node = {};
            node[IDS] = [];
            node[CHILDREN] = {};
            return node;
        }
        function unique(array) {
            var seen = {}, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
                }
            }
            return uniques;
        }
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort();
            arrayB = arrayB.sort();
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
                } else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
                } else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
                }
            }
            return intersection;
        }
    }();
    var Prefetch = function() {
        "use strict";
        var keys;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
        };
        function Prefetch(o) {
            this.url = o.url;
            this.ttl = o.ttl;
            this.cache = o.cache;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.transport = o.transport;
            this.thumbprint = o.thumbprint;
            this.storage = new PersistentStorage(o.cacheKey);
        }
        _.mixin(Prefetch.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            store: function store(data) {
                if (!this.cache) {
                    return;
                }
                this.storage.set(keys.data, data, this.ttl);
                this.storage.set(keys.protocol, location.protocol, this.ttl);
                this.storage.set(keys.thumbprint, this.thumbprint, this.ttl);
            },
            fromCache: function fromCache() {
                var stored = {}, isExpired;
                if (!this.cache) {
                    return null;
                }
                stored.data = this.storage.get(keys.data);
                stored.protocol = this.storage.get(keys.protocol);
                stored.thumbprint = this.storage.get(keys.thumbprint);
                isExpired = stored.thumbprint !== this.thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
            },
            fromNetwork: function(cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                settings = this.prepare(this._settings());
                this.transport(settings).fail(onError).done(onResponse);
                function onError() {
                    cb(true);
                }
                function onResponse(resp) {
                    cb(null, that.transform(resp));
                }
            },
            clear: function clear() {
                this.storage.clear();
                return this;
            }
        });
        return Prefetch;
    }();
    var Remote = function() {
        "use strict";
        function Remote(o) {
            this.url = o.url;
            this.prepare = o.prepare;
            this.transform = o.transform;
            this.indexResponse = o.indexResponse;
            this.transport = new Transport({
                cache: o.cache,
                limiter: o.limiter,
                transport: o.transport,
                maxPendingRequests: o.maxPendingRequests
            });
        }
        _.mixin(Remote.prototype, {
            _settings: function settings() {
                return {
                    url: this.url,
                    type: "GET",
                    dataType: "json"
                };
            },
            get: function get(query, cb) {
                var that = this, settings;
                if (!cb) {
                    return;
                }
                query = query || "";
                settings = this.prepare(query, this._settings());
                return this.transport.get(settings, onResponse);
                function onResponse(err, resp) {
                    err ? cb([]) : cb(that.transform(resp));
                }
            },
            cancelLastRequest: function cancelLastRequest() {
                this.transport.cancel();
            }
        });
        return Remote;
    }();
    var oParser = function() {
        "use strict";
        return function parse(o) {
            var defaults, sorter;
            defaults = {
                initialize: true,
                identify: _.stringify,
                datumTokenizer: null,
                queryTokenizer: null,
                matchAnyQueryToken: false,
                sufficient: 5,
                indexRemote: false,
                sorter: null,
                local: [],
                prefetch: null,
                remote: null
            };
            o = _.mixin(defaults, o || {});
            !o.datumTokenizer && $.error("datumTokenizer is required");
            !o.queryTokenizer && $.error("queryTokenizer is required");
            sorter = o.sorter;
            o.sorter = sorter ? function(x) {
                return x.sort(sorter);
            } : _.identity;
            o.local = _.isFunction(o.local) ? o.local() : o.local;
            o.prefetch = parsePrefetch(o.prefetch);
            o.remote = parseRemote(o.remote);
            return o;
        };
        function parsePrefetch(o) {
            var defaults;
            if (!o) {
                return null;
            }
            defaults = {
                url: null,
                ttl: 24 * 60 * 60 * 1e3,
                cache: true,
                cacheKey: null,
                thumbprint: "",
                prepare: _.identity,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("prefetch requires url to be set");
            o.transform = o.filter || o.transform;
            o.cacheKey = o.cacheKey || o.url;
            o.thumbprint = VERSION + o.thumbprint;
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            return o;
        }
        function parseRemote(o) {
            var defaults;
            if (!o) {
                return;
            }
            defaults = {
                url: null,
                cache: true,
                prepare: null,
                replace: null,
                wildcard: null,
                limiter: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                transform: _.identity,
                transport: null
            };
            o = _.isString(o) ? {
                url: o
            } : o;
            o = _.mixin(defaults, o);
            !o.url && $.error("remote requires url to be set");
            o.transform = o.filter || o.transform;
            o.prepare = toRemotePrepare(o);
            o.limiter = toLimiter(o);
            o.transport = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            delete o.replace;
            delete o.wildcard;
            delete o.rateLimitBy;
            delete o.rateLimitWait;
            return o;
        }
        function toRemotePrepare(o) {
            var prepare, replace, wildcard;
            prepare = o.prepare;
            replace = o.replace;
            wildcard = o.wildcard;
            if (prepare) {
                return prepare;
            }
            if (replace) {
                prepare = prepareByReplace;
            } else if (o.wildcard) {
                prepare = prepareByWildcard;
            } else {
                prepare = identityPrepare;
            }
            return prepare;
            function prepareByReplace(query, settings) {
                settings.url = replace(settings.url, query);
                return settings;
            }
            function prepareByWildcard(query, settings) {
                settings.url = settings.url.replace(wildcard, encodeURIComponent(query));
                return settings;
            }
            function identityPrepare(query, settings) {
                return settings;
            }
        }
        function toLimiter(o) {
            var limiter, method, wait;
            limiter = o.limiter;
            method = o.rateLimitBy;
            wait = o.rateLimitWait;
            if (!limiter) {
                limiter = /^throttle$/i.test(method) ? throttle(wait) : debounce(wait);
            }
            return limiter;
            function debounce(wait) {
                return function debounce(fn) {
                    return _.debounce(fn, wait);
                };
            }
            function throttle(wait) {
                return function throttle(fn) {
                    return _.throttle(fn, wait);
                };
            }
        }
        function callbackToDeferred(fn) {
            return function wrapper(o) {
                var deferred = $.Deferred();
                fn(o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                    });
                }
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                    });
                }
            };
        }
    }();
    var Bloodhound = function() {
        "use strict";
        var old;
        old = window && window.Bloodhound;
        function Bloodhound(o) {
            o = oParser(o);
            this.sorter = o.sorter;
            this.identify = o.identify;
            this.sufficient = o.sufficient;
            this.indexRemote = o.indexRemote;
            this.local = o.local;
            this.remote = o.remote ? new Remote(o.remote) : null;
            this.prefetch = o.prefetch ? new Prefetch(o.prefetch) : null;
            this.index = new SearchIndex({
                identify: this.identify,
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
            });
            o.initialize !== false && this.initialize();
        }
        Bloodhound.noConflict = function noConflict() {
            window && (window.Bloodhound = old);
            return Bloodhound;
        };
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            __ttAdapter: function ttAdapter() {
                var that = this;
                return this.remote ? withAsync : withoutAsync;
                function withAsync(query, sync, async) {
                    return that.search(query, sync, async);
                }
                function withoutAsync(query, sync) {
                    return that.search(query, sync);
                }
            },
            _loadPrefetch: function loadPrefetch() {
                var that = this, deferred, serialized;
                deferred = $.Deferred();
                if (!this.prefetch) {
                    deferred.resolve();
                } else if (serialized = this.prefetch.fromCache()) {
                    this.index.bootstrap(serialized);
                    deferred.resolve();
                } else {
                    this.prefetch.fromNetwork(done);
                }
                return deferred.promise();
                function done(err, data) {
                    if (err) {
                        return deferred.reject();
                    }
                    that.add(data);
                    that.prefetch.store(that.index.serialize());
                    deferred.resolve();
                }
            },
            _initialize: function initialize() {
                var that = this, deferred;
                this.clear();
                (this.initPromise = this._loadPrefetch()).done(addLocalToIndex);
                return this.initPromise;
                function addLocalToIndex() {
                    that.add(that.local);
                }
            },
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
            },
            add: function add(data) {
                this.index.add(data);
                return this;
            },
            get: function get(ids) {
                ids = _.isArray(ids) ? ids : [].slice.call(arguments);
                return this.index.get(ids);
            },
            search: function search(query, sync, async) {
                var that = this, local;
                sync = sync || _.noop;
                async = async || _.noop;
                local = this.sorter(this.index.search(query));
                sync(this.remote ? local.slice() : local);
                if (this.remote && local.length < this.sufficient) {
                    this.remote.get(query, processRemote);
                } else if (this.remote) {
                    this.remote.cancelLastRequest();
                }
                return this;
                function processRemote(remote) {
                    var nonDuplicates = [];
                    _.each(remote, function(r) {
                        !_.some(local, function(l) {
                            return that.identify(r) === that.identify(l);
                        }) && nonDuplicates.push(r);
                    });
                    that.indexRemote && that.add(nonDuplicates);
                    async(nonDuplicates);
                }
            },
            all: function all() {
                return this.index.all();
            },
            clear: function clear() {
                this.index.reset();
                return this;
            },
            clearPrefetchCache: function clearPrefetchCache() {
                this.prefetch && this.prefetch.clear();
                return this;
            },
            clearRemoteCache: function clearRemoteCache() {
                Transport.resetCache();
                return this;
            },
            ttAdapter: function ttAdapter() {
                return this.__ttAdapter();
            }
        });
        return Bloodhound;
    }();
    return Bloodhound;
});

(function(root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js") ], __WEBPACK_AMD_DEFINE_RESULT__ = (function(a0) {
            return factory(a0);
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(this, function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
            },
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
            },
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            },
            isString: function(obj) {
                return typeof obj === "string";
            },
            isNumber: function(obj) {
                return typeof obj === "number";
            },
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
            },
            isElement: function(obj) {
                return !!(obj && obj.nodeType === 1);
            },
            isJQuery: function(obj) {
                return obj instanceof $;
            },
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
            },
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
                }
            },
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                    }
                });
                return !!result;
            },
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
                }
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                    }
                });
                return !!result;
            },
            mixin: $.extend,
            identity: function(x) {
                return x;
            },
            clone: function(obj) {
                return $.extend(true, {}, obj);
            },
            getIdGenerator: function() {
                var counter = 0;
                return function() {
                    return counter++;
                };
            },
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
                }
            },
            defer: function(fn) {
                setTimeout(fn, 0);
            },
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                        }
                    };
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                    }
                    return result;
                };
            },
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
                };
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                    } else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            },
            stringify: function(val) {
                return _.isString(val) ? val : JSON.stringify(val);
            },
            guid: function() {
                function _p8(s) {
                    var p = (Math.random().toString(16) + "000000000").substr(2, 8);
                    return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
                }
                return "tt-" + _p8() + _p8(true) + _p8(true) + _p8();
            },
            noop: function() {}
        };
    }();
    var WWW = function() {
        "use strict";
        var defaultClassNames = {
            wrapper: "twitter-typeahead",
            input: "tt-input",
            hint: "tt-hint",
            menu: "tt-menu",
            dataset: "tt-dataset",
            suggestion: "tt-suggestion",
            selectable: "tt-selectable",
            empty: "tt-empty",
            open: "tt-open",
            cursor: "tt-cursor",
            highlight: "tt-highlight"
        };
        return build;
        function build(o) {
            var www, classes;
            classes = _.mixin({}, defaultClassNames, o);
            www = {
                css: buildCss(),
                classes: classes,
                html: buildHtml(classes),
                selectors: buildSelectors(classes)
            };
            return {
                css: www.css,
                html: www.html,
                classes: www.classes,
                selectors: www.selectors,
                mixin: function(o) {
                    _.mixin(o, www);
                }
            };
        }
        function buildHtml(c) {
            return {
                wrapper: '<span class="' + c.wrapper + '"></span>',
                menu: '<div role="listbox" class="' + c.menu + '"></div>'
            };
        }
        function buildSelectors(classes) {
            var selectors = {};
            _.each(classes, function(v, k) {
                selectors[k] = "." + v;
            });
            return selectors;
        }
        function buildCss() {
            var css = {
                wrapper: {
                    position: "relative",
                    display: "inline-block"
                },
                hint: {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    borderColor: "transparent",
                    boxShadow: "none",
                    opacity: "1"
                },
                input: {
                    position: "relative",
                    verticalAlign: "top",
                    backgroundColor: "transparent"
                },
                inputWithNoHint: {
                    position: "relative",
                    verticalAlign: "top"
                },
                menu: {
                    position: "absolute",
                    top: "100%",
                    left: "0",
                    zIndex: "100",
                    display: "none"
                },
                ltr: {
                    left: "0",
                    right: "auto"
                },
                rtl: {
                    left: "auto",
                    right: " 0"
                }
            };
            if (_.isMsie()) {
                _.mixin(css.input, {
                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                });
            }
            return css;
        }
    }();
    var EventBus = function() {
        "use strict";
        var namespace, deprecationMap;
        namespace = "typeahead:";
        deprecationMap = {
            render: "rendered",
            cursorchange: "cursorchanged",
            select: "selected",
            autocomplete: "autocompleted"
        };
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
            }
            this.$el = $(o.el);
        }
        _.mixin(EventBus.prototype, {
            _trigger: function(type, args) {
                var $e = $.Event(namespace + type);
                this.$el.trigger.call(this.$el, $e, args || []);
                return $e;
            },
            before: function(type) {
                var args, $e;
                args = [].slice.call(arguments, 1);
                $e = this._trigger("before" + type, args);
                return $e.isDefaultPrevented();
            },
            trigger: function(type) {
                var deprecatedType;
                this._trigger(type, [].slice.call(arguments, 1));
                if (deprecatedType = deprecationMap[type]) {
                    this._trigger(deprecatedType, [].slice.call(arguments, 1));
                }
            }
        });
        return EventBus;
    }();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
        };
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
            }
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {};
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
                };
                this._callbacks[type][method].push(cb);
            }
            return this;
        }
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
        }
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
        }
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
            }
            return this;
        }
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
            }
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
            }
            return this;
        }
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
                }
                return !cancelled;
            }
        }
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                    });
                };
            } else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                    }, 0);
                };
            }
            return nextTickFn;
        }
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
            };
        }
    }();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false,
            diacriticInsensitive: false
        };
        var accented = {
            A: "[AaªÀ-Åà-åĀ-ąǍǎȀ-ȃȦȧᴬᵃḀḁẚẠ-ảₐ℀℁℻⒜Ⓐⓐ㍱-㍴㎀-㎄㎈㎉㎩-㎯㏂㏊㏟㏿Ａａ]",
            B: "[BbᴮᵇḂ-ḇℬ⒝Ⓑⓑ㍴㎅-㎇㏃㏈㏔㏝Ｂｂ]",
            C: "[CcÇçĆ-čᶜ℀ℂ℃℅℆ℭⅭⅽ⒞Ⓒⓒ㍶㎈㎉㎝㎠㎤㏄-㏇Ｃｃ]",
            D: "[DdĎďǄ-ǆǱ-ǳᴰᵈḊ-ḓⅅⅆⅮⅾ⒟Ⓓⓓ㋏㍲㍷-㍹㎗㎭-㎯㏅㏈Ｄｄ]",
            E: "[EeÈ-Ëè-ëĒ-ěȄ-ȇȨȩᴱᵉḘ-ḛẸ-ẽₑ℡ℯℰⅇ⒠Ⓔⓔ㉐㋍㋎Ｅｅ]",
            F: "[FfᶠḞḟ℉ℱ℻⒡Ⓕⓕ㎊-㎌㎙ﬀ-ﬄＦｆ]",
            G: "[GgĜ-ģǦǧǴǵᴳᵍḠḡℊ⒢Ⓖⓖ㋌㋍㎇㎍-㎏㎓㎬㏆㏉㏒㏿Ｇｇ]",
            H: "[HhĤĥȞȟʰᴴḢ-ḫẖℋ-ℎ⒣Ⓗⓗ㋌㍱㎐-㎔㏊㏋㏗Ｈｈ]",
            I: "[IiÌ-Ïì-ïĨ-İĲĳǏǐȈ-ȋᴵᵢḬḭỈ-ịⁱℐℑℹⅈⅠ-ⅣⅥ-ⅨⅪⅫⅰ-ⅳⅵ-ⅸⅺⅻ⒤Ⓘⓘ㍺㏌㏕ﬁﬃＩｉ]",
            J: "[JjĲ-ĵǇ-ǌǰʲᴶⅉ⒥ⒿⓙⱼＪｊ]",
            K: "[KkĶķǨǩᴷᵏḰ-ḵK⒦Ⓚⓚ㎄㎅㎉㎏㎑㎘㎞㎢㎦㎪㎸㎾㏀㏆㏍-㏏Ｋｋ]",
            L: "[LlĹ-ŀǇ-ǉˡᴸḶḷḺ-ḽℒℓ℡Ⅼⅼ⒧Ⓛⓛ㋏㎈㎉㏐-㏓㏕㏖㏿ﬂﬄＬｌ]",
            M: "[MmᴹᵐḾ-ṃ℠™ℳⅯⅿ⒨Ⓜⓜ㍷-㍹㎃㎆㎎㎒㎖㎙-㎨㎫㎳㎷㎹㎽㎿㏁㏂㏎㏐㏔-㏖㏘㏙㏞㏟Ｍｍ]",
            N: "[NnÑñŃ-ŉǊ-ǌǸǹᴺṄ-ṋⁿℕ№⒩Ⓝⓝ㎁㎋㎚㎱㎵㎻㏌㏑Ｎｎ]",
            O: "[OoºÒ-Öò-öŌ-őƠơǑǒǪǫȌ-ȏȮȯᴼᵒỌ-ỏₒ℅№ℴ⒪Ⓞⓞ㍵㏇㏒㏖Ｏｏ]",
            P: "[PpᴾᵖṔ-ṗℙ⒫Ⓟⓟ㉐㍱㍶㎀㎊㎩-㎬㎰㎴㎺㏋㏗-㏚Ｐｐ]",
            Q: "[Qqℚ⒬Ⓠⓠ㏃Ｑｑ]",
            R: "[RrŔ-řȐ-ȓʳᴿᵣṘ-ṛṞṟ₨ℛ-ℝ⒭Ⓡⓡ㋍㍴㎭-㎯㏚㏛Ｒｒ]",
            S: "[SsŚ-šſȘșˢṠ-ṣ₨℁℠⒮Ⓢⓢ㎧㎨㎮-㎳㏛㏜ﬆＳｓ]",
            T: "[TtŢ-ťȚțᵀᵗṪ-ṱẗ℡™⒯Ⓣⓣ㉐㋏㎔㏏ﬅﬆＴｔ]",
            U: "[UuÙ-Üù-üŨ-ųƯưǓǔȔ-ȗᵁᵘᵤṲ-ṷỤ-ủ℆⒰Ⓤⓤ㍳㍺Ｕｕ]",
            V: "[VvᵛᵥṼ-ṿⅣ-Ⅷⅳ-ⅷ⒱Ⓥⓥⱽ㋎㍵㎴-㎹㏜㏞Ｖｖ]",
            W: "[WwŴŵʷᵂẀ-ẉẘ⒲Ⓦⓦ㎺-㎿㏝Ｗｗ]",
            X: "[XxˣẊ-ẍₓ℻Ⅸ-Ⅻⅸ-ⅻ⒳Ⓧⓧ㏓Ｘｘ]",
            Y: "[YyÝýÿŶ-ŸȲȳʸẎẏẙỲ-ỹ⒴Ⓨⓨ㏉Ｙｙ]",
            Z: "[ZzŹ-žǱ-ǳᶻẐ-ẕℤℨ⒵Ⓩⓩ㎐-㎔Ｚｚ]"
        };
        return function hightlight(o) {
            var regex;
            o = _.mixin({}, defaults, o);
            if (!o.node || !o.pattern) {
                return;
            }
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly, o.diacriticInsensitive);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
                }
                return !!match;
            }
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                    } else {
                        traverse(childNode, hightlightTextNode);
                    }
                }
            }
        };
        function accent_replacer(chr) {
            return accented[chr.toUpperCase()] || chr;
        }
        function getRegex(patterns, caseSensitive, wordsOnly, diacriticInsensitive) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                var escapedWord = _.escapeRegExChars(patterns[i]);
                if (diacriticInsensitive) {
                    escapedWord = escapedWord.replace(/\S/g, accent_replacer);
                }
                escapedPatterns.push(escapedWord);
            }
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
        }
    }(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
        };
        function Input(o, www) {
            var id;
            o = o || {};
            if (!o.input) {
                $.error("input is missing");
            }
            www.mixin(this);
            this.$hint = $(o.hint);
            this.$input = $(o.input);
            this.$menu = $(o.menu);
            id = this.$input.attr("id") || _.guid();
            this.$menu.attr("id", id + "_listbox");
            this.$hint.attr({
                "aria-hidden": true
            });
            this.$input.attr({
                "aria-owns": id + "_listbox",
                role: "combobox",
                "aria-autocomplete": "list",
                "aria-expanded": false
            });
            this.query = this.$input.val();
            this.queryWhenFocused = this.hasFocus() ? this.query : null;
            this.$overflowHelper = buildOverflowHelper(this.$input);
            this._checkLanguageDirection();
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
            }
            this.onSync("cursorchange", this._updateDescendent);
        }
        Input.normalizeQuery = function(str) {
            return _.toStr(str).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
        };
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
            },
            _onFocus: function onFocus() {
                this.queryWhenFocused = this.query;
                this.trigger("focused");
            },
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
                }
            },
            _onInput: function onInput() {
                this._setQuery(this.getInputValue());
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault;
                switch (keyName) {
                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
                }
                preventDefault && $e.preventDefault();
            },
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
                }
                return trigger;
            },
            _checkLanguageDirection: function checkLanguageDirection() {
                var dir = (this.$input.css("direction") || "ltr").toLowerCase();
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.$hint.attr("dir", dir);
                    this.trigger("langDirChanged", dir);
                }
            },
            _setQuery: function setQuery(val, silent) {
                var areEquivalent, hasDifferentWhitespace;
                areEquivalent = areQueriesEquivalent(val, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== val.length : false;
                this.query = val;
                if (!silent && !areEquivalent) {
                    this.trigger("queryChanged", this.query);
                } else if (!silent && hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
                }
            },
            _updateDescendent: function updateDescendent(event, id) {
                this.$input.attr("aria-activedescendant", id);
            },
            bind: function() {
                var that = this, onBlur, onFocus, onKeydown, onInput;
                onBlur = _.bind(this._onBlur, this);
                onFocus = _.bind(this._onFocus, this);
                onKeydown = _.bind(this._onKeydown, this);
                onInput = _.bind(this._onInput, this);
                this.$input.on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
                if (!_.isMsie() || _.isMsie() > 9) {
                    this.$input.on("input.tt", onInput);
                } else {
                    this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                        if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                            return;
                        }
                        _.defer(_.bind(that._onInput, that, $e));
                    });
                }
                return this;
            },
            focus: function focus() {
                this.$input.focus();
            },
            blur: function blur() {
                this.$input.blur();
            },
            getLangDir: function getLangDir() {
                return this.dir;
            },
            getQuery: function getQuery() {
                return this.query || "";
            },
            setQuery: function setQuery(val, silent) {
                this.setInputValue(val);
                this._setQuery(val, silent);
            },
            hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                return this.query !== this.queryWhenFocused;
            },
            getInputValue: function getInputValue() {
                return this.$input.val();
            },
            setInputValue: function setInputValue(value) {
                this.$input.val(value);
                this.clearHintIfInvalid();
                this._checkLanguageDirection();
            },
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query);
            },
            getHint: function getHint() {
                return this.$hint.val();
            },
            setHint: function setHint(value) {
                this.$hint.val(value);
            },
            clearHint: function clearHint() {
                this.setHint("");
            },
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
            },
            hasFocus: function hasFocus() {
                return this.$input.is(":focus");
            },
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
            },
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
                } else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
                }
                return true;
            },
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$overflowHelper.remove();
                this.$hint = this.$input = this.$overflowHelper = $("<div>");
            },
            setAriaExpanded: function setAriaExpanded(value) {
                this.$input.attr("aria-expanded", value);
            }
        });
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
            }).insertAfter($input);
        }
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
        }
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
        }
    }();
    var Dataset = function() {
        "use strict";
        var keys, nameGenerator;
        keys = {
            dataset: "tt-selectable-dataset",
            val: "tt-selectable-display",
            obj: "tt-selectable-object"
        };
        nameGenerator = _.getIdGenerator();
        function Dataset(o, www) {
            o = o || {};
            o.templates = o.templates || {};
            o.templates.notFound = o.templates.notFound || o.templates.empty;
            if (!o.source) {
                $.error("missing source");
            }
            if (!o.node) {
                $.error("missing node");
            }
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
            }
            www.mixin(this);
            this.highlight = !!o.highlight;
            this.name = _.toStr(o.name || nameGenerator());
            this.limit = o.limit || 5;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.source = o.source.__ttAdapter ? o.source.__ttAdapter() : o.source;
            this.async = _.isUndefined(o.async) ? this.source.length > 2 : !!o.async;
            this._resetLastSuggestion();
            this.$el = $(o.node).attr("role", "presentation").addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
        }
        Dataset.extractData = function extractData(el) {
            var $el = $(el);
            if ($el.data(keys.obj)) {
                return {
                    dataset: $el.data(keys.dataset) || "",
                    val: $el.data(keys.val) || "",
                    obj: $el.data(keys.obj) || null
                };
            }
            return null;
        };
        _.mixin(Dataset.prototype, EventEmitter, {
            _overwrite: function overwrite(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (this.async && this.templates.pending) {
                    this._renderPending(query);
                } else if (!this.async && this.templates.notFound) {
                    this._renderNotFound(query);
                } else {
                    this._empty();
                }
                this.trigger("rendered", suggestions, false, this.name);
            },
            _append: function append(query, suggestions) {
                suggestions = suggestions || [];
                if (suggestions.length && this.$lastSuggestion.length) {
                    this._appendSuggestions(query, suggestions);
                } else if (suggestions.length) {
                    this._renderSuggestions(query, suggestions);
                } else if (!this.$lastSuggestion.length && this.templates.notFound) {
                    this._renderNotFound(query);
                }
                this.trigger("rendered", suggestions, true, this.name);
            },
            _renderSuggestions: function renderSuggestions(query, suggestions) {
                var $fragment;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                this.$lastSuggestion = $fragment.children().last();
                this.$el.html($fragment).prepend(this._getHeader(query, suggestions)).append(this._getFooter(query, suggestions));
            },
            _appendSuggestions: function appendSuggestions(query, suggestions) {
                var $fragment, $lastSuggestion;
                $fragment = this._getSuggestionsFragment(query, suggestions);
                $lastSuggestion = $fragment.children().last();
                this.$lastSuggestion.after($fragment);
                this.$lastSuggestion = $lastSuggestion;
            },
            _renderPending: function renderPending(query) {
                var template = this.templates.pending;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _renderNotFound: function renderNotFound(query) {
                var template = this.templates.notFound;
                this._resetLastSuggestion();
                template && this.$el.html(template({
                    query: query,
                    dataset: this.name
                }));
            },
            _empty: function empty() {
                this.$el.empty();
                this._resetLastSuggestion();
            },
            _getSuggestionsFragment: function getSuggestionsFragment(query, suggestions) {
                var that = this, fragment;
                fragment = document.createDocumentFragment();
                _.each(suggestions, function getSuggestionNode(suggestion) {
                    var $el, context;
                    context = that._injectQuery(query, suggestion);
                    $el = $(that.templates.suggestion(context)).data(keys.dataset, that.name).data(keys.obj, suggestion).data(keys.val, that.displayFn(suggestion)).addClass(that.classes.suggestion + " " + that.classes.selectable);
                    fragment.appendChild($el[0]);
                });
                this.highlight && highlight({
                    className: this.classes.highlight,
                    node: fragment,
                    pattern: query
                });
                return $(fragment);
            },
            _getFooter: function getFooter(query, suggestions) {
                return this.templates.footer ? this.templates.footer({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _getHeader: function getHeader(query, suggestions) {
                return this.templates.header ? this.templates.header({
                    query: query,
                    suggestions: suggestions,
                    dataset: this.name
                }) : null;
            },
            _resetLastSuggestion: function resetLastSuggestion() {
                this.$lastSuggestion = $();
            },
            _injectQuery: function injectQuery(query, obj) {
                return _.isObject(obj) ? _.mixin({
                    _query: query
                }, obj) : obj;
            },
            update: function update(query) {
                var that = this, canceled = false, syncCalled = false, rendered = 0;
                this.cancel();
                this.cancel = function cancel() {
                    canceled = true;
                    that.cancel = $.noop;
                    that.async && that.trigger("asyncCanceled", query, that.name);
                };
                this.source(query, sync, async);
                !syncCalled && sync([]);
                function sync(suggestions) {
                    if (syncCalled) {
                        return;
                    }
                    syncCalled = true;
                    suggestions = (suggestions || []).slice(0, that.limit);
                    rendered = suggestions.length;
                    that._overwrite(query, suggestions);
                    if (rendered < that.limit && that.async) {
                        that.trigger("asyncRequested", query, that.name);
                    }
                }
                function async(suggestions) {
                    suggestions = suggestions || [];
                    if (!canceled && rendered < that.limit) {
                        that.cancel = $.noop;
                        var idx = Math.abs(rendered - that.limit);
                        rendered += idx;
                        that._append(query, suggestions.slice(0, idx));
                        that.async && that.trigger("asyncReceived", query, that.name);
                    }
                }
            },
            cancel: $.noop,
            clear: function clear() {
                this._empty();
                this.cancel();
                this.trigger("cleared");
            },
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
            },
            destroy: function destroy() {
                this.$el = $("<div>");
            }
        });
        return Dataset;
        function getDisplayFn(display) {
            display = display || _.stringify;
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
            }
        }
        function getTemplates(templates, displayFn) {
            return {
                notFound: templates.notFound && _.templatify(templates.notFound),
                pending: templates.pending && _.templatify(templates.pending),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion ? userSuggestionTemplate : suggestionTemplate
            };
            function userSuggestionTemplate(context) {
                var template = templates.suggestion;
                return $(template(context)).attr("id", _.guid());
            }
            function suggestionTemplate(context) {
                return $('<div role="option">').attr("id", _.guid()).text(displayFn(context));
            }
        }
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
        }
    }();
    var Menu = function() {
        "use strict";
        function Menu(o, www) {
            var that = this;
            o = o || {};
            if (!o.node) {
                $.error("node is required");
            }
            www.mixin(this);
            this.$node = $(o.node);
            this.query = null;
            this.datasets = _.map(o.datasets, initializeDataset);
            function initializeDataset(oDataset) {
                var node = that.$node.find(oDataset.node).first();
                oDataset.node = node.length ? node : $("<div>").appendTo(that.$node);
                return new Dataset(oDataset, www);
            }
        }
        _.mixin(Menu.prototype, EventEmitter, {
            _onSelectableClick: function onSelectableClick($e) {
                this.trigger("selectableClicked", $($e.currentTarget));
            },
            _onRendered: function onRendered(type, dataset, suggestions, async) {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetRendered", dataset, suggestions, async);
            },
            _onCleared: function onCleared() {
                this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty());
                this.trigger("datasetCleared");
            },
            _propagate: function propagate() {
                this.trigger.apply(this, arguments);
            },
            _allDatasetsEmpty: function allDatasetsEmpty() {
                return _.every(this.datasets, _.bind(function isDatasetEmpty(dataset) {
                    var isEmpty = dataset.isEmpty();
                    this.$node.attr("aria-expanded", !isEmpty);
                    return isEmpty;
                }, this));
            },
            _getSelectables: function getSelectables() {
                return this.$node.find(this.selectors.selectable);
            },
            _removeCursor: function _removeCursor() {
                var $selectable = this.getActiveSelectable();
                $selectable && $selectable.removeClass(this.classes.cursor);
            },
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, nodeScrollTop, nodeHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                nodeScrollTop = this.$node.scrollTop();
                nodeHeight = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$node.scrollTop(nodeScrollTop + elTop);
                } else if (nodeHeight < elBottom) {
                    this.$node.scrollTop(nodeScrollTop + (elBottom - nodeHeight));
                }
            },
            bind: function() {
                var that = this, onSelectableClick;
                onSelectableClick = _.bind(this._onSelectableClick, this);
                this.$node.on("click.tt", this.selectors.selectable, onSelectableClick);
                this.$node.on("mouseover", this.selectors.selectable, function() {
                    that.setCursor($(this));
                });
                this.$node.on("mouseleave", function() {
                    that._removeCursor();
                });
                _.each(this.datasets, function(dataset) {
                    dataset.onSync("asyncRequested", that._propagate, that).onSync("asyncCanceled", that._propagate, that).onSync("asyncReceived", that._propagate, that).onSync("rendered", that._onRendered, that).onSync("cleared", that._onCleared, that);
                });
                return this;
            },
            isOpen: function isOpen() {
                return this.$node.hasClass(this.classes.open);
            },
            open: function open() {
                this.$node.scrollTop(0);
                this.$node.addClass(this.classes.open);
            },
            close: function close() {
                this.$node.attr("aria-expanded", false);
                this.$node.removeClass(this.classes.open);
                this._removeCursor();
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.attr("dir", dir);
            },
            selectableRelativeToCursor: function selectableRelativeToCursor(delta) {
                var $selectables, $oldCursor, oldIndex, newIndex;
                $oldCursor = this.getActiveSelectable();
                $selectables = this._getSelectables();
                oldIndex = $oldCursor ? $selectables.index($oldCursor) : -1;
                newIndex = oldIndex + delta;
                newIndex = (newIndex + 1) % ($selectables.length + 1) - 1;
                newIndex = newIndex < -1 ? $selectables.length - 1 : newIndex;
                return newIndex === -1 ? null : $selectables.eq(newIndex);
            },
            setCursor: function setCursor($selectable) {
                this._removeCursor();
                if ($selectable = $selectable && $selectable.first()) {
                    $selectable.addClass(this.classes.cursor);
                    this._ensureVisible($selectable);
                }
            },
            getSelectableData: function getSelectableData($el) {
                return $el && $el.length ? Dataset.extractData($el) : null;
            },
            getActiveSelectable: function getActiveSelectable() {
                var $selectable = this._getSelectables().filter(this.selectors.cursor).first();
                return $selectable.length ? $selectable : null;
            },
            getTopSelectable: function getTopSelectable() {
                var $selectable = this._getSelectables().first();
                return $selectable.length ? $selectable : null;
            },
            update: function update(query) {
                var isValidUpdate = query !== this.query;
                if (isValidUpdate) {
                    this.query = query;
                    _.each(this.datasets, updateDataset);
                }
                return isValidUpdate;
                function updateDataset(dataset) {
                    dataset.update(query);
                }
            },
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.query = null;
                this.$node.addClass(this.classes.empty);
                function clearDataset(dataset) {
                    dataset.clear();
                }
            },
            destroy: function destroy() {
                this.$node.off(".tt");
                this.$node = $("<div>");
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
                }
            }
        });
        return Menu;
    }();
    var Status = function() {
        "use strict";
        function Status(options) {
            this.$el = $("<span></span>", {
                role: "status",
                "aria-live": "polite"
            }).css({
                position: "absolute",
                padding: "0",
                border: "0",
                height: "1px",
                width: "1px",
                "margin-bottom": "-1px",
                "margin-right": "-1px",
                overflow: "hidden",
                clip: "rect(0 0 0 0)",
                "white-space": "nowrap"
            });
            options.$input.after(this.$el);
            _.each(options.menu.datasets, _.bind(function(dataset) {
                if (dataset.onSync) {
                    dataset.onSync("rendered", _.bind(this.update, this));
                    dataset.onSync("cleared", _.bind(this.cleared, this));
                }
            }, this));
        }
        _.mixin(Status.prototype, {
            update: function update(event, suggestions) {
                var length = suggestions.length;
                var words;
                if (length === 1) {
                    words = {
                        result: "result",
                        is: "is"
                    };
                } else {
                    words = {
                        result: "results",
                        is: "are"
                    };
                }
                this.$el.text(length + " " + words.result + " " + words.is + " available, use up and down arrow keys to navigate.");
            },
            cleared: function() {
                this.$el.text("");
            }
        });
        return Status;
    }();
    var DefaultMenu = function() {
        "use strict";
        var s = Menu.prototype;
        function DefaultMenu() {
            Menu.apply(this, [].slice.call(arguments, 0));
        }
        _.mixin(DefaultMenu.prototype, Menu.prototype, {
            open: function open() {
                !this._allDatasetsEmpty() && this._show();
                return s.open.apply(this, [].slice.call(arguments, 0));
            },
            close: function close() {
                this._hide();
                return s.close.apply(this, [].slice.call(arguments, 0));
            },
            _onRendered: function onRendered() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onRendered.apply(this, [].slice.call(arguments, 0));
            },
            _onCleared: function onCleared() {
                if (this._allDatasetsEmpty()) {
                    this._hide();
                } else {
                    this.isOpen() && this._show();
                }
                return s._onCleared.apply(this, [].slice.call(arguments, 0));
            },
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$node.css(dir === "ltr" ? this.css.ltr : this.css.rtl);
                return s.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
            },
            _hide: function hide() {
                this.$node.hide();
            },
            _show: function show() {
                this.$node.css("display", "block");
            }
        });
        return DefaultMenu;
    }();
    var Typeahead = function() {
        "use strict";
        function Typeahead(o, www) {
            var onFocused, onBlurred, onEnterKeyed, onTabKeyed, onEscKeyed, onUpKeyed, onDownKeyed, onLeftKeyed, onRightKeyed, onQueryChanged, onWhitespaceChanged;
            o = o || {};
            if (!o.input) {
                $.error("missing input");
            }
            if (!o.menu) {
                $.error("missing menu");
            }
            if (!o.eventBus) {
                $.error("missing event bus");
            }
            www.mixin(this);
            this.eventBus = o.eventBus;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.input = o.input;
            this.menu = o.menu;
            this.enabled = true;
            this.autoselect = !!o.autoselect;
            this.active = false;
            this.input.hasFocus() && this.activate();
            this.dir = this.input.getLangDir();
            this._hacks();
            this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this);
            onFocused = c(this, "activate", "open", "_onFocused");
            onBlurred = c(this, "deactivate", "_onBlurred");
            onEnterKeyed = c(this, "isActive", "isOpen", "_onEnterKeyed");
            onTabKeyed = c(this, "isActive", "isOpen", "_onTabKeyed");
            onEscKeyed = c(this, "isActive", "_onEscKeyed");
            onUpKeyed = c(this, "isActive", "open", "_onUpKeyed");
            onDownKeyed = c(this, "isActive", "open", "_onDownKeyed");
            onLeftKeyed = c(this, "isActive", "isOpen", "_onLeftKeyed");
            onRightKeyed = c(this, "isActive", "isOpen", "_onRightKeyed");
            onQueryChanged = c(this, "_openIfActive", "_onQueryChanged");
            onWhitespaceChanged = c(this, "_openIfActive", "_onWhitespaceChanged");
            this.input.bind().onSync("focused", onFocused, this).onSync("blurred", onBlurred, this).onSync("enterKeyed", onEnterKeyed, this).onSync("tabKeyed", onTabKeyed, this).onSync("escKeyed", onEscKeyed, this).onSync("upKeyed", onUpKeyed, this).onSync("downKeyed", onDownKeyed, this).onSync("leftKeyed", onLeftKeyed, this).onSync("rightKeyed", onRightKeyed, this).onSync("queryChanged", onQueryChanged, this).onSync("whitespaceChanged", onWhitespaceChanged, this).onSync("langDirChanged", this._onLangDirChanged, this);
        }
        _.mixin(Typeahead.prototype, {
            _hacks: function hacks() {
                var $input, $menu;
                $input = this.input.$input || $("<div>");
                $menu = this.menu.$node || $("<div>");
                $input.on("blur.tt", function($e) {
                    var active, isActive, hasActive;
                    active = document.activeElement;
                    isActive = $menu.is(active);
                    hasActive = $menu.has(active).length > 0;
                    if (_.isMsie() && (isActive || hasActive)) {
                        $e.preventDefault();
                        $e.stopImmediatePropagation();
                        _.defer(function() {
                            $input.focus();
                        });
                    }
                });
                $menu.on("mousedown.tt", function($e) {
                    $e.preventDefault();
                });
            },
            _onSelectableClicked: function onSelectableClicked(type, $el) {
                this.select($el);
            },
            _onDatasetCleared: function onDatasetCleared() {
                this._updateHint();
            },
            _onDatasetRendered: function onDatasetRendered(type, suggestions, async, dataset) {
                this._updateHint();
                if (this.autoselect) {
                    var cursorClass = this.selectors.cursor.substr(1);
                    this.menu.$node.find(this.selectors.suggestion).first().addClass(cursorClass);
                }
                this.eventBus.trigger("render", suggestions, async, dataset);
            },
            _onAsyncRequested: function onAsyncRequested(type, dataset, query) {
                this.eventBus.trigger("asyncrequest", query, dataset);
            },
            _onAsyncCanceled: function onAsyncCanceled(type, dataset, query) {
                this.eventBus.trigger("asynccancel", query, dataset);
            },
            _onAsyncReceived: function onAsyncReceived(type, dataset, query) {
                this.eventBus.trigger("asyncreceive", query, dataset);
            },
            _onFocused: function onFocused() {
                this._minLengthMet() && this.menu.update(this.input.getQuery());
            },
            _onBlurred: function onBlurred() {
                if (this.input.hasQueryChangedSinceLastFocus()) {
                    this.eventBus.trigger("change", this.input.getQuery());
                }
            },
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    if (this.select($selectable)) {
                        $e.preventDefault();
                        $e.stopPropagation();
                    }
                } else if (this.autoselect) {
                    if (this.select(this.menu.getTopSelectable())) {
                        $e.preventDefault();
                        $e.stopPropagation();
                    }
                }
            },
            _onTabKeyed: function onTabKeyed(type, $e) {
                var $selectable;
                if ($selectable = this.menu.getActiveSelectable()) {
                    this.select($selectable) && $e.preventDefault();
                } else if (this.autoselect) {
                    if ($selectable = this.menu.getTopSelectable()) {
                        this.autocomplete($selectable) && $e.preventDefault();
                    }
                }
            },
            _onEscKeyed: function onEscKeyed() {
                this.close();
            },
            _onUpKeyed: function onUpKeyed() {
                this.moveCursor(-1);
            },
            _onDownKeyed: function onDownKeyed() {
                this.moveCursor(+1);
            },
            _onLeftKeyed: function onLeftKeyed() {
                if (this.dir === "rtl" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getActiveSelectable() || this.menu.getTopSelectable());
                }
            },
            _onRightKeyed: function onRightKeyed() {
                if (this.dir === "ltr" && this.input.isCursorAtEnd()) {
                    this.autocomplete(this.menu.getActiveSelectable() || this.menu.getTopSelectable());
                }
            },
            _onQueryChanged: function onQueryChanged(e, query) {
                this._minLengthMet(query) ? this.menu.update(query) : this.menu.empty();
            },
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
            },
            _onLangDirChanged: function onLangDirChanged(e, dir) {
                if (this.dir !== dir) {
                    this.dir = dir;
                    this.menu.setLanguageDirection(dir);
                }
            },
            _openIfActive: function openIfActive() {
                this.isActive() && this.open();
            },
            _minLengthMet: function minLengthMet(query) {
                query = _.isString(query) ? query : this.input.getQuery() || "";
                return query.length >= this.minLength;
            },
            _updateHint: function updateHint() {
                var $selectable, data, val, query, escapedQuery, frontMatchRegEx, match;
                $selectable = this.menu.getTopSelectable();
                data = this.menu.getSelectableData($selectable);
                val = this.input.getInputValue();
                if (data && !_.isBlankString(val) && !this.input.hasOverflow()) {
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(data.val);
                    match && this.input.setHint(val + match[1]);
                } else {
                    this.input.clearHint();
                }
            },
            isEnabled: function isEnabled() {
                return this.enabled;
            },
            enable: function enable() {
                this.enabled = true;
            },
            disable: function disable() {
                this.enabled = false;
            },
            isActive: function isActive() {
                return this.active;
            },
            activate: function activate() {
                if (this.isActive()) {
                    return true;
                } else if (!this.isEnabled() || this.eventBus.before("active")) {
                    return false;
                } else {
                    this.active = true;
                    this.eventBus.trigger("active");
                    return true;
                }
            },
            deactivate: function deactivate() {
                if (!this.isActive()) {
                    return true;
                } else if (this.eventBus.before("idle")) {
                    return false;
                } else {
                    this.active = false;
                    this.close();
                    this.eventBus.trigger("idle");
                    return true;
                }
            },
            isOpen: function isOpen() {
                return this.menu.isOpen();
            },
            open: function open() {
                if (!this.isOpen() && !this.eventBus.before("open")) {
                    this.input.setAriaExpanded(true);
                    this.menu.open();
                    this._updateHint();
                    this.eventBus.trigger("open");
                }
                return this.isOpen();
            },
            close: function close() {
                if (this.isOpen() && !this.eventBus.before("close")) {
                    this.input.setAriaExpanded(false);
                    this.menu.close();
                    this.input.clearHint();
                    this.input.resetInputValue();
                    this.eventBus.trigger("close");
                }
                return !this.isOpen();
            },
            setVal: function setVal(val) {
                this.input.setQuery(_.toStr(val));
            },
            getVal: function getVal() {
                return this.input.getQuery();
            },
            select: function select($selectable) {
                var data = this.menu.getSelectableData($selectable);
                if (data && !this.eventBus.before("select", data.obj, data.dataset)) {
                    this.input.setQuery(data.val, true);
                    this.eventBus.trigger("select", data.obj, data.dataset);
                    this.close();
                    return true;
                }
                return false;
            },
            autocomplete: function autocomplete($selectable) {
                var query, data, isValid;
                query = this.input.getQuery();
                data = this.menu.getSelectableData($selectable);
                isValid = data && query !== data.val;
                if (isValid && !this.eventBus.before("autocomplete", data.obj, data.dataset)) {
                    this.input.setQuery(data.val);
                    this.eventBus.trigger("autocomplete", data.obj, data.dataset);
                    return true;
                }
                return false;
            },
            moveCursor: function moveCursor(delta) {
                var query, $candidate, data, suggestion, datasetName, cancelMove, id;
                query = this.input.getQuery();
                $candidate = this.menu.selectableRelativeToCursor(delta);
                data = this.menu.getSelectableData($candidate);
                suggestion = data ? data.obj : null;
                datasetName = data ? data.dataset : null;
                id = $candidate ? $candidate.attr("id") : null;
                this.input.trigger("cursorchange", id);
                cancelMove = this._minLengthMet() && this.menu.update(query);
                if (!cancelMove && !this.eventBus.before("cursorchange", suggestion, datasetName)) {
                    this.menu.setCursor($candidate);
                    if (data) {
                        if (typeof data.val === "string") {
                            this.input.setInputValue(data.val);
                        }
                    } else {
                        this.input.resetInputValue();
                        this._updateHint();
                    }
                    this.eventBus.trigger("cursorchange", suggestion, datasetName);
                    return true;
                }
                return false;
            },
            destroy: function destroy() {
                this.input.destroy();
                this.menu.destroy();
            }
        });
        return Typeahead;
        function c(ctx) {
            var methods = [].slice.call(arguments, 1);
            return function() {
                var args = [].slice.call(arguments);
                _.each(methods, function(method) {
                    return ctx[method].apply(ctx, args);
                });
            };
        }
    }();
    (function() {
        "use strict";
        var old, keys, methods;
        old = $.fn.typeahead;
        keys = {
            www: "tt-www",
            attrs: "tt-attrs",
            typeahead: "tt-typeahead"
        };
        methods = {
            initialize: function initialize(o, datasets) {
                var www;
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {};
                www = WWW(o.classNames);
                return this.each(attach);
                function attach() {
                    var $input, $wrapper, $hint, $menu, defaultHint, defaultMenu, eventBus, input, menu, status, typeahead, MenuConstructor;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                    });
                    $input = $(this);
                    $wrapper = $(www.html.wrapper);
                    $hint = $elOrNull(o.hint);
                    $menu = $elOrNull(o.menu);
                    defaultHint = o.hint !== false && !$hint;
                    defaultMenu = o.menu !== false && !$menu;
                    defaultHint && ($hint = buildHintFromInput($input, www));
                    defaultMenu && ($menu = $(www.html.menu).css(www.css.menu));
                    $hint && $hint.val("");
                    $input = prepInput($input, www);
                    if (defaultHint || defaultMenu) {
                        $wrapper.css(www.css.wrapper);
                        $input.css(defaultHint ? www.css.input : www.css.inputWithNoHint);
                        $input.wrap($wrapper).parent().prepend(defaultHint ? $hint : null).append(defaultMenu ? $menu : null);
                    }
                    MenuConstructor = defaultMenu ? DefaultMenu : Menu;
                    eventBus = new EventBus({
                        el: $input
                    });
                    input = new Input({
                        hint: $hint,
                        input: $input,
                        menu: $menu
                    }, www);
                    menu = new MenuConstructor({
                        node: $menu,
                        datasets: datasets
                    }, www);
                    status = new Status({
                        $input: $input,
                        menu: menu
                    });
                    typeahead = new Typeahead({
                        input: input,
                        menu: menu,
                        eventBus: eventBus,
                        minLength: o.minLength,
                        autoselect: o.autoselect
                    }, www);
                    $input.data(keys.www, www);
                    $input.data(keys.typeahead, typeahead);
                }
            },
            isEnabled: function isEnabled() {
                var enabled;
                ttEach(this.first(), function(t) {
                    enabled = t.isEnabled();
                });
                return enabled;
            },
            enable: function enable() {
                ttEach(this, function(t) {
                    t.enable();
                });
                return this;
            },
            disable: function disable() {
                ttEach(this, function(t) {
                    t.disable();
                });
                return this;
            },
            isActive: function isActive() {
                var active;
                ttEach(this.first(), function(t) {
                    active = t.isActive();
                });
                return active;
            },
            activate: function activate() {
                ttEach(this, function(t) {
                    t.activate();
                });
                return this;
            },
            deactivate: function deactivate() {
                ttEach(this, function(t) {
                    t.deactivate();
                });
                return this;
            },
            isOpen: function isOpen() {
                var open;
                ttEach(this.first(), function(t) {
                    open = t.isOpen();
                });
                return open;
            },
            open: function open() {
                ttEach(this, function(t) {
                    t.open();
                });
                return this;
            },
            close: function close() {
                ttEach(this, function(t) {
                    t.close();
                });
                return this;
            },
            select: function select(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.select($el);
                });
                return success;
            },
            autocomplete: function autocomplete(el) {
                var success = false, $el = $(el);
                ttEach(this.first(), function(t) {
                    success = t.autocomplete($el);
                });
                return success;
            },
            moveCursor: function moveCursoe(delta) {
                var success = false;
                ttEach(this.first(), function(t) {
                    success = t.moveCursor(delta);
                });
                return success;
            },
            val: function val(newVal) {
                var query;
                if (!arguments.length) {
                    ttEach(this.first(), function(t) {
                        query = t.getVal();
                    });
                    return query;
                } else {
                    ttEach(this, function(t) {
                        t.setVal(_.toStr(newVal));
                    });
                    return this;
                }
            },
            destroy: function destroy() {
                ttEach(this, function(typeahead, $input) {
                    revert($input);
                    typeahead.destroy();
                });
                return this;
            }
        };
        $.fn.typeahead = function(method) {
            if (methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1));
            } else {
                return methods.initialize.apply(this, arguments);
            }
        };
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
        };
        function ttEach($els, fn) {
            $els.each(function() {
                var $input = $(this), typeahead;
                (typeahead = $input.data(keys.typeahead)) && fn(typeahead, $input);
            });
        }
        function buildHintFromInput($input, www) {
            return $input.clone().addClass(www.classes.hint).removeData().css(www.css.hint).css(getBackgroundStyles($input)).prop({
                readonly: true,
                required: false
            }).removeAttr("id name placeholder").removeClass("required").attr({
                spellcheck: "false",
                tabindex: -1
            });
        }
        function prepInput($input, www) {
            $input.data(keys.attrs, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
            });
            $input.addClass(www.classes.input).attr({
                spellcheck: false
            });
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
            } catch (e) {}
            return $input;
        }
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
            };
        }
        function revert($input) {
            var www, $wrapper;
            www = $input.data(keys.www);
            $wrapper = $input.parent().filter(www.selectors.wrapper);
            _.each($input.data(keys.attrs), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
            });
            $input.removeData(keys.typeahead).removeData(keys.www).removeData(keys.attr).removeClass(www.classes.input);
            if ($wrapper.length) {
                $input.detach().insertAfter($wrapper);
                $wrapper.remove();
            }
        }
        function $elOrNull(obj) {
            var isValid, $el;
            isValid = _.isJQuery(obj) || _.isElement(obj);
            $el = isValid ? $(obj).first() : [];
            return $el.length ? $el : null;
        }
    })();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/croppie/croppie.js":
/*!*****************************************!*\
  !*** ./node_modules/croppie/croppie.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*************************
 * Croppie
 * Copyright 2019
 * Foliotek
 * Version: 2.6.5
 *************************/
(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(typeof self !== 'undefined' ? self : this, function () {

    /* Polyfills */
    if (typeof Promise !== 'function') {
        /*! promise-polyfill 3.1.0 */
        !function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void k(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"===typeof a||"function"===typeof a)){var c=a.then;if("function"===typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(d){f.call(this,d)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"===typeof a?a:null,this.onRejected="function"===typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var j=setTimeout,k="function"===typeof setImmediate&&setImmediate||function(a){j(a,1)},l=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype["catch"]=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&l(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"===typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},c._setImmediateFn=function(a){k=a}, true&&module.exports?module.exports=c:a.Promise||(a.Promise=c)}(this);
    }

    if (typeof window !== 'undefined' && typeof window.CustomEvent !== "function") {
        (function(){
            function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }
            CustomEvent.prototype = window.Event.prototype;
            window.CustomEvent = CustomEvent;
        }());
    }

    if (typeof HTMLCanvasElement !== 'undefined' && !HTMLCanvasElement.prototype.toBlob) {
        Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
            value: function (callback, type, quality) {
                var binStr = atob( this.toDataURL(type, quality).split(',')[1] ),
                len = binStr.length,
                arr = new Uint8Array(len);

                for (var i=0; i<len; i++ ) {
                    arr[i] = binStr.charCodeAt(i);
                }

                callback( new Blob( [arr], {type: type || 'image/png'} ) );
            }
        });
    }
    /* End Polyfills */

    var cssPrefixes = ['Webkit', 'Moz', 'ms'],
        emptyStyles = typeof document !== 'undefined' ? document.createElement('div').style : {},
        EXIF_NORM = [1,8,3,6],
        EXIF_FLIP = [2,7,4,5],
        CSS_TRANS_ORG,
        CSS_TRANSFORM,
        CSS_USERSELECT;

    function vendorPrefix(prop) {
        if (prop in emptyStyles) {
            return prop;
        }

        var capProp = prop[0].toUpperCase() + prop.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            prop = cssPrefixes[i] + capProp;
            if (prop in emptyStyles) {
                return prop;
            }
        }
    }

    CSS_TRANSFORM = vendorPrefix('transform');
    CSS_TRANS_ORG = vendorPrefix('transformOrigin');
    CSS_USERSELECT = vendorPrefix('userSelect');

    function getExifOffset(ornt, rotate) {
        var arr = EXIF_NORM.indexOf(ornt) > -1 ? EXIF_NORM : EXIF_FLIP,
            index = arr.indexOf(ornt),
            offset = (rotate / 90) % arr.length;// 180 = 2%4 = 2 shift exif by 2 indexes

        return arr[(arr.length + index + (offset % arr.length)) % arr.length];
    }

    // Credits to : Andrew Dupont - http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    function deepExtend(destination, source) {
        destination = destination || {};
        for (var property in source) {
            if (source[property] && source[property].constructor && source[property].constructor === Object) {
                destination[property] = destination[property] || {};
                deepExtend(destination[property], source[property]);
            } else {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    function clone(object) {
        return deepExtend({}, object);
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    function dispatchChange(element) {
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            element.dispatchEvent(evt);
        }
        else {
            element.fireEvent("onchange");
        }
    }

    //http://jsperf.com/vanilla-css
    function css(el, styles, val) {
        if (typeof (styles) === 'string') {
            var tmp = styles;
            styles = {};
            styles[tmp] = val;
        }

        for (var prop in styles) {
            el.style[prop] = styles[prop];
        }
    }

    function addClass(el, c) {
        if (el.classList) {
            el.classList.add(c);
        }
        else {
            el.className += ' ' + c;
        }
    }

    function removeClass(el, c) {
        if (el.classList) {
            el.classList.remove(c);
        }
        else {
            el.className = el.className.replace(c, '');
        }
    }

    function setAttributes(el, attrs) {
        for (var key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    function num(v) {
        return parseInt(v, 10);
    }

    /* Utilities */
    function loadImage(src, doExif) {
        if (!src) { throw 'Source image missing'; }
        
        var img = new Image();
        img.style.opacity = '0';
        return new Promise(function (resolve, reject) {
            function _resolve() {
                img.style.opacity = '1';
                setTimeout(function () {
                    resolve(img);
                }, 1);
            }

            img.removeAttribute('crossOrigin');
            if (src.match(/^https?:\/\/|^\/\//)) {
                img.setAttribute('crossOrigin', 'anonymous');
            }

            img.onload = function () {
                if (doExif) {
                    EXIF.getData(img, function () {
                        _resolve();
                    });
                }
                else {
                    _resolve();
                }
            };
            img.onerror = function (ev) {
                img.style.opacity = 1;
                setTimeout(function () {
                    reject(ev);
                }, 1);
            };
            img.src = src;
        });
    }

    function naturalImageDimensions(img, ornt) {
        var w = img.naturalWidth;
        var h = img.naturalHeight;
        var orient = ornt || getExifOrientation(img);
        if (orient && orient >= 5) {
            var x= w;
            w = h;
            h = x;
        }
        return { width: w, height: h };
    }

    /* CSS Transform Prototype */
    var TRANSLATE_OPTS = {
        'translate3d': {
            suffix: ', 0px'
        },
        'translate': {
            suffix: ''
        }
    };
    var Transform = function (x, y, scale) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.scale = parseFloat(scale);
    };

    Transform.parse = function (v) {
        if (v.style) {
            return Transform.parse(v.style[CSS_TRANSFORM]);
        }
        else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
            return Transform.fromMatrix(v);
        }
        else {
            return Transform.fromString(v);
        }
    };

    Transform.fromMatrix = function (v) {
        var vals = v.substring(7).split(',');
        if (!vals.length || v === 'none') {
            vals = [1, 0, 0, 1, 0, 0];
        }

        return new Transform(num(vals[4]), num(vals[5]), parseFloat(vals[0]));
    };

    Transform.fromString = function (v) {
        var values = v.split(') '),
            translate = values[0].substring(Croppie.globals.translate.length + 1).split(','),
            scale = values.length > 1 ? values[1].substring(6) : 1,
            x = translate.length > 1 ? translate[0] : 0,
            y = translate.length > 1 ? translate[1] : 0;

        return new Transform(x, y, scale);
    };

    Transform.prototype.toString = function () {
        var suffix = TRANSLATE_OPTS[Croppie.globals.translate].suffix || '';
        return Croppie.globals.translate + '(' + this.x + 'px, ' + this.y + 'px' + suffix + ') scale(' + this.scale + ')';
    };

    var TransformOrigin = function (el) {
        if (!el || !el.style[CSS_TRANS_ORG]) {
            this.x = 0;
            this.y = 0;
            return;
        }
        var css = el.style[CSS_TRANS_ORG].split(' ');
        this.x = parseFloat(css[0]);
        this.y = parseFloat(css[1]);
    };

    TransformOrigin.prototype.toString = function () {
        return this.x + 'px ' + this.y + 'px';
    };

    function getExifOrientation (img) {
        return img.exifdata && img.exifdata.Orientation ? num(img.exifdata.Orientation) : 1;
    }

    function drawCanvas(canvas, img, orientation) {
        var width = img.width,
            height = img.height,
            ctx = canvas.getContext('2d');

        canvas.width = img.width;
        canvas.height = img.height;

        ctx.save();
        switch (orientation) {
          case 2:
             ctx.translate(width, 0);
             ctx.scale(-1, 1);
             break;

          case 3:
              ctx.translate(width, height);
              ctx.rotate(180*Math.PI/180);
              break;

          case 4:
              ctx.translate(0, height);
              ctx.scale(1, -1);
              break;

          case 5:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.scale(1, -1);
              break;

          case 6:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(90*Math.PI/180);
              ctx.translate(0, -height);
              break;

          case 7:
              canvas.width = height;
              canvas.height = width;
              ctx.rotate(-90*Math.PI/180);
              ctx.translate(-width, height);
              ctx.scale(1, -1);
              break;

          case 8:
              canvas.width = height;
              canvas.height = width;
              ctx.translate(0, width);
              ctx.rotate(-90*Math.PI/180);
              break;
        }
        ctx.drawImage(img, 0,0, width, height);
        ctx.restore();
    }

    /* Private Methods */
    function _create() {
        var self = this,
            contClass = 'croppie-container',
            customViewportClass = self.options.viewport.type ? 'cr-vp-' + self.options.viewport.type : null,
            boundary, img, viewport, overlay, bw, bh;

        self.options.useCanvas = self.options.enableOrientation || _hasExif.call(self);
        // Properties on class
        self.data = {};
        self.elements = {};

        boundary = self.elements.boundary = document.createElement('div');
        viewport = self.elements.viewport = document.createElement('div');
        img = self.elements.img = document.createElement('img');
        overlay = self.elements.overlay = document.createElement('div');

        if (self.options.useCanvas) {
            self.elements.canvas = document.createElement('canvas');
            self.elements.preview = self.elements.canvas;
        }
        else {
            self.elements.preview = img;
        }

        addClass(boundary, 'cr-boundary');
        boundary.setAttribute('aria-dropeffect', 'none');
        bw = self.options.boundary.width;
        bh = self.options.boundary.height;
        css(boundary, {
            width: (bw + (isNaN(bw) ? '' : 'px')),
            height: (bh + (isNaN(bh) ? '' : 'px'))
        });

        addClass(viewport, 'cr-viewport');
        if (customViewportClass) {
            addClass(viewport, customViewportClass);
        }
        css(viewport, {
            width: self.options.viewport.width + 'px',
            height: self.options.viewport.height + 'px'
        });
        viewport.setAttribute('tabindex', 0);

        addClass(self.elements.preview, 'cr-image');
        setAttributes(self.elements.preview, { 'alt': 'preview', 'aria-grabbed': 'false' });
        addClass(overlay, 'cr-overlay');

        self.element.appendChild(boundary);
        boundary.appendChild(self.elements.preview);
        boundary.appendChild(viewport);
        boundary.appendChild(overlay);

        addClass(self.element, contClass);
        if (self.options.customClass) {
            addClass(self.element, self.options.customClass);
        }

        _initDraggable.call(this);

        if (self.options.enableZoom) {
            _initializeZoom.call(self);
        }

        // if (self.options.enableOrientation) {
        //     _initRotationControls.call(self);
        // }

        if (self.options.enableResize) {
            _initializeResize.call(self);
        }
    }

    // function _initRotationControls () {
    //     var self = this,
    //         wrap, btnLeft, btnRight, iLeft, iRight;

    //     wrap = document.createElement('div');
    //     self.elements.orientationBtnLeft = btnLeft = document.createElement('button');
    //     self.elements.orientationBtnRight = btnRight = document.createElement('button');

    //     wrap.appendChild(btnLeft);
    //     wrap.appendChild(btnRight);

    //     iLeft = document.createElement('i');
    //     iRight = document.createElement('i');
    //     btnLeft.appendChild(iLeft);
    //     btnRight.appendChild(iRight);

    //     addClass(wrap, 'cr-rotate-controls');
    //     addClass(btnLeft, 'cr-rotate-l');
    //     addClass(btnRight, 'cr-rotate-r');

    //     self.elements.boundary.appendChild(wrap);

    //     btnLeft.addEventListener('click', function () {
    //         self.rotate(-90);
    //     });
    //     btnRight.addEventListener('click', function () {
    //         self.rotate(90);
    //     });
    // }

    function _hasExif() {
        return this.options.enableExif && window.EXIF;
    }

    function _initializeResize () {
        var self = this;
        var wrap = document.createElement('div');
        var isDragging = false;
        var direction;
        var originalX;
        var originalY;
        var minSize = 50;
        var maxWidth;
        var maxHeight;
        var vr;
        var hr;

        addClass(wrap, 'cr-resizer');
        css(wrap, {
            width: this.options.viewport.width + 'px',
            height: this.options.viewport.height + 'px'
        });

        if (this.options.resizeControls.height) {
            vr = document.createElement('div');
            addClass(vr, 'cr-resizer-vertical');
            wrap.appendChild(vr);
        }

        if (this.options.resizeControls.width) {
            hr = document.createElement('div');
            addClass(hr, 'cr-resizer-horisontal');
            wrap.appendChild(hr);
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) {
                return;
            }

            var overlayRect = self.elements.overlay.getBoundingClientRect();

            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;
            direction = ev.currentTarget.className.indexOf('vertical') !== -1 ? 'v' : 'h';
            maxWidth = overlayRect.width;
            maxHeight = overlayRect.height;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }

            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
        }

        function mouseMove(ev) {
            var pageX = ev.pageX;
            var pageY = ev.pageY;

            ev.preventDefault();

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX;
            var deltaY = pageY - originalY;
            var newHeight = self.options.viewport.height + deltaY;
            var newWidth = self.options.viewport.width + deltaX;

            if (direction === 'v' && newHeight >= minSize && newHeight <= maxHeight) {
                css(wrap, {
                    height: newHeight + 'px'
                });

                self.options.boundary.height += deltaY;
                css(self.elements.boundary, {
                    height: self.options.boundary.height + 'px'
                });

                self.options.viewport.height += deltaY;
                css(self.elements.viewport, {
                    height: self.options.viewport.height + 'px'
                });
            }
            else if (direction === 'h' && newWidth >= minSize && newWidth <= maxWidth) {
                css(wrap, {
                    width: newWidth + 'px'
                });

                self.options.boundary.width += deltaX;
                css(self.elements.boundary, {
                    width: self.options.boundary.width + 'px'
                });

                self.options.viewport.width += deltaX;
                css(self.elements.viewport, {
                    width: self.options.viewport.width + 'px'
                });
            }

            _updateOverlay.call(self);
            _updateZoomLimits.call(self);
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
        }

        if (vr) {
            vr.addEventListener('mousedown', mouseDown);
            vr.addEventListener('touchstart', mouseDown);
        }

        if (hr) {
            hr.addEventListener('mousedown', mouseDown);
            hr.addEventListener('touchstart', mouseDown);
        }

        this.elements.boundary.appendChild(wrap);
    }

    function _setZoomerVal(v) {
        if (this.options.enableZoom) {
            var z = this.elements.zoomer,
                val = fix(v, 4);

            z.value = Math.max(parseFloat(z.min), Math.min(parseFloat(z.max), val)).toString();
        }
    }

    function _initializeZoom() {
        var self = this,
            wrap = self.elements.zoomerWrap = document.createElement('div'),
            zoomer = self.elements.zoomer = document.createElement('input');

        addClass(wrap, 'cr-slider-wrap');
        addClass(zoomer, 'cr-slider');
        zoomer.type = 'range';
        zoomer.step = '0.0001';
        zoomer.value = '1';
        zoomer.style.display = self.options.showZoomer ? '' : 'none';
        zoomer.setAttribute('aria-label', 'zoom');

        self.element.appendChild(wrap);
        wrap.appendChild(zoomer);

        self._currentZoom = 1;

        function change() {
            _onZoom.call(self, {
                value: parseFloat(zoomer.value),
                origin: new TransformOrigin(self.elements.preview),
                viewportRect: self.elements.viewport.getBoundingClientRect(),
                transform: Transform.parse(self.elements.preview)
            });
        }

        function scroll(ev) {
            var delta, targetZoom;

            if(self.options.mouseWheelZoom === 'ctrl' && ev.ctrlKey !== true){
              return 0;
            } else if (ev.wheelDelta) {
                delta = ev.wheelDelta / 1200; //wheelDelta min: -120 max: 120 // max x 10 x 2
            } else if (ev.deltaY) {
                delta = ev.deltaY / 1060; //deltaY min: -53 max: 53 // max x 10 x 2
            } else if (ev.detail) {
                delta = ev.detail / -60; //delta min: -3 max: 3 // max x 10 x 2
            } else {
                delta = 0;
            }

            targetZoom = self._currentZoom + (delta * self._currentZoom);

            ev.preventDefault();
            _setZoomerVal.call(self, targetZoom);
            change.call(self);
        }

        self.elements.zoomer.addEventListener('input', change);// this is being fired twice on keypress
        self.elements.zoomer.addEventListener('change', change);

        if (self.options.mouseWheelZoom) {
            self.elements.boundary.addEventListener('mousewheel', scroll);
            self.elements.boundary.addEventListener('DOMMouseScroll', scroll);
        }
    }

    function _onZoom(ui) {
        var self = this,
            transform = ui ? ui.transform : Transform.parse(self.elements.preview),
            vpRect = ui ? ui.viewportRect : self.elements.viewport.getBoundingClientRect(),
            origin = ui ? ui.origin : new TransformOrigin(self.elements.preview);

        function applyCss() {
            var transCss = {};
            transCss[CSS_TRANSFORM] = transform.toString();
            transCss[CSS_TRANS_ORG] = origin.toString();
            css(self.elements.preview, transCss);
        }

        self._currentZoom = ui ? ui.value : self._currentZoom;
        transform.scale = self._currentZoom;
        self.elements.zoomer.setAttribute('aria-valuenow', self._currentZoom);
        applyCss();

        if (self.options.enforceBoundary) {
            var boundaries = _getVirtualBoundaries.call(self, vpRect),
                transBoundaries = boundaries.translate,
                oBoundaries = boundaries.origin;

            if (transform.x >= transBoundaries.maxX) {
                origin.x = oBoundaries.minX;
                transform.x = transBoundaries.maxX;
            }

            if (transform.x <= transBoundaries.minX) {
                origin.x = oBoundaries.maxX;
                transform.x = transBoundaries.minX;
            }

            if (transform.y >= transBoundaries.maxY) {
                origin.y = oBoundaries.minY;
                transform.y = transBoundaries.maxY;
            }

            if (transform.y <= transBoundaries.minY) {
                origin.y = oBoundaries.maxY;
                transform.y = transBoundaries.minY;
            }
        }
        applyCss();
        _debouncedOverlay.call(self);
        _triggerUpdate.call(self);
    }

    function _getVirtualBoundaries(viewport) {
        var self = this,
            scale = self._currentZoom,
            vpWidth = viewport.width,
            vpHeight = viewport.height,
            centerFromBoundaryX = self.elements.boundary.clientWidth / 2,
            centerFromBoundaryY = self.elements.boundary.clientHeight / 2,
            imgRect = self.elements.preview.getBoundingClientRect(),
            curImgWidth = imgRect.width,
            curImgHeight = imgRect.height,
            halfWidth = vpWidth / 2,
            halfHeight = vpHeight / 2;

        var maxX = ((halfWidth / scale) - centerFromBoundaryX) * -1;
        var minX = maxX - ((curImgWidth * (1 / scale)) - (vpWidth * (1 / scale)));

        var maxY = ((halfHeight / scale) - centerFromBoundaryY) * -1;
        var minY = maxY - ((curImgHeight * (1 / scale)) - (vpHeight * (1 / scale)));

        var originMinX = (1 / scale) * halfWidth;
        var originMaxX = (curImgWidth * (1 / scale)) - originMinX;

        var originMinY = (1 / scale) * halfHeight;
        var originMaxY = (curImgHeight * (1 / scale)) - originMinY;

        return {
            translate: {
                maxX: maxX,
                minX: minX,
                maxY: maxY,
                minY: minY
            },
            origin: {
                maxX: originMaxX,
                minX: originMinX,
                maxY: originMaxY,
                minY: originMinY
            }
        };
    }

    function _updateCenterPoint(rotate) {
        var self = this,
            scale = self._currentZoom,
            data = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            transform = Transform.parse(self.elements.preview.style[CSS_TRANSFORM]),
            pc = new TransformOrigin(self.elements.preview),
            top = (vpData.top - data.top) + (vpData.height / 2),
            left = (vpData.left - data.left) + (vpData.width / 2),
            center = {},
            adj = {};

        if (rotate) {
            var cx = pc.x;
            var cy = pc.y;
            var tx = transform.x;
            var ty = transform.y;

            center.y = cx;
            center.x = cy;
            transform.y = tx;
            transform.x = ty;
        }
        else {
            center.y = top / scale;
            center.x = left / scale;

            adj.y = (center.y - pc.y) * (1 - scale);
            adj.x = (center.x - pc.x) * (1 - scale);

            transform.x -= adj.x;
            transform.y -= adj.y;
        }

        var newCss = {};
        newCss[CSS_TRANS_ORG] = center.x + 'px ' + center.y + 'px';
        newCss[CSS_TRANSFORM] = transform.toString();
        css(self.elements.preview, newCss);
    }

    function _initDraggable() {
        var self = this,
            isDragging = false,
            originalX,
            originalY,
            originalDistance,
            vpRect,
            transform;

        function assignTransformCoordinates(deltaX, deltaY) {
            var imgRect = self.elements.preview.getBoundingClientRect(),
                top = transform.y + deltaY,
                left = transform.x + deltaX;

            if (self.options.enforceBoundary) {
                if (vpRect.top > imgRect.top + deltaY && vpRect.bottom < imgRect.bottom + deltaY) {
                    transform.y = top;
                }

                if (vpRect.left > imgRect.left + deltaX && vpRect.right < imgRect.right + deltaX) {
                    transform.x = left;
                }
            }
            else {
                transform.y = top;
                transform.x = left;
            }
        }

        function toggleGrabState(isDragging) {
          self.elements.preview.setAttribute('aria-grabbed', isDragging);
          self.elements.boundary.setAttribute('aria-dropeffect', isDragging? 'move': 'none');
        }

        function keyDown(ev) {
            var LEFT_ARROW  = 37,
                UP_ARROW    = 38,
                RIGHT_ARROW = 39,
                DOWN_ARROW  = 40;

            if (ev.shiftKey && (ev.keyCode === UP_ARROW || ev.keyCode === DOWN_ARROW)) {
                var zoom;
                if (ev.keyCode === UP_ARROW) {
                    zoom = parseFloat(self.elements.zoomer.value) + parseFloat(self.elements.zoomer.step)
                }
                else {
                    zoom = parseFloat(self.elements.zoomer.value) - parseFloat(self.elements.zoomer.step)
                }
                self.setZoom(zoom);
            }
            else if (self.options.enableKeyMovement && (ev.keyCode >= 37 && ev.keyCode <= 40)) {
                ev.preventDefault();
                var movement = parseKeyDown(ev.keyCode);

                transform = Transform.parse(self.elements.preview);
                document.body.style[CSS_USERSELECT] = 'none';
                vpRect = self.elements.viewport.getBoundingClientRect();
                keyMove(movement);
            }

            function parseKeyDown(key) {
                switch (key) {
                    case LEFT_ARROW:
                        return [1, 0];
                    case UP_ARROW:
                        return [0, 1];
                    case RIGHT_ARROW:
                        return [-1, 0];
                    case DOWN_ARROW:
                        return [0, -1];
                }
            }
        }

        function keyMove(movement) {
            var deltaX = movement[0],
                deltaY = movement[1],
                newCss = {};

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        function mouseDown(ev) {
            if (ev.button !== undefined && ev.button !== 0) return;

            ev.preventDefault();
            if (isDragging) return;
            isDragging = true;
            originalX = ev.pageX;
            originalY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                originalX = touches.pageX;
                originalY = touches.pageY;
            }
            toggleGrabState(isDragging);
            transform = Transform.parse(self.elements.preview);
            window.addEventListener('mousemove', mouseMove);
            window.addEventListener('touchmove', mouseMove);
            window.addEventListener('mouseup', mouseUp);
            window.addEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = 'none';
            vpRect = self.elements.viewport.getBoundingClientRect();
        }

        function mouseMove(ev) {
            ev.preventDefault();
            var pageX = ev.pageX,
                pageY = ev.pageY;

            if (ev.touches) {
                var touches = ev.touches[0];
                pageX = touches.pageX;
                pageY = touches.pageY;
            }

            var deltaX = pageX - originalX,
                deltaY = pageY - originalY,
                newCss = {};

            if (ev.type === 'touchmove') {
                if (ev.touches.length > 1) {
                    var touch1 = ev.touches[0];
                    var touch2 = ev.touches[1];
                    var dist = Math.sqrt((touch1.pageX - touch2.pageX) * (touch1.pageX - touch2.pageX) + (touch1.pageY - touch2.pageY) * (touch1.pageY - touch2.pageY));

                    if (!originalDistance) {
                        originalDistance = dist / self._currentZoom;
                    }

                    var scale = dist / originalDistance;

                    _setZoomerVal.call(self, scale);
                    dispatchChange(self.elements.zoomer);
                    return;
                }
            }

            assignTransformCoordinates(deltaX, deltaY);

            newCss[CSS_TRANSFORM] = transform.toString();
            css(self.elements.preview, newCss);
            _updateOverlay.call(self);
            originalY = pageY;
            originalX = pageX;
        }

        function mouseUp() {
            isDragging = false;
            toggleGrabState(isDragging);
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('touchmove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);
            window.removeEventListener('touchend', mouseUp);
            document.body.style[CSS_USERSELECT] = '';
            _updateCenterPoint.call(self);
            _triggerUpdate.call(self);
            originalDistance = 0;
        }

        self.elements.overlay.addEventListener('mousedown', mouseDown);
        self.elements.viewport.addEventListener('keydown', keyDown);
        self.elements.overlay.addEventListener('touchstart', mouseDown);
    }

    function _updateOverlay() {
        if (!this.elements) return; // since this is debounced, it can be fired after destroy
        var self = this,
            boundRect = self.elements.boundary.getBoundingClientRect(),
            imgData = self.elements.preview.getBoundingClientRect();

        css(self.elements.overlay, {
            width: imgData.width + 'px',
            height: imgData.height + 'px',
            top: (imgData.top - boundRect.top) + 'px',
            left: (imgData.left - boundRect.left) + 'px'
        });
    }
    var _debouncedOverlay = debounce(_updateOverlay, 500);

    function _triggerUpdate() {
        var self = this,
            data = self.get();

        if (!_isVisible.call(self)) {
            return;
        }

        self.options.update.call(self, data);
        if (self.$ && typeof Prototype === 'undefined') {
            self.$(self.element).trigger('update.croppie', data);
        }
        else {
            var ev;
            if (window.CustomEvent) {
                ev = new CustomEvent('update', { detail: data });
            } else {
                ev = document.createEvent('CustomEvent');
                ev.initCustomEvent('update', true, true, data);
            }

            self.element.dispatchEvent(ev);
        }
    }

    function _isVisible() {
        return this.elements.preview.offsetHeight > 0 && this.elements.preview.offsetWidth > 0;
    }

    function _updatePropertiesFromImage() {
        var self = this,
            initialZoom = 1,
            cssReset = {},
            img = self.elements.preview,
            imgData,
            transformReset = new Transform(0, 0, initialZoom),
            originReset = new TransformOrigin(),
            isVisible = _isVisible.call(self);

        if (!isVisible || self.data.bound) {// if the croppie isn't visible or it doesn't need binding
            return;
        }

        self.data.bound = true;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        cssReset[CSS_TRANS_ORG] = originReset.toString();
        cssReset['opacity'] = 1;
        css(img, cssReset);

        imgData = self.elements.preview.getBoundingClientRect();

        self._originalImageWidth = imgData.width;
        self._originalImageHeight = imgData.height;
        self.data.orientation = _hasExif.call(self) ? getExifOrientation(self.elements.img) : self.data.orientation;

        if (self.options.enableZoom) {
            _updateZoomLimits.call(self, true);
        }
        else {
            self._currentZoom = initialZoom;
        }

        transformReset.scale = self._currentZoom;
        cssReset[CSS_TRANSFORM] = transformReset.toString();
        css(img, cssReset);

        if (self.data.points.length) {
            _bindPoints.call(self, self.data.points);
        }
        else {
            _centerImage.call(self);
        }

        _updateCenterPoint.call(self);
        _updateOverlay.call(self);
    }

    function _updateZoomLimits (initial) {
        var self = this,
            minZoom = Math.max(self.options.minZoom, 0) || 0,
            maxZoom = self.options.maxZoom || 1.5,
            initialZoom,
            defaultInitialZoom,
            zoomer = self.elements.zoomer,
            scale = parseFloat(zoomer.value),
            boundaryData = self.elements.boundary.getBoundingClientRect(),
            imgData = naturalImageDimensions(self.elements.img, self.data.orientation),
            vpData = self.elements.viewport.getBoundingClientRect(),
            minW,
            minH;
        if (self.options.enforceBoundary) {
            minW = vpData.width / imgData.width;
            minH = vpData.height / imgData.height;
            minZoom = Math.max(minW, minH);
        }

        if (minZoom >= maxZoom) {
            maxZoom = minZoom + 1;
        }

        zoomer.min = fix(minZoom, 4);
        zoomer.max = fix(maxZoom, 4);

        if (!initial && (scale < zoomer.min || scale > zoomer.max)) {
            _setZoomerVal.call(self, scale < zoomer.min ? zoomer.min : zoomer.max);
        }
        else if (initial) {
            defaultInitialZoom = Math.max((boundaryData.width / imgData.width), (boundaryData.height / imgData.height));
            initialZoom = self.data.boundZoom !== null ? self.data.boundZoom : defaultInitialZoom;
            _setZoomerVal.call(self, initialZoom);
        }

        dispatchChange(zoomer);
    }

    function _bindPoints(points) {
        if (points.length !== 4) {
            throw "Croppie - Invalid number of points supplied: " + points;
        }
        var self = this,
            pointsWidth = points[2] - points[0],
            // pointsHeight = points[3] - points[1],
            vpData = self.elements.viewport.getBoundingClientRect(),
            boundRect = self.elements.boundary.getBoundingClientRect(),
            vpOffset = {
                left: vpData.left - boundRect.left,
                top: vpData.top - boundRect.top
            },
            scale = vpData.width / pointsWidth,
            originTop = points[1],
            originLeft = points[0],
            transformTop = (-1 * points[1]) + vpOffset.top,
            transformLeft = (-1 * points[0]) + vpOffset.left,
            newCss = {};

        newCss[CSS_TRANS_ORG] = originLeft + 'px ' + originTop + 'px';
        newCss[CSS_TRANSFORM] = new Transform(transformLeft, transformTop, scale).toString();
        css(self.elements.preview, newCss);

        _setZoomerVal.call(self, scale);
        self._currentZoom = scale;
    }

    function _centerImage() {
        var self = this,
            imgDim = self.elements.preview.getBoundingClientRect(),
            vpDim = self.elements.viewport.getBoundingClientRect(),
            boundDim = self.elements.boundary.getBoundingClientRect(),
            vpLeft = vpDim.left - boundDim.left,
            vpTop = vpDim.top - boundDim.top,
            w = vpLeft - ((imgDim.width - vpDim.width) / 2),
            h = vpTop - ((imgDim.height - vpDim.height) / 2),
            transform = new Transform(w, h, self._currentZoom);

        css(self.elements.preview, CSS_TRANSFORM, transform.toString());
    }

    function _transferImageToCanvas(customOrientation) {
        var self = this,
            canvas = self.elements.canvas,
            img = self.elements.img,
            ctx = canvas.getContext('2d');

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = img.width;
        canvas.height = img.height;

        var orientation = self.options.enableOrientation && customOrientation || getExifOrientation(img);
        drawCanvas(canvas, img, orientation);
    }

    function _getCanvas(data) {
        var self = this,
            points = data.points,
            left = num(points[0]),
            top = num(points[1]),
            right = num(points[2]),
            bottom = num(points[3]),
            width = right-left,
            height = bottom-top,
            circle = data.circle,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d'),
            startX = 0,
            startY = 0,
            canvasWidth = data.outputWidth || width,
            canvasHeight = data.outputHeight || height;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        if (data.backgroundColor) {
            ctx.fillStyle = data.backgroundColor;
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
        }

        // By default assume we're going to draw the entire
        // source image onto the destination canvas.
        var sx = left,
            sy = top,
            sWidth = width,
            sHeight = height,
            dx = 0,
            dy = 0,
            dWidth = canvasWidth,
            dHeight = canvasHeight;

        //
        // Do not go outside of the original image's bounds along the x-axis.
        // Handle translations when projecting onto the destination canvas.
        //

        // The smallest possible source x-position is 0.
        if (left < 0) {
            sx = 0;
            dx = (Math.abs(left) / width) * canvasWidth;
        }

        // The largest possible source width is the original image's width.
        if (sWidth + sx > self._originalImageWidth) {
            sWidth = self._originalImageWidth - sx;
            dWidth =  (sWidth / width) * canvasWidth;
        }

        //
        // Do not go outside of the original image's bounds along the y-axis.
        //

        // The smallest possible source y-position is 0.
        if (top < 0) {
            sy = 0;
            dy = (Math.abs(top) / height) * canvasHeight;
        }

        // The largest possible source height is the original image's height.
        if (sHeight + sy > self._originalImageHeight) {
            sHeight = self._originalImageHeight - sy;
            dHeight = (sHeight / height) * canvasHeight;
        }

        // console.table({ left, right, top, bottom, canvasWidth, canvasHeight, width, height, startX, startY, circle, sx, sy, dx, dy, sWidth, sHeight, dWidth, dHeight });

        ctx.drawImage(this.elements.preview, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        if (circle) {
            ctx.fillStyle = '#fff';
            ctx.globalCompositeOperation = 'destination-in';
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.fill();
        }
        return canvas;
    }

    function _getHtmlResult(data) {
        var points = data.points,
            div = document.createElement('div'),
            img = document.createElement('img'),
            width = points[2] - points[0],
            height = points[3] - points[1];

        addClass(div, 'croppie-result');
        div.appendChild(img);
        css(img, {
            left: (-1 * points[0]) + 'px',
            top: (-1 * points[1]) + 'px'
        });
        img.src = data.url;
        css(div, {
            width: width + 'px',
            height: height + 'px'
        });

        return div;
    }

    function _getBase64Result(data) {
        return _getCanvas.call(this, data).toDataURL(data.format, data.quality);
    }

    function _getBlobResult(data) {
        var self = this;
        return new Promise(function (resolve) {
            _getCanvas.call(self, data).toBlob(function (blob) {
                resolve(blob);
            }, data.format, data.quality);
        });
    }

    function _replaceImage(img) {
        if (this.elements.img.parentNode) {
            Array.prototype.forEach.call(this.elements.img.classList, function(c) { img.classList.add(c); });
            this.elements.img.parentNode.replaceChild(img, this.elements.img);
            this.elements.preview = img; // if the img is attached to the DOM, they're not using the canvas
        }
        this.elements.img = img;
    }

    function _bind(options, cb) {
        var self = this,
            url,
            points = [],
            zoom = null,
            hasExif = _hasExif.call(self);

        if (typeof (options) === 'string') {
            url = options;
            options = {};
        }
        else if (Array.isArray(options)) {
            points = options.slice();
        }
        else if (typeof (options) === 'undefined' && self.data.url) { //refreshing
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            return null;
        }
        else {
            url = options.url;
            points = options.points || [];
            zoom = typeof(options.zoom) === 'undefined' ? null : options.zoom;
        }

        self.data.bound = false;
        self.data.url = url || self.data.url;
        self.data.boundZoom = zoom;

        return loadImage(url, hasExif).then(function (img) {
            _replaceImage.call(self, img);
            if (!points.length) {
                var natDim = naturalImageDimensions(img);
                var rect = self.elements.viewport.getBoundingClientRect();
                var aspectRatio = rect.width / rect.height;
                var imgAspectRatio = natDim.width / natDim.height;
                var width, height;

                if (imgAspectRatio > aspectRatio) {
                    height = natDim.height;
                    width = height * aspectRatio;
                }
                else {
                    width = natDim.width;
                    height = natDim.height / aspectRatio;
                }

                var x0 = (natDim.width - width) / 2;
                var y0 = (natDim.height - height) / 2;
                var x1 = x0 + width;
                var y1 = y0 + height;
                self.data.points = [x0, y0, x1, y1];
            }
            else if (self.options.relative) {
                points = [
                    points[0] * img.naturalWidth / 100,
                    points[1] * img.naturalHeight / 100,
                    points[2] * img.naturalWidth / 100,
                    points[3] * img.naturalHeight / 100
                ];
            }

            self.data.orientation = options.orientation || 1;
            self.data.points = points.map(function (p) {
                return parseFloat(p);
            });
            if (self.options.useCanvas) {
                _transferImageToCanvas.call(self, self.data.orientation);
            }
            _updatePropertiesFromImage.call(self);
            _triggerUpdate.call(self);
            cb && cb();
        });
    }

    function fix(v, decimalPoints) {
        return parseFloat(v).toFixed(decimalPoints || 0);
    }

    function _get() {
        var self = this,
            imgData = self.elements.preview.getBoundingClientRect(),
            vpData = self.elements.viewport.getBoundingClientRect(),
            x1 = vpData.left - imgData.left,
            y1 = vpData.top - imgData.top,
            widthDiff = (vpData.width - self.elements.viewport.offsetWidth) / 2, //border
            heightDiff = (vpData.height - self.elements.viewport.offsetHeight) / 2,
            x2 = x1 + self.elements.viewport.offsetWidth + widthDiff,
            y2 = y1 + self.elements.viewport.offsetHeight + heightDiff,
            scale = self._currentZoom;

        if (scale === Infinity || isNaN(scale)) {
            scale = 1;
        }

        var max = self.options.enforceBoundary ? 0 : Number.NEGATIVE_INFINITY;
        x1 = Math.max(max, x1 / scale);
        y1 = Math.max(max, y1 / scale);
        x2 = Math.max(max, x2 / scale);
        y2 = Math.max(max, y2 / scale);

        return {
            points: [fix(x1), fix(y1), fix(x2), fix(y2)],
            zoom: scale,
            orientation: self.data.orientation
        };
    }

    var RESULT_DEFAULTS = {
            type: 'canvas',
            format: 'png',
            quality: 1
        },
        RESULT_FORMATS = ['jpeg', 'webp', 'png'];

    function _result(options) {
        var self = this,
            data = _get.call(self),
            opts = deepExtend(clone(RESULT_DEFAULTS), clone(options)),
            resultType = (typeof (options) === 'string' ? options : (opts.type || 'base64')),
            size = opts.size || 'viewport',
            format = opts.format,
            quality = opts.quality,
            backgroundColor = opts.backgroundColor,
            circle = typeof opts.circle === 'boolean' ? opts.circle : (self.options.viewport.type === 'circle'),
            vpRect = self.elements.viewport.getBoundingClientRect(),
            ratio = vpRect.width / vpRect.height,
            prom;

        if (size === 'viewport') {
            data.outputWidth = vpRect.width;
            data.outputHeight = vpRect.height;
        } else if (typeof size === 'object') {
            if (size.width && size.height) {
                data.outputWidth = size.width;
                data.outputHeight = size.height;
            } else if (size.width) {
                data.outputWidth = size.width;
                data.outputHeight = size.width / ratio;
            } else if (size.height) {
                data.outputWidth = size.height * ratio;
                data.outputHeight = size.height;
            }
        }

        if (RESULT_FORMATS.indexOf(format) > -1) {
            data.format = 'image/' + format;
            data.quality = quality;
        }

        data.circle = circle;
        data.url = self.data.url;
        data.backgroundColor = backgroundColor;

        prom = new Promise(function (resolve) {
            switch(resultType.toLowerCase())
            {
                case 'rawcanvas':
                    resolve(_getCanvas.call(self, data));
                    break;
                case 'canvas':
                case 'base64':
                    resolve(_getBase64Result.call(self, data));
                    break;
                case 'blob':
                    _getBlobResult.call(self, data).then(resolve);
                    break;
                default:
                    resolve(_getHtmlResult.call(self, data));
                    break;
            }
        });
        return prom;
    }

    function _refresh() {
        _updatePropertiesFromImage.call(this);
    }

    function _rotate(deg) {
        if (!this.options.useCanvas || !this.options.enableOrientation) {
            throw 'Croppie: Cannot rotate without enableOrientation && EXIF.js included';
        }

        var self = this,
            canvas = self.elements.canvas;

        self.data.orientation = getExifOffset(self.data.orientation, deg);
        drawCanvas(canvas, self.elements.img, self.data.orientation);
        _updateCenterPoint.call(self, true);
        _updateZoomLimits.call(self);

        // Reverses image dimensions if the degrees of rotation is not divisible by 180.
        if ((Math.abs(deg) / 90) % 2 === 1) {
            var oldHeight = self._originalImageHeight;
            var oldWidth = self._originalImageWidth;
            self._originalImageWidth = oldHeight;
            self._originalImageHeight = oldWidth;
        }
    }

    function _destroy() {
        var self = this;
        self.element.removeChild(self.elements.boundary);
        removeClass(self.element, 'croppie-container');
        if (self.options.enableZoom) {
            self.element.removeChild(self.elements.zoomerWrap);
        }
        delete self.elements;
    }

    if (typeof window !== 'undefined' && window.jQuery) {
        var $ = window.jQuery;
        $.fn.croppie = function (opts) {
            var ot = typeof opts;

            if (ot === 'string') {
                var args = Array.prototype.slice.call(arguments, 1);
                var singleInst = $(this).data('croppie');

                if (opts === 'get') {
                    return singleInst.get();
                }
                else if (opts === 'result') {
                    return singleInst.result.apply(singleInst, args);
                }
                else if (opts === 'bind') {
                    return singleInst.bind.apply(singleInst, args);
                }

                return this.each(function () {
                    var i = $(this).data('croppie');
                    if (!i) return;

                    var method = i[opts];
                    if ($.isFunction(method)) {
                        method.apply(i, args);
                        if (opts === 'destroy') {
                            $(this).removeData('croppie');
                        }
                    }
                    else {
                        throw 'Croppie ' + opts + ' method not found';
                    }
                });
            }
            else {
                return this.each(function () {
                    var i = new Croppie(this, opts);
                    i.$ = $;
                    $(this).data('croppie', i);
                });
            }
        };
    }

    function Croppie(element, opts) {
        if (element.className.indexOf('croppie-container') > -1) {
            throw new Error("Croppie: Can't initialize croppie more than once");
        }
        this.element = element;
        this.options = deepExtend(clone(Croppie.defaults), opts);

        if (this.element.tagName.toLowerCase() === 'img') {
            var origImage = this.element;
            addClass(origImage, 'cr-original-image');
            setAttributes(origImage, {'aria-hidden' : 'true', 'alt' : '' });
            var replacementDiv = document.createElement('div');
            this.element.parentNode.appendChild(replacementDiv);
            replacementDiv.appendChild(origImage);
            this.element = replacementDiv;
            this.options.url = this.options.url || origImage.src;
        }

        _create.call(this);
        if (this.options.url) {
            var bindOpts = {
                url: this.options.url,
                points: this.options.points
            };
            delete this.options['url'];
            delete this.options['points'];
            _bind.call(this, bindOpts);
        }
    }

    Croppie.defaults = {
        viewport: {
            width: 100,
            height: 100,
            type: 'square'
        },
        boundary: { },
        orientationControls: {
            enabled: true,
            leftClass: '',
            rightClass: ''
        },
        resizeControls: {
            width: true,
            height: true
        },
        customClass: '',
        showZoomer: true,
        enableZoom: true,
        enableResize: false,
        mouseWheelZoom: true,
        enableExif: false,
        enforceBoundary: true,
        enableOrientation: false,
        enableKeyMovement: true,
        update: function () { }
    };

    Croppie.globals = {
        translate: 'translate3d'
    };

    deepExtend(Croppie.prototype, {
        bind: function (options, cb) {
            return _bind.call(this, options, cb);
        },
        get: function () {
            var data = _get.call(this);
            var points = data.points;
            if (this.options.relative) {
                points[0] /= this.elements.img.naturalWidth / 100;
                points[1] /= this.elements.img.naturalHeight / 100;
                points[2] /= this.elements.img.naturalWidth / 100;
                points[3] /= this.elements.img.naturalHeight / 100;
            }
            return data;
        },
        result: function (type) {
            return _result.call(this, type);
        },
        refresh: function () {
            return _refresh.call(this);
        },
        setZoom: function (v) {
            _setZoomerVal.call(this, v);
            dispatchChange(this.elements.zoomer);
        },
        rotate: function (deg) {
            _rotate.call(this, deg);
        },
        destroy: function () {
            return _destroy.call(this);
        }
    });
    return Croppie;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/jquery-form/dist/jquery.form.min.js":
/*!**********************************************************!*\
  !*** ./node_modules/jquery-form/dist/jquery.form.min.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (r),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});
//# sourceMappingURL=jquery.form.min.js.map


/***/ }),

/***/ "./node_modules/loadjs/dist/loadjs.umd.js":
/*!************************************************!*\
  !*** ./node_modules/loadjs/dist/loadjs.umd.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {
/**
 * Global dependencies.
 * @global {Object} document - DOM
 */

var devnull = function() {},
    bundleIdCache = {},
    bundleResultCache = {},
    bundleCallbackQueue = {};


/**
 * Subscribe to bundle load event.
 * @param {string[]} bundleIds - Bundle ids
 * @param {Function} callbackFn - The callback function
 */
function subscribe(bundleIds, callbackFn) {
  // listify
  bundleIds = bundleIds.push ? bundleIds : [bundleIds];

  var depsNotFound = [],
      i = bundleIds.length,
      numWaiting = i,
      fn,
      bundleId,
      r,
      q;

  // define callback function
  fn = function (bundleId, pathsNotFound) {
    if (pathsNotFound.length) depsNotFound.push(bundleId);

    numWaiting--;
    if (!numWaiting) callbackFn(depsNotFound);
  };

  // register callback
  while (i--) {
    bundleId = bundleIds[i];

    // execute callback if in result cache
    r = bundleResultCache[bundleId];
    if (r) {
      fn(bundleId, r);
      continue;
    }

    // add to callback queue
    q = bundleCallbackQueue[bundleId] = bundleCallbackQueue[bundleId] || [];
    q.push(fn);
  }
}


/**
 * Publish bundle load event.
 * @param {string} bundleId - Bundle id
 * @param {string[]} pathsNotFound - List of files not found
 */
function publish(bundleId, pathsNotFound) {
  // exit if id isn't defined
  if (!bundleId) return;

  var q = bundleCallbackQueue[bundleId];

  // cache result
  bundleResultCache[bundleId] = pathsNotFound;

  // exit if queue is empty
  if (!q) return;

  // empty callback queue
  while (q.length) {
    q[0](bundleId, pathsNotFound);
    q.splice(0, 1);
  }
}


/**
 * Execute callbacks.
 * @param {Object or Function} args - The callback args
 * @param {string[]} depsNotFound - List of dependencies not found
 */
function executeCallbacks(args, depsNotFound) {
  // accept function as argument
  if (args.call) args = {success: args};

  // success and error callbacks
  if (depsNotFound.length) (args.error || devnull)(depsNotFound);
  else (args.success || devnull)(args);
}


/**
 * Load individual file.
 * @param {string} path - The file path
 * @param {Function} callbackFn - The callback function
 */
function loadFile(path, callbackFn, args, numTries) {
  var doc = document,
      async = args.async,
      maxTries = (args.numRetries || 0) + 1,
      beforeCallbackFn = args.before || devnull,
      pathname = path.replace(/[\?|#].*$/, ''),
      pathStripped = path.replace(/^(css|img)!/, ''),
      isLegacyIECss,
      e;

  numTries = numTries || 0;

  if (/(^css!|\.css$)/.test(pathname)) {
    // css
    e = doc.createElement('link');
    e.rel = 'stylesheet';
    e.href = pathStripped;

    // tag IE9+
    isLegacyIECss = 'hideFocus' in e;

    // use preload in IE Edge (to detect load errors)
    if (isLegacyIECss && e.relList) {
      isLegacyIECss = 0;
      e.rel = 'preload';
      e.as = 'style';
    }
  } else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(pathname)) {
    // image
    e = doc.createElement('img');
    e.src = pathStripped;    
  } else {
    // javascript
    e = doc.createElement('script');
    e.src = path;
    e.async = async === undefined ? true : async;
  }

  e.onload = e.onerror = e.onbeforeload = function (ev) {
    var result = ev.type[0];

    // treat empty stylesheets as failures to get around lack of onerror
    // support in IE9-11
    if (isLegacyIECss) {
      try {
        if (!e.sheet.cssText.length) result = 'e';
      } catch (x) {
        // sheets objects created from load errors don't allow access to
        // `cssText` (unless error is Code:18 SecurityError)
        if (x.code != 18) result = 'e';
      }
    }

    // handle retries in case of load failure
    if (result == 'e') {
      // increment counter
      numTries += 1;

      // exit function and try again
      if (numTries < maxTries) {
        return loadFile(path, callbackFn, args, numTries);
      }
    } else if (e.rel == 'preload' && e.as == 'style') {
      // activate preloaded stylesheets
      return e.rel = 'stylesheet'; // jshint ignore:line
    }
    
    // execute callback
    callbackFn(path, result, ev.defaultPrevented);
  };

  // add to document (unless callback returns `false`)
  if (beforeCallbackFn(path, e) !== false) doc.head.appendChild(e);
}


/**
 * Load multiple files.
 * @param {string[]} paths - The file paths
 * @param {Function} callbackFn - The callback function
 */
function loadFiles(paths, callbackFn, args) {
  // listify paths
  paths = paths.push ? paths : [paths];

  var numWaiting = paths.length,
      x = numWaiting,
      pathsNotFound = [],
      fn,
      i;

  // define callback function
  fn = function(path, result, defaultPrevented) {
    // handle error
    if (result == 'e') pathsNotFound.push(path);

    // handle beforeload event. If defaultPrevented then that means the load
    // will be blocked (ex. Ghostery/ABP on Safari)
    if (result == 'b') {
      if (defaultPrevented) pathsNotFound.push(path);
      else return;
    }

    numWaiting--;
    if (!numWaiting) callbackFn(pathsNotFound);
  };

  // load scripts
  for (i=0; i < x; i++) loadFile(paths[i], fn, args);
}


/**
 * Initiate script load and register bundle.
 * @param {(string|string[])} paths - The file paths
 * @param {(string|Function|Object)} [arg1] - The (1) bundleId or (2) success
 *   callback or (3) object literal with success/error arguments, numRetries,
 *   etc.
 * @param {(Function|Object)} [arg2] - The (1) success callback or (2) object
 *   literal with success/error arguments, numRetries, etc.
 */
function loadjs(paths, arg1, arg2) {
  var bundleId,
      args;

  // bundleId (if string)
  if (arg1 && arg1.trim) bundleId = arg1;

  // args (default is {})
  args = (bundleId ? arg2 : arg1) || {};

  // throw error if bundle is already defined
  if (bundleId) {
    if (bundleId in bundleIdCache) {
      throw "LoadJS";
    } else {
      bundleIdCache[bundleId] = true;
    }
  }

  function loadFn(resolve, reject) {
    loadFiles(paths, function (pathsNotFound) {
      // execute callbacks
      executeCallbacks(args, pathsNotFound);
      
      // resolve Promise
      if (resolve) {
        executeCallbacks({success: resolve, error: reject}, pathsNotFound);
      }

      // publish bundle load event
      publish(bundleId, pathsNotFound);
    }, args);
  }
  
  if (args.returnPromise) return new Promise(loadFn);
  else loadFn();
}


/**
 * Execute callbacks when dependencies have been satisfied.
 * @param {(string|string[])} deps - List of bundle ids
 * @param {Object} args - success/error arguments
 */
loadjs.ready = function ready(deps, args) {
  // subscribe to bundle load event
  subscribe(deps, function (depsNotFound) {
    // execute callbacks
    executeCallbacks(args, depsNotFound);
  });

  return loadjs;
};


/**
 * Manually satisfy bundle dependencies.
 * @param {string} bundleId - The bundle id
 */
loadjs.done = function done(bundleId) {
  publish(bundleId, []);
};


/**
 * Reset loadjs dependencies statuses
 */
loadjs.reset = function reset() {
  bundleIdCache = {};
  bundleResultCache = {};
  bundleCallbackQueue = {};
};


/**
 * Determine if bundle has already been defined
 * @param String} bundleId - The bundle id
 */
loadjs.isDefined = function isDefined(bundleId) {
  return bundleId in bundleIdCache;
};


// export
return loadjs;

}));


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/slugify/slugify.js":
/*!*****************************************!*\
  !*** ./node_modules/slugify/slugify.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else {}
}('slugify', this, function () {
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  var locales = JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},"vi":{"Đ":"D","đ":"d"}}')

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var locale = locales[options.locale] || {}

    var replacement = options.replacement === undefined ? '-' : options.replacement

    var slug = string.split('')
      // replace characters based on charMap
      .reduce(function (result, ch) {
        return result + (locale[ch] || charMap[ch] || ch)
          // remove not allowed characters
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
      }, '')
      // trim leading/trailing spaces
      .trim()
      // convert spaces to replacement character
      // also remove duplicates of the replacement character
      .replace(new RegExp('[\\s' + replacement + ']+', 'g'), replacement)

    if (options.lower) {
      slug = slug.toLowerCase()
    }

    if (options.strict) {
      // remove anything besides letters, numbers, and the replacement char
      slug = slug
        .replace(new RegExp('[^a-zA-Z0-9' + replacement + ']', 'g'), '')
        // remove duplicates of the replacement character
        .replace(new RegExp('[\\s' + replacement + ']+', 'g'), replacement)
    }

    return slug
  }

  replace.extend = function (customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key]
    }
  }

  return replace
}))


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./resources/assets/js/bootstrap.js");
/* harmony import */ var _app_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/index */ "./resources/assets/js/app/index.js");
// app.js



/***/ }),

/***/ "./resources/assets/js/app/app.js":
/*!****************************************!*\
  !*** ./resources/assets/js/app/app.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class App
// =============================================================
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.autoInit = localStorage.getItem('autoInitFrontend') || true;
    if (this.autoInit) this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      loop.log('Initializing App..'); // handle init of frontend app
      // =============================================================
      // Trigger the document

      $(document).trigger('loop.app:init', this);
      loop.log('App initialized.');
    }
  }]);

  return App;
}();

/* harmony default export */ __webpack_exports__["default"] = (App);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/app/index.js":
/*!******************************************!*\
  !*** ./resources/assets/js/app/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./resources/assets/js/app/app.js");
/**
 * Import classes that provides support for frontend app.
 */

/**
 * Initialize App after Laraloop initialisation.
 */

$(document).on('loop:init', function (e, loop) {
  new _app__WEBPACK_IMPORTED_MODULE_0__["default"]();
});
/**
 * Initialize other class after App initialisation.
 */

$(document).on('loop.app:init', function (e, app) {});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _laraloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./laraloop */ "./resources/assets/js/laraloop/index.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

  window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

  __webpack_require__(/*! jsrender */ "./node_modules/jsrender/jsrender.js")($);

  window.loadjs = __webpack_require__(/*! loadjs */ "./node_modules/loadjs/dist/loadjs.umd.js");
} catch (e) {}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/laraloop/alert.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/laraloop/alert.js ***!
  \***********************************************/
/*! exports provided: default, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class Alert
// =============================================================


var Alert = /*#__PURE__*/function () {
  function Alert(options) {
    _classCallCheck(this, Alert);

    /*
     * Set default options and merge with given
     */
    this.defaultOptions = {
      showClass: {
        popup: 'animate-swal-show'
      },
      hideClass: {
        popup: 'animate-swal-hide'
      },
      title: 'Are you sure?',
      icon: 'question',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
      showCloseButton: true,
      footer: null
    };
    this.options = options ? $.extend({}, this.defaultOptions, options) : this.defaultOptions;
    /*
     * Initialize class
     */

    this.init();
  }

  _createClass(Alert, [{
    key: "init",
    value: function init() {
      loop.log('Initizialising [Alert]');
      this.mixin = sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.mixin(this.options);
      this.handleAjaxRequest();
      this.handleMassActions();
      this.rememberMe();
      loop.log('[Alert] inizialized');
    }
    /**
     * Handle ajax request via sweetalert
     *
     * Basic usage: <a href="/delete" data-toggle="alert">Delete</a>
     * @see http://laraloop.com/docs/alerts
     */

  }, {
    key: "handleAjaxRequest",
    value: function handleAjaxRequest() {
      var self = this;
      $(document).on('click', '[data-toggle="alert"]', function (e) {
        e.preventDefault();
        var $this = $(this);
        var url = $this.attr('href') || $this.data('url');

        if (!url) {
          loop.log('Missing href attribute or data-url', 'error');
          return false;
        }

        var options = $.extend({}, self.defaultOptions, $this.data());
        options['url'] = url;
        if (options['cancel']) options['cancelButtonText'] = options['cancel'];
        if (options['confirm']) options['confirmButtonText'] = options['confirm'];
        options['payload'] = _typeof(options['payload']) === 'object' && options['payload'] !== null ? options['payload'] : {};
        self.mixin.fire({
          title: options['title'],
          text: options['body'],
          icon: options['icon'],
          confirmButtonText: options['confirmButtonText'],
          cancelButtonText: options['cancelButtonText'],
          showCancelButton: !!options['cancelButtonText'],
          footer: options['footer'],
          showLoaderOnConfirm: true,
          preConfirm: function preConfirm() {
            var data = options['payload'] || {};

            if (typeof loop.datatable === 'undefined') {
              if (!options['callback'] || options['callback'] === 'reload') data['callback'] = 'reload';
            }

            function fetch() {
              return _fetch.apply(this, arguments);
            }

            function _fetch() {
              _fetch = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return axios({
                          method: options['method'],
                          url: options['url'],
                          data: data
                        }).then(function (response) {
                          if (response.data.redirect) {
                            window.location.href = response.data.redirect;
                            return false;
                          }

                          if (data['callback'] === 'reload') {
                            loop.reload();
                            return false;
                          }

                          return response.data;
                        })["catch"](function (error) {
                          return {
                            error: typeof error.response.data !== 'undefined' && error.response.data.message ? error.response.data.message : error.message
                          };
                        });

                      case 2:
                        return _context.abrupt("return", _context.sent);

                      case 3:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return _fetch.apply(this, arguments);
            }

            return fetch();
          }
        }).then(function (result) {
          if (result.dismiss) {
            loop.warning('Action cancelled');
          } else if (_typeof(result.value) === 'object') {
            if (typeof result.value.error === 'undefined') {
              loop.success(result.value.message ? result.value.message : 'Successfully processed', {
                onClose: function onClose() {
                  if (typeof window[options['callback']] === 'function') {
                    window[options['callback']](result.value);
                  } else if (typeof loop[options['callback']] === 'function') {
                    loop[options['callback']]();
                  }

                  if (typeof loop.datatable !== 'undefined') {
                    loop.datatable.ajax.reload(null, false);
                  }
                }
              }, result.value.delay ? result.value.delay : options['timer']);
            } else {
              loop.error(result.value.error);
            }
          }
        });
      });
    }
    /**
     * Process mass actions
     */

  }, {
    key: "handleMassActions",
    value: function handleMassActions() {
      //if (!loop.isExists('.js-action')) return false
      var self = this;
      $(document).on('click', '.js-action', function (e) {
        e.preventDefault();
        var selectedRows = $('input[name="selectedRow[]"]:checked').map(function () {
          return this.value;
        }).get().join(', ');

        if (selectedRows === '') {
          loop.warning('Select at last one row.');
          return false;
        }

        var $this = $(this);
        var options = $.extend({}, self.defaultOptions, $this.data());
        if (options['cancel']) options['cancelButtonText'] = options['cancel'];
        if (options['confirm']) options['confirmButtonText'] = options['confirm'];
        options['url'] = $this.attr('href') + '?ids=' + selectedRows;
        if (!options['method']) options['method'] = 'PATCH';
        var data = _typeof(options['payload']) === 'object' && options['payload'] !== null ? options['payload'] : {};
        if (typeof loop.datatable === 'undefined') data['callback'] = 'reload';
        self.mixin.fire({
          title: options['title'],
          text: options['body'],
          icon: options['icon'],
          confirmButtonText: options['confirmButtonText'],
          cancelButtonText: options['cancelButtonText'],
          showCancelButton: !!options['cancelButtonText'],
          footer: options['footer'],
          showLoaderOnConfirm: true,
          // allowOutsideClick: () => !Swal.isLoading(),
          preConfirm: function preConfirm() {
            function fetch() {
              return _fetch2.apply(this, arguments);
            }

            function _fetch2() {
              _fetch2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return axios({
                          method: options['method'],
                          url: options['url'],
                          data: data
                        }).then(function (response) {
                          $('#select-rows').prop('indeterminate', false).prop('checked', false).trigger('change');

                          if (typeof loop.datatable !== 'undefined') {
                            //loop.success(response.data.message)
                            loop.datatable.ajax.reload(null, false);
                            return response.data;
                          } else {
                            loop.reload();
                            return false;
                          }
                        })["catch"](function (error) {
                          return {
                            error: typeof error.response.data !== 'undefined' && error.response.data.message ? error.response.data.message : error.message
                          };
                        });

                      case 2:
                        return _context2.abrupt("return", _context2.sent);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
              return _fetch2.apply(this, arguments);
            }

            return fetch();
          }
        }).then(function (result) {
          if (result.dismiss) {
            loop.warning('Action cancelled');
          } else if (_typeof(result.value) === 'object') {
            if (typeof result.value.error === 'undefined') {
              loop.success(result.value.message ? result.value.message : 'Successfully processed', {
                onClose: function onClose() {
                  if (typeof window[options['callback']] === 'function') {
                    window[options['callback']](result.value);
                  } else if (typeof loop[options['callback']] === 'function') {
                    loop[options['callback']]();
                  }
                }
              }, result.value.delay ? result.value.delay : options['timer']);
            } else {
              loop.error(result.value.error);
            }
          }
        });
      });
    }
  }, {
    key: "rememberMe",
    value: function rememberMe() {
      var showed = false;
      $('[data-toggle="rememberme"]').on('change', function () {
        if (!showed && $(this).prop('checked')) {
          loop.warning('Enable this option only on trusted device.');
          showed = true;
        }
      });
    }
  }]);

  return Alert;
}();


var Toast = /*#__PURE__*/function () {
  function Toast(options) {
    _classCallCheck(this, Toast);

    /*
     * Set default options and merge with given
     */
    this.options = $.extend({}, {
      toast: true,
      position: 'top',
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      onOpen: function onOpen(toast) {
        toast.addEventListener('mouseenter', sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.stopTimer);
        toast.addEventListener('mouseleave', sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.resumeTimer);
      },
      showClass: {
        popup: 'animate-toast-show'
      },
      hideClass: {
        popup: 'animate-toast-hide'
      }
    }, options || {});
    /*
     * Initialize
     */

    this.init();
  }

  _createClass(Toast, [{
    key: "init",
    value: function init() {
      this.mixin = sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default.a.mixin(this.options);
    }
    /**
     * Fire toast message
     *
     * @param message
     * @param icon 'success|error|warning|info|question'
     * @param timer
     * @param callback
     */

  }, {
    key: "fire",
    value: function fire(message, icon, callback, timer) {
      var options = {
        title: message,
        icon: icon ? icon : 'info',
        timer: icon === 'question' ? null : timer ? timer : 5000,
        // Only type == question should have this
        showConfirmButton: icon === 'question',
        showCancelButton: icon === 'question',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
      };

      if (typeof callback !== 'undefined' && callback) {
        if (typeof callback['onOpen'] === 'function') {
          options.onOpen = callback['onOpen'];
        }

        if (typeof callback['onClose'] === 'function') {
          options.onClose = callback['onClose'];
        }
      }

      this.mixin.fire(options).then(function (result) {
        if (typeof callback !== 'undefined' && callback && typeof callback['then'] === 'function') callback['then'](result);
      });
    }
  }]);

  return Toast;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/laraloop/avatar.js":
/*!************************************************!*\
  !*** ./resources/assets/js/laraloop/avatar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! croppie */ "./node_modules/croppie/croppie.js");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class Avatar
// =============================================================


var Avatar = /*#__PURE__*/function () {
  function Avatar() {
    _classCallCheck(this, Avatar);

    this.states = {
      initial: {
        label: 'initial'
      },
      cropping: {
        label: 'cropping'
      },
      uploading: {
        label: 'uploading'
      },
      success: {
        label: 'success'
      },
      error: {
        label: 'error'
      }
    };
    this.form = document.querySelector('[data-croppie-form]');
    if (this.form) this.init();
  }

  _createClass(Avatar, [{
    key: "init",
    value: function init() {
      loop.log('Inizializing Avatar...');
      this.setState(this.states.initial);
      var self = this;
      this.file_input_name = 'avatar';
      var vanilla = new croppie__WEBPACK_IMPORTED_MODULE_0___default.a(this.form.querySelector('[data-croppie-viewport]'), {
        viewport: {
          width: 200,
          height: 200,
          type: "square"
        },
        boundary: {
          width: 300,
          height: 300
        },
        showZoomer: true,
        enableOrientation: true
      });
      this.form.querySelector('[data-croppie-rotate-left]').addEventListener('click', function (event) {
        vanilla.rotate(-90);
      });
      this.form.querySelector('[data-croppie-rotate-right]').addEventListener('click', function (event) {
        vanilla.rotate(90);
      }); //form.querySelector('[data-croppie-viewport]').addEventListener('update', function (event) {});

      this.form[this.file_input_name].addEventListener('change', function (event) {
        self.setState(self.states.initial);

        if (this.files && this.files.length && this.files[0]) {
          self.readFile(this, function (e) {
            self.setState(self.states.cropping);
            vanilla.bind({
              url: e.target.result,
              zoom: 0
            });
          });
        }
      });
      this.form.addEventListener('submit', function (event) {
        event.preventDefault();
        vanilla.result({
          type: 'blob'
        }).then(function (blob) {
          if (blob) self.uploadImage(blob);
          self.form[self.file_input_name].value = null;
        });
      });
      $('#modalUploadAvatar').on('show.bs.modal', function (e) {
        $('[data-croppie-file]').trigger('click');
      });
      $('[data-croppie-browse]').on('click', function (e) {
        $('[data-croppie-file]').trigger('click');
      });
      loop.log('Avatar inizialized.');
    }
  }, {
    key: "readFile",
    value: function readFile(input, callback) {
      var reader = new FileReader();
      reader.onload = callback;
      reader.readAsDataURL(input.files[0]);
    }
  }, {
    key: "uploadImage",
    value: function uploadImage(blob) {
      var self = this;
      var formData = new FormData(this.form);
      formData["delete"](this.file_input_name);
      formData.append(this.file_input_name, blob, 'avatar.png'); // Handle ajax upload

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          var response = JSON.parse(this.responseText);

          if (this.status === 200) {
            if (response.result === 'success') {
              // Trigger avatar uploaded
              $(document).trigger('loop:avatar.uploaded', response);
              self.setState(self.states.success);
              loop.success(response.message);
              if (response.payload['avatar_url']) $('img.js-avatar').attr('src', response.payload.avatar_url);
              $('#modalUploadAvatar').modal('hide');
              return;
            }
          } else {
            self.setState(self.states.error);
            $('#modalUploadAvatar').modal('hide');
            loop.error(response.message);
          }
        }
      };

      xhr.open(self.form.method, self.form.action, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(formData);
      self.setState(self.states.uploading);
    }
  }, {
    key: "setState",
    value: function setState(state) {
      if (this.state !== state) {
        this.state && this.form.classList.remove('js-croppie-' + this.state.label);
        this.state = state;
        this.form.classList.add('js-croppie-' + this.state.label);
      }
    }
  }]);

  return Avatar;
}();

/* harmony default export */ __webpack_exports__["default"] = (Avatar);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/laraloop/cover.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/laraloop/cover.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! croppie */ "./node_modules/croppie/croppie.js");
/* harmony import */ var croppie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(croppie__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class Cover
// =============================================================


var Cover = /*#__PURE__*/function () {
  function Cover() {
    _classCallCheck(this, Cover);

    this.states = {
      initial: {
        label: 'initial'
      },
      cropping: {
        label: 'cropping'
      },
      uploading: {
        label: 'uploading'
      },
      success: {
        label: 'success'
      },
      error: {
        label: 'error'
      }
    };
    this.form = document.querySelector('[data-croppie-cover]');
    if (this.form) this.init();
  }

  _createClass(Cover, [{
    key: "init",
    value: function init() {
      loop.log('Inizializing Cover...');
      this.setState(this.states.initial);
      var self = this;
      this.file_input_name = 'cover';
      var vanilla = new croppie__WEBPACK_IMPORTED_MODULE_0___default.a(this.form.querySelector('[data-croppie-viewport]'), {
        viewport: {
          width: 1108,
          height: 256,
          type: "square"
        },
        boundary: {
          width: 1108,
          height: 256
        },
        showZoomer: true,
        enableOrientation: true
      });
      this.form[this.file_input_name].addEventListener('change', function (event) {
        self.setState(self.states.initial);

        if (this.files && this.files.length && this.files[0]) {
          self.readFile(this, function (e) {
            self.setState(self.states.cropping);
            vanilla.bind({
              url: e.target.result,
              zoom: 0
            });
          });
        }
      });
      this.form.addEventListener('submit', function (event) {
        event.preventDefault();
        vanilla.result({
          type: 'blob'
        }).then(function (blob) {
          if (blob) self.uploadImage(blob);
          self.form[self.file_input_name].value = null;
        });
      });
      $('[data-croppie-browse]').on('click', function (e) {
        $('[data-croppie-file]').trigger('click');
      });
      loop.log('Cover Inizialized...');
    }
  }, {
    key: "readFile",
    value: function readFile(input, callback) {
      var reader = new FileReader();
      reader.onload = callback;
      reader.readAsDataURL(input.files[0]);
    }
  }, {
    key: "uploadImage",
    value: function uploadImage(blob) {
      var self = this;
      var formData = new FormData(this.form);
      formData["delete"](this.file_input_name);
      formData.append(this.file_input_name, blob, 'cover.png'); // Handle ajax upload

      var xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
          var response = JSON.parse(this.responseText); // Trigger avatar uploaded

          $(document).trigger('laraloop.cover.uploaded', [this.status, response]);

          if (this.status === 200) {
            if (response.result === 'success') {
              self.setState(self.states.success);
              loop.success(response.message);
              if (response.payload) $('.cover-img').attr('src', response.payload);
              return;
            }
          } else {
            loop.error(response.message);
            self.setState(self.states.error);
          }
        }
      };

      xhr.open(self.form.method, self.form.action, true);
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(formData);
      self.setState(self.states.uploading);
    }
  }, {
    key: "setState",
    value: function setState(state) {
      if (this.state !== state) {
        this.state && this.form.classList.remove('js-croppie-' + this.state.label);
        this.state = state;
        this.form.classList.add('js-croppie-' + this.state.label);
        $('.page-cover').toggleClass('js-croppie-cover-container', this.state.label === 'cropping');
      }
    }
  }]);

  return Cover;
}();

/* harmony default export */ __webpack_exports__["default"] = (Cover);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/laraloop/form.js":
/*!**********************************************!*\
  !*** ./resources/assets/js/laraloop/form.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony import */ var corejs_typeahead__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! corejs-typeahead */ "./node_modules/corejs-typeahead/dist/typeahead.bundle.js");
/* harmony import */ var corejs_typeahead__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(corejs_typeahead__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class Form
// =============================================================



__webpack_require__(/*! ../../vendors/jsvalidation/jsvalidation.min */ "./resources/assets/vendors/jsvalidation/jsvalidation.min.js");

__webpack_require__(/*! jquery-form/dist/jquery.form.min */ "./node_modules/jquery-form/dist/jquery.form.min.js");

var Form = /*#__PURE__*/function () {
  function Form() {
    _classCallCheck(this, Form);

    this.init();
  }

  _createClass(Form, [{
    key: "init",
    value: function init() {
      loop.log('Initializing Form..'); // handle custom components
      // =============================================================

      this.typeaheadUsernameSuggestions();
      this.htmlFormValidation();
      this.togglePasswordVisibility(); //this.passwordStrength()
      // handle plugins initialization
      // =============================================================

      this.bootstrapSelect();
      this.select2();
      this.flatpickr();
      this.summernote(); //this.maskInput()
      //this.zxcvbn()

      this.ajaxForm(); // trigger the document

      $(document).trigger('loop.form:init', this);
      loop.log('Form initialized.');
    } // handle plugins initialization
    // =============================================================

  }, {
    key: "typeaheadUsernameSuggestions",
    value: function typeaheadUsernameSuggestions() {
      var self = this;

      if (loop.isExists('[data-toggle="username-suggestions"]')) {
        var $autocompleteInput = $('[data-toggle="username-suggestions"]');
        var name = $('#inputName').val();
        var remoteUrl = $autocompleteInput.data('remote') || '/users/username-suggestions';
        var prefetchUrl = name ? remoteUrl + '?name=' + name : null;
        var showSuggestions = $autocompleteInput.data('show-suggestions');
        var $suggestionsStatus = $('.js-suggestion-status');
        $autocompleteInput.on('keyup change', function () {
          var $this = $(this);
          $this.val(slugify__WEBPACK_IMPORTED_MODULE_1___default()($this.val()));
        });
        var usernameSuggested = new corejs_typeahead__WEBPACK_IMPORTED_MODULE_0___default.a({
          datumTokenizer: corejs_typeahead__WEBPACK_IMPORTED_MODULE_0___default.a.tokenizers.obj.whitespace('value'),
          queryTokenizer: corejs_typeahead__WEBPACK_IMPORTED_MODULE_0___default.a.tokenizers.whitespace,
          prefetch: prefetchUrl,
          // TODO check why not work
          remote: {
            url: remoteUrl + '?name=' + name + '&q=%QUERY',
            wildcard: '%QUERY',
            transform: function transform(response) {
              return response;
            }
          }
        });
        $autocompleteInput.typeahead({
          minLength: 3
        }, {
          name: 'username-suggestions',
          display: 'username',
          source: usernameSuggested,
          templates: {
            // suggestion: function(data) {
            //     return $.templates("#autocompleteSuggestions").render(data)
            // },
            header: '<div class="tt-menu-header text-danger">Suggested username</div>',
            empty: '<div class="tt-menu-header text-green">The username is available.</div>',
            pending: '<div class="tt-menu-header">Searching available username...</div>'
          }
        }).on('typeahead:render', function (ev, suggestion) {
          var $this = $(this);
          if (!showSuggestions) $this.typeahead('close'); // Validate before process

          if (typeof self.validator !== 'undefined') self.validator.element("#inputUsername");

          if (suggestion.length === 0) {
            $suggestionsStatus.text('The username is available.').addClass('text-success').removeClass('text-danger text-muted'); //$this.removeClass('is-invalid').addClass('is-valid')
          } else {
            //$this.removeClass('is-valid').addClass('is-invalid')
            $suggestionsStatus.html(suggestion.length === 1 ? 'This is available:' : 'These are available:');
            $.each(suggestion, function (index, item) {
              $suggestionsStatus.append('&nbsp;<a href="#" data-username="' + item['username'] + '" class="badge badge-danger ml-1">' + item['username'] + '</a>');
            });
            $suggestionsStatus.addClass('text-danger').removeClass('text-success text-muted');
            $suggestionsStatus.find('a').one('click', function (e) {
              e.preventDefault();
              $this.typeahead('val', $(this).data('username'));
            });
          }
        }).on('typeahead:asynccancel typeahead:asyncreceive', function () {
          $('.tt-spinner-username').removeClass('show');
        }).on('typeahead:select', function () {
          $suggestionsStatus.text('The username is available.').addClass('text-success').removeClass('text-danger text-muted');
        }).on('typeahead:asyncrequest', function () {
          var $this = $(this);
          $this.typeahead('val', slugify__WEBPACK_IMPORTED_MODULE_1___default()($this.typeahead('val')));
          $('.tt-spinner-username').addClass('show');
          $suggestionsStatus.text('Searching available username...').addClass('text-muted').removeClass('text-success text-danger');
        }); // .on('typeahead:asynccancel', function () {
        //     loop.log('typeahead:asynccancel')
        // })
        // .on('typeahead:change', function () {
        //     loop.log('typeahead:change')
        // })
        // .on('typeahead:autocomplete', function () {
        //     loop.log('typeahead:autocomplete')
        // })
        // .on('typeahead:cursorchange', function () {
        //     loop.log('typeahead:cursorchange')
        // })
        // .on('typeahead:idle', function () {
        //     loop.log('typeahead:idle')
        //
        //     // $('.tt-spinner-username').removeClass('show')
        //     // $suggestionsStatus.text('Start typing minimum 3 characters to search available username.')
        //     //     .addClass('text-muted').removeClass('text-success text-danger')
        // })
      }
    }
    /**
     * Validate form on submit
     */

  }, {
    key: "jsFormValidation",
    value: function jsFormValidation(form, rules, ignore, durationAnimation) {
      var self = this;
      loop.log('JS Form Validation initizialing..');
      this.validator = $(form).validate({
        errorElement: 'span',
        errorClass: 'invalid-feedback',
        errorPlacement: function errorPlacement(error, element) {
          if (element.prop('type') === 'checkbox' || element.prop('type') === 'radio' || element.parent().parent('.input-group').length) {
            error.insertAfter(element.parent().parent());
          } else if (element.parent('.input-group').length || element.parent('.form-label-group').length) {
            error.insertAfter(element.parent());
          } else {
            error.insertAfter(element);
          }
        },
        highlight: function highlight(element) {
          if ($(element).parent('.input-group').length || $(element).parent().parent('.input-group').length) {
            $(element).closest('.input-group').removeClass('is-valid').addClass('is-invalid');
          } else {
            $(element).closest('.form-control').removeClass('is-valid').addClass('is-invalid');
          }
        },
        unhighlight: function unhighlight(element) {
          if ($(element).parent('.input-group').length || $(element).parent().parent('.input-group').length) {
            $(element).closest('.input-group').removeClass('is-invalid').addClass('is-valid');
          } else {
            $(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid');
          }
        },
        success: function success(element) {
          if ($(element).parent('.input-group').length || $(element).parent().parent('.input-group').length) {
            $(element).closest('.input-group').removeClass('is-invalid').addClass('is-valid');
          } else {
            $(element).closest('.form-control').removeClass('is-invalid').addClass('is-valid');
          }
        },
        ignore: ignore,
        focusInvalid: true,
        invalidHandler: function invalidHandler(form, validator) {
          if (!durationAnimation || !validator.numberOfInvalids()) return;
          $('html, body').animate({
            scrollTop: $(validator.errorList[0].element).offset().top - 56 // when fixed header - 56px

          }, durationAnimation);
        },
        submitHandler: function submitHandler(form) {
          if (typeof $(form).data('ajax') === 'undefined' || !jQuery().ajaxSubmit) {
            // Note that "selector" refers to a DOM element, this way the validation isn't triggered again.
            form.submit();
          } else {
            // Submit form using ajax
            $(form).ajaxSubmit(self.ajaxFormOptions($(form)));
          }
        },
        rules: rules
      });

      if ($(form).find('select').length) {
        $('select').change(function () {
          $(this).valid();
        });
      }

      return this.validator;
    }
    /**
     * Validate form on submit
     */

  }, {
    key: "htmlFormValidation",
    value: function htmlFormValidation() {
      var forms = $('.needs-validation');
      forms.each(function (i, form) {
        $(form).on('submit', function (e) {
          if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }

          $(form).addClass('was-validated');
        });
      });
    }
    /**
     * Toggle visibility password input value
     */

  }, {
    key: "togglePasswordVisibility",
    value: function togglePasswordVisibility() {
      $(document).on('click', '[data-toggle="password"]', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var $input = $(target);
        var hasFa = $(this).has('.fa');
        var isPassword = $input.is('[type="password"]');
        var inputType = isPassword ? 'text' : 'password';
        var triggerText = isPassword ? 'Hide' : 'Show'; // toggle icon

        $(this).children('.fa, .far').toggleClass('fa-eye fa-eye-slash', hasFa); // toggle trigger text

        $(this).children().last().text(triggerText); // toggle input type

        $input.prop('type', inputType);
      });
    } // passwordStrength() {
    //
    //     if (!loop.isExists('.js-pwstrength')) {
    //         return;
    //     }
    //
    //     let userInputs = [];
    //     $.each(['#inputName', '#inputEmail', '#inputUsername'], function(idx, selector) {
    //             if ($(selector).val()) {
    //                 userInputs.push($(selector).val());
    //             }
    //         }
    //     )
    //
    //     const useZxcvbn = function () {
    //         const $input = $('.js-pwstrength')
    //         const $indicator = $('.pwstrength-progress .progress-bar')
    //         const $feedback = $('.pwstrength-feedback')
    //         const strength = ['bg-red', 'bg-orange', 'bg-yellow', 'bg-teal', 'bg-green']
    //         $input.on('keyup', function () {
    //             const val = $input.val()
    //             const result = zxcvbn(val, userInputs)
    //             const indicatorWidth = `${(result.score + 1) / strength.length * 100}%`
    //             if (val !== '') {
    //                 $indicator.removeClass(`d-none ${strength.join(' ')}`).addClass(`${strength[result.score]}`).css('width', indicatorWidth)
    //                 $feedback.find('.pwstrength-warning').text(result.feedback.warning)
    //                 $feedback.find('.pwstrength-suggestions').text(result.feedback.suggestions)
    //             } else {
    //                 $indicator.addClass('d-none')
    //                 $feedback.html('')
    //             }
    //         })
    //     }
    //
    //     loadjs(['/assets/vendor/zxcvbn/zxcvbn.js'], 'zxcvbn');
    //     loadjs.ready('zxcvbn', {
    //         success: function () {
    //             useZxcvbn();
    //         },
    //         error: function (depsNotFound) {
    //             loop.error('zxcvbn library not found.')
    //             // TODO add fallback
    //         }
    //     });
    // }
    // Submit form via ajax

  }, {
    key: "ajaxForm",
    value: function ajaxForm() {
      if (!loop.isExists('form[data-ajax]')) {
        return false;
      }

      var self = this;
      $('form[data-ajax]').each(function (i, el) {
        var $this = $(el); // bind to the form's submit event only if not js-validate enabled
        // When js-validate is enabled, then submit handler is via jsvalidate plugin

        if (!$this.hasClass('js-validation')) $this.ajaxForm(self.ajaxFormOptions($this));
      });
    }
  }, {
    key: "ajaxFormOptions",
    value: function ajaxFormOptions(form) {
      return {
        //beforeSerialize: function($form, options) {},
        beforeSubmit: function beforeSubmit(formData, jqForm, options) {
          jqForm.find('button[type=submit]').prepend("<span class=\"spinner-grow spinner-grow-sm\" role=\"status\" aria-hidden=\"true\" style=\"display: none\"></span>");
          jqForm.find('button[type=submit] > span').show();
          jqForm.find('button[type=submit]').prop('disabled', true);
        },
        success: function success(responseText, statusText, xhr, $form) {
          var callback = $form.data('callback'),
              clearForm = $form.data('clear-form'); // TODO withCallback()

          if (callback === 'reload') {
            loop.reload();
            return true;
          }

          if (responseText.redirect) {
            window.location.href = responseText.redirect;
            return true;
          }

          loop.success(responseText.message);

          if (typeof clearForm !== 'undefined') {
            $form.clearForm();
          }

          $form.find('button[type=submit] > span').remove();
          $form.find('button[type=submit]').prop('disabled', false);
          $.event.trigger({
            type: 'loop:ajaxform.success',
            responseText: responseText,
            statusText: statusText,
            xhr: xhr,
            form: $form
          });
        },
        error: function error(xhr, status, _error) {
          var response = $.parseJSON(xhr.responseText);
          var message = response.message;
          message = message ? message : 'An error occured.'; // If there are errors in response, replace message with error

          if (typeof response.errors !== 'undefined') {
            // Optionally show message as title, but it's redundant info
            // because Laravel validation return something generic like
            // 'The given data was invalid'
            //title = message
            message = response.errors[Object.keys(response.errors)[0]];
          }

          loop.error(message);
          form.find('button[type=submit] > span').remove();
          form.find('button[type=submit]').prop('disabled', false);
          $.event.trigger({
            type: 'loop:ajaxform.error',
            xhr: xhr,
            status: status,
            error: _error
          });
        }
      };
    }
    /**
     * Handle summernote initialization
     */

  }, {
    key: "summernote",
    value: function summernote() {
      if ($.fn.summernote) {
        $('[data-toggle="summernote"]').each(function () {
          var selector = this;
          var options = $(selector).data();
          options.callbacks = {
            // fix broken checkbox on link modal
            onInit: function onInit(e) {
              var editor = $(e.editor);
              editor.find('.custom-control-description').addClass('custom-control-label d-block').parent().removeAttr('for');
            }
          };
          $(selector).summernote(options);
        });
      }
    }
    /**
     * Handle flatpickr initialization
     */

  }, {
    key: "flatpickr",
    value: function (_flatpickr) {
      function flatpickr() {
        return _flatpickr.apply(this, arguments);
      }

      flatpickr.toString = function () {
        return _flatpickr.toString();
      };

      return flatpickr;
    }(function () {
      if (window.flatpickr) {
        flatpickr.defaultConfig.disableMobile = true;
        $('[data-toggle="flatpickr"]').each(function () {
          var selector = this;
          var options = $(selector).data();
          options.plugins = [];
          options.disable = options.disables || [];
          options.defaultDate = options.defaultDates || null; // flatpickr plugins

          if (options.confirmdate) {
            options.plugins.push(new confirmDatePlugin({
              showAlways: true
            }));
          }

          if (options.weekselect) {
            options.plugins.push(new weekSelect({}));
          }

          if (options.monthselect) {
            options.plugins.push(new monthSelectPlugin({
              shorthand: true,
              //defaults to false
              dateFormat: 'm/y',
              //defaults to 'F Y'
              altFormat: 'F Y' //defaults to 'F Y'

            }));
          }

          if (options.rangeplugin) {
            options.plugins.push(new range({
              input: "#".concat(options.secondInput)
            }));
          }

          flatpickr(selector, options);
        });
      }
    })
    /**
     * Handle bootstrap select initialization
     * See https://developer.snapappointments.com/bootstrap-select
     */

  }, {
    key: "bootstrapSelect",
    value: function bootstrapSelect() {
      if ($.fn.selectpicker) {
        // use fontawesome as default icon
        $.fn.selectpicker.Constructor.DEFAULTS.style = '';
        $.fn.selectpicker.Constructor.DEFAULTS.styleBase = 'custom-select';
        $.fn.selectpicker.Constructor.DEFAULTS.iconBase = 'mr-1 fa';
        $.fn.selectpicker.Constructor.DEFAULTS.tickIcon = 'fa-check font-size-sm mt-2';
        $('[data-toggle="selectpicker"]').each(function () {
          var selector = this; // initialize

          $(selector).selectpicker() // add dropdown menu arrow
          .on('loaded.bs.select', function (e) {
            $(e.target).nextAll('.dropdown-menu').prepend('<div class="dropdown-arrow" />');
          });
        });
      }
    }
    /**
     * Handle select2 initialization
     * See https://select2.org/configuration/data-attributes
     * to use select2 with data-* attributes
     */

  }, {
    key: "select2",
    value: function select2() {
      if ($.fn.select2) {
        // responsive setting
        $.fn.select2.defaults.set('width', '100%');
        $('[data-toggle="select2"]').each(function () {
          var selector = this;
          var options = $(selector).data();
          options = options.options ? options.options : options;
          $(selector).select2(options);
        });
      }
    }
    /*
     * Handle Vanilla Text Mask
     */
    // maskInput() {
    //     if (window.vanillaTextMask) {
    //         $('[data-mask]').each(function () {
    //             const selector = this
    //             const options = $(selector).data()
    //             const patterns = {
    //                 date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    //                 usphone: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    //                 usphonecode: ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    //                 uszip: [/\d/, /\d/, /\d/, /\d/, /\d/],
    //                 cazip: [/[A-Z]/i, /\d/, /[A-Z]/i, ' ', /\d/, /[A-Z]/i, /\d/],
    //                 cc: [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/],
    //                 expdatecc: [/\d/, /\d/, '/', /\d/, /\d/],
    //                 cvc: [/\d/, /\d/, /\d/]
    //             }
    //             const pattern = options.mask
    //
    //             options.inputElement = selector
    //             options.mask = patterns[options.mask] || []
    //             options.placeholderChar = options.placeholderChar || '#'
    //
    //             if (pattern == 'cazip') {
    //                 options.pipe = val => val.toUpperCase()
    //             } else if (pattern == 'email') {
    //                 options.mask = textMaskAddons.emailMask || []
    //             } else if (pattern == 'currency') {
    //                 options.prefix = options.prefix || ''
    //                 options.mask = textMaskAddons.createNumberMask ? textMaskAddons.createNumberMask(options) : []
    //             } else if (pattern == 'percentage') {
    //                 options.prefix = ''
    //                 options.suffix = '%'
    //                 options.mask = textMaskAddons.createNumberMask ? textMaskAddons.createNumberMask(options) : []
    //             }
    //
    //             if (options.autoCorrectDate) {
    //                 const autoCorrectedDatePipe = textMaskAddons.createAutoCorrectedDatePipe ? textMaskAddons.createAutoCorrectedDatePipe(options.autoCorrectDate) : null
    //                 options.pipe = autoCorrectedDatePipe
    //             }
    //
    //             vanillaTextMask.maskInput(options)
    //         })
    //     }
    // }

  }]);

  return Form;
}();

/* harmony default export */ __webpack_exports__["default"] = (Form);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/laraloop/index.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/laraloop/index.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _laraloop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./laraloop */ "./resources/assets/js/laraloop/laraloop.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./resources/assets/js/laraloop/form.js");
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./avatar */ "./resources/assets/js/laraloop/avatar.js");
/* harmony import */ var _cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cover */ "./resources/assets/js/laraloop/cover.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert */ "./resources/assets/js/laraloop/alert.js");
// index.js

/**
 * We'll load Laraloop and other classes which provides support
 * for both admin and frontend such as uploading of cover and avatar.
 */





/**
 * Initialize Laraloop globally as loop.
 * So that we can use it like below.
 *
 * `loop.success('Success message')`
 */

window.loop = new _laraloop__WEBPACK_IMPORTED_MODULE_0__["default"]();
/**
 * Initialize other classes on Laraloop init event.
 */

$(document).on('loop:init', function (e, loop) {
  loop.form = new _form__WEBPACK_IMPORTED_MODULE_1__["default"]();
  new _avatar__WEBPACK_IMPORTED_MODULE_2__["default"]();
  new _cover__WEBPACK_IMPORTED_MODULE_3__["default"]();
  new _alert__WEBPACK_IMPORTED_MODULE_4__["default"](loop.config.swal);
}); // With pjax load only once below
// $(document).one('loop:init', (e, loop) => {
//     new Avatar()
//     new Cover()
//     new Alert(loop.config.swal)
// })
// Reload loop after each pjax loading
// document.addEventListener('pjax:ready', function () {
//     $(document).trigger('loop:init', loop)
// });
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/js/laraloop/laraloop.js":
/*!**************************************************!*\
  !*** ./resources/assets/js/laraloop/laraloop.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./resources/assets/js/laraloop/alert.js");
/* harmony import */ var corejs_typeahead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! corejs-typeahead */ "./node_modules/corejs-typeahead/dist/typeahead.bundle.js");
/* harmony import */ var corejs_typeahead__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(corejs_typeahead__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Class Laraloop
// =============================================================



var Laraloop = /*#__PURE__*/function () {
  function Laraloop() {
    var _this = this;

    _classCallCheck(this, Laraloop);

    /*
     * Set default options and merge with window.AppConfig
     */
    this.config = $.extend({}, {
      appName: 'Laraloop',
      appUrl: window.location.hostname,
      locale: document.documentElement.lang,
      debug: true,
      csrf: $('meta[name="csrf-token"]').attr('content'),
      autoInit: localStorage.getItem('autoInit') || true,
      toast: {},
      swal: {}
    }, window['appConfig'] || {});
    /*
     * Setup jquery ajax
     */

    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': this.config.csrf
      }
    });
    /*
     * Setup axios if available
     */

    if (window.axios) {
      window.axios.defaults.headers.common['X-CSRF-TOKEN'] = this.config.csrf;
      window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }
    /*
     * Set Toast message
     */


    this.toast = new _alert__WEBPACK_IMPORTED_MODULE_0__["Toast"](this.config.toast);
    /*
     * Initialize on doc ready
     */

    $(document).ready(function () {
      if (_this.config.autoInit) _this.init();
    });
  }

  _createClass(Laraloop, [{
    key: "init",
    value: function init() {
      this.log('Inizializing Laraloop...'); // handle polyfill
      // =============================================================

      this.placeholderShown();
      this.objectFitFallback(); // handle bootstrap components
      // =============================================================

      this.tooltips();
      this.popovers();
      this.nestedDropdown();
      this.inputClearable();
      this.inputGroup();
      this.inputNumber();
      this.fileInputBehavior();
      this.indeterminateCheckboxes();
      this.cardExpansion();
      this.modalScrollable();
      this.autofocusInputBehaviour(); // handle theme layouts
      // =============================================================

      this.sidebar(); //this.pageExpander()

      this.handleSearchToggler(); // handle custom components
      // =============================================================

      this.hamburger();
      this.publisher();
      this.filterList();
      this.radioList();
      this.checkboxList();
      this.smoothScroll(); // handle plugins initialization
      // =============================================================

      this.perfectScrollbar(); //this.tribute()

      this.colorpicker();
      this.touchspin();
      this.handleAutocompleteSearch(); // handle events – how our components should react on events?
      // =============================================================

      this.eventProps();
      this.watchMQ();
      this.watchIE(); // utilities
      // =============================================================

      this.browserFlagging();
      this.osFlagging(); // trigger the document

      this.log('Laraloop initialized.');
      $(document).trigger('loop:init', this);
    } // Polifyll
    // =============================================================

    /**
     * Polyfill for Array.values()
     * returns an array of a given object's own enumerable property values,
     * in the same order as that provided
     */

  }, {
    key: "objToArray",
    value: function objToArray(obj) {
      return Object.keys(obj).map(function (key) {
        return obj[key];
      });
    }
    /**
     * Polyfill for :placeholder-shown
     * used by floating label input
     */

  }, {
    key: "placeholderShown",
    value: function placeholderShown() {
      $(document).on('focus blur keyup change', '.form-label-group > input', function () {
        this.classList[this.value ? 'remove' : 'add']('placeholder-shown');
      }); // toggle .placeholder-shown onload

      $('.form-label-group > input').trigger('change');
    }
    /**
     * object-fit fallbaack for ie and edge
     */

  }, {
    key: "objectFitFallback",
    value: function objectFitFallback() {
      if (this.isIE() || this.isEdge()) {
        var selectors = ['.user-avatar img', '.tile > img', '.figure-attachment > img', '.page-cover > .cover-img', '.list-group-item-figure > img'];
        $(selectors.toString()).each(function () {
          var $img = $(this);
          var url = $img.prop('src');
          var $container = $img.parent(); // .user-avatar with dropdown has deep markup

          if ($container.is('[data-toggle="dropdown"]')) {
            $container = $container.parent();
          }

          if (url) {
            // copy img url then put as container bg
            $container.css({
              backgroundImage: "url(".concat(url, ")"),
              backgroundSize: 'cover',
              backgroundPosition: 'center center'
            });

            if ($container.hasClass('user-avatar') || $container.hasClass('user-avatar')) {
              $container.css('background-position', 'top center');
            } // hide the image


            $img.css('opacity', 0);
          }
        });
      }
    } // Bootstrap Components
    // =============================================================

    /**
     * Init bootstrap tooltips
     */

  }, {
    key: "tooltips",
    value: function tooltips() {
      $('[data-toggle="tooltip"]').tooltip();
    }
    /**
     * Init bootstrap popovers
     */

  }, {
    key: "popovers",
    value: function popovers() {
      $('[data-toggle="popover"]').popover();
    }
    /**
     * Init nested dropdown
     */

  }, {
    key: "nestedDropdown",
    value: function nestedDropdown() {
      $('.dropdown-menu [data-toggle="dropdown"]').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $trigger = $(this);
        var $dropdown = $trigger.parent();
        var $dropdownMenu = $trigger.next(); // close all dropdown menu

        $dropdown.siblings().find('.dropdown-menu').removeClass('show');
        $dropdownMenu.toggleClass('show');
        $trigger.parents('.nav-item').on('hidden.bs.dropdown', function () {
          return $dropdownMenu.removeClass('show');
        });
      });
    }
    /**
     * Hide/show clearable button due to input value
     */

  }, {
    key: "inputClearable",
    value: function inputClearable() {
      // hide/show due to input value
      var toggleClear = function toggleClear(input) {
        var isEmpty = !$(input).val();
        var clearable = $(input).parent().children('.close');
        clearable.toggleClass('show', !isEmpty);
      }; // give natural state onload
      // show close button when input has value


      $('.has-clearable > .form-control').each(function () {
        toggleClear(this);
      }); // handle input clearable events

      $(document).on('keyup', '.has-clearable > .form-control', function () {
        toggleClear(this);
      }).on('click', '.has-clearable > .close', function () {
        var $input = $(this).parent().children('.form-control');
        $input.val('').focus();
        toggleClear($input[0]);
        $input.trigger('keyup');
      });
    }
    /**
     * Toggle focus class in input-group when input is focused
     */

  }, {
    key: "inputGroup",
    value: function inputGroup() {
      // handle input group events
      $(document).on('focusin focusout', '.input-group:not(.input-group-alt) .form-control', function (e) {
        var $inputGroup = $(this).closest('.input-group');
        var hasFocus = e.type === 'focusin';

        if ($inputGroup.length) {
          $inputGroup.toggleClass('focus', hasFocus);
        }
      });
    }
    /**
     * Toggle focus class in input-group when input is focused
     */

  }, {
    key: "inputNumber",
    value: function inputNumber() {
      $('.custom-number').each(function () {
        var spinner = $(this);
        var input = spinner.children('.form-control[type="number"]');
        var min = parseFloat(input.attr('min'));
        var max = parseFloat(input.attr('max'));
        var step = parseFloat(input.attr('step')) || 1;
        var newVal = 0;
        var controls = $('<div class="custom-number-controls"></div>');
        var btnUp = $('<div class="custom-number-btn custom-number-up">+</div>');
        var btnDown = $('<div class="custom-number-btn custom-number-down">-</div>');
        controls.prepend(btnUp).append(btnDown);
        spinner.append(controls);
        btnUp.on('click', function () {
          var oldValue = parseFloat(input.val()) || 0;
          newVal = oldValue >= max ? oldValue : oldValue + step;
          input.val(newVal).trigger('change');
        });
        btnDown.on('click', function () {
          var oldValue = parseFloat(input.val()) || 0;
          newVal = oldValue <= min ? oldValue : oldValue - step;
          input.val(newVal).trigger('change');
        });
      });
    }
    /**
     * Add text value to our custom file input
     */

  }, {
    key: "fileInputBehavior",
    value: function fileInputBehavior() {
      // copy label text to data label which we'll use later
      $('.custom-file > .custom-file-label').each(function () {
        var label = $(this).text();
        $(this).data('label', label);
      }); // update label text with current input value

      $(document).on('change', '.custom-file > .custom-file-input', function () {
        var files = this.files;
        var $fileLabel = $(this).next('.custom-file-label'); // use when no file chosen

        var $originLabel = $fileLabel.data('label'); // truncate text when user chose more than 2 files

        $fileLabel.text(files.length + ' files selected');

        if (files.length <= 2) {
          var fileNames = [];

          for (var i = 0; i < files.length; i++) {
            fileNames.push(files[i].name);
          }

          $fileLabel.text(fileNames.join(', '));
        } // reset label text if no file chosen


        if (!files.length) {
          $fileLabel.text($originLabel);
        }
      });
    }
    /**
     * Add indeterminate state in custom checkbox
     */

  }, {
    key: "indeterminateCheckboxes",
    value: function indeterminateCheckboxes() {
      $('input[type="checkbox"][indeterminate], input[type="checkbox"][data-indeterminate="true"]').prop('indeterminate', true);
    }
    /**
     * Toggle card expansion like accordion
     */

  }, {
    key: "cardExpansion",
    value: function cardExpansion() {
      $(document).on('show.bs.collapse hide.bs.collapse', '.card-expansion-item > .collapse', function (e) {
        var $item = $(this).parent();
        var isShown = e.type === 'show';
        $item.toggleClass('expanded', isShown);
      });
    }
    /**
     * Toggle class scrollable when the modal body scroll reach the top/bottom
     */

  }, {
    key: "modalScrollable",
    value: function modalScrollable() {
      $('.modal').on('shown.bs.modal', function () {
        $(this).addClass('has-shown').find('.modal-body').trigger('scroll');
      });
      $('.modal-dialog-scrollable .modal-body, .modal-drawer .modal-body').on('scroll', function () {
        var $elem = $(this);
        var elem = $elem[0];
        var isTop = $elem.scrollTop() === 0;
        var isBottom = elem.scrollHeight - $elem.scrollTop() === $elem.outerHeight();
        $elem.prev().toggleClass('modal-body-scrolled', isTop);
        $elem.next().toggleClass('modal-body-scrolled', isBottom);
      });
    }
    /**
     * Make input with [autofocus] attribute in modal and dropdown work as native [autofocus]
     */

  }, {
    key: "autofocusInputBehaviour",
    value: function autofocusInputBehaviour() {
      $(document).on('shown.bs.modal shown.bs.dropdown', '.modal, .dropdown', function (e) {
        var $modal = $(e.target);
        $modal.find('input[autofocus]:first, input[data-autofocus="true"]:first').focus();
      });
    } // Theme Layout
    // =============================================================

    /**
     * Handle sidebar
     */

  }, {
    key: "sidebar",
    value: function sidebar() {
      var self = this; // handle sidebar

      this.sidebarBackdrop();
      $(document).on('click', '[data-toggle="sidebar"], .sidebar-backdrop', function (e) {
        e.preventDefault();
        var state = $(this).data('sidebar');

        switch (state) {
          case 'show':
            self.showSidebar(this);
            break;

          case 'hide':
            self.hideSidebar(this);
            break;

          default:
            self.toggleSidebar(this);
        }
      });
    }
    /**
     * Showing sidebar
     */

  }, {
    key: "showSidebar",
    value: function showSidebar(relatedTarget) {
      $('.has-sidebar').addClass('has-sidebar-open'); // trigger event

      $('.page-sidebar').trigger({
        type: 'toggle.sidebar',
        isOpen: true,
        relatedTarget: relatedTarget
      });
    }
    /**
     * Hiding sidebar
     */

  }, {
    key: "hideSidebar",
    value: function hideSidebar(relatedTarget) {
      $('.has-sidebar').removeClass('has-sidebar-open'); // trigger event

      $('.page-sidebar').trigger({
        type: 'toggle.sidebar',
        isOpen: false,
        relatedTarget: relatedTarget
      });
    }
    /**
     * Toggle sidebar
     */

  }, {
    key: "toggleSidebar",
    value: function toggleSidebar(relatedTarget) {
      var $target = $('.has-sidebar');
      var isOpen = $target.hasClass('has-sidebar-open');

      if (this.isExists('.has-sidebar') && isOpen) {
        this.hideSidebar(relatedTarget);
      } else if (this.isExists('.has-sidebar') && !isOpen) {
        this.showSidebar(relatedTarget);
      }
    }
    /**
     * Add sidebar backdrop to the .page
     */

  }, {
    key: "sidebarBackdrop",
    value: function sidebarBackdrop() {
      // append backdrop only when .page has .sidebar component
      if (this.isExists('.has-sidebar')) {
        $('.page').prepend('<div class="sidebar-backdrop" />');
      }
    }
    /**
     * Toggle .page-expanded class on .page
     * best fit to used in board layout
     */
    // pageExpander() {
    //     $(document).on('click', '[data-toggle="page-expander"]', e => {
    //         e.preventDefault()
    //         $('.page').toggleClass('page-expanded')
    //     })
    // }

    /**
     * Handle search toggler
     */

  }, {
    key: "handleSearchToggler",
    value: function handleSearchToggler() {
      if (this.isExists('[data-toggle="search"]')) {
        var self = this;
        var $searchToggler = $('[data-toggle="search"]');
        var $appRoot = $('.app');

        if (!self.isExists('.search-backdrop')) {
          $appRoot.append('<div class="search-backdrop"/>');
        }

        var $searchBackdrop = $('.search-backdrop');
        $searchToggler.on('click', function () {
          // TODO HIDE Page sidebar
          // TODO HIDE Aside
          $appRoot.addClass('has-search-toggler-active');
        });
        $searchBackdrop.on('click', function () {
          $appRoot.removeClass('has-search-toggler-active');
        });
        $(window).on('resize', function () {
          $appRoot.removeClass('has-search-toggler-active');
        });
      }
    } // Theme Components
    // =============================================================

    /**
     * Handle hamburger .active state
     */

  }, {
    key: "hamburger",
    value: function hamburger() {
      $(document).on('click', '.hamburger-toggle', function () {
        $(this).toggleClass('active');
      });
    }
    /**
     * Handle publisher focus state
     */

  }, {
    key: "publisher",
    value: function publisher() {
      $(document).on('focusin', '.publisher .form-control', function () {
        var $publisher = $(this).parents('.publisher'); // normalize all empty publisher

        $('.publisher').each(function () {
          var hasEmpty = !$(this).find('.form-control').val();

          if (hasEmpty) {
            $(this).removeClass('active');
            $(this).not('.keep-focus').removeClass('focus');
          }
        }); // add state classes

        $publisher.addClass('focus active');
      }).on('click', 'html', function () {
        var $publisher = $('.publisher.active');
        var isEmpty = !$publisher.find('.form-control').val(); // always remove active state

        $publisher.removeClass('active'); // remove focus if input is empty

        if (isEmpty) {
          $publisher.not('.keep-focus').removeClass('focus');
        }
      }).on('click', '.publisher.active', function (e) {
        e.stopPropagation();
      });
    }
    /**
     * Filter list(s) through input
     */

  }, {
    key: "filterList",
    value: function filterList() {
      var self = this;
      $(document).on('keyup', '[data-filter]', function () {
        var target = $(this).data('filter');
        var value = $(this).val().toLowerCase();
        $(target).filter(function () {
          var text = $(this).text().toLowerCase();
          $(this).toggle(text.indexOf(value) > -1);
        });
      });
    }
    /**
     * Make list items selectable like input[radio]
     */

  }, {
    key: "radioList",
    value: function radioList() {
      $(document).on('click', '[data-toggle="radiolist"] > *', function () {
        var $list = $(this).parent();
        var $listItems = $list.children(); // remove all selected item

        $listItems.removeClass('active'); // selected item

        $(this).addClass('active');
        $list.trigger({
          type: 'change',
          relatedTarget: this
        });
      });
    }
    /**
     * Make list items selectable like input[checkbox]
     */

  }, {
    key: "checkboxList",
    value: function checkboxList() {
      $(document).on('click', '[data-toggle="checkboxlist"] > *', function () {
        var $list = $(this).parent();
        var isActive = $(this).hasClass('active'); // selected item

        $(this).toggleClass('active', !isActive);
        $list.trigger({
          type: 'change',
          relatedTarget: $list.children('.active')
        });
      });
    }
    /**
     * Animate scroll on internal link
     */

  }, {
    key: "smoothScroll",
    value: function smoothScroll() {
      $(document).on('click', 'a.smooth-scroll[href^="#"]', function (e) {
        var hash = $(this).attr('href');
        var target = $(hash);

        if (!target.length) {
          return;
        }

        e.preventDefault();
        var headerHeight = $('.app-header').height() + 20;
        var offset = target.offset().top - headerHeight;
        $('html, body').animate({
          scrollTop: offset < 0 ? 0 : offset
        }, 700);
      });
    } // Theme Plugins
    // =============================================================

    /**
     * Handle perfect scrollbar
     */

  }, {
    key: "perfectScrollbar",
    value: function perfectScrollbar() {
      if (window.PerfectScrollbar && this.isExists('.perfect-scrollbar')) {
        // initialization for any components but .aside-menu
        $('.perfect-scrollbar:not(".aside-menu")').each(function () {
          new PerfectScrollbar(this, {
            suppressScrollX: true
          });
        });
      }
    }
    /**
     * Handle Tribute initialization
     */
    // tribute() {
    //     if (window.Tribute) {
    //         $('[data-toggle="tribute"]').each(function () {
    //             const selector = this
    //             const options = $(selector).data()
    //
    //             options.menuContainer = document.querySelector(options.menuContainer) || false
    //
    //             // define custom template
    //             if (options.itemTemplate == true) {
    //                 options.menuItemTemplate = item => {
    //                     return `<span class="user-avatar user-avatar-sm mr-2"><img src="${item.original.avatar}"></span> ${item.string}`
    //                 }
    //             }
    //
    //             // define select template
    //             if (options.selectTemplate == true) {
    //                 options.selectTemplate = item => {
    //                     // function called on select that returns the content to insert
    //                     return `<a href="#" class="mention">@${item.original.value}</a>`
    //                 }
    //             }
    //
    //             // set values from data-remote if exist
    //             if (options.remote) {
    //                 $.ajax({
    //                     async: false,
    //                     dataType: 'json',
    //                     url: options.remote,
    //                     success: data => {
    //                         options.values = data
    //                     }
    //                 })
    //             }
    //
    //             let tribute = new Tribute(options)
    //
    //             tribute.attach(this)
    //         })
    //     }
    // }

    /**
     * Handle colorpicker initialization
     */

  }, {
    key: "colorpicker",
    value: function colorpicker() {
      if ($.fn.colorpicker) {
        $('[data-toggle="colorpicker"]').each(function () {
          var selector = this;
          var options = $(selector).data();
          $(selector).colorpicker(options);
        });
      }
    }
    /**
     * Handle TouchSpin initialization
     */

  }, {
    key: "touchspin",
    value: function touchspin() {
      if ($.fn.TouchSpin) {
        $('[data-toggle="touchspin"]').each(function () {
          var selector = this;
          var settings = $(selector).data();
          var options = {
            buttondown_class: 'btn btn-secondary',
            buttonup_class: 'btn btn-secondary',
            verticalupclass: '+',
            verticaldownclass: '-'
          }; // Merge options

          $.extend(true, options, settings);
          $(selector).TouchSpin(options);
        });
      }
    } // Typeadhead for autocomplete
    // =============================================================

  }, {
    key: "handleAutocompleteSearch",
    value: function handleAutocompleteSearch() {
      var $autocompleteInput = $('#autocomplete-search');
      if (!$autocompleteInput.length) return false;
      var $footer = $('.js-autocomplete-footer');
      $autocompleteInput.on('keyup', function () {
        if ($(this).val().length < 3) {
          $footer.hide();
        } else {
          $footer.show();
        }
      });
      var ps;

      if (window.PerfectScrollbar && this.isExists('.tt-perfect-scrollbar')) {
        ps = new PerfectScrollbar('.tt-perfect-scrollbar', {
          suppressScrollX: true
        });
      }

      var remoteUrl = $autocompleteInput.data('remote');
      if (!remoteUrl) return;
      var datasets = [];
      var datasetTypes = $autocompleteInput.data('dataset') || ["users"];
      var meta = {
        fuzziness: false,
        hits: 0
      };
      $.each(datasetTypes, function (index, value) {
        datasets.push({
          //name: 'search-results-'+value,
          display: 'title',
          source: new corejs_typeahead__WEBPACK_IMPORTED_MODULE_1___default.a({
            datumTokenizer: corejs_typeahead__WEBPACK_IMPORTED_MODULE_1___default.a.tokenizers.obj.whitespace('title', 'body'),
            queryTokenizer: corejs_typeahead__WEBPACK_IMPORTED_MODULE_1___default.a.tokenizers.whitespace,
            //prefetch: remoteUrl,
            remote: {
              url: remoteUrl + '?q=%QUERY',
              wildcard: '%QUERY',
              transform: function transform(response) {
                meta = typeof response.meta !== 'undefined' ? response.meta : {
                  fuzziness: false,
                  hits: 0
                };
                return typeof response.data !== 'undefined' ? response.data[value] : [];
              }
            }
          }),
          templates: {
            suggestion: function suggestion(data) {
              return $.templates("#autocompleteSuggestions").render(data);
            },
            header: function header() {
              return $.templates("#autocompleteHeader").render({
                resource: value
              });
            },
            //empty: index === 0 ? $.templates("#autocompleteEmpty").render({resource: value}) : null,
            // pending: index === 0 ? $.templates("#autocompleteSearching").render() : null
            empty: null,
            pending: null
          },
          limit: 100
        });
      }); //console.log(datasets)

      $autocompleteInput.typeahead({
        hint: $('.tt-hint'),
        menu: $('.js-typeahead-menu'),
        highlight: true,
        minLength: 3,
        classNames: {
          // open: 'is-open',
          // empty: 'is-empty',
          // cursor: 'is-active',
          suggestion: 'js-tt-suggestion',
          selectable: 'js-tt-selectable'
        }
      }, datasets).on('typeahead:asyncrequest', function () {
        $('.tt-spinner').addClass('show');
        meta.searching = true;
        $footer.show().html($.templates("#autocompleteDropdownFooter").render({
          meta: meta
        }));
      }).on('typeahead:asynccancel typeahead:asyncreceive', function () {
        $('.tt-spinner').removeClass('show');

        if (ps) {
          ps.update();
        }
      }).on('typeahead:render', function (ev, suggestion) {
        meta.searching = false;
        $footer.show().html($.templates("#autocompleteDropdownFooter").render({
          meta: meta
        }));
      });
    } // Events
    // =============================================================

    /**
     * Handle prevent default & propagation
     */

  }, {
    key: "eventProps",
    value: function eventProps() {
      $('body').on('click', '.stop-propagation', function (e) {
        e.stopPropagation();
      }).on('click', '.prevent-default', function (e) {
        e.preventDefault();
      });
    }
    /**
     * Handle window resize
     * // TODO MOVE IN FRONTEND
     */

  }, {
    key: "watchMQ",
    value: function watchMQ() {
      $(window).on('resize', function () {
        // disable transition temporarily
        $('.app-aside, .page-sidebar').addClass('notransition');
        setTimeout(function () {
          $('.app-aside, .page-sidebar').removeClass('notransition');
        }, 1);
      });
    }
    /**
     * Handle IE 11 lack render
     */

  }, {
    key: "watchIE",
    value: function watchIE() {
      if (this.isIE()) {
        $('.metric').each(function () {
          var height = $(this).height();
          $(this).height("".concat(height, "px"));
        });
      }
    } // Utilities
    // =============================================================

    /**
     * Opera 8.0+
     * @return {Boolean}
     */

  }, {
    key: "isOpera",
    value: function isOpera() {
      return !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    }
    /**
     * Firefox 1.0+
     * @return {Boolean}
     */

  }, {
    key: "isFirefox",
    value: function isFirefox() {
      return typeof InstallTrigger !== 'undefined';
    }
    /**
     * Safari 3.0+ "[object HTMLElementConstructor]"
     * @return {Boolean}
     */

  }, {
    key: "isSafari",
    value: function isSafari() {
      // Safari 3.0+ "[object HTMLElementConstructor]"
      return /constructor/i.test(window.HTMLElement) || function (p) {
        return p.toString() === '[object SafariRemoteNotification]';
      }(!window['safari'] || typeof safari !== 'undefined' && safari.pushNotification);
    }
    /**
     * Internet Explorer 6-11
     * @return {Boolean}
     */

  }, {
    key: "isIE",
    value: function isIE() {
      return (
        /*@cc_on!@*/
         false || !!document.documentMode
      );
    }
    /**
     * Edge 20+
     * @return {Boolean}
     */

  }, {
    key: "isEdge",
    value: function isEdge() {
      return !this.isIE() && !!window.StyleMedia;
    }
    /**
     * Chrome 1+
     * @return {Boolean}
     */

  }, {
    key: "isChrome",
    value: function isChrome() {
      return !!window.chrome && !!window.chrome.webstore;
    }
    /**
     * Blink engine detection
     * @return {Boolean}
     */

  }, {
    key: "isBlink",
    value: function isBlink() {
      return (this.isChrome() || this.isOpera()) && !!window.CSS;
    }
    /**
     * Add class to body by browser name
     */

  }, {
    key: "browserFlagging",
    value: function browserFlagging() {
      if (this.isOpera()) {
        $('body').addClass('opera');
      }

      if (this.isFirefox()) {
        $('body').addClass('firefox');
      }

      if (this.isSafari()) {
        $('body').addClass('safari');
      }

      if (this.isIE()) {
        $('body').addClass('ie');
      }

      if (this.isEdge()) {
        $('body').addClass('edge');
      }

      if (this.isChrome()) {
        $('body').addClass('chrome');
      }

      if (this.isBlink()) {
        $('body').addClass('blink');
      }
    }
    /**
     * We used diferent font-family between mac and other os
     * so we need to flaggin it to avoid unconsistent line-height
     */

  }, {
    key: "osFlagging",
    value: function osFlagging() {
      // add flagging class on macos due to fonts line-height issue
      if (navigator.appVersion.toLowerCase().indexOf('mac') != -1) {
        $('body').addClass('macos');
      }
    }
    /**
     * Detect if current screen size wider than our toggleScreen
     * refer to our media-breakpoint-up("md")
     */

  }, {
    key: "isToggleScreenUp",
    value: function isToggleScreenUp() {
      return window.matchMedia('(min-width: 768px)').matches;
    }
    /**
     * Detect if current screen size lower than our toggleScreen
     * refer to our media-breakpoint-down("md")
     */

  }, {
    key: "isToggleScreenDown",
    value: function isToggleScreenDown() {
      return window.matchMedia('(max-width: 767.98px)').matches;
    }
    /**
     * Check the existence of an element
     */

  }, {
    key: "isExists",
    value: function isExists(selector) {
      return $(selector).length > 0;
    } // Helpers
    // =============================================================

  }, {
    key: "log",
    value: function log(message, level) {
      var console = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (this.config.debug) {
        if (console && window.console) {
          if (level && window.console[level]) {
            window.console[level](message);
          } else {
            window.console.log(message);
          }
        } else {
          alert(message);
        }
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      $(window).off();
      location.reload();
    }
    /**
     * Toast message using sweetalert
     *
     * @param message
     * @param callback
     * @param timer
     */

  }, {
    key: "success",
    value: function success(message, callback, timer) {
      this.toast.fire(message, 'success', callback, timer);
    }
  }, {
    key: "error",
    value: function error(message, callback, timer) {
      this.toast.fire(message, 'error', callback, timer);
    }
  }, {
    key: "warning",
    value: function warning(message, callback, timer) {
      this.toast.fire(message, 'warning', callback, timer);
    }
  }, {
    key: "info",
    value: function info(message, callback, timer) {
      this.toast.fire(message, 'info', callback, timer);
    }
  }, {
    key: "question",
    value: function question(message, callback, timer) {
      this.toast.fire(message, 'question', callback, timer);
    }
  }]);

  return Laraloop;
}();

/* harmony default export */ __webpack_exports__["default"] = (Laraloop);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/assets/sass/app.scss":
/*!****************************************!*\
  !*** ./resources/assets/sass/app.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/vendors/jsvalidation/jsvalidation.min.js":
/*!*******************************************************************!*\
  !*** ./resources/assets/vendors/jsvalidation/jsvalidation.min.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var DateFormatter, laravelValidation;
!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (h) {
  h.extend(h.fn, {
    validate: function validate(e) {
      if (this.length) {
        var i = h.data(this[0], "validator");
        return i ? i : (this.attr("novalidate", "novalidate"), i = new h.validator(e, this[0]), h.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (e) {
          i.submitButton = e.currentTarget, h(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== h(this).attr("formnovalidate") && (i.cancelSubmit = !0);
        }), this.on("submit.validate", function (a) {
          function e() {
            var e, t;
            return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (e = h("<input type='hidden'/>").attr("name", i.submitButton.name).val(h(i.submitButton).val()).appendTo(i.currentForm)), !(i.settings.submitHandler && !i.settings.debug) || (t = i.settings.submitHandler.call(i, i.currentForm, a), e && e.remove(), void 0 !== t && t);
          }

          return i.settings.debug && a.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(), !1);
        })), i);
      }

      e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
    },
    valid: function valid() {
      var e, t, a;
      return h(this[0]).is("form") ? e = this.validate().form() : (a = [], e = !0, t = h(this[0].form).validate(), this.each(function () {
        (e = t.element(this) && e) || (a = a.concat(t.errorList));
      }), t.errorList = a), e;
    },
    rules: function rules(e, t) {
      var a,
          i,
          r,
          n,
          s,
          o,
          l = this[0],
          u = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");

      if (null != l && (!l.form && u && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
        if (e) switch (i = (a = h.data(l.form, "validator").settings).rules, r = h.validator.staticRules(l), e) {
          case "add":
            h.extend(r, h.validator.normalizeRule(t)), delete r.messages, i[l.name] = r, t.messages && (a.messages[l.name] = h.extend(a.messages[l.name], t.messages));
            break;

          case "remove":
            return t ? (o = {}, h.each(t.split(/\s/), function (e, t) {
              o[t] = r[t], delete r[t];
            }), o) : (delete i[l.name], r);
        }
        return (n = h.validator.normalizeRules(h.extend({}, h.validator.classRules(l), h.validator.attributeRules(l), h.validator.dataRules(l), h.validator.staticRules(l)), l)).required && (s = n.required, delete n.required, n = h.extend({
          required: s
        }, n)), n.remote && (s = n.remote, delete n.remote, n = h.extend(n, {
          remote: s
        })), n;
      }
    }
  });

  function a(e) {
    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }

  var i;
  h.extend(h.expr.pseudos || h.expr[":"], {
    blank: function blank(e) {
      return !a("" + h(e).val());
    },
    filled: function filled(e) {
      var t = h(e).val();
      return null !== t && !!a("" + t);
    },
    unchecked: function unchecked(e) {
      return !h(e).prop("checked");
    }
  }), h.validator = function (e, t) {
    this.settings = h.extend(!0, {}, h.validator.defaults, e), this.currentForm = t, this.init();
  }, h.validator.format = function (a, e) {
    return 1 === arguments.length ? function () {
      var e = h.makeArray(arguments);
      return e.unshift(a), h.validator.format.apply(this, e);
    } : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = h.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), h.each(e, function (e, t) {
      a = a.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
        return t;
      });
    })), a);
  }, h.extend(h.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: h([]),
      errorLabelContainer: h([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function onfocusin(e) {
        this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)));
      },
      onfocusout: function onfocusout(e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      },
      onkeyup: function onkeyup(e, t) {
        9 === t.which && "" === this.elementValue(e) || -1 !== h.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e);
      },
      onclick: function onclick(e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      },
      highlight: function highlight(e, t, a) {
        "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(a) : h(e).addClass(t).removeClass(a);
      },
      unhighlight: function unhighlight(e, t, a) {
        "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(a) : h(e).removeClass(t).addClass(a);
      }
    },
    setDefaults: function setDefaults(e) {
      h.extend(h.validator.defaults, e);
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date (ISO).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: h.validator.format("Please enter no more than {0} characters."),
      minlength: h.validator.format("Please enter at least {0} characters."),
      rangelength: h.validator.format("Please enter a value between {0} and {1} characters long."),
      range: h.validator.format("Please enter a value between {0} and {1}."),
      max: h.validator.format("Please enter a value less than or equal to {0}."),
      min: h.validator.format("Please enter a value greater than or equal to {0}."),
      step: h.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function init() {
        this.labelContainer = h(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || h(this.currentForm), this.containers = h(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var a,
            n = this.currentForm,
            i = this.groups = {};

        function e(e) {
          var t,
              a,
              i,
              r = void 0 !== h(this).attr("contenteditable") && "false" !== h(this).attr("contenteditable");
          !this.form && r && (this.form = h(this).closest("form")[0], this.name = h(this).attr("name")), n === this.form && (t = h.data(this.form, "validator"), a = "on" + e.type.replace(/^validate/, ""), (i = t.settings)[a] && !h(this).is(i.ignore) && i[a].call(t, this, e));
        }

        h.each(this.settings.groups, function (a, e) {
          "string" == typeof e && (e = e.split(/\s/)), h.each(e, function (e, t) {
            i[t] = a;
          });
        }), a = this.settings.rules, h.each(a, function (e, t) {
          a[e] = h.validator.normalizeRule(t);
        }), h(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && h(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
      },
      form: function form() {
        return this.checkForm(), h.extend(this.submitted, this.errorMap), this.invalid = h.extend({}, this.errorMap), this.valid() || h(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      },
      checkForm: function checkForm() {
        this.prepareForm();

        for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) {
          this.check(t[e]);
        }

        return this.valid();
      },
      element: function element(e) {
        var t,
            a,
            i = this.clean(e),
            r = this.validationTargetFor(i),
            n = this,
            s = !0;
        return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r), this.currentElements = h(r), (a = this.groups[r.name]) && h.each(this.groups, function (e, t) {
          t === a && e !== r.name && (i = n.validationTargetFor(n.clean(n.findByName(e)))) && i.name in n.invalid && (n.currentElements.push(i), s = n.check(i) && s);
        }), t = !1 !== this.check(r), s = s && t, this.invalid[r.name] = !t, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), h(e).attr("aria-invalid", !t)), s;
      },
      showErrors: function showErrors(t) {
        var a;
        t && (a = this, h.extend(this.errorMap, t), this.errorList = h.map(this.errorMap, function (e, t) {
          return {
            message: e,
            element: a.findByName(t)[0]
          };
        }), this.successList = h.grep(this.successList, function (e) {
          return !(e.name in t);
        })), this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      },
      resetForm: function resetForm() {
        h.fn.resetForm && h(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(e);
      },
      resetElements: function resetElements(e) {
        var t;
        if (this.settings.unhighlight) for (t = 0; e[t]; t++) {
          this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
        } else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass);
      },
      numberOfInvalids: function numberOfInvalids() {
        return this.objectLength(this.invalid);
      },
      objectLength: function objectLength(e) {
        var t,
            a = 0;

        for (t in e) {
          void 0 !== e[t] && null !== e[t] && !1 !== e[t] && a++;
        }

        return a;
      },
      hideErrors: function hideErrors() {
        this.hideThese(this.toHide);
      },
      hideThese: function hideThese(e) {
        e.not(this.containers).text(""), this.addWrapper(e).hide();
      },
      valid: function valid() {
        return 0 === this.size();
      },
      size: function size() {
        return this.errorList.length;
      },
      focusInvalid: function focusInvalid() {
        if (this.settings.focusInvalid) try {
          h(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").trigger("focus").trigger("focusin");
        } catch (e) {}
      },
      findLastActive: function findLastActive() {
        var t = this.lastActive;
        return t && 1 === h.grep(this.errorList, function (e) {
          return e.element.name === t.name;
        }).length && t;
      },
      elements: function elements() {
        var a = this,
            i = {};
        return h(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var e = this.name || h(this).attr("name"),
              t = void 0 !== h(this).attr("contenteditable") && "false" !== h(this).attr("contenteditable");
          return !e && a.settings.debug && window.console && console.error("%o has no name assigned", this), t && (this.form = h(this).closest("form")[0], this.name = e), this.form === a.currentForm && !(e in i || !a.objectLength(h(this).rules())) && (i[e] = !0);
        });
      },
      clean: function clean(e) {
        return h(e)[0];
      },
      errors: function errors() {
        var e = this.settings.errorClass.split(" ").join(".");
        return h(this.settings.errorElement + "." + e, this.errorContext);
      },
      resetInternals: function resetInternals() {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = h([]), this.toHide = h([]);
      },
      reset: function reset() {
        this.resetInternals(), this.currentElements = h([]);
      },
      prepareForm: function prepareForm() {
        this.reset(), this.toHide = this.errors().add(this.containers);
      },
      prepareElement: function prepareElement(e) {
        this.reset(), this.toHide = this.errorsFor(e);
      },
      elementValue: function elementValue(e) {
        var t,
            a,
            i = h(e),
            r = e.type,
            n = void 0 !== i.attr("contenteditable") && "false" !== i.attr("contenteditable");
        return "radio" === r || "checkbox" === r ? this.findByName(e.name).filter(":checked").val() : "number" === r && void 0 !== e.validity ? e.validity.badInput ? "NaN" : i.val() : (t = n ? i.text() : i.val(), "file" === r ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (a = t.lastIndexOf("/")) || 0 <= (a = t.lastIndexOf("\\")) ? t.substr(a + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t);
      },
      check: function check(t) {
        t = this.validationTargetFor(this.clean(t));
        var e,
            a,
            i,
            r,
            n = h(t).rules(),
            s = h.map(n, function (e, t) {
          return t;
        }).length,
            o = !1,
            l = this.elementValue(t);

        for (a in "function" == typeof n.normalizer ? r = n.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r && (l = r.call(t, l), delete n.normalizer), n) {
          i = {
            method: a,
            parameters: n[a]
          };

          try {
            if ("dependency-mismatch" === (e = h.validator.methods[a].call(this, l, t, i.parameters)) && 1 === s) {
              o = !0;
              continue;
            }

            if (o = !1, "pending" === e) return void (this.toHide = this.toHide.not(this.errorsFor(t)));
            if (!e) return this.formatAndAdd(t, i), !1;
          } catch (e) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."), e;
          }
        }

        if (!o) return this.objectLength(n) && this.successList.push(t), !0;
      },
      customDataMessage: function customDataMessage(e, t) {
        return h(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || h(e).data("msg");
      },
      customMessage: function customMessage(e, t) {
        var a = this.settings.messages[e];
        return a && (a.constructor === String ? a : a[t]);
      },
      findDefined: function findDefined() {
        for (var e = 0; e < arguments.length; e++) {
          if (void 0 !== arguments[e]) return arguments[e];
        }
      },
      defaultMessage: function defaultMessage(e, t) {
        "string" == typeof t && (t = {
          method: t
        });
        var a = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, h.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
            i = /\$?\{(\d+)\}/g;
        return "function" == typeof a ? a = a.call(this, t.parameters, e) : i.test(a) && (a = h.validator.format(a.replace(i, "{$1}"), t.parameters)), a;
      },
      formatAndAdd: function formatAndAdd(e, t) {
        var a = this.defaultMessage(e, t);
        this.errorList.push({
          message: a,
          element: e,
          method: t.method
        }), this.errorMap[e.name] = a, this.submitted[e.name] = a;
      },
      addWrapper: function addWrapper(e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
      },
      defaultShowErrors: function defaultShowErrors() {
        for (var e, t, a = 0; this.errorList[a]; a++) {
          t = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
        }

        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) {
          this.showLabel(this.successList[a]);
        }
        if (this.settings.unhighlight) for (a = 0, e = this.validElements(); e[a]; a++) {
          this.settings.unhighlight.call(this, e[a], this.settings.errorClass, this.settings.validClass);
        }
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      },
      validElements: function validElements() {
        return this.currentElements.not(this.invalidElements());
      },
      invalidElements: function invalidElements() {
        return h(this.errorList).map(function () {
          return this.element;
        });
      },
      showLabel: function showLabel(e, t) {
        var a,
            i,
            r,
            n,
            s = this.errorsFor(e),
            o = this.idOrName(e),
            l = h(e).attr("aria-describedby");
        s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass), s.html(t)) : (a = s = h("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (a = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(a) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, a, h(e)) : a.insertAfter(e), s.is("label") ? s.attr("for", o) : 0 === s.parents("label[for='" + this.escapeCssMeta(o) + "']").length && (r = s.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(r) + "\\b")) || (l += " " + r) : l = r, h(e).attr("aria-describedby", l), (i = this.groups[e.name]) && (n = this, h.each(n.groups, function (e, t) {
          t === i && h("[name='" + n.escapeCssMeta(e) + "']", n.currentForm).attr("aria-describedby", s.attr("id"));
        })))), !t && this.settings.success && (s.text(""), "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)), this.toShow = this.toShow.add(s);
      },
      errorsFor: function errorsFor(e) {
        var t = this.escapeCssMeta(this.idOrName(e)),
            a = h(e).attr("aria-describedby"),
            i = "label[for='" + t + "'], label[for='" + t + "'] *";
        return a && (i = i + ", #" + this.escapeCssMeta(a).replace(/\s+/g, ", #")), this.errors().filter(i);
      },
      escapeCssMeta: function escapeCssMeta(e) {
        return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1");
      },
      idOrName: function idOrName(e) {
        return this.groups[e.name] || !this.checkable(e) && e.id || e.name;
      },
      validationTargetFor: function validationTargetFor(e) {
        return this.checkable(e) && (e = this.findByName(e.name)), h(e).not(this.settings.ignore)[0];
      },
      checkable: function checkable(e) {
        return /radio|checkbox/i.test(e.type);
      },
      findByName: function findByName(e) {
        return h(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']");
      },
      getLength: function getLength(e, t) {
        switch (t.nodeName.toLowerCase()) {
          case "select":
            return h("option:selected", t).length;

          case "input":
            if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length;
        }

        return e.length;
      },
      depend: function depend(e, t) {
        return !this.dependTypes[_typeof(e)] || this.dependTypes[_typeof(e)](e, t);
      },
      dependTypes: {
        "boolean": function boolean(e) {
          return e;
        },
        string: function string(e, t) {
          return !!h(e, t.form).length;
        },
        "function": function _function(e, t) {
          return e(t);
        }
      },
      optional: function optional(e) {
        var t = this.elementValue(e);
        return !h.validator.methods.required.call(this, t, e) && "dependency-mismatch";
      },
      startRequest: function startRequest(e) {
        this.pending[e.name] || (this.pendingRequest++, h(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0);
      },
      stopRequest: function stopRequest(e, t) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], h(e).removeClass(this.settings.pendingClass), t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (h(this.currentForm).submit(), this.submitButton && h("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (h(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      },
      previousValue: function previousValue(e, t) {
        return t = "string" == typeof t && t || "remote", h.data(e, "previousValue") || h.data(e, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(e, {
            method: t
          })
        });
      },
      destroy: function destroy() {
        this.resetForm(), h(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur");
      }
    },
    classRuleSettings: {
      required: {
        required: !0
      },
      email: {
        email: !0
      },
      url: {
        url: !0
      },
      date: {
        date: !0
      },
      dateISO: {
        dateISO: !0
      },
      number: {
        number: !0
      },
      digits: {
        digits: !0
      },
      creditcard: {
        creditcard: !0
      }
    },
    addClassRules: function addClassRules(e, t) {
      e.constructor === String ? this.classRuleSettings[e] = t : h.extend(this.classRuleSettings, e);
    },
    classRules: function classRules(e) {
      var t = {},
          a = h(e).attr("class");
      return a && h.each(a.split(" "), function () {
        this in h.validator.classRuleSettings && h.extend(t, h.validator.classRuleSettings[this]);
      }), t;
    },
    normalizeAttributeRule: function normalizeAttributeRule(e, t, a, i) {
      /min|max|step/.test(a) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[a] = i : t === a && "range" !== t && (e[a] = !0);
    },
    attributeRules: function attributeRules(e) {
      var t,
          a,
          i = {},
          r = h(e),
          n = e.getAttribute("type");

      for (t in h.validator.methods) {
        a = "required" === t ? ("" === (a = e.getAttribute(t)) && (a = !0), !!a) : r.attr(t), this.normalizeAttributeRule(i, n, t, a);
      }

      return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i;
    },
    dataRules: function dataRules(e) {
      var t,
          a,
          i = {},
          r = h(e),
          n = e.getAttribute("type");

      for (t in h.validator.methods) {
        "" === (a = r.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase())) && (a = !0), this.normalizeAttributeRule(i, n, t, a);
      }

      return i;
    },
    staticRules: function staticRules(e) {
      var t = {},
          a = h.data(e.form, "validator");
      return a.settings.rules && (t = h.validator.normalizeRule(a.settings.rules[e.name]) || {}), t;
    },
    normalizeRules: function normalizeRules(i, r) {
      return h.each(i, function (e, t) {
        if (!1 !== t) {
          if (t.param || t.depends) {
            var a = !0;

            switch (_typeof(t.depends)) {
              case "string":
                a = !!h(t.depends, r.form).length;
                break;

              case "function":
                a = t.depends.call(r, r);
            }

            a ? i[e] = void 0 === t.param || t.param : (h.data(r.form, "validator").resetElements(h(r)), delete i[e]);
          }
        } else delete i[e];
      }), h.each(i, function (e, t) {
        i[e] = h.isFunction(t) && "normalizer" !== e ? t(r) : t;
      }), h.each(["minlength", "maxlength"], function () {
        i[this] && (i[this] = Number(i[this]));
      }), h.each(["rangelength", "range"], function () {
        var e;
        i[this] && (h.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]));
      }), h.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i;
    },
    normalizeRule: function normalizeRule(e) {
      var t;
      return "string" == typeof e && (t = {}, h.each(e.split(/\s/), function () {
        t[this] = !0;
      }), e = t), e;
    },
    addMethod: function addMethod(e, t, a) {
      h.validator.methods[e] = t, h.validator.messages[e] = void 0 !== a ? a : h.validator.messages[e], t.length < 3 && h.validator.addClassRules(e, h.validator.normalizeRule(e));
    },
    methods: {
      required: function required(e, t, a) {
        if (!this.depend(a, t)) return "dependency-mismatch";
        if ("select" !== t.nodeName.toLowerCase()) return this.checkable(t) ? 0 < this.getLength(e, t) : null != e && 0 < e.length;
        var i = h(t).val();
        return i && 0 < i.length;
      },
      email: function email(e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      },
      url: function url(e, t) {
        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e);
      },
      date: (i = !1, function (e, t) {
        return i || (i = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString());
      }),
      dateISO: function dateISO(e, t) {
        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e);
      },
      number: function number(e, t) {
        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e);
      },
      digits: function digits(e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      },
      minlength: function minlength(e, t, a) {
        var i = h.isArray(e) ? e.length : this.getLength(e, t);
        return this.optional(t) || a <= i;
      },
      maxlength: function maxlength(e, t, a) {
        var i = h.isArray(e) ? e.length : this.getLength(e, t);
        return this.optional(t) || i <= a;
      },
      rangelength: function rangelength(e, t, a) {
        var i = h.isArray(e) ? e.length : this.getLength(e, t);
        return this.optional(t) || i >= a[0] && i <= a[1];
      },
      min: function min(e, t, a) {
        return this.optional(t) || a <= e;
      },
      max: function max(e, t, a) {
        return this.optional(t) || e <= a;
      },
      range: function range(e, t, a) {
        return this.optional(t) || e >= a[0] && e <= a[1];
      },
      step: function step(e, t, a) {
        function i(e) {
          var t = ("" + e).match(/(?:\.(\d+))?$/);
          return t && t[1] ? t[1].length : 0;
        }

        function r(e) {
          return Math.round(e * Math.pow(10, n));
        }

        var n,
            s = h(t).attr("type"),
            o = "Step attribute on input type " + s + " is not supported.",
            l = new RegExp("\\b" + s + "\\b"),
            u = !0;
        if (s && !l.test(["text", "number", "range"].join())) throw new Error(o);
        return n = i(a), (i(e) > n || r(e) % r(a) != 0) && (u = !1), this.optional(t) || u;
      },
      equalTo: function equalTo(e, t, a) {
        var i = h(a);
        return this.settings.onfocusout && i.not(".validate-equalTo-blur").length && i.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          h(t).valid();
        }), e === i.val();
      },
      remote: function remote(n, s, e, o) {
        if (this.optional(s)) return "dependency-mismatch";
        o = "string" == typeof o && o || "remote";
        var l,
            t,
            a,
            u = this.previousValue(s, o);
        return this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[s.name][o], this.settings.messages[s.name][o] = u.message, e = "string" == typeof e ? {
          url: e
        } : e, a = h.param(h.extend({
          data: n
        }, e.data)), u.old === a ? u.valid : (u.old = a, (l = this).startRequest(s), (t = {})[s.name] = n, h.ajax(h.extend(!0, {
          mode: "abort",
          port: "validate" + s.name,
          dataType: "json",
          data: t,
          context: l.currentForm,
          success: function success(e) {
            var t,
                a,
                i,
                r = !0 === e || "true" === e;
            l.settings.messages[s.name][o] = u.originalMessage, r ? (i = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(s), l.formSubmitted = i, l.successList.push(s), l.invalid[s.name] = !1, l.showErrors()) : (t = {}, a = e || l.defaultMessage(s, {
              method: o,
              parameters: n
            }), t[s.name] = u.message = a, l.invalid[s.name] = !0, l.showErrors(t)), u.valid = r, l.stopRequest(s, r);
          }
        }, e)), "pending");
      }
    }
  });
  var r,
      n = {};
  return h.ajaxPrefilter ? h.ajaxPrefilter(function (e, t, a) {
    var i = e.port;
    "abort" === e.mode && (n[i] && n[i].abort(), n[i] = a);
  }) : (r = h.ajax, h.ajax = function (e) {
    var t = ("mode" in e ? e : h.ajaxSettings).mode,
        a = ("port" in e ? e : h.ajaxSettings).port;
    return "abort" === t ? (n[a] && n[a].abort(), n[a] = r.apply(this, arguments), n[a]) : r.apply(this, arguments);
  }), h;
}), function () {
  "use strict";

  var p = function p(e, t) {
    return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase();
  },
      o = function o(e, t, a) {
    var i = a || "0",
        r = e.toString();
    return r.length < t ? o(i + r, t) : r;
  },
      r = function r(e) {
    var t, a;

    for (e = e || {}, t = 1; t < arguments.length; t++) {
      if (a = arguments[t]) for (var i in a) {
        a.hasOwnProperty(i) && ("object" == _typeof(a[i]) ? r(e[i], a[i]) : e[i] = a[i]);
      }
    }

    return e;
  },
      a = function a(e, t) {
    for (var a = 0; a < t.length; a++) {
      if (t[a].toLowerCase() === e.toLowerCase()) return a;
    }

    return -1;
  },
      i = {
    dateSettings: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      meridiem: ["AM", "PM"],
      ordinal: function ordinal(e) {
        var t = e % 10,
            a = {
          1: "st",
          2: "nd",
          3: "rd"
        };
        return 1 !== Math.floor(e % 100 / 10) && a[t] ? a[t] : "th";
      }
    },
    separators: /[ \-+\/\.T:@]/g,
    validParts: /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
    intParts: /[djwNzmnyYhHgGis]/g,
    tzParts: /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
    tzClip: /[^-+\dA-Z]/g
  };

  (DateFormatter = function DateFormatter(e) {
    var t = this,
        a = r(i, e);
    t.dateSettings = a.dateSettings, t.separators = a.separators, t.validParts = a.validParts, t.intParts = a.intParts, t.tzParts = a.tzParts, t.tzClip = a.tzClip;
  }).prototype = {
    constructor: DateFormatter,
    getMonth: function getMonth(e) {
      var t = a(e, this.dateSettings.monthsShort) + 1;
      return 0 === t && (t = a(e, this.dateSettings.months) + 1), t;
    },
    parseDate: function parseDate(e, t) {
      var a,
          i,
          r,
          n,
          s,
          o,
          l,
          u,
          h,
          d,
          c = !1,
          m = !1,
          f = this.dateSettings,
          g = {
        date: null,
        year: null,
        month: null,
        day: null,
        hour: 0,
        min: 0,
        sec: 0
      };
      if (!e) return null;
      if (e instanceof Date) return e;
      if ("U" === t) return (r = parseInt(e)) ? new Date(1e3 * r) : e;

      switch (_typeof(e)) {
        case "number":
          return new Date(e);

        case "string":
          break;

        default:
          return null;
      }

      if (!(a = t.match(this.validParts)) || 0 === a.length) throw new Error("Invalid date format definition.");

      for (i = e.replace(this.separators, "\0").split("\0"), r = 0; r < i.length; r++) {
        switch (n = i[r], s = parseInt(n), a[r]) {
          case "y":
          case "Y":
            if (!s) return null;
            h = n.length, g.year = 2 === h ? parseInt((s < 70 ? "20" : "19") + n) : s, c = !0;
            break;

          case "m":
          case "n":
          case "M":
          case "F":
            if (isNaN(s)) {
              if (!(0 < (o = this.getMonth(n)))) return null;
              g.month = o;
            } else {
              if (!(1 <= s && s <= 12)) return null;
              g.month = s;
            }

            c = !0;
            break;

          case "d":
          case "j":
            if (!(1 <= s && s <= 31)) return null;
            g.day = s, c = !0;
            break;

          case "g":
          case "h":
            if (d = i[l = -1 < a.indexOf("a") ? a.indexOf("a") : -1 < a.indexOf("A") ? a.indexOf("A") : -1], -1 < l) u = p(d, f.meridiem[0]) ? 0 : p(d, f.meridiem[1]) ? 12 : -1, 1 <= s && s <= 12 && -1 < u ? g.hour = s + u - 1 : 0 <= s && s <= 23 && (g.hour = s);else {
              if (!(0 <= s && s <= 23)) return null;
              g.hour = s;
            }
            m = !0;
            break;

          case "G":
          case "H":
            if (!(0 <= s && s <= 23)) return null;
            g.hour = s, m = !0;
            break;

          case "i":
            if (!(0 <= s && s <= 59)) return null;
            g.min = s, m = !0;
            break;

          case "s":
            if (!(0 <= s && s <= 59)) return null;
            g.sec = s, m = !0;
        }
      }

      if (!0 === c && g.year && g.month && g.day) g.date = new Date(g.year, g.month - 1, g.day, g.hour, g.min, g.sec, 0);else {
        if (!0 !== m) return null;
        g.date = new Date(0, 0, 0, g.hour, g.min, g.sec, 0);
      }
      return g.date;
    },
    guessDate: function guessDate(e, t) {
      if ("string" != typeof e) return e;
      var a,
          i,
          r,
          n,
          s,
          o,
          l = e.replace(this.separators, "\0").split("\0"),
          u = t.match(this.validParts),
          h = new Date(),
          d = 0;
      if (!/^[djmn]/g.test(u[0])) return e;

      for (r = 0; r < l.length; r++) {
        if (d = 2, s = l[r], o = parseInt(s.substr(0, 2)), isNaN(o)) return null;

        switch (r) {
          case 0:
            "m" === u[0] || "n" === u[0] ? h.setMonth(o - 1) : h.setDate(o);
            break;

          case 1:
            "m" === u[0] || "n" === u[0] ? h.setDate(o) : h.setMonth(o - 1);
            break;

          case 2:
            if (i = h.getFullYear(), d = (a = s.length) < 4 ? a : 4, !(i = parseInt(a < 4 ? i.toString().substr(0, 4 - a) + s : s.substr(0, 4)))) return null;
            h.setFullYear(i);
            break;

          case 3:
            h.setHours(o);
            break;

          case 4:
            h.setMinutes(o);
            break;

          case 5:
            h.setSeconds(o);
        }

        0 < (n = s.substr(d)).length && l.splice(r + 1, 0, n);
      }

      return h;
    },
    parseFormat: function parseFormat(e, _i) {
      function t(e, t) {
        return s[e] ? s[e]() : t;
      }

      var a = this,
          r = a.dateSettings,
          n = /\\?(.?)/gi,
          s = {
        d: function d() {
          return o(s.j(), 2);
        },
        D: function D() {
          return r.daysShort[s.w()];
        },
        j: function j() {
          return _i.getDate();
        },
        l: function l() {
          return r.days[s.w()];
        },
        N: function N() {
          return s.w() || 7;
        },
        w: function w() {
          return _i.getDay();
        },
        z: function z() {
          var e = new Date(s.Y(), s.n() - 1, s.j()),
              t = new Date(s.Y(), 0, 1);
          return Math.round((e - t) / 864e5);
        },
        W: function W() {
          var e = new Date(s.Y(), s.n() - 1, s.j() - s.N() + 3),
              t = new Date(e.getFullYear(), 0, 4);
          return o(1 + Math.round((e - t) / 864e5 / 7), 2);
        },
        F: function F() {
          return r.months[_i.getMonth()];
        },
        m: function m() {
          return o(s.n(), 2);
        },
        M: function M() {
          return r.monthsShort[_i.getMonth()];
        },
        n: function n() {
          return _i.getMonth() + 1;
        },
        t: function t() {
          return new Date(s.Y(), s.n(), 0).getDate();
        },
        L: function L() {
          var e = s.Y();
          return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0;
        },
        o: function o() {
          var e = s.n(),
              t = s.W();
          return s.Y() + (12 === e && t < 9 ? 1 : 1 === e && 9 < t ? -1 : 0);
        },
        Y: function Y() {
          return _i.getFullYear();
        },
        y: function y() {
          return s.Y().toString().slice(-2);
        },
        a: function a() {
          return s.A().toLowerCase();
        },
        A: function A() {
          var e = s.G() < 12 ? 0 : 1;
          return r.meridiem[e];
        },
        B: function B() {
          var e = 3600 * _i.getUTCHours(),
              t = 60 * _i.getUTCMinutes(),
              a = _i.getUTCSeconds();

          return o(Math.floor((e + t + a + 3600) / 86.4) % 1e3, 3);
        },
        g: function g() {
          return s.G() % 12 || 12;
        },
        G: function G() {
          return _i.getHours();
        },
        h: function h() {
          return o(s.g(), 2);
        },
        H: function H() {
          return o(s.G(), 2);
        },
        i: function i() {
          return o(_i.getMinutes(), 2);
        },
        s: function s() {
          return o(_i.getSeconds(), 2);
        },
        u: function u() {
          return o(1e3 * _i.getMilliseconds(), 6);
        },
        e: function e() {
          return /\((.*)\)/.exec(String(_i))[1] || "Coordinated Universal Time";
        },
        I: function I() {
          return new Date(s.Y(), 0) - Date.UTC(s.Y(), 0) != new Date(s.Y(), 6) - Date.UTC(s.Y(), 6) ? 1 : 0;
        },
        O: function O() {
          var e = _i.getTimezoneOffset(),
              t = Math.abs(e);

          return (0 < e ? "-" : "+") + o(100 * Math.floor(t / 60) + t % 60, 4);
        },
        P: function P() {
          var e = s.O();
          return e.substr(0, 3) + ":" + e.substr(3, 2);
        },
        T: function T() {
          return (String(_i).match(a.tzParts) || [""]).pop().replace(a.tzClip, "") || "UTC";
        },
        Z: function Z() {
          return 60 * -_i.getTimezoneOffset();
        },
        c: function c() {
          return "Y-m-d\\TH:i:sP".replace(n, t);
        },
        r: function r() {
          return "D, d M Y H:i:s O".replace(n, t);
        },
        U: function U() {
          return _i.getTime() / 1e3 || 0;
        }
      };
      return t(e, e);
    },
    formatDate: function formatDate(e, t) {
      var a,
          i,
          r,
          n,
          s,
          o = "";
      if ("string" == typeof e && !(e = this.parseDate(e, t))) return null;

      if (e instanceof Date) {
        for (r = t.length, a = 0; a < r; a++) {
          "S" !== (s = t.charAt(a)) && "\\" !== s && (0 < a && "\\" === t.charAt(a - 1) ? o += s : (n = this.parseFormat(s, e), a !== r - 1 && this.intParts.test(s) && "S" === t.charAt(a + 1) && (i = parseInt(n) || 0, n += this.dateSettings.ordinal(i)), o += n));
        }

        return o;
      }

      return "";
    }
  };
}(), laravelValidation = {
  implicitRules: ["Required", "Confirmed"],
  init: function init() {
    $.validator.classRuleSettings = {}, $.validator.attributeRules = function () {
      this.rules = {};
    }, $.validator.dataRules = this.arrayRules, $.validator.prototype.arrayRulesCache = {}, this.setupValidations();
  },
  arrayRules: function arrayRules(r) {
    var n = {},
        e = $.data(r.form, "validator"),
        s = e.arrayRulesCache;
    return -1 === r.name.indexOf("[") || (r.name in s || (s[r.name] = {}), $.each(e.settings.rules, function (e, t) {
      var a, i;
      e in s[r.name] ? n = laravelValidation.helpers.mergeRules(n, s[r.name][e]) : (s[r.name][e] = {}, a = laravelValidation.helpers.regexFromWildcard(e), r.name.match(a) && (i = $.validator.normalizeRule(t) || {}, s[r.name][e] = i, n = laravelValidation.helpers.mergeRules(n, i)));
    })), n;
  },
  setupValidations: function setupValidations() {
    function l(s, i, o, e) {
      var l = !0,
          u = s.previousValue(o);
      return $.each(e, function (e, t) {
        var a = t[3] || -1 !== laravelValidation.implicitRules.indexOf(t[0]),
            r = t[0],
            n = t[2];
        return !a && s.optional(o) ? !(l = "dependency-mismatch") : (void 0 !== laravelValidation.methods[r] ? $.each(i, function (e, i) {
          if (!1 === (l = laravelValidation.methods[r].call(s, i, o, t[1], function (e) {
            var t, a;
            s.settings.messages[o.name].laravelValidationRemote = u.originalMessage, e ? (t = s.formSubmitted, s.prepareElement(o), s.formSubmitted = t, s.successList.push(o), delete s.invalid[o.name], s.showErrors()) : ((a = {})[o.name] = u.message = "function" == typeof n ? n(i) : n, s.invalid[o.name] = !0, s.showErrors(a)), s.showErrors(s.errorMap), u.valid = e;
          }))) return !1;
        }) : l = !1, !0 !== l ? (s.settings.messages[o.name] || (s.settings.messages[o.name] = {}), s.settings.messages[o.name].laravelValidation = n, !1) : void 0);
      }), l;
    }

    $.validator.addMethod("laravelValidation", function (e, t, a) {
      var i = [],
          r = [];
      $.each(a, function (e, t) {
        var a = -1 !== t[4].indexOf("[");
        t[3] || -1 !== laravelValidation.implicitRules.indexOf(t[0]) ? a ? r.unshift(t) : i.unshift(t) : a ? r.push(t) : i.push(t);
      });
      var n = l(this, [e], t, i),
          s = Array.isArray(e) ? e : [e],
          o = l(this, s, t, r);
      return n && o;
    }, ""), $.validator.addMethod("laravelValidationRemote", function (s, o, e) {
      var a = !1,
          t = e[0][1],
          i = o.name,
          r = t[1],
          n = t[2];
      if ($.each(e, function (e, t) {
        a = a || t[3];
      }), !a && this.optional(o)) return "dependency-mismatch";
      var l,
          u,
          h = this.previousValue(o);
      this.settings.messages[o.name] || (this.settings.messages[o.name] = {}), h.originalMessage = this.settings.messages[o.name].laravelValidationRemote, this.settings.messages[o.name].laravelValidationRemote = h.message;
      var d = "string" == typeof d ? {
        url: d
      } : d;
      if (laravelValidation.helpers.arrayEquals(h.old, s) || h.old === s) return h.valid;
      h.old = s, (l = this).startRequest(o), (u = $(l.currentForm).serializeArray()).push({
        name: "_jsvalidation",
        value: i
      }), u.push({
        name: "_jsvalidation_validate_all",
        value: n
      });
      var c = $(l.currentForm).attr("method");
      return $(l.currentForm).find('input[name="_method"]').length && (c = $(l.currentForm).find('input[name="_method"]').val()), $.ajax($.extend(!0, {
        mode: "abort",
        port: "validate" + o.name,
        dataType: "json",
        data: u,
        context: l.currentForm,
        url: $(l.currentForm).attr("action"),
        type: c,
        beforeSend: function beforeSend(e) {
          if ("get" !== $(l.currentForm).attr("method").toLowerCase() && r) return e.setRequestHeader("X-XSRF-TOKEN", r);
        }
      }, d)).always(function (e, t) {
        var a, i, r, n;
        if ("error" === t) n = !1, e = laravelValidation.helpers.parseErrorResponse(e);else {
          if ("success" !== t) return;
          n = !0 === e || "true" === e;
        }
        l.settings.messages[o.name].laravelValidationRemote = h.originalMessage, n ? (r = l.formSubmitted, l.prepareElement(o), l.formSubmitted = r, l.successList.push(o), delete l.invalid[o.name], l.showErrors()) : (a = {}, i = e || l.defaultMessage(o, "remote"), a[o.name] = h.message = "function" == typeof i ? i(s) : i[0], l.invalid[o.name] = !0, l.showErrors(a)), l.showErrors(l.errorMap), h.valid = n, l.stopRequest(o, n);
      }), "pending";
    }, "");
  }
}, $(function () {
  laravelValidation.init();
}), function (a) {
  var i = {};

  function r(e) {
    if (i[e]) return i[e].exports;
    var t = i[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return a[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
  }

  r.m = a, r.c = i, r.d = function (e, t, a) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var a = Object.create(null);
    if (r.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) {
      r.d(a, i, function (e) {
        return t[e];
      }.bind(null, i));
    }
    return a;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = "./resources/assets/js/helpers.js");
}({
  "./node_modules/locutus/php/array/array_diff.js": function node_modulesLocutusPhpArrayArray_diffJs(e, t, a) {
    "use strict";

    e.exports = function (e) {
      var t,
          a = {},
          i = arguments.length,
          r = "",
          n = 1,
          s = "";

      e: for (r in e) {
        for (n = 1; n < i; n++) {
          for (s in t = arguments[n]) {
            if (t[s] === e[r]) continue e;
          }

          a[r] = e[r];
        }
      }

      return a;
    };
  },
  "./node_modules/locutus/php/datetime/strtotime.js": function node_modulesLocutusPhpDatetimeStrtotimeJs(e, t, a) {
    "use strict";

    var i = "[ \\t]+",
        r = "[ \\t]*",
        n = "(?:([ap])\\.?m\\.?([\\t ]|$))",
        s = "(2[0-4]|[01]?[0-9])",
        o = "([01][0-9]|2[0-4])",
        l = "(0?[1-9]|1[0-2])",
        u = "([0-5]?[0-9])",
        h = "([0-5][0-9])",
        d = "(60|[0-5]?[0-9])",
        c = "(60|[0-5][0-9])",
        m = "(?:\\.([0-9]+))",
        f = "sunday|monday|tuesday|wednesday|thursday|friday|saturday",
        g = "sun|mon|tue|wed|thu|fri|sat",
        p = f + "|" + g + "|weekdays?",
        v = "first|second|third|fourth|fifth|sixth|seventh|eighth?|ninth|tenth|eleventh|twelfth",
        b = "next|last|previous|this",
        y = "(?:second|sec|minute|min|hour|day|fortnight|forthnight|month|year)s?|weeks|" + p,
        w = "([0-9]{1,4})",
        x = "([0-9]{4})",
        k = "(1[0-2]|0?[0-9])",
        R = "(0[0-9]|1[0-2])",
        F = "(?:(3[01]|[0-2]?[0-9])(?:st|nd|rd|th)?)",
        E = "(0[0-9]|[1-2][0-9]|3[01])",
        C = "january|february|march|april|may|june|july|august|september|october|november|december",
        S = "jan|feb|mar|apr|may|jun|jul|aug|sept?|oct|nov|dec",
        A = "(" + C + "|" + S + "|i[vx]|vi{0,3}|xi{0,2}|i{1,3})",
        T = "((?:GMT)?([+-])" + s + ":?" + u + "?)";

    function N(e, t) {
      switch (t = t && t.toLowerCase()) {
        case "a":
          e += 12 === e ? -12 : 0;
          break;

        case "p":
          e += 12 !== e ? 12 : 0;
      }

      return e;
    }

    function j(e) {
      var t = +e;
      return e.length < 4 && t < 100 && (t += t < 70 ? 2e3 : 1900), t;
    }

    function _(e) {
      return {
        jan: 0,
        january: 0,
        i: 0,
        feb: 1,
        february: 1,
        ii: 1,
        mar: 2,
        march: 2,
        iii: 2,
        apr: 3,
        april: 3,
        iv: 3,
        may: 4,
        v: 4,
        jun: 5,
        june: 5,
        vi: 5,
        jul: 6,
        july: 6,
        vii: 6,
        aug: 7,
        august: 7,
        viii: 7,
        sep: 8,
        sept: 8,
        september: 8,
        ix: 8,
        oct: 9,
        october: 9,
        x: 9,
        nov: 10,
        november: 10,
        xi: 10,
        dec: 11,
        december: 11,
        xii: 11
      }[e.toLowerCase()];
    }

    function M(e, t) {
      var a = 1 < arguments.length && void 0 !== t ? t : 0;
      return {
        mon: 1,
        monday: 1,
        tue: 2,
        tuesday: 2,
        wed: 3,
        wednesday: 3,
        thu: 4,
        thursday: 4,
        fri: 5,
        friday: 5,
        sat: 6,
        saturday: 6,
        sun: 0,
        sunday: 0
      }[e.toLowerCase()] || a;
    }

    function D(e, t) {
      if (!(e = e && e.match(/(?:GMT)?([+-])(\d+)(:?)(\d{0,2})/i))) return t;
      var a = "-" === e[1] ? 1 : -1,
          i = +e[2],
          r = +e[4];
      return e[4] || e[3] || (r = Math.floor(i % 100), i = Math.floor(i / 100)), a * (60 * i + r);
    }

    var z = {
      yesterday: {
        regex: /^yesterday/i,
        name: "yesterday",
        callback: function callback() {
          return --this.rd, this.resetTime();
        }
      },
      now: {
        regex: /^now/i,
        name: "now"
      },
      noon: {
        regex: /^noon/i,
        name: "noon",
        callback: function callback() {
          return this.resetTime() && this.time(12, 0, 0, 0);
        }
      },
      midnightOrToday: {
        regex: /^(midnight|today)/i,
        name: "midnight | today",
        callback: function callback() {
          return this.resetTime();
        }
      },
      tomorrow: {
        regex: /^tomorrow/i,
        name: "tomorrow",
        callback: function callback() {
          return this.rd += 1, this.resetTime();
        }
      },
      timestamp: {
        regex: /^@(-?\d+)/i,
        name: "timestamp",
        callback: function callback(e, t) {
          return this.rs += +t, this.y = 1970, this.m = 0, this.d = 1, this.dates = 0, this.resetTime() && this.zone(0);
        }
      },
      firstOrLastDay: {
        regex: /^(first|last) day of/i,
        name: "firstdayof | lastdayof",
        callback: function callback(e, t) {
          "first" === t.toLowerCase() ? this.firstOrLastDayOfMonth = 1 : this.firstOrLastDayOfMonth = -1;
        }
      },
      backOrFrontOf: {
        regex: RegExp("^(back|front) of " + s + r + n + "?", "i"),
        name: "backof | frontof",
        callback: function callback(e, t, a, i) {
          var r = +a,
              n = 15;
          return "back" === t.toLowerCase() || (--r, n = 45), r = N(r, i), this.resetTime() && this.time(r, n, 0, 0);
        }
      },
      weekdayOf: {
        regex: RegExp("^(" + v + "|" + b + ")" + i + "(" + f + "|" + g + ")" + i + "of", "i"),
        name: "weekdayof"
      },
      mssqltime: {
        regex: RegExp("^" + l + ":" + h + ":" + c + "[:.]([0-9]+)" + n, "i"),
        name: "mssqltime",
        callback: function callback(e, t, a, i, r, n) {
          return this.time(N(+t, n), +a, +i, +r.substr(0, 3));
        }
      },
      timeLong12: {
        regex: RegExp("^" + l + "[:.]" + u + "[:.]" + c + r + n, "i"),
        name: "timelong12",
        callback: function callback(e, t, a, i, r) {
          return this.time(N(+t, r), +a, +i, 0);
        }
      },
      timeShort12: {
        regex: RegExp("^" + l + "[:.]" + h + r + n, "i"),
        name: "timeshort12",
        callback: function callback(e, t, a, i) {
          return this.time(N(+t, i), +a, 0, 0);
        }
      },
      timeTiny12: {
        regex: RegExp("^" + l + r + n, "i"),
        name: "timetiny12",
        callback: function callback(e, t, a) {
          return this.time(N(+t, a), 0, 0, 0);
        }
      },
      soap: {
        regex: RegExp("^" + x + "-" + R + "-" + E + "T" + o + ":" + h + ":" + c + m + T + "?", "i"),
        name: "soap",
        callback: function callback(e, t, a, i, r, n, s, o, l) {
          return this.ymd(+t, a - 1, +i) && this.time(+r, +n, +s, +o.substr(0, 3)) && this.zone(D(l));
        }
      },
      wddx: {
        regex: RegExp("^" + x + "-" + k + "-" + F + "T" + s + ":" + u + ":" + d),
        name: "wddx",
        callback: function callback(e, t, a, i, r, n, s) {
          return this.ymd(+t, a - 1, +i) && this.time(+r, +n, +s, 0);
        }
      },
      exif: {
        regex: RegExp("^" + x + ":" + R + ":" + E + " " + o + ":" + h + ":" + c, "i"),
        name: "exif",
        callback: function callback(e, t, a, i, r, n, s) {
          return this.ymd(+t, a - 1, +i) && this.time(+r, +n, +s, 0);
        }
      },
      xmlRpc: {
        regex: RegExp("^" + x + R + E + "T" + s + ":" + h + ":" + c),
        name: "xmlrpc",
        callback: function callback(e, t, a, i, r, n, s) {
          return this.ymd(+t, a - 1, +i) && this.time(+r, +n, +s, 0);
        }
      },
      xmlRpcNoColon: {
        regex: RegExp("^" + x + R + E + "[Tt]" + s + h + c),
        name: "xmlrpcnocolon",
        callback: function callback(e, t, a, i, r, n, s) {
          return this.ymd(+t, a - 1, +i) && this.time(+r, +n, +s, 0);
        }
      },
      clf: {
        regex: RegExp("^" + F + "/(" + S + ")/" + x + ":" + o + ":" + h + ":" + c + i + T, "i"),
        name: "clf",
        callback: function callback(e, t, a, i, r, n, s, o) {
          return this.ymd(+i, _(a), +t) && this.time(+r, +n, +s, 0) && this.zone(D(o));
        }
      },
      iso8601long: {
        regex: RegExp("^t?" + s + "[:.]" + u + "[:.]" + d + m, "i"),
        name: "iso8601long",
        callback: function callback(e, t, a, i, r) {
          return this.time(+t, +a, +i, +r.substr(0, 3));
        }
      },
      dateTextual: {
        regex: RegExp("^" + A + "[ .\\t-]*" + F + "[,.stndrh\\t ]+" + w, "i"),
        name: "datetextual",
        callback: function callback(e, t, a, i) {
          return this.ymd(j(i), _(t), +a);
        }
      },
      pointedDate4: {
        regex: RegExp("^" + F + "[.\\t-]" + k + "[.-]" + x),
        name: "pointeddate4",
        callback: function callback(e, t, a, i) {
          return this.ymd(+i, a - 1, +t);
        }
      },
      pointedDate2: {
        regex: RegExp("^" + F + "[.\\t]" + k + "\\.([0-9]{2})"),
        name: "pointeddate2",
        callback: function callback(e, t, a, i) {
          return this.ymd(j(i), a - 1, +t);
        }
      },
      timeLong24: {
        regex: RegExp("^t?" + s + "[:.]" + u + "[:.]" + d),
        name: "timelong24",
        callback: function callback(e, t, a, i) {
          return this.time(+t, +a, +i, 0);
        }
      },
      dateNoColon: {
        regex: RegExp("^" + x + R + E),
        name: "datenocolon",
        callback: function callback(e, t, a, i) {
          return this.ymd(+t, a - 1, +i);
        }
      },
      pgydotd: {
        regex: RegExp("^" + x + "\\.?(00[1-9]|0[1-9][0-9]|[12][0-9][0-9]|3[0-5][0-9]|36[0-6])"),
        name: "pgydotd",
        callback: function callback(e, t, a) {
          return this.ymd(+t, 0, +a);
        }
      },
      timeShort24: {
        regex: RegExp("^t?" + s + "[:.]" + u, "i"),
        name: "timeshort24",
        callback: function callback(e, t, a) {
          return this.time(+t, +a, 0, 0);
        }
      },
      iso8601noColon: {
        regex: RegExp("^t?" + o + h + c, "i"),
        name: "iso8601nocolon",
        callback: function callback(e, t, a, i) {
          return this.time(+t, +a, +i, 0);
        }
      },
      iso8601dateSlash: {
        regex: RegExp("^" + x + "/" + R + "/" + E + "/"),
        name: "iso8601dateslash",
        callback: function callback(e, t, a, i) {
          return this.ymd(+t, a - 1, +i);
        }
      },
      dateSlash: {
        regex: RegExp("^" + x + "/" + k + "/" + F),
        name: "dateslash",
        callback: function callback(e, t, a, i) {
          return this.ymd(+t, a - 1, +i);
        }
      },
      american: {
        regex: RegExp("^" + k + "/" + F + "/" + w),
        name: "american",
        callback: function callback(e, t, a, i) {
          return this.ymd(j(i), t - 1, +a);
        }
      },
      americanShort: {
        regex: RegExp("^" + k + "/" + F),
        name: "americanshort",
        callback: function callback(e, t, a) {
          return this.ymd(this.y, t - 1, +a);
        }
      },
      gnuDateShortOrIso8601date2: {
        regex: RegExp("^" + w + "-" + k + "-" + F),
        name: "gnudateshort | iso8601date2",
        callback: function callback(e, t, a, i) {
          return this.ymd(j(t), a - 1, +i);
        }
      },
      iso8601date4: {
        regex: RegExp("^([+-]?[0-9]{4})-" + R + "-" + E),
        name: "iso8601date4",
        callback: function callback(e, t, a, i) {
          return this.ymd(+t, a - 1, +i);
        }
      },
      gnuNoColon: {
        regex: RegExp("^t" + o + h, "i"),
        name: "gnunocolon",
        callback: function callback(e, t, a) {
          return this.time(+t, +a, 0, this.f);
        }
      },
      gnuDateShorter: {
        regex: RegExp("^" + x + "-" + k),
        name: "gnudateshorter",
        callback: function callback(e, t, a) {
          return this.ymd(+t, a - 1, 1);
        }
      },
      pgTextReverse: {
        regex: RegExp("^(\\d{3,4}|[4-9]\\d|3[2-9])-(" + S + ")-" + E, "i"),
        name: "pgtextreverse",
        callback: function callback(e, t, a, i) {
          return this.ymd(j(t), _(a), +i);
        }
      },
      dateFull: {
        regex: RegExp("^" + F + "[ \\t.-]*" + A + "[ \\t.-]*" + w, "i"),
        name: "datefull",
        callback: function callback(e, t, a, i) {
          return this.ymd(j(i), _(a), +t);
        }
      },
      dateNoDay: {
        regex: RegExp("^" + A + "[ .\\t-]*" + x, "i"),
        name: "datenoday",
        callback: function callback(e, t, a) {
          return this.ymd(+a, _(t), 1);
        }
      },
      dateNoDayRev: {
        regex: RegExp("^" + x + "[ .\\t-]*" + A, "i"),
        name: "datenodayrev",
        callback: function callback(e, t, a) {
          return this.ymd(+t, _(a), 1);
        }
      },
      pgTextShort: {
        regex: RegExp("^(" + S + ")-" + E + "-" + w, "i"),
        name: "pgtextshort",
        callback: function callback(e, t, a, i) {
          return this.ymd(j(i), _(t), +a);
        }
      },
      dateNoYear: {
        regex: RegExp("^" + A + "[ .\\t-]*" + F + "[,.stndrh\\t ]*", "i"),
        name: "datenoyear",
        callback: function callback(e, t, a) {
          return this.ymd(this.y, _(t), +a);
        }
      },
      dateNoYearRev: {
        regex: RegExp("^" + F + "[ .\\t-]*" + A, "i"),
        name: "datenoyearrev",
        callback: function callback(e, t, a) {
          return this.ymd(this.y, _(a), +t);
        }
      },
      isoWeekDay: {
        regex: RegExp("^" + x + "-?W(0[1-9]|[1-4][0-9]|5[0-3])(?:-?([0-7]))?"),
        name: "isoweekday | isoweek",
        callback: function callback(e, t, a, i) {
          if (i = i ? +i : 1, !this.ymd(+t, 0, 1)) return !1;
          var r = 0 - (4 < (r = new Date(this.y, this.m, this.d).getDay()) ? r - 7 : r);
          this.rd += r + 7 * (a - 1) + i;
        }
      },
      relativeText: {
        regex: RegExp("^(" + v + "|" + b + ")" + i + "(" + y + ")", "i"),
        name: "relativetext",
        callback: function callback(e, t, a) {
          var i,
              r = {
            amount: {
              last: -1,
              previous: -1,
              "this": 0,
              first: 1,
              next: 1,
              second: 2,
              third: 3,
              fourth: 4,
              fifth: 5,
              sixth: 6,
              seventh: 7,
              eight: 8,
              eighth: 8,
              ninth: 9,
              tenth: 10,
              eleventh: 11,
              twelfth: 12
            }[i = t.toLowerCase()],
            behavior: {
              "this": 1
            }[i] || 0
          },
              n = r.amount;

          switch (a.toLowerCase()) {
            case "sec":
            case "secs":
            case "second":
            case "seconds":
              this.rs += n;
              break;

            case "min":
            case "mins":
            case "minute":
            case "minutes":
              this.ri += n;
              break;

            case "hour":
            case "hours":
              this.rh += n;
              break;

            case "day":
            case "days":
              this.rd += n;
              break;

            case "fortnight":
            case "fortnights":
            case "forthnight":
            case "forthnights":
              this.rd += 14 * n;
              break;

            case "week":
            case "weeks":
              this.rd += 7 * n;
              break;

            case "month":
            case "months":
              this.rm += n;
              break;

            case "year":
            case "years":
              this.ry += n;
              break;

            case "mon":
            case "monday":
            case "tue":
            case "tuesday":
            case "wed":
            case "wednesday":
            case "thu":
            case "thursday":
            case "fri":
            case "friday":
            case "sat":
            case "saturday":
            case "sun":
            case "sunday":
              this.resetTime(), this.weekday = M(a, 7), this.weekdayBehavior = 1, this.rd += 7 * (0 < n ? n - 1 : n);
          }
        }
      },
      relative: {
        regex: RegExp("^([+-]*)[ \\t]*(\\d+)" + r + "(" + y + "|week)", "i"),
        name: "relative",
        callback: function callback(e, t, a, i) {
          var r = t.replace(/[^-]/g, "").length,
              n = a * Math.pow(-1, r);

          switch (i.toLowerCase()) {
            case "sec":
            case "secs":
            case "second":
            case "seconds":
              this.rs += n;
              break;

            case "min":
            case "mins":
            case "minute":
            case "minutes":
              this.ri += n;
              break;

            case "hour":
            case "hours":
              this.rh += n;
              break;

            case "day":
            case "days":
              this.rd += n;
              break;

            case "fortnight":
            case "fortnights":
            case "forthnight":
            case "forthnights":
              this.rd += 14 * n;
              break;

            case "week":
            case "weeks":
              this.rd += 7 * n;
              break;

            case "month":
            case "months":
              this.rm += n;
              break;

            case "year":
            case "years":
              this.ry += n;
              break;

            case "mon":
            case "monday":
            case "tue":
            case "tuesday":
            case "wed":
            case "wednesday":
            case "thu":
            case "thursday":
            case "fri":
            case "friday":
            case "sat":
            case "saturday":
            case "sun":
            case "sunday":
              this.resetTime(), this.weekday = M(i, 7), this.weekdayBehavior = 1, this.rd += 7 * (0 < n ? n - 1 : n);
          }
        }
      },
      dayText: {
        regex: RegExp("^(" + p + ")", "i"),
        name: "daytext",
        callback: function callback(e, t) {
          this.resetTime(), this.weekday = M(t, 0), 2 !== this.weekdayBehavior && (this.weekdayBehavior = 1);
        }
      },
      relativeTextWeek: {
        regex: RegExp("^(" + b + ")" + i + "week", "i"),
        name: "relativetextweek",
        callback: function callback(e, t) {
          switch (this.weekdayBehavior = 2, t.toLowerCase()) {
            case "this":
              this.rd += 0;
              break;

            case "next":
              this.rd += 7;
              break;

            case "last":
            case "previous":
              this.rd -= 7;
          }

          isNaN(this.weekday) && (this.weekday = 1);
        }
      },
      monthFullOrMonthAbbr: {
        regex: RegExp("^(" + C + "|" + S + ")", "i"),
        name: "monthfull | monthabbr",
        callback: function callback(e, t) {
          return this.ymd(this.y, _(t), this.d);
        }
      },
      tzCorrection: {
        regex: RegExp("^" + T, "i"),
        name: "tzcorrection",
        callback: function callback(e) {
          return this.zone(D(e));
        }
      },
      ago: {
        regex: /^ago/i,
        name: "ago",
        callback: function callback() {
          this.ry = -this.ry, this.rm = -this.rm, this.rd = -this.rd, this.rh = -this.rh, this.ri = -this.ri, this.rs = -this.rs, this.rf = -this.rf;
        }
      },
      gnuNoColon2: {
        regex: RegExp("^" + o + h, "i"),
        name: "gnunocolon",
        callback: function callback(e, t, a) {
          return this.time(+t, +a, 0, this.f);
        }
      },
      year4: {
        regex: RegExp("^" + x),
        name: "year4",
        callback: function callback(e, t) {
          return this.y = +t, !0;
        }
      },
      whitespace: {
        regex: /^[ .,\t]+/,
        name: "whitespace"
      },
      any: {
        regex: /^[\s\S]+/,
        name: "any",
        callback: function callback() {
          return !1;
        }
      }
    },
        $ = {
      y: NaN,
      m: NaN,
      d: NaN,
      h: NaN,
      i: NaN,
      s: NaN,
      f: NaN,
      ry: 0,
      rm: 0,
      rd: 0,
      rh: 0,
      ri: 0,
      rs: 0,
      rf: 0,
      weekday: NaN,
      weekdayBehavior: 0,
      firstOrLastDayOfMonth: 0,
      z: NaN,
      dates: 0,
      times: 0,
      zones: 0,
      ymd: function ymd(e, t, a) {
        return !(0 < this.dates) && (this.dates++, this.y = e, this.m = t, this.d = a, !0);
      },
      time: function time(e, t, a, i) {
        return !(0 < this.times) && (this.times++, this.h = e, this.i = t, this.s = a, this.f = i, !0);
      },
      resetTime: function resetTime() {
        return this.h = 0, this.i = 0, this.s = 0, this.f = 0, !(this.times = 0);
      },
      zone: function zone(e) {
        return this.zones <= 1 && (this.zones++, this.z = e, !0);
      },
      toDate: function toDate(e) {
        switch (this.dates && !this.times && (this.h = this.i = this.s = this.f = 0), isNaN(this.y) && (this.y = e.getFullYear()), isNaN(this.m) && (this.m = e.getMonth()), isNaN(this.d) && (this.d = e.getDate()), isNaN(this.h) && (this.h = e.getHours()), isNaN(this.i) && (this.i = e.getMinutes()), isNaN(this.s) && (this.s = e.getSeconds()), isNaN(this.f) && (this.f = e.getMilliseconds()), this.firstOrLastDayOfMonth) {
          case 1:
            this.d = 1;
            break;

          case -1:
            this.d = 0, this.m += 1;
        }

        var t, a, i;
        isNaN(this.weekday) || ((t = new Date(e.getTime())).setFullYear(this.y, this.m, this.d), t.setHours(this.h, this.i, this.s, this.f), a = t.getDay(), 2 === this.weekdayBehavior ? (0 === a && 0 !== this.weekday && (this.weekday = -6), 0 === this.weekday && 0 !== a && (this.weekday = 7), this.d -= a, this.d += this.weekday) : (i = this.weekday - a, (this.rd < 0 && i < 0 || 0 <= this.rd && i <= -this.weekdayBehavior) && (i += 7), 0 <= this.weekday ? this.d += i : this.d -= 7 - (Math.abs(this.weekday) - a), this.weekday = NaN)), this.y += this.ry, this.m += this.rm, this.d += this.rd, this.h += this.rh, this.i += this.ri, this.s += this.rs, this.f += this.rf, this.ry = this.rm = this.rd = 0, this.rh = this.ri = this.rs = this.rf = 0;
        var r = new Date(e.getTime());

        switch (r.setFullYear(this.y, this.m, this.d), r.setHours(this.h, this.i, this.s, this.f), this.firstOrLastDayOfMonth) {
          case 1:
            r.setDate(1);
            break;

          case -1:
            r.setMonth(r.getMonth() + 1, 0);
        }

        return isNaN(this.z) || r.getTimezoneOffset() === this.z || (r.setUTCFullYear(r.getFullYear(), r.getMonth(), r.getDate()), r.setUTCHours(r.getHours(), r.getMinutes() + this.z, r.getSeconds(), r.getMilliseconds())), r;
      }
    };

    e.exports = function (e, t) {
      null == t && (t = Math.floor(Date.now() / 1e3));

      for (var a = [z.yesterday, z.now, z.noon, z.midnightOrToday, z.tomorrow, z.timestamp, z.firstOrLastDay, z.backOrFrontOf, z.mssqltime, z.timeLong12, z.timeShort12, z.timeTiny12, z.soap, z.wddx, z.exif, z.xmlRpc, z.xmlRpcNoColon, z.clf, z.iso8601long, z.dateTextual, z.pointedDate4, z.pointedDate2, z.timeLong24, z.dateNoColon, z.pgydotd, z.timeShort24, z.iso8601noColon, z.iso8601dateSlash, z.dateSlash, z.american, z.americanShort, z.gnuDateShortOrIso8601date2, z.iso8601date4, z.gnuNoColon, z.gnuDateShorter, z.pgTextReverse, z.dateFull, z.dateNoDay, z.dateNoDayRev, z.pgTextShort, z.dateNoYear, z.dateNoYearRev, z.isoWeekDay, z.relativeText, z.relative, z.dayText, z.relativeTextWeek, z.monthFullOrMonthAbbr, z.tzCorrection, z.ago, z.gnuNoColon2, z.year4, z.whitespace, z.any], i = Object.create($); e.length;) {
        for (var r = 0, n = a.length; r < n; r++) {
          var s = a[r],
              o = e.match(s.regex);

          if (o) {
            if (s.callback && !1 === s.callback.apply(i, o)) return !1;
            e = e.substr(o[0].length);
            break;
          }
        }
      }

      return Math.floor(i.toDate(new Date(1e3 * t)) / 1e3);
    };
  },
  "./node_modules/locutus/php/info/ini_get.js": function node_modulesLocutusPhpInfoIni_getJs(e, t, a) {
    "use strict";

    (function (i) {
      e.exports = function (e) {
        var t = "undefined" != typeof window ? window : i;
        t.$locutus = t.$locutus || {};
        var a = t.$locutus;
        return a.php = a.php || {}, a.php.ini = a.php.ini || {}, !a.php.ini[e] || void 0 === a.php.ini[e].local_value || null === a.php.ini[e].local_value ? "" : a.php.ini[e].local_value;
      };
    }).call(this, a("./node_modules/webpack/buildin/global.js"));
  },
  "./node_modules/locutus/php/strings/strlen.js": function node_modulesLocutusPhpStringsStrlenJs(e, t, r) {
    "use strict";

    e.exports = function (e) {
      var t = e + "";
      if ("off" === (r("./node_modules/locutus/php/info/ini_get.js")("unicode.semantics") || "off")) return t.length;

      for (var a = 0, i = 0, a = 0, i = 0; a < t.length; a++) {
        !1 !== function (e, t) {
          var a,
              i,
              r = e.charCodeAt(t);

          if (55296 <= r && r <= 56319) {
            if (e.length <= t + 1) throw new Error("High surrogate without following low surrogate");
            if ((a = e.charCodeAt(t + 1)) < 56320 || 57343 < a) throw new Error("High surrogate without following low surrogate");
            return e.charAt(t) + e.charAt(t + 1);
          }

          if (56320 <= r && r <= 57343) {
            if (0 === t) throw new Error("Low surrogate without preceding high surrogate");
            if ((i = e.charCodeAt(t - 1)) < 55296 || 56319 < i) throw new Error("Low surrogate without preceding high surrogate");
            return !1;
          }

          return e.charAt(t);
        }(t, a) && i++;
      }

      return i;
    };
  },
  "./node_modules/locutus/php/var/is_numeric.js": function node_modulesLocutusPhpVarIs_numericJs(e, t, a) {
    "use strict";

    e.exports = function (e) {
      var t = [" ", "\n", "\r", "\t", "\f", "\v", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "​", "\u2028", "\u2029", "　"].join("");
      return ("number" == typeof e || "string" == typeof e && -1 === t.indexOf(e.slice(-1))) && "" !== e && !isNaN(e);
    };
  },
  "./node_modules/webpack/buildin/global.js": function node_modulesWebpackBuildinGlobalJs(e, t) {
    var a = function () {
      return this;
    }();

    try {
      a = a || new Function("return this")();
    } catch (e) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (a = window);
    }

    e.exports = a;
  },
  "./resources/assets/js/helpers.js": function resourcesAssetsJsHelpersJs(e, t, a) {
    "use strict";

    a.r(t);
    var i = a("./node_modules/locutus/php/strings/strlen.js"),
        r = a.n(i),
        n = a("./node_modules/locutus/php/array/array_diff.js"),
        s = a.n(n),
        o = a("./node_modules/locutus/php/datetime/strtotime.js"),
        l = a.n(o),
        u = a("./node_modules/locutus/php/var/is_numeric.js"),
        h = a.n(u);
    $.extend(!0, laravelValidation, {
      helpers: {
        numericRules: ["Integer", "Numeric"],
        fileinfo: function fileinfo(e, t) {
          var a = e.value;
          return t = void 0 !== t ? t : 0, null !== e.files && void 0 !== e.files[t] && {
            file: a,
            extension: a.substr(a.lastIndexOf(".") + 1),
            size: e.files[t].size / 1024,
            type: e.files[t].type
          };
        },
        selector: function selector(e) {
          var t = [];
          this.isArray(e) || (e = [e]);

          for (var a = 0; a < e.length; a++) {
            t.push("[name='" + e[a] + "']");
          }

          return t.join();
        },
        hasNumericRules: function hasNumericRules(e) {
          return this.hasRules(e, this.numericRules);
        },
        hasRules: function hasRules(e, r) {
          var n = !1;
          "string" == typeof r && (r = [r]);
          var t = $.data(e.form, "validator"),
              a = [],
              i = t.arrayRulesCache;
          return e.name in i && $.each(i[e.name], function (e, t) {
            a.push(t);
          }), e.name in t.settings.rules && a.push(t.settings.rules[e.name]), $.each(a, function (e, t) {
            if ("laravelValidation" in t) for (var a = t.laravelValidation, i = 0; i < a.length; i++) {
              if (-1 !== $.inArray(a[i][0], r)) return !(n = !0);
            }
          }), n;
        },
        strlen: function strlen(e) {
          return r()(e);
        },
        getSize: function getSize(e, t, a) {
          return this.hasNumericRules(t) && this.is_numeric(a) ? parseFloat(a) : this.isArray(a) ? parseFloat(a.length) : "file" === t.type ? parseFloat(Math.floor(this.fileinfo(t).size)) : parseFloat(this.strlen(a));
        },
        getLaravelValidation: function getLaravelValidation(a, e) {
          var i = void 0;
          return $.each($.validator.staticRules(e), function (e, t) {
            "laravelValidation" === e && $.each(t, function (e, t) {
              t[0] === a && (i = t);
            });
          }), i;
        },
        parseTime: function parseTime(e, t) {
          var a,
              i = !1,
              r = new DateFormatter();
          return "object" == _typeof(t) && (t = void 0 !== (a = this.getLaravelValidation("DateFormat", t)) ? a[1][0] : null), i = null == t ? this.strtotime(e) : (i = r.parseDate(e, t)) && Math.round(i.getTime() / 1e3);
        },
        compareDates: function compareDates(e, t, a, i, r) {
          var n = parseFloat(i);

          if (isNaN(n)) {
            var s = this.dependentElement(e, a, i);
            if (void 0 === s) return !1;
            n = this.parseTime(e.elementValue(s), s);
          }

          var o = this.parseTime(t, a);
          if (!1 === o) return !1;

          switch (r) {
            case "<":
              return o < n;

            case "<=":
              return o <= n;

            case "==":
            case "===":
              return o === n;

            case ">":
              return n < o;

            case ">=":
              return n <= o;

            default:
              throw new Error("Unsupported operator.");
          }
        },
        guessDate: function guessDate(e, t) {
          return new DateFormatter().guessDate(e, t);
        },
        strtotime: function strtotime(e, t) {
          return l()(e, t);
        },
        is_numeric: function is_numeric(e) {
          return h()(e);
        },
        isArray: function isArray(e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        },
        arrayDiff: function arrayDiff(e, t) {
          return s()(e, t);
        },
        arrayEquals: function arrayEquals(e, t) {
          return !(!this.isArray(e) || !this.isArray(t)) && e.length === t.length && $.isEmptyObject(this.arrayDiff(e, t));
        },
        dependentElement: function dependentElement(e, t, a) {
          var i,
              r,
              n = e.findByName(a);
          return void 0 !== n[0] && e.settings.onfocusout && (i = "blur", "SELECT" !== n[0].tagName && "OPTION" !== n[0].tagName && "checkbox" !== n[0].type && "radio" !== n[0].type || (i = "click"), r = ".validate-laravelValidation", n.off(r).off(i + r + "-" + t.name).on(i + r + "-" + t.name, function () {
            $(t).valid();
          })), n[0];
        },
        parseErrorResponse: function parseErrorResponse(e) {
          var t,
              a = ["Whoops, looks like something went wrong."];
          return "responseText" in e && (t = e.responseText.match(/<h1\s*>(.*)<\/h1\s*>/i), this.isArray(t) && (a = [t[1]])), a;
        },
        escapeRegExp: function escapeRegExp(e) {
          return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        regexFromWildcard: function regexFromWildcard(e) {
          var t = e.split("[*]");
          1 === t.length && t.push("");
          var a = t.map(function (e, t) {
            return t % 2 == 0 ? e += "[" : e = "]" + e, laravelValidation.helpers.escapeRegExp(e);
          });
          return new RegExp("^" + a.join("[^\\]]*") + "$");
        },
        mergeRules: function mergeRules(e, t) {
          var a = {
            laravelValidation: t.laravelValidation || [],
            laravelValidationRemote: t.laravelValidationRemote || []
          };

          for (var i in a) {
            0 !== a[i].length && (void 0 === e[i] && (e[i] = []), e[i] = e[i].concat(a[i]));
          }

          return e;
        }
      }
    });
  }
}), $.extend(!0, laravelValidation, {
  helpers: {
    isTimezone: function isTimezone(e) {
      var t = {
        africa: ["abidjan", "accra", "addis_ababa", "algiers", "asmara", "bamako", "bangui", "banjul", "bissau", "blantyre", "brazzaville", "bujumbura", "cairo", "casablanca", "ceuta", "conakry", "dakar", "dar_es_salaam", "djibouti", "douala", "el_aaiun", "freetown", "gaborone", "harare", "johannesburg", "juba", "kampala", "khartoum", "kigali", "kinshasa", "lagos", "libreville", "lome", "luanda", "lubumbashi", "lusaka", "malabo", "maputo", "maseru", "mbabane", "mogadishu", "monrovia", "nairobi", "ndjamena", "niamey", "nouakchott", "ouagadougou", "porto-novo", "sao_tome", "tripoli", "tunis", "windhoek"],
        america: ["adak", "anchorage", "anguilla", "antigua", "araguaina", "argentina/buenos_aires", "argentina/catamarca", "argentina/cordoba", "argentina/jujuy", "argentina/la_rioja", "argentina/mendoza", "argentina/rio_gallegos", "argentina/salta", "argentina/san_juan", "argentina/san_luis", "argentina/tucuman", "argentina/ushuaia", "aruba", "asuncion", "atikokan", "bahia", "bahia_banderas", "barbados", "belem", "belize", "blanc-sablon", "boa_vista", "bogota", "boise", "cambridge_bay", "campo_grande", "cancun", "caracas", "cayenne", "cayman", "chicago", "chihuahua", "costa_rica", "creston", "cuiaba", "curacao", "danmarkshavn", "dawson", "dawson_creek", "denver", "detroit", "dominica", "edmonton", "eirunepe", "el_salvador", "fortaleza", "glace_bay", "godthab", "goose_bay", "grand_turk", "grenada", "guadeloupe", "guatemala", "guayaquil", "guyana", "halifax", "havana", "hermosillo", "indiana/indianapolis", "indiana/knox", "indiana/marengo", "indiana/petersburg", "indiana/tell_city", "indiana/vevay", "indiana/vincennes", "indiana/winamac", "inuvik", "iqaluit", "jamaica", "juneau", "kentucky/louisville", "kentucky/monticello", "kralendijk", "la_paz", "lima", "los_angeles", "lower_princes", "maceio", "managua", "manaus", "marigot", "martinique", "matamoros", "mazatlan", "menominee", "merida", "metlakatla", "mexico_city", "miquelon", "moncton", "monterrey", "montevideo", "montreal", "montserrat", "nassau", "new_york", "nipigon", "nome", "noronha", "north_dakota/beulah", "north_dakota/center", "north_dakota/new_salem", "ojinaga", "panama", "pangnirtung", "paramaribo", "phoenix", "port-au-prince", "port_of_spain", "porto_velho", "puerto_rico", "rainy_river", "rankin_inlet", "recife", "regina", "resolute", "rio_branco", "santa_isabel", "santarem", "santiago", "santo_domingo", "sao_paulo", "scoresbysund", "shiprock", "sitka", "st_barthelemy", "st_johns", "st_kitts", "st_lucia", "st_thomas", "st_vincent", "swift_current", "tegucigalpa", "thule", "thunder_bay", "tijuana", "toronto", "tortola", "vancouver", "whitehorse", "winnipeg", "yakutat", "yellowknife"],
        antarctica: ["casey", "davis", "dumontdurville", "macquarie", "mawson", "mcmurdo", "palmer", "rothera", "south_pole", "syowa", "vostok"],
        arctic: ["longyearbyen"],
        asia: ["aden", "almaty", "amman", "anadyr", "aqtau", "aqtobe", "ashgabat", "baghdad", "bahrain", "baku", "bangkok", "beirut", "bishkek", "brunei", "choibalsan", "chongqing", "colombo", "damascus", "dhaka", "dili", "dubai", "dushanbe", "gaza", "harbin", "hebron", "ho_chi_minh", "hong_kong", "hovd", "irkutsk", "jakarta", "jayapura", "jerusalem", "kabul", "kamchatka", "karachi", "kashgar", "kathmandu", "khandyga", "kolkata", "krasnoyarsk", "kuala_lumpur", "kuching", "kuwait", "macau", "magadan", "makassar", "manila", "muscat", "nicosia", "novokuznetsk", "novosibirsk", "omsk", "oral", "phnom_penh", "pontianak", "pyongyang", "qatar", "qyzylorda", "rangoon", "riyadh", "sakhalin", "samarkand", "seoul", "shanghai", "singapore", "taipei", "tashkent", "tbilisi", "tehran", "thimphu", "tokyo", "ulaanbaatar", "urumqi", "ust-nera", "vientiane", "vladivostok", "yakutsk", "yekaterinburg", "yerevan"],
        atlantic: ["azores", "bermuda", "canary", "cape_verde", "faroe", "madeira", "reykjavik", "south_georgia", "st_helena", "stanley"],
        australia: ["adelaide", "brisbane", "broken_hill", "currie", "darwin", "eucla", "hobart", "lindeman", "lord_howe", "melbourne", "perth", "sydney"],
        europe: ["amsterdam", "andorra", "athens", "belgrade", "berlin", "bratislava", "brussels", "bucharest", "budapest", "busingen", "chisinau", "copenhagen", "dublin", "gibraltar", "guernsey", "helsinki", "isle_of_man", "istanbul", "jersey", "kaliningrad", "kiev", "lisbon", "ljubljana", "london", "luxembourg", "madrid", "malta", "mariehamn", "minsk", "monaco", "moscow", "oslo", "paris", "podgorica", "prague", "riga", "rome", "samara", "san_marino", "sarajevo", "simferopol", "skopje", "sofia", "stockholm", "tallinn", "tirane", "uzhgorod", "vaduz", "vatican", "vienna", "vilnius", "volgograd", "warsaw", "zagreb", "zaporozhye", "zurich"],
        indian: ["antananarivo", "chagos", "christmas", "cocos", "comoro", "kerguelen", "mahe", "maldives", "mauritius", "mayotte", "reunion"],
        pacific: ["apia", "auckland", "chatham", "chuuk", "easter", "efate", "enderbury", "fakaofo", "fiji", "funafuti", "galapagos", "gambier", "guadalcanal", "guam", "honolulu", "johnston", "kiritimati", "kosrae", "kwajalein", "majuro", "marquesas", "midway", "nauru", "niue", "norfolk", "noumea", "pago_pago", "palau", "pitcairn", "pohnpei", "port_moresby", "rarotonga", "saipan", "tahiti", "tarawa", "tongatapu", "wake", "wallis"],
        utc: [""]
      },
          a = e.split("/", 2),
          i = a[0].toLowerCase(),
          r = "";
      return a[1] && (r = a[1].toLowerCase()), i in t && (0 === t[i].length || -1 !== t[i].indexOf(r));
    }
  }
}), $.extend(!0, laravelValidation, {
  methods: {
    helpers: laravelValidation.helpers,
    jsRemoteTimer: 0,
    Sometimes: function Sometimes() {
      return !0;
    },
    Bail: function Bail() {
      return !0;
    },
    Nullable: function Nullable() {
      return !0;
    },
    Filled: function Filled(e, t) {
      return $.validator.methods.required.call(this, e, t, !0);
    },
    Required: function Required(e, t) {
      return $.validator.methods.required.call(this, e, t);
    },
    RequiredWith: function RequiredWith(e, i, t) {
      var r = this,
          n = !1,
          s = this;
      return $.each(t, function (e, t) {
        var a = laravelValidation.helpers.dependentElement(s, i, t);
        n = n || void 0 !== a && $.validator.methods.required.call(r, s.elementValue(a), a, !0);
      }), !n || $.validator.methods.required.call(this, e, i, !0);
    },
    RequiredWithAll: function RequiredWithAll(e, i, t) {
      var r = this,
          n = !0,
          s = this;
      return $.each(t, function (e, t) {
        var a = laravelValidation.helpers.dependentElement(s, i, t);
        n = n && void 0 !== a && $.validator.methods.required.call(r, s.elementValue(a), a, !0);
      }), !n || $.validator.methods.required.call(this, e, i, !0);
    },
    RequiredWithout: function RequiredWithout(e, i, t) {
      var r = this,
          n = !1,
          s = this;
      return $.each(t, function (e, t) {
        var a = laravelValidation.helpers.dependentElement(s, i, t);
        n = n || void 0 === a || !$.validator.methods.required.call(r, s.elementValue(a), a, !0);
      }), !n || $.validator.methods.required.call(this, e, i, !0);
    },
    RequiredWithoutAll: function RequiredWithoutAll(e, i, t) {
      var r = this,
          n = !0,
          s = this;
      return $.each(t, function (e, t) {
        var a = laravelValidation.helpers.dependentElement(s, i, t);
        n = n && (void 0 === a || !$.validator.methods.required.call(r, s.elementValue(a), a, !0));
      }), !n || $.validator.methods.required.call(this, e, i, !0);
    },
    RequiredIf: function RequiredIf(e, t, a) {
      var i = laravelValidation.helpers.dependentElement(this, t, a[0]);

      if (void 0 !== i) {
        var r = String(this.elementValue(i));

        if (void 0 !== r) {
          var n = a.slice(1);
          if (-1 !== $.inArray(r, n)) return $.validator.methods.required.call(this, e, t, !0);
        }
      }

      return !0;
    },
    RequiredUnless: function RequiredUnless(e, t, a) {
      var i = laravelValidation.helpers.dependentElement(this, t, a[0]);

      if (void 0 !== i) {
        var r = String(this.elementValue(i));

        if (void 0 !== r) {
          var n = a.slice(1);
          if (-1 !== $.inArray(r, n)) return !0;
        }
      }

      return $.validator.methods.required.call(this, e, t, !0);
    },
    Confirmed: function Confirmed(e, t, a) {
      return laravelValidation.methods.Same.call(this, e, t, a);
    },
    Same: function Same(e, t, a) {
      var i = laravelValidation.helpers.dependentElement(this, t, a[0]);
      return void 0 !== i && String(e) === String(this.elementValue(i));
    },
    InArray: function InArray(e, t, a) {
      if (void 0 === a[0]) return !1;

      for (var i = this.elements(), r = !1, n = laravelValidation.helpers.regexFromWildcard(a[0]), s = 0; s < i.length; s++) {
        var o,
            l = i[s].name;
        l.match(n) && (o = laravelValidation.methods.Same.call(this, e, t, [l]), r = r || o);
      }

      return r;
    },
    Distinct: function Distinct(e, t, a) {
      if (void 0 === a[0]) return !1;

      for (var i = this.elements(), r = !1, n = laravelValidation.helpers.regexFromWildcard(a[0]), s = 0; s < i.length; s++) {
        var o,
            l = i[s].name;
        l !== t.name && l.match(n) && (o = laravelValidation.methods.Same.call(this, e, t, [l]), r = r || o);
      }

      return !r;
    },
    Different: function Different(e, t, a) {
      return !laravelValidation.methods.Same.call(this, e, t, a);
    },
    Accepted: function Accepted(e) {
      return new RegExp("^(?:(yes|on|1|true))$", "i").test(e);
    },
    Array: function Array(e, t) {
      return -1 !== t.name.indexOf("[") && -1 !== t.name.indexOf("]") || laravelValidation.helpers.isArray(e);
    },
    Boolean: function Boolean(e) {
      return new RegExp("^(?:(true|false|1|0))$", "i").test(e);
    },
    Integer: function Integer(e) {
      return new RegExp("^(?:-?\\d+)$", "i").test(e);
    },
    Numeric: function Numeric(e, t) {
      return $.validator.methods.number.call(this, e, t, !0);
    },
    String: function String(e) {
      return "string" == typeof e;
    },
    Digits: function Digits(e, t, a) {
      return $.validator.methods.number.call(this, e, t, !0) && e.length === parseInt(a, 10);
    },
    DigitsBetween: function DigitsBetween(e, t, a) {
      return $.validator.methods.number.call(this, e, t, !0) && e.length >= parseFloat(a[0]) && e.length <= parseFloat(a[1]);
    },
    Size: function Size(e, t, a) {
      return laravelValidation.helpers.getSize(this, t, e) === parseFloat(a[0]);
    },
    Between: function Between(e, t, a) {
      return laravelValidation.helpers.getSize(this, t, e) >= parseFloat(a[0]) && laravelValidation.helpers.getSize(this, t, e) <= parseFloat(a[1]);
    },
    Min: function Min(e, t, a) {
      return laravelValidation.helpers.getSize(this, t, e) >= parseFloat(a[0]);
    },
    Max: function Max(e, t, a) {
      return laravelValidation.helpers.getSize(this, t, e) <= parseFloat(a[0]);
    },
    In: function In(e, t, a) {
      if (laravelValidation.helpers.isArray(e) && laravelValidation.helpers.hasRules(t, "Array")) {
        var i = laravelValidation.helpers.arrayDiff(e, a);
        return 0 === Object.keys(i).length;
      }

      return -1 !== a.indexOf(e.toString());
    },
    NotIn: function NotIn(e, t, a) {
      return -1 === a.indexOf(e.toString());
    },
    Ip: function Ip(e) {
      return /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e);
    },
    Email: function Email(e, t) {
      return $.validator.methods.email.call(this, e, t, !0);
    },
    Url: function Url(e, t) {
      return $.validator.methods.url.call(this, e, t, !0);
    },
    File: function File(e, t) {
      return !(window.File && window.FileReader && window.FileList && window.Blob) || "files" in t && 0 < t.files.length;
    },
    Mimes: function Mimes(e, t, a) {
      if (!(window.File && window.FileReader && window.FileList && window.Blob)) return !0;
      var i = $.map(a, function (e) {
        return e.toLowerCase();
      }),
          r = laravelValidation.helpers.fileinfo(t);
      return !1 !== r && -1 !== i.indexOf(r.extension.toLowerCase());
    },
    Mimetypes: function Mimetypes(e, t, a) {
      if (!(window.File && window.FileReader && window.FileList && window.Blob)) return !0;
      var i = $.map(a, function (e) {
        return e.toLowerCase();
      }),
          r = laravelValidation.helpers.fileinfo(t);
      return !1 !== r && -1 !== i.indexOf(r.type.toLowerCase());
    },
    Image: function Image(e, t) {
      return laravelValidation.methods.Mimes.call(this, e, t, ["jpg", "png", "gif", "bmp", "svg", "jpeg"]);
    },
    Dimensions: function Dimensions(value, element, params, callback) {
      if (!(window.File && window.FileReader && window.FileList && window.Blob)) return !0;
      if (null === element.files || void 0 === element.files[0]) return !1;
      var fr = new FileReader();
      return fr.onload = function () {
        var img = new Image();
        img.onload = function () {
          var height = parseFloat(img.naturalHeight),
              width = parseFloat(img.naturalWidth),
              ratio = width / height,
              notValid = params.width && parseFloat(params.width !== width) || params.min_width && parseFloat(params.min_width) > width || params.max_width && parseFloat(params.max_width) < width || params.height && parseFloat(params.height) !== height || params.min_height && parseFloat(params.min_height) > height || params.max_height && parseFloat(params.max_height) < height || params.ratio && ratio !== parseFloat(eval(params.ratio));
          callback(!notValid);
        }, img.onerror = function () {
          callback(!1);
        }, img.src = fr.result;
      }, fr.readAsDataURL(element.files[0]), "pending";
    },
    Alpha: function Alpha(e) {
      return "string" == typeof e && new RegExp("^(?:^[a-zà-ü]+$)$", "i").test(e);
    },
    AlphaNum: function AlphaNum(e) {
      return "string" == typeof e && new RegExp("^(?:^[a-z0-9à-ü]+$)$", "i").test(e);
    },
    AlphaDash: function AlphaDash(e) {
      return "string" == typeof e && new RegExp("^(?:^[a-z0-9à-ü_-]+$)$", "i").test(e);
    },
    Regex: function Regex(e, t, a) {
      var i = ["x", "s", "u", "X", "U", "A"],
          r = new RegExp("^(?:/)(.*\\/?[^/]*|[^/]*)(?:/)([gmixXsuUAJ]*)?$"),
          n = a[0].match(r);
      if (null === n) return !1;
      var s = [];

      if (void 0 !== n[2]) {
        s = n[2].split("");

        for (var o = 0; o < s.length < o; o++) {
          if (-1 !== i.indexOf(s[o])) return !0;
        }
      }

      return new RegExp("^(?:" + n[1] + ")$", s.join()).test(e);
    },
    Date: function Date(e) {
      return !1 !== laravelValidation.helpers.strtotime(e);
    },
    DateFormat: function DateFormat(e, t, a) {
      return !1 !== laravelValidation.helpers.parseTime(e, a[0]);
    },
    Before: function Before(e, t, a) {
      return laravelValidation.helpers.compareDates(this, e, t, a, "<");
    },
    BeforeOrEqual: function BeforeOrEqual(e, t, a) {
      return laravelValidation.helpers.compareDates(this, e, t, a, "<=");
    },
    After: function After(e, t, a) {
      return laravelValidation.helpers.compareDates(this, e, t, a, ">");
    },
    AfterOrEqual: function AfterOrEqual(e, t, a) {
      return laravelValidation.helpers.compareDates(this, e, t, a, ">=");
    },
    Timezone: function Timezone(e) {
      return laravelValidation.helpers.isTimezone(e);
    },
    Json: function Json(e) {
      var t = !0;

      try {
        JSON.parse(e);
      } catch (e) {
        t = !1;
      }

      return t;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ 0:
/*!***************************************************************************!*\
  !*** multi ./resources/assets/js/app.js ./resources/assets/sass/app.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/mir/Projects/laraloop-app/packages/laraloop/core/resources/assets/js/app.js */"./resources/assets/js/app.js");
module.exports = __webpack_require__(/*! /Users/mir/Projects/laraloop-app/packages/laraloop/core/resources/assets/sass/app.scss */"./resources/assets/sass/app.scss");


/***/ })

},[[0,"/assets/js/manifest","/assets/js/vendor"]]]);