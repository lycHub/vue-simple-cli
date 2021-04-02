import inquirer from "inquirer";
import camelCase from "lodash.camelcase";
import {ActionType} from "node-plop";
import { join } from "path";

export default function (answers: inquirer.Answers | undefined): ActionType[] {
  const actions = [];
  if (answers?.path) {
    const data = answers.path.split('/');
    let name = answers.path;
    let cPath = 'filters';
    if (data.length > 1) {
      name = data.pop();
      cPath = data.join('/');
    } else {
      actions.push({
        type: 'append',
        path: `src/${cPath}/index.js`,
        template: `export { default as ${camelCase(name)} } from './${name}';`
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
