"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("./lib/actions");
function default_1(plop) {
    plop.setGenerator('c', {
        description: 'add a component',
        prompts: [
            {
                type: 'input',
                name: 'path',
                message: 'Component name'
            },
            {
                type: 'confirm',
                name: 'jsx',
                message: 'Is JSX?',
                default: false
            }
        ],
        actions: actions_1.addComponent
    });
    plop.setGenerator('d', {
        description: 'add a directive',
        prompts: [
            {
                type: 'input',
                name: 'path',
                message: 'Directive name'
            }
        ],
        actions: actions_1.addDirective
    });
    plop.setGenerator('f', {
        description: 'add a filter',
        prompts: [
            {
                type: 'input',
                name: 'path',
                message: 'Filter name'
            }
        ],
        actions: actions_1.addFilter
    });
    plop.setGenerator('s', {
        description: 'add a system',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'System name'
            },
            {
                type: 'input',
                name: 'nameCn',
                message: 'System chinese name'
            },
            {
                type: 'list',
                name: 'plate',
                message: 'admin or user?',
                default: 'admin',
                choices: ['admin', 'user']
            }
        ],
        actions: actions_1.addSystem
    });
}
exports.default = default_1;
;
