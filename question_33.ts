let numbers:number[] = [1,2,3,4,5,6,7,8,9];

numbers.forEach(number => {
    
    let ordinalNumberEnd;

    if (number == 1){
        ordinalNumberEnd = "st";
    }
    else if (number == 2){
        ordinalNumberEnd = "nd";
    }
    else if (number == 3){
        ordinalNumberEnd = "rd";
    }
    else {
        ordinalNumberEnd = "th";
    }

    console.log(number + ordinalNumberEnd);
});