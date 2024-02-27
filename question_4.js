var quote = " \"Success is not final, failure is not fatal: It is the courage to continue that counts.\"";
var author = "winston churchill";
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
var author_name = toTitleCase(author);
console.log(author_name + " once said, " + quote);
