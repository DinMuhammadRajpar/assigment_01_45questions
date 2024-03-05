function aboutCarInfo(manufacturer, model_name) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var carInfo = {
        manufacturer: manufacturer,
        model_name: model_name
    };
    options.forEach(function (option) {
        var key = option[0], value = option[1];
        carInfo[key] = value;
    });
    return carInfo;
}
console.log(aboutCarInfo("Honda", "Civic", ["Color", "Black"], ["Year", "2022"]));
