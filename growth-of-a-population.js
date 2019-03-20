let nbYear = (p0, percent, aug, p) => {
    let population = p0;
    let years = 0;
    while (population < p) {
        population = population + population * (percent / 100) + aug;
        years++;
    }
    return years;
}

nbYear(1500, 5, 100, 5000); // 15
