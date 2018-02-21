const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

var commands = {};

commands.start = function() {
  console.log('Let the games begin');
}

commands.quit = function() {
  console.log('Until next time :)');
  rl.close();
}

rl.question('Start a two player game of tic tac toe y/n?', (answer) => {
  if (answer === 'y') {
    for (var i = 0; i < board.length; i++) {
      console.log(board[i]);
    }
  } else if (answer === 'n') {
    console.log('type help for a list of commands');
  }
});

commands.help = function() {
  for (var key in commands) {
    console.log(key);
  }
}