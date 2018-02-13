function pyramid(base, increment) {

    let reduced = base;
    let stones = 0;
    let marble = 0;
    let lapis = 0;

    for (let i = 1; i <= Math.round(reduced / 2); i++) {
        if (i === Math.round(reduced / 2)) {
            break;
        }
        base = base - 2;
        stones += base * base * increment;
        if (i % 5 === 0) {//lapis lazuli
            lapis += ((base + 2) * 4 - 4) * increment;
        } else {  //marble
            marble += ((base + 2) * 4 - 4) * increment;
        }
    }
    let finalSteps = Math.floor(Math.round(reduced / 2) * increment);
    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(base * base * increment)}`);
    console.log(`Final pyramid height: ${finalSteps}`);

}


pyramid(12,
    1
);