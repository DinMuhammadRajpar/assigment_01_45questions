function show_magicians(magicians_name: string[]): void {
    magicians_name.forEach(name => {
        console.log(name);
    });
}

const magicians = ["Andy", "nandy", "Gulab jadugar", "saleem jadugar"];



function make_great(great_names:string[]): void{
    great_names.forEach(name => {
        console.log("Great ",name);
    });
}

show_magicians(magicians);
make_great(magicians);