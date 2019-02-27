let fizzBuzz = () => {
    let result = '';
    for (let i = 1; i < 101; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            result += 'fizzbuzz\n';
        } else if (i % 5 === 0) {
            result += 'buzz\n';
        } else if (i % 3 === 0) {
            result += 'fizz\n';
        } else {
            result += i + '\n';
        }
    }
    return result;
}

fizzBuzz();
