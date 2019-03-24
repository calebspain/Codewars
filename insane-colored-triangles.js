let swap = str => 
    str.split("").map(char => /^[aeiou]$/.test(char) ? 
            char.toUpperCase() : char).join("");

swap("HelloWorld!"); // HEllOWOrld!
