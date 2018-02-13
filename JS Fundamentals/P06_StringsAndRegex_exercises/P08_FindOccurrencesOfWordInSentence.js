function findOccurrences(sentance, word) {
    "use strict";
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }

    let pattern = new RegExp("\\b"+escapeRegExp(word)+"\\b", "gi");
    let matches = sentance.match(pattern);

    if (matches) {
        return matches.length;
    }
    return 0;

}

console.log(findOccurrences('How do you plan on achieving that? How? How can you even think of that?',
    'how'
));