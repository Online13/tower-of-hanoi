// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"l5Hyd":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e7314d0ffc041ec5";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"cmXY9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appTs = require("./App.ts");
var _appTsDefault = parcelHelpers.interopDefault(_appTs);
var _storageServiceTs = require("./StorageService.ts");
var _storageServiceTsDefault = parcelHelpers.interopDefault(_storageServiceTs);
window.addEventListener("load", (e)=>{
    // to handle the splash screen at first
    // it's only once
    if ((0, _storageServiceTsDefault.default).get("@HANOI_SEEN").length > 0) setTimeout(()=>{
        document.querySelector(".loader")?.classList.add("hidden");
        (0, _storageServiceTsDefault.default).set("@HANOI_SEEN", "1");
    }, 2000);
    else {
        const loader = document.querySelector(".loader");
        loader.style.transition = "none";
        loader.classList.add("hidden");
    }
    const app = new (0, _appTsDefault.default)((0, _storageServiceTsDefault.default));
    app.init();
    app.handleEvents();
});

},{"./App.ts":"lSUxS","./StorageService.ts":"ao6s9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lSUxS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tuilTs = require("./Tuil.ts");
var _tuilTsDefault = parcelHelpers.interopDefault(_tuilTs);
/**
 * represent our App
 *
 * @class App
 */ class App {
    #size;
    #tuils;
    #stack;
    #controller;
    #signal;
    #userMove;
    constructor(storageService){
        this.storageService = storageService;
        this.#stack = [];
        this.#tuils = [];
        (0, _tuilTsDefault.default).global.intermediateHeight = 80;
        (0, _tuilTsDefault.default).MAX = +this.storageService.get("@HANOI_MAX") || 5;
        (0, _tuilTsDefault.default).DURATION = +this.storageService.get("@HANOI_DURATION");
        (0, _tuilTsDefault.default).DELAY = +this.storageService.get("@HANOI_DELAY");
        this.#size = (0, _tuilTsDefault.default).MAX;
        this.#controller = new AbortController();
        this.#signal = this.#controller.signal;
        this.#userMove = {
            from: null,
            to: null
        };
    }
    /**
     * use especially on debug.
     * It display the game on console
     *
     * @private
     * @memberof App
     */ display() {
        const max = this.#size;
        for(let i = 0; i < max - 1; i++)console.log(`${this.#stack[0][max - 1 - i] ?? " "}    ${this.#stack[1][max - 1 - i] ?? " "}    ${this.#stack[2][max - 1 - i] ?? " "}`);
        console.log(`${this.#stack[0][0] ?? "."}    ${this.#stack[1][0] ?? "."}    ${this.#stack[2][0] ?? "."}`);
        console.log("-----------");
    }
    /**
     * move a tuil at {from} stack to {to} stack
     *
     * @private
     * @param {number} from the stack where we begin
     * @param {number} to the destination stack
     * @returns {Promise<void>}
     * @memberof App
     */ async move(from, to) {
        // if the game need to stop, we stop the move
        if (!this.#signal.aborted && this.#stack[from].length > 0) {
            // that exaclty what happen in back
            // we remove a tuil at first on {from} stack
            // and we add it at first of {to} stack
            let v = this.#stack[from].pop();
            this.#stack[to].push(v);
            // we animate that here
            await this.#tuils[v - 1].moveTo(this.#signal, to, this.#stack[to].length);
        }
    }
    /**
     * that resolve the hanoi problem using recursive algorithm
     *
     * @private
     * @param {number} n the stack we move
     * @param {number} x init position
     * @param {number} y destination position
     * @param {number} z intermediary position
     * @return {Promise<void>} 
     * @memberof App
     */ async hanoi(n, x, y, z) {
        if (this.#signal.aborted || n === 0) return;
        await this.hanoi(n - 1, x, z, y);
        await this.move(x, y);
        await this.hanoi(n - 1, z, y, x);
    }
    /**
     * handle event on this App
     * @memberof App
     */ handleEvents() {
        const portal = document.querySelector(".portal");
        const modal = document.querySelector(".modal");
        const sidebar_setting = document.querySelector(".sidebar-setting");
        const selected_zones = document.querySelectorAll(".zone-item");
        const btn_info = document.querySelector(".btn-info");
        const btn_close_about = document.querySelector(".btn-close-about");
        const btn_solve = document.querySelector(".btn-solve");
        const btn_setting = document.querySelector(".btn-setting");
        const inputNbDisc = document.querySelector("#nbDiscInput");
        const outputNbDisc = document.querySelector("#nbDiscOutput");
        const durationInput = document.querySelector("#durationInput");
        const durationOutput = document.querySelector("#durationOutput");
        const delayInput = document.querySelector("#delayInput");
        const delayOutput = document.querySelector("#delayOutput");
        btn_info?.addEventListener("click", (e)=>{
            portal?.classList.add("show");
        });
        modal?.addEventListener("click", (e)=>{
            e.stopPropagation();
        });
        btn_close_about?.addEventListener("click", (e)=>{
            portal?.classList.remove("show");
        });
        portal?.addEventListener("click", (e)=>{
            portal?.classList.remove("show");
        });
        btn_solve?.addEventListener("click", (e)=>{
            this.init();
            this.hanoi(this.#size, 0, 2, 1).then(()=>this.display);
        });
        btn_setting?.addEventListener("click", (e)=>{
            sidebar_setting?.classList.toggle("show");
        });
        inputNbDisc.value = this.#size.toString();
        outputNbDisc.innerHTML = this.#size.toString();
        durationInput.value = (0, _tuilTsDefault.default).DURATION.toString();
        durationOutput.innerHTML = (0, _tuilTsDefault.default).DURATION.toString();
        delayInput.value = (0, _tuilTsDefault.default).DELAY.toString();
        delayOutput.innerHTML = (0, _tuilTsDefault.default).DELAY.toString();
        inputNbDisc?.addEventListener("input", (e)=>{
            this.#controller.abort();
            const value = inputNbDisc.value;
            outputNbDisc.innerHTML = value;
            (0, _tuilTsDefault.default).MAX = +value;
            this.init(), this.storageService.set("@HANOI_MAX", (0, _tuilTsDefault.default).MAX.toString());
        });
        durationInput?.addEventListener("input", (e)=>{
            const value = durationInput.value;
            durationOutput.innerHTML = value;
            (0, _tuilTsDefault.default).DURATION = +value;
            this.storageService.set("@HANOI_DURATION", (0, _tuilTsDefault.default).DURATION.toString());
        });
        delayInput?.addEventListener("input", (e)=>{
            const value = delayInput.value;
            delayOutput.innerHTML = value;
            (0, _tuilTsDefault.default).DELAY = +value;
            this.storageService.set("@HANOI_DELAY", (0, _tuilTsDefault.default).DELAY.toString());
        });
        selected_zones.forEach((zone, id)=>{
            zone.addEventListener("click", (event)=>{
                console.log(id);
                if (this.#userMove.from === null) {
                    if (this.#stack[id].length > 0) {
                        this.#userMove.from = id;
                        document.querySelector(`.zone-item.zone-${id + 1}`)?.classList.add("from");
                    }
                } else {
                    const fromStack = this.#stack[this.#userMove.from];
                    const toStack = this.#stack[id];
                    if (toStack.length === 0 || fromStack[fromStack.length - 1] < toStack[toStack.length - 1]) {
                        this.#userMove.to = id;
                        document.querySelector(`.zone-item.zone-${id + 1}`)?.classList.add("to");
                        this.move(this.#userMove.from, this.#userMove.to).then(()=>{
                            document.querySelector(`.zone-item.zone-${this.#userMove.from + 1}`)?.classList.remove("from");
                            document.querySelector(`.zone-item.zone-${this.#userMove.to + 1}`)?.classList.remove("to");
                            this.#userMove.from = null;
                            this.#userMove.to = null;
                        });
                    }
                }
            });
        });
    }
    /**
     * init this App
     * @param {number} size 
     */ init() {
        this.#size = (0, _tuilTsDefault.default).MAX;
        this.#controller = new AbortController();
        this.#signal = this.#controller.signal;
        const content = document.querySelector(".content");
        content.style.height = `calc(var(--tuil-height) * ${this.#size + 5} + ${(0, _tuilTsDefault.default).global.intermediateHeight}px )`;
        const zoneList = document.querySelector(".zone-list");
        const zoneList2 = document.querySelector(".zone-to-select");
        zoneList.style.height = `calc(var(--tuil-height) * ${this.#size + 5})`;
        zoneList2.style.height = `calc(var(--tuil-height) * ${this.#size + 5})`;
        zoneList2.style.top = `${(0, _tuilTsDefault.default).global.intermediateHeight}px`;
        (0, _tuilTsDefault.default).global.parentHeight = content.getBoundingClientRect().height;
        for (const tuil of this.#tuils)content.removeChild(tuil.getHTMLElement());
        this.#stack = [];
        this.#tuils = [];
        for(let i = 0; i < 3; i++)this.#stack[i] = [];
        // init stack
        for(let i1 = 0; i1 < this.#size; i1++)this.#stack[0][i1] = this.#size - i1;
        // init tuil
        for(let i2 = 0; i2 < this.#size; i2++){
            this.#tuils.push(new (0, _tuilTsDefault.default)(i2, 0));
            content.appendChild(this.#tuils[i2].render());
            this.#tuils[i2].initPosition(this.#size - i2 - 1);
        }
    }
}
exports.default = App;

},{"./Tuil.ts":"eYxy0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eYxy0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * represent a simple tuil.
 * we handle position, render and animation of the tuil here
 *
 * @class Tuil
 */ class Tuil {
    /**
     * store the dimension of some environment HTML elements.
     * We need it in @method moveTo to make animation.
     * @static
     * @type {{ [key: string]: number }}
     * @memberof Tuil
     */ static global = {};
    /**
     * list of possible color of the tuil
     * @static
     * @memberof Tuil
     */ static COLORS = [
        "rgb(244, 70, 70)",
        "rgb(249, 255, 59)",
        "rgb(19, 240, 136)",
        "rgb(57, 134, 255)",
        "rgb(255, 154, 23)"
    ];
    /**
     * animation duration of the tuil when he move
     * @static
     * @memberof Tuil
     */ static DURATION = 200;
    /**
     * animation delay of the tuil on each move
     *
     * @static
     * @memberof Tuil
     */ static DELAY = 200;
    /**
     * maximum number of tuil
     *
     * @static
     * @memberof Tuil
     */ static MAX = 0;
    /**
     * Creates an instance of Tuil.
     * @param {number} id the _id of an instance of tuil
     * @param {number} stack the column where the tuil begin
     * @memberof Tuil
     */ constructor(id, stack){
        this.id = id;
        this.current_stack = stack;
        this.object = undefined;
    }
    /**
     * handle animation when we move this instance of tuil to given stack
     *
     * @param {AbortSignal} signal we need that to stop all setTimeout in that method
     * @param {number} stack the next stack of this tuil
     * @param {number} tuils the number of tuils on this given stack
     * @returns {Promise<void>}
     * @memberof Tuil
     */ async moveTo(signal, stack, tuils) {
        // console.log(`[${this.id}] ${this.current_stack} move to ${stack}`);
        // move to top
        this.object.style.transition = `transform ${Tuil.DURATION}ms`;
        const top = -1 * (Tuil.global.parentHeight - Tuil.global.intermediateHeight + 20);
        await new Promise((next)=>{
            const id = setTimeout(()=>{
                this.object.style.transform = `translate(
                        calc(${this.current_stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),
                       ${top}px
                    )`;
                next(null);
            }, Tuil.DURATION);
            signal.addEventListener("abort", (e)=>{
                clearTimeout(id);
            });
        });
        await new Promise((next)=>{
            const id = setTimeout(()=>{
                this.current_stack = stack;
                next(null);
            }, Tuil.DELAY);
            signal.addEventListener("abort", (e)=>{
                clearTimeout(id);
            });
        });
        await new Promise((next)=>{
            const id = setTimeout(()=>{
                this.object.style.transform = `translate(
                        calc(${stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),
                        ${top}px
                    )`;
                next(null);
            }, Tuil.DURATION);
            signal.addEventListener("abort", (e)=>{
                clearTimeout(id);
            });
        });
        await new Promise((next)=>{
            const id = setTimeout(()=>{
                next(null);
            }, Tuil.DELAY);
            signal.addEventListener("abort", (e)=>{
                clearTimeout(id);
            });
        });
        await new Promise((next)=>{
            const id = setTimeout(()=>{
                this.object.style.transform = `translate(
                        calc(${stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),
                        calc(var(--tuil-height) * ${-1 * (tuils - 1)})
                    )`;
                next(null);
            }, Tuil.DURATION);
            signal.addEventListener("abort", (e)=>{
                clearTimeout(id);
            });
        });
    }
    /**
     * init position and transition of this tuil 
     *
     * @param {number} top position of tuil at first
     * @memberof Tuil
     */ initPosition(top) {
        this.object.style.transition = `transform ${Tuil.DURATION}ms`;
        this.object.style.transform = `translate(
                calc(${this.current_stack} * var(--max-size-zone) + (var(--max-size-zone) / 2 - 50%)),
                calc(${-top} * var(--tuil-height))
            )`;
    }
    /**
     * create instance of HTMLDivElement that represente the tuil in HTML.
     * We initialize the color and his size here
     *
     * @return {HTMLDivElement}
     * @memberof Tuil
     */ render() {
        const tuil = document.createElement("div");
        tuil.dataset.index = (this.id + 1).toString();
        tuil.dataset.stack = this.current_stack.toString();
        tuil.classList.add("tuil");
        const value = Tuil.COLORS[this.id % Tuil.COLORS.length];
        Object.assign(tuil.style, {
            backgroundColor: value,
            width: `calc(var(--max-size-zone) * ${(this.id + 1) / (Tuil.MAX + 2)})`
        });
        this.object = tuil;
        return this.object;
    }
    /**
     * getter for the tuil in HTML
     *
     * @return {*}  {(HTMLElement | undefined)}
     * @memberof Tuil
     */ getHTMLElement() {
        return this.object;
    }
}
exports.default = Tuil;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ao6s9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StorageService", ()=>StorageService);
class StorageService {
    sessionKey = {
        "@HANOI_SEEN": null
    };
    localKey = {
        "@HANOI_DURATION": null,
        "@HANOI_DELAY": null,
        "@HANOI_MAX": null
    };
    constructor(){}
    set(key, value) {
        let storage = null;
        if (key in this.sessionKey) storage = sessionStorage;
        else storage = localStorage;
        storage.setItem(key, value);
    }
    get(key) {
        let storage = null;
        if (key in this.sessionKey) storage = sessionStorage;
        else storage = localStorage;
        return storage.getItem(key) === null ? "" : storage.getItem(key);
    }
}
exports.default = Object.freeze(new StorageService());

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["l5Hyd","cmXY9"], "cmXY9", "parcelRequire63d5")

//# sourceMappingURL=index.fc041ec5.js.map
