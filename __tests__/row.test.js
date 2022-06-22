import Row from './../src/row.js'

describe('Row', () => {

  test('should create a row with numbers', () => {
    const sudoku = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sudoku.sudoki).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('should check if length is 9', () => {
    const sudoku = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sudoku.isLength()).toEqual(true);
  });

  test('should check if length is not 9', () => {
    const sudoku = new Row([1, 2, 3, 4, 5, 6]);
    expect(sudoku.isLength()).toEqual(false);
  });

  test('should check if all items in row are from 1-9', () => {
    const sudoku = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(sudoku.isNumbers()).toEqual(true);
  });

  test('should check if an items in row isnt from 1-9', () => {
    const sudoku = new Row(["a", 12, 0]);
    expect(sudoku.isNumbers()).toEqual(false);
  });
});