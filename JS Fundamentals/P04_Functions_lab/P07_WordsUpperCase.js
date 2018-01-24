function upper(text) {
    let result = text
        .split(/\W+/)
        .filter(word => word !== "")
        .map(word => word.toUpperCase()).join(", ");

    console.log(result);
}

upper('Hi, how are you?');