const personName: string = "john smit";

console.log(personName.toLowerCase(), personName.toUpperCase());

function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

const titlecase_name = toTitleCase(personName);
console.log(titlecase_name);