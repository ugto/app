"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _Task = _interopRequireDefault(require("../models/Task"));
var _tasks = require("../controllers/tasks.controller");
var router = (0, _express.Router)();
router.get("/", _tasks.renderTasks);
router.post("/tasks/add", _tasks.createTask);
router.get("/about", _tasks.aboutTask);
router.get("/edit/:id", _tasks.renderTaskEdit);
router.post("/edit/:id", _tasks.editTask);
router.get("/delete/:id", _tasks.delteTask);
router.get("/taggdone/:id", _tasks.doneTask);
var _default = router;
exports["default"] = _default;