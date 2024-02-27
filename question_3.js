var personName = "john smit";
console.log(personName.toLowerCase(), personName.toUpperCase());
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
var titlecase_name = toTitleCase(personName);
console.log(titlecase_name);
