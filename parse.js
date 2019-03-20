function parse($data) {
    return DataCue.split("").map(command => command);
}

console.log(parse("iiisdoso"));
