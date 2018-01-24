
function solve(n, k) {
    let result = [];
    result.push(1);
    for (let i = 0; i < n-1; i++) {
        let elementToAdd = result.slice(-k).reduce((a, b) => a + b);
        result.push(elementToAdd);
    }
    return result.join(" ");
}