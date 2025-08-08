const { read, solve, prettyBoard, renderBoard } = require('../sudoku.js')

describe('renderBoard', () => { 
    test('должен выбросить ошибку при несуществующем индексе', () => {
    const boards = ['123456789123456789123456789123456789123456789123456789123456789123456789123456789'];
    
    expect(() => {
      renderBoard(boards, 5);
    }).toThrow();
  });
});

describe('Проверки для функции prettyBoard', () => {
    const allStrBoards = read();
    const currentBoard = renderBoard(allStrBoards, 1);
    solve(currentBoard);
    
    test('Приходит ли строка из функции?', () =>{
        expect(typeof prettyBoard(currentBoard)).toBe('string')
    })
    test('Правильное значение приходит?', () => {
        expect(prettyBoard(currentBoard)).toEqual(`4 7 5 9 3 6 2 8 1
9 3 2 8 5 1 7 6 4
6 8 1 2 7 4 3 5 9
5 1 7 4 9 2 8 3 6
3 4 9 7 6 8 1 2 5
2 6 8 3 1 5 4 9 7
1 5 3 6 8 7 9 4 2
7 9 4 5 2 3 6 1 8
8 2 6 1 4 9 5 7 3`)
    })
})


