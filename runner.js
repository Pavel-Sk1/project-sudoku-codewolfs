// Используйте для решения судоку необходимые функции из файла sudoku.js
const { read, solve, prettyBoard, renderBoard } = require('./sudoku')

function resolveSudoku () {
    const realNumQuest = Number(process.argv[2]);
    const indexQuest = realNumQuest - 1;
    if ((indexQuest < 0) || (indexQuest > 14) || (isNaN(indexQuest))) return console.log(`Введите № задачи от 1 до 15`);
    const allStrBoards = read();
    const currentBoard = renderBoard(allStrBoards, indexQuest);
    solve(currentBoard);
    const solvedStrBoard = prettyBoard(currentBoard);
    return console.log(solvedStrBoard)
}
resolveSudoku ()



