import { NodePlopAPI } from 'plop';
import {addComponent, addDirective, addFilter, addSystem} from "./lib/actions";

export default function (plop: NodePlopAPI) {
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
    actions: addComponent
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
    actions: addDirective
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
    actions: addFilter
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
    actions: addSystem
  });
};
