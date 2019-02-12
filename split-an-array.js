function split(arr, prop) {
    let truthy = [];
    let falsy = [];
    for (let obj of arr) {
        if (obj[prop]) {
            truthy.push(obj);
        } else {
            falsy.push(obj);
        }
    } 
    return [truthy, falsy];
}
