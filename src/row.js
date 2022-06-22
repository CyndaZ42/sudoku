export default function Row(sudoki){
  this.sudoki = sudoki;
}

Row.prototype.isValid = function() {
  if (this.sudoki.length === 9){
    return true;
  } else {
    return false;
  }
}