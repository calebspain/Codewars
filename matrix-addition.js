// MATRIX ADDITION

let  matrixAddition = (a, b) =>
    a.map(row => row.map((num, index, row) => 
        num + b[a.indexOf(row)][index]));

matrixAddition(
    [ [1, 2],
      [1, 2] ],
//      +
    [ [2, 3],
      [2, 3] ] );

/* 
    [ [ 3, 5 ], 
      [ 3, 5 ] ]
*/