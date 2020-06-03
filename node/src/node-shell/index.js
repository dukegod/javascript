/**
 * Created by hui on 2017/10/27.
 */
const resolve = require('path').resolve;
const program = require('commander');

console.log(resolve);
console.log(process.argv);

program
.version('0.1.0')
.option('-p, --peppers', 'Add peppers')
.option('-P, --pineapple', 'Add pineapple')
.option('-b, --bbq-sauce', 'Add bbq sauce')
.option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
.parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
if (program.pineapple) console.log('  - pineapple');
if (program.bbqSauce) console.log('  - bbq');
console.log('  - %s cheese', program.cheese);
