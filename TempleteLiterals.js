function sides(literals, ...expressions) {
    let s1 = (expressions[1] + (Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0]))) / 4;
    let s2 = (expressions[1] - (Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0]))) / 4;
    let res = [s1, s2];
    res = res.sort();
    console.log(res[0] + '\n' + res[1]);
}