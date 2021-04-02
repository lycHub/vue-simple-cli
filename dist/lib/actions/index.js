"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSystem = exports.addFilter = exports.addDirective = exports.addComponent = void 0;
var addComponent_1 = require("./addComponent");
Object.defineProperty(exports, "addComponent", { enumerable: true, get: function () { return __importDefault(addComponent_1).default; } });
var addDirective_1 = require("./addDirective");
Object.defineProperty(exports, "addDirective", { enumerable: true, get: function () { return __importDefault(addDirective_1).default; } });
var addFilter_1 = require("./addFilter");
Object.defineProperty(exports, "addFilter", { enumerable: true, get: function () { return __importDefault(addFilter_1).default; } });
var addSystem_1 = require("./addSystem");
Object.defineProperty(exports, "addSystem", { enumerable: true, get: function () { return __importDefault(addSystem_1).default; } });
