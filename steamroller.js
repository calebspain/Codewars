function pairElement(str) {
    let result = [];
    let arr = str.split('');
    for (let elem of arr) {
        switch(elem) {
            case 'A':
                result.push(['A','T']);
                break;
            case 'T':
                result.push(['T','A']);
                break;
            case 'C':
                result.push(['C','G']);
                break;
            case 'G':
                result.push(['G','C']);
                break;
        }
    }
    return result;
}

console.log(pairElement("GCG"));