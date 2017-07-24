const moment = require('moment');
const chalk = require('chalk');

function momentChalkPractice(){
  let dayDatemessage = chalk.blue(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'));
  console.log('It is ', dayDatemessage, '.');
  let numberDay = chalk.hex('#AB769C')(moment().format('DDDo'));
  console.log('It is the ', numberDay, ' day of the year.');
  let Seconds = chalk.cyan(moment().format('sssss'));
  console.log('It is ', Seconds, ' seconds into the day.');
  let Is = chalk.green('is');
  console.log('It ', Is, ' during Daylight Savings Time.');
  let IsNot = chalk.red('is not');
  console.log('It ', IsNot, ' during Daylight Savings Time.');
};

module.export = momentChalkPractice();
