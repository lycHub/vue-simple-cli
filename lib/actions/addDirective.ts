import { join } from "path";
import inquirer from "inquirer";
import {ActionType} from "node-plop";

export default function (answers: inquirer.Answers | undefined): ActionType[] {
  if (answers?.path) {
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
    }]
  }
  return [];
}
