import inquirer from "inquirer";
import {ActionType} from "node-plop";

export default function (answers: inquirer.Answers | undefined): ActionType[] {
  const { name, nameCn, plate } = answers!;
  return [{
    type: 'addMany',
    skipIfExists: true,
    data: { name, nameCn, plate },
    base: 'lib/templates/system',
    destination: 'src/pages/{{name}}',
    // templateFiles: 'lib/templates/system/**'
    templateFiles: '**'
  }]
}
