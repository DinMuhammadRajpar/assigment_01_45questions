function sandwich_order(...items:string[]): void{
    
    console.log("Sandwich you orderd with items: ");
    items.forEach(item => {
        console.log("-", item);
    });
}

sandwich_order("Cucumber ", "Veggie & Hummus", "Avocado ");
sandwich_order("Caprese  ", "Chickpea Salad", "Cheese ");
sandwich_order("Cheese and onion  ", "mayonnaise");