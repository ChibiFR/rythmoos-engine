'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Loop = require('./Loop');

Object.keys(_Loop).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Loop[key];
    }
  });
});

var _Time = require('./Time');

Object.keys(_Time).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Time[key];
    }
  });
});