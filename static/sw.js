if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>i(e,a),f={module:{uri:a},exports:c,require:r};s[a]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(o(...e),c)))}}define(["./programs/ParacordDemo/workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./programs/ParacordDemo/assets/index-4c588eed.js",revision:null},{url:"./programs/ParacordDemo/assets/index-7ff3a29e.css",revision:null},{url:"/programs/ParacordDemo/index.html",revision:"3b3447ce2b4939dfe8f5213eba1dec26"},{url:"./programs/ParacordDemo/registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"/programs/ParacordDemo/logo.svg",revision:"40c5cdbd3954b7fae4e15a0d55349c1a"},{url:"./programs/ParacordDemo/iconMasks/maskable_icon_x128.png",revision:"cc20d8f3f19bfd06fa1975951f0e751d"},{url:"./programs/ParacordDemo/iconMasks/maskable_icon_x192.png",revision:"745f0ffdea4ed6008d9e8bb597001995"},{url:"./programs/ParacordDemo/iconMasks/maskable_icon_x384.png",revision:"343c7af6864da040ebe8c6570cf5da09"},{url:"./programs/ParacordDemo/iconMasks/maskable_icon_x48.png",revision:"de3ede3f62fd89821c6913b47c29c29e"},{url:"./programs/ParacordDemo/iconMasks/maskable_icon_x512.png",revision:"eba9b69c13d53079f968022932351f0a"},{url:"./programs/ParacordDemo/iconMasks/maskable_icon_x72.png",revision:"5fd821fabbe228a58a66c7fe6fdaa2a7"},{url:"./programs/ParacordDemo/iconMasks/maskable_icon_x96.png",revision:"a70fc4a4dbb48b10227fce59f132d6ac"},{url:"./programs/ParacordDemo/manifest.webmanifest",revision:"6a4d14f71e6202f726f2577266e22a13"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));