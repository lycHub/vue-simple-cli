"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(answers) {
    const { name, nameCn, plate } = answers;
    return [{
            type: 'addMany',
            skipIfExists: true,
            data: { name, nameCn, plate },
            base: 'lib/templates/system',
            destination: 'src/pages/{{name}}',
            // templateFiles: 'lib/templates/system/**'
            templateFiles: '**'
        }];
}
exports.default = default_1;
