!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var r=o("h6c0i"),i=document.querySelector("form");function u(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.elements.delay.value),t=Number(i.elements.step.value),o=Number(i.elements.amount.value),c=1;c<=o;c+=1)u(c,n).then((function(e){r.Notify.success(e)})).catch((function(e){r.Notify.failure(e)})),n+=t}))}();
//# sourceMappingURL=03-promises.bc250b51.js.map