
let letterCheck = arr => 
    arr[1].toLowerCase().split("")
        .every(char => arr[0].toLowerCase().indexOf(char) > -1);

letterCheck(["compadres", "DRAPES"]); // true
