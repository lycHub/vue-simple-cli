"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(answers) {
    if (answers === null || answers === void 0 ? void 0 : answers.path) {
        const data = answers.path.split('/');
        let name = answers.path;
        let cPath = 'directives';
        if (data.length > 1) {
            name = data.pop();
            cPath = data.join('/');
        }
        return [{
                type: 'add',
                skipIfExists: true,
                data: { name },
                path: `src/${cPath}/${name}.js`,
                templateFile: 'lib/templates/directive.hbs'
            }];
    }
    return [];
}
exports.default = default_1;
