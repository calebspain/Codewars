let partlist = arr =>
    // map through array
    arr.map((str, index, arr) => 
        // get first string
        [arr.slice(0, index + 1).join(' '), 
            // get second string 
            arr.slice(index + 1, arr.length).join(' ')])
                // remove the last array
                .splice(0, arr.length - 1);

partlist(['This', 'is', 'an', 'algorithm', 'that', 'I', 'solved']);
/*
[ [ 'This', 'is an algorithm that I solved' ],
  [ 'This is', 'an algorithm that I solved' ],
  [ 'This is an', 'algorithm that I solved' ],
  [ 'This is an algorithm', 'that I solved' ],
  [ 'This is an algorithm that', 'I solved' ],
  [ 'This is an algorithm that I', 'solved' ] ]
  */
