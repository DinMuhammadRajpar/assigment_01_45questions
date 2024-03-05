function show_magicians(magicians_name) {
    magicians_name.forEach(function (name) {
        console.log(name);
    });
}
var magicians = ["Andy", "nandy", "Gulab jadugar", "saleem jadugar"];
function make_great(great_names) {
    great_names.forEach(function (name) {
        console.log("Great ", name);
    });
}
show_magicians(magicians);
make_great(magicians);
