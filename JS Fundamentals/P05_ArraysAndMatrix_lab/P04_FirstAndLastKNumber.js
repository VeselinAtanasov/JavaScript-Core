function solve(arr) {
    let number=Number(arr.shift());
    let first=arr.slice(0,number);
    let second=arr.slice(-number)
    console.log(first.join(" "))
    console.log(second.join(" "))
}