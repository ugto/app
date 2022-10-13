"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./databse");
var _config = require("./config");
_app["default"].listen(_config.PORT);
console.log("SERVIDOR EN PUERTO", _config.PORT);