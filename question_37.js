function make_shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("The size is ", size, "The text should be: ", text);
}
make_shirt("medium ");
make_shirt("small", "This message is for small shirts");
