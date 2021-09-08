'use strict';

function deepCopy(temp) {
  return JSON.parse(JSON.stringify(temp));
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ucFirst(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function isBlank(s) {
  return s.trim().length === 0;
}

function escapeHTML(html) {
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\'/g, '&apos;');
}

function randomRGB() {
  var rgb = [];
  while (rgb.length < 3) {
    rgb.push(rand(0, 255));
  }
  return 'rgb(' + rgb + ')';
}


/* randomHex */
/* componentToHex */
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
/* rgbtToHex */
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function createEl(tag, txt) {
  tag = document.createElement(tag);
  if (txt) {
    txt = document.createTextNode(txt);
    tag.appendChild(txt);
  }
  return tag;
}

function emptyEl(el) {
  while (el.firstChild) {
    el.firstChild.remove();
  }
}

function fragmentFromString(strHTML) {
  /* https://developer.mozilla.org/en-US/docs/Web/API/Range/createContextualFragment */
  return document.createRange().createContextualFragment(strHTML);
}

function hasFormValidation() {
  return (typeof document.createElement('input').checkValidity === 'function');
}

function isChecked(collection) {
  var len = collection.length;
  for (var i = 0; i < len; i++) {
    if (collection[i].checked) {
      return true;
    }
  }
  return false;
}