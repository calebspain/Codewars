function nextItem(xs, item) {
    // let nextIndex = xs.indexOf(item) + 1;
    // //Array.isArray(xs) ? '' : xs = xs.split('');
    // return nextIndex === xs.length || nextIndex === 0 ? undefined : xs[nextIndex];
    return xs;
}

function* countFrom(n) { for (let i = n; ; ++i) yield i; }
console.log(nextItem(countFrom(1), 12));
