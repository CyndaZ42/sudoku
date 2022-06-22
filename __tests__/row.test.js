import Row from './../src/row.js'

describe('Row', () => {

  test('should create a row with numbers', () => {
    const sudoku = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sudoku.sudoki).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should check if length is 9', () => {
    const sudoku = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sudoku.isValid()).toEqual(true);
  });

  test('should check if length is not 9', () => {
    const sudoku = new Row([1, 2, 3, 4, 5, 6]);
    expect(sudoku.isValid()).toEqual(false);
  });
});