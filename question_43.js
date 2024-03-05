var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicians_name) {
    magicians_name.forEach(function (name) {
        console.log(name);
    });
}
function make_great(great_names) {
    var great_magicians = [];
    great_names.forEach(function (name) {
        great_magicians.push("The Great ", name);
    });
    return great_magicians;
}
var old_magicians_names = ["Andy", "nandy", "Gulab jadugar", "saleem jadugar"];
var new_great_magicians_names = make_great(__spreadArray([], old_magicians_names, true));
show_magicians(old_magicians_names);
show_magicians(new_great_magicians_names);
