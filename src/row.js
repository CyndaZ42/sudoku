export default function Row(sudoki){
  this.sudoki = sudoki;
}

Row.prototype.isLength = function() {
  if (this.sudoki.length === 9){
    return true;
  } else {
    return false;
  }
};

Row.prototype.isNumbers = function(){
  let i = true
  this.sudoki.forEach( function(element){
    if (10 <= parseInt(element) || parseInt(element) <=0 || isNaN(parseInt(element))) {
      i = false;
    }});
  return i;
};

Row.prototype.repeats = function(){
  let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sortArray = this.sudoki;
  sortArray.sort();
  let i = true;
  sortArray.forEach( function(element, index){
    if (element !== testArray[index]){
      i = false;
    }
    });
  return i;
};