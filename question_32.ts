
let current_users:string[] = ["Gulab", "John", "Michel", "Din", "Muhammad", "AYAN"];

let new_users:string[] = ["clerk", "BOB", "Din", "Ismail", "Zain", "Ayan"];


new_users.forEach(new_user => {
    let existing_user = current_users.some(current_user => current_user.toLowerCase() == new_user.toLowerCase())
    
    if(existing_user){
        console.log("user", new_user,  " already exist!");
    }
    else{
        console.log("user ", new_user, "available!");
    }
});