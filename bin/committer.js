#!/usr/bin/env node

var program = require('commander');

var committer = require('../lib/committer')

program
  .version('0.0.1')
  // .option('-i, --peppers', 'Add peppers')
  // .option('-P, --pineapple', 'Add pineapple')
  // .option('-b, --bbq', 'Add bbq sauce')
  // .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('Committer!');
// if (program.peppers) console.log('  - peppers');
// if (program.pineapple) console.log('  - pineapple');
// if (program.bbq) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);

committer.hey()
