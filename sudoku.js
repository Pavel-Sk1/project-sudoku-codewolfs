const fs = require('fs')

function read() {
  const strSudoku = fs.readFileSync('./puzzles.txt', 'utf-8')
  const arrSudoku = strSudoku.split('\r\n');
  arrSudoku.pop();
  return arrSudoku   
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function renderBoard(boards, numQuest) {
const strOfBoard = boards[numQuest];
let arrOfBoard =  strOfBoard.match(/.{9}/g);
arrOfBoard = arrOfBoard.map((elem) => elem.split(``));
return arrOfBoard;
}



function solve(board) {

    const isValid = (row, col, num) => {
    const number = num.toString();

    // Проверка строки и столбца
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === number || board[i][col] === number) {
        return false;
      }
    }

    // Проверка квадрата 3x3
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === number) {
          return false;
        }
      }
    }

    return true;
  };

  const innerSolve = () => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '-') {
          for (let num = 1; num <= 9; num++) {
            if (isValid(row, col, num)) {
              board[row][col] = num.toString();

              if (innerSolve()) return true;

              board[row][col] = '-'; // Backtrack
            }
          }

          return false; // Если не найдено допустимое число
        }
      }
    }

    return true; // Решено
  };

  innerSolve();

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}  



function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
} 

function prettyBoard(solvedBoard) {
  const solvedArrBoard = solvedBoard.map((el) => el.join(' '))
  const solvedStrBoard = solvedArrBoard.join('\n')
  return solvedStrBoard
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

module.exports = { read, solve, isSolved, prettyBoard }
