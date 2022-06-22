export default function Row(sudoki){
  this.sudoki = sudoki;
}

Row.prototype.isLength = function() {
  if (this.sudoki.length === 9){
    return true;
  } else {
    return false;
  }
}

Row.prototype.isNumbers = function(){
  let i = true
  this.sudoki.forEach( function(element){
    if (10 <= parseInt(element) || parseInt(element) <=0 || isNaN(parseInt(element))) {
      i = false;
    }});
  return i;
}