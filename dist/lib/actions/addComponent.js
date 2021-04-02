"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const lodash_kebabcase_1 = tslib_1.__importDefault(require("lodash.kebabcase"));
/*
*  跳过询问jsx
*  plop c ffadsa -- --jsx
*
*  plop c ffadsa -- --jsx false
*  or
*  plop c ffadsa -- --jsx=false
* */
function default_1(answers) {
    if (answers === null || answers === void 0 ? void 0 : answers.path) {
        const data = answers.path.split('/');
        let name = answers.path;
        let cPath = 'components';
        if (data.length > 1) {
            name = data.pop();
            cPath = data.join('/');
        }
        let tplFile = 'component';
        let fileSuffix = '.vue';
        if (answers.jsx) {
            tplFile = 'componentJSX';
            fileSuffix = '.jsx';
        }
        return [{
                type: 'add',
                skipIfExists: true,
                data: { name, rootCls: lodash_kebabcase_1.default(name) },
                path: `src/${cPath}/${name}${fileSuffix}`,
                // templateFile: join(__dirname, '../../templates/' + tplFile + '.hbs')
                templateFile: 'lib/templates/' + tplFile + '.hbs'
            }];
    }
    return [];
}
exports.default = default_1;
