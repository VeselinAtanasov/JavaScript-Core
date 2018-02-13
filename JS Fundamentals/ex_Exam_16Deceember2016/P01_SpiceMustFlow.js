function spice(arr) {
    let startingYield = Number(arr[0]);
    let consume = 0;
    let index = 0;

    while (startingYield >= 100) {
        consume += startingYield - 26;
        startingYield -= 10;
        if (startingYield < 100) {
            consume -= 26;
            break;
        }
    }

    console.log(index);
    console.log(consume)
}
spice(['111'])