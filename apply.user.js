// ==UserScript==
// @name         Florrio Custom Language Uploader
// @namespace    http://tampermonkey.net/
// @description  Adds a button to upload custom language files in Florrio
// @version      1.0
// @author       FlowerAccepted
// @match        *://*.florr.io/*
// @grant        none
// ==/UserScript==
const btn = document.createElement('button');
btn.textContent = 'Click me to Upload';
btn.style.position = 'fixed';
btn.style.top = '20px';
btn.style.left = '20px';
btn.style.zIndex = 9999;
btn.onclick = () => window.florrio.utils.uploadCustomLang();
document.body.appendChild(btn);