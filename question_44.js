function sandwich_order() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich you orderd with items: ");
    items.forEach(function (item) {
        console.log("-", item);
    });
}
sandwich_order("Cucumber ", "Veggie & Hummus", "Avocado ");
sandwich_order("Caprese  ", "Chickpea Salad", "Cheese ");
sandwich_order("Cheese and onion  ", "mayonnaise");
