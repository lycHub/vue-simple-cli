import kebabCase from "lodash.kebabcase";
import { join } from "path";
import inquirer from "inquirer";
import {ActionType} from "node-plop";

/*
*  跳过询问jsx
*  plop c ffadsa -- --jsx
*
*  plop c ffadsa -- --jsx false
*  or
*  plop c ffadsa -- --jsx=false
* */

export default function (answers: inquirer.Answers | undefined): ActionType[] {
  if (answers?.path) {
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
      data: { name, rootCls: kebabCase(name) },
      path: `src/${cPath}/${name}${fileSuffix}`,
      // templateFile: join(__dirname, '../../templates/' + tplFile + '.hbs')
      templateFile: 'lib/templates/' + tplFile + '.hbs'
    }]
  }
  return [];
}
