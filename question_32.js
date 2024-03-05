var current_users = ["Gulab", "John", "Michel", "Din", "Muhammad", "AYAN"];
var new_users = ["clerk", "BOB", "Din", "Ismail", "Zain", "Ayan"];
new_users.forEach(function (new_user) {
    var existing_user = current_users.some(function (current_user) { return current_user.toLowerCase() == new_user.toLowerCase(); });
    if (existing_user) {
        console.log("user", new_user, " already exist!");
    }
    else {
        console.log("user ", new_user, "available!");
    }
});
