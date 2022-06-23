import Row from './../src/row.js'
import Column from './../src/column.js'
describe('Column', () => {

  test('should create a column of rows', () => {
    const row1 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const row2 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const row3 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const row4 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const row5 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const row6 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const row7 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const row8 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const row9 = new Row([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const column = new Column(row1.sudoki, row2.sudoki, row3.sudoki, row4.sudoki, row5.sudoki, row6.sudoki, row7.sudoki, row8.sudoki, row9.sudoki);
    console.log(column.line);
    expect(column.line).toEqual( [[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5,  6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[ 1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9],[  1, 2, 3, 4, 5, 6, 7, 8, 9],[1, 2, 3, 4, 5, 6, 7, 8, 9]]);
  });

  test('should test for vertical repeats', () => {
    const row1 = new Row([4, 3, 5, 2, 6, 9, 7, 8, 1]);
    const row2 = new Row([6, 8, 2, 5, 7, 1, 4, 9, 3]);
    const row3 = new Row([1, 9, 7, 8, 3, 4, 5, 6, 2]);
    const row4 = new Row([8, 2, 6, 1, 9, 5, 3, 4, 7]);
    const row5 = new Row([3, 7, 4, 6, 8, 2, 9, 1, 5]);
    const row6 = new Row([9, 5, 1, 7, 4, 3, 6, 2, 8]);
    const row7 = new Row([5, 1, 9, 3, 2, 6, 8, 7, 4]);
    const row8 = new Row([2, 4, 8, 9, 5, 7, 1, 3, 6]);
    const row9 = new Row([7, 6, 3, 4, 1, 8, 2, 5, 9]);
    const column = new Column(row1.sudoki, row2.sudoki, row3.sudoki, row4.sudoki, row5.sudoki, row6.sudoki, row7.sudoki, row8.sudoki, row9.sudoki);
    column.repeats();
    expect(column.line).toEqual([[4, 3, 5, 2, 6, 9, 7, 8, 1], [6, 8, 2, 5, 7, 1, 4, 9, 3], [1, 9, 7, 8, 3, 4, 5, 6, 2], [8, 2, 6, 1, 9, 5, 3, 4, 7], [3, 7, 4, 6, 8, 2, 9, 1, 5], [9, 5, 1, 7, 4, 3, 6, 2, 8], [5, 1, 9, 3, 2, 6, 8, 7, 4], [2, 4, 8, 9, 5, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 9]]);
  });
});