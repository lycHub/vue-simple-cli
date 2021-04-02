#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
process.argv.push('--dest', process.cwd(), '--plopfile', require.resolve('./plopfile.js'));
require("plop/bin/plop");
