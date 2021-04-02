"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_camelcase_1 = tslib_1.__importDefault(require("lodash.camelcase"));
function default_1(answers) {
    const actions = [];
    if (answers === null || answers === void 0 ? void 0 : answers.path) {
        const data = answers.path.split('/');
        let name = answers.path;
        let cPath = 'filters';
        if (data.length > 1) {
            name = data.pop();
            cPath = data.join('/');
        }
        else {
            actions.push({
                type: 'append',
                path: `src/${cPath}/index.js`,
                template: `export { default as ${lodash_camelcase_1.default(name)} } from './${name}';`
            });
        }
        actions.unshift({
            type: 'add',
            skipIfExists: true,
            path: `src/${cPath}/${name}.js`,
            templateFile: 'lib/templates/filter.hbs'
        });
    }
    return actions;
}
exports.default = default_1;
