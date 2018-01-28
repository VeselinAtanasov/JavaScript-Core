
function formFiller(name,email,phoneNumber,arr) {
    let text="";

    function funcReplacer(fullmatch,firstGroup) {
    switch (firstGroup){
        case "!":
            return name;
        case "@":
            return email;
        case "+":
            return phoneNumber;


    }
    }

    for (let sentence of arr) {
        sentence=sentence.replace(/<([!@+])[A-Za-z]+[!@+]>/g, funcReplacer);
        console.log(sentence)
    }

}

formFiller('pit', 'pit@pit.com', '032746',
    ['I am <!user!>, my email is <@email@>, my phone is <+p+>.']);