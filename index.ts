#! /usr/bin/env node

process.argv.push('--dest', process.cwd(), '--plopfile', require.resolve('./plopfile.js'));
import 'plop/bin/plop';
