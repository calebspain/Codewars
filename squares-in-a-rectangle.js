function findSquares(x,y){
  let sum = 0;
  while (x > 0 && y > 0) {
    sum += x * y;
    x--;
    y--;
  }
  return sum;
}
