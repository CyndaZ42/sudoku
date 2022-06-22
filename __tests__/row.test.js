import Row from './src/row.js'

describe('Row', () => {

  test('should create a row with numbers', () => {
    const sudoku = new Card([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sudoku.sudoki).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });


});