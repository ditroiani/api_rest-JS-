"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Imports external
var _express = require('express');

// Imports internal
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

// Router handler
const router = new (0, _express.Router)()

// Routes
router.post('/', _UserController2.default.store)
router.get('/', _loginRequired2.default, _UserController2.default.index)
router.get('/:id', _loginRequired2.default, _UserController2.default.show)
router.put('/', _loginRequired2.default, _UserController2.default.update)
router.delete('/', _loginRequired2.default, _UserController2.default.delete)

// Export router handler
exports. default = router