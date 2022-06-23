import Row from './../src/row.js'

export default function Column(row1, row2, row3, row4, row5, row6, row7, row8, row9){
  this.line = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
}

Column.prototype.repeats = function() {
  let column0 = [];
  let column1 = [];
  let column2 = [];
  let column3 = [];
  let column4 = [];
  let column5 = [];
  let column6 = [];
  let column7 = [];
  let column8 = [];
  for (let i = 0; i < 9; i++) {
    eval('column' + i + ' = [this.line[0][i], this.line[1][i], this.line[2][i], this.line[3][i], this.line[4][i], this.line[5][i], this.line[6][i], this.line[7][i], this.line[8][i]]');
    //let row1 = new Row ([this.line[0][i], this.line[1][i], this.line[2][i], this.line[3][i], this.line[4][i], this.line[5][i], this.line[6][i], this.line[7][i], this.line[8][i]]) 
    eval('console.log(column' + i + ')');
  }
  const vertical0 = new Row(column0);
  const vertical1 = new Row(column1);
  const vertical2 = new Row(column2);
  const vertical3 = new Row(column3);
  const vertical4 = new Row(column4);
  const vertical5 = new Row(column5);
  const vertical6 = new Row(column6);
  const vertical7 = new Row(column7);
  const vertical8 = new Row(column8);

  vertical0.repeats()
}

//Column.prototype.makeRow = function(named){
//  let named = new Row ([this.line[0][i], this.line[1][i], this.line[2][i], this.line[3][i], this.line[4][i], this.line[5][i], this.line[6][i], this.line[7][i], this.line[8][i]]);
//}