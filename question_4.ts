let quote:string = " \"Success is not final, failure is not fatal: It is the courage to continue that counts.\"";
let author:string = "winston churchill";

function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

const author_name = toTitleCase(author);

console.log(author_name + " once said, " + quote);