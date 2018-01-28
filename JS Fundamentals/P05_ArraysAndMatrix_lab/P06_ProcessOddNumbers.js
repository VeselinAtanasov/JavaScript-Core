
function solve(arr){
    return arr.map(Number).filter((e, i) => i % 2 !== 0).map(a => a * 2).reverse().join(" ")
}