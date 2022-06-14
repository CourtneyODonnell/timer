/*
Implement an alarm clock / timer which will beep after a
specified amount of time has passed. The user can specify
an unlimited number of alarms using command line arguments

Example usage:
node timer1.js 10 3 5 15 9 
This will make it beep at:
3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/
//variable arguments assigning process args from command line (sliced 2), filtering only arguments that are >=0 seconds and arguments that ARE a number ONLY
const arguments = process.argv.slice(2).filter(time => time >= 0).filter(time => !isNaN(time));
//for each input number when node is called, set timeout to the input number times 1000 (to make it seconds)
arguments.forEach((time) => {
  //time out creating the alarm sound, multiplying input number by 1000 to get timing correct
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000)
});  
//process.stdout.write('\x07');
//makes beep sound (note to self: sound only works in external terminal, not terminal within vscode)

