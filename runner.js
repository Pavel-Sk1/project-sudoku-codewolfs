// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, solve, isSolved, prettyBoard, renderBoard } = require('./sudoku')

const realNumQuest = process.argv[2];
let indexQuest = +realNumQuest - 1;
if ((indexQuest < 0) || (indexQuest > 14)) console.log(`Введите № задачи от 1 до 15`);

