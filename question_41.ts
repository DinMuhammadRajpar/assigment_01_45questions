function show_magicians(magicians_name: string[]): void {
    magicians_name.forEach(name => {
        console.log(name);
    });
}

show_magicians(["Andy", "nandy", "Gulab jadugar", "saleem jadugar"]);