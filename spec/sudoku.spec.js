const renderBoard = require('../sudoku.js')



describe('renderBoard', () => { 
    test('должен выбросить ошибку при несуществующем индексе', () => {
    const boards = ['123456789123456789123456789123456789123456789123456789123456789123456789123456789'];
    
    expect(() => {
      renderBoard(boards, 5);
    }).toThrow();
  });
});

