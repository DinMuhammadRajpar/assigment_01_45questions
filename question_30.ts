let username: string[] = ["Admin", "Eric", "Ayan", "Din", "Muhammad"];

for (let i = 0; i < username.length; i++) {
    if (username[i] == ("Admin")) {
        console.log("Welcome ", username[i], " Would you like to see a report?")
    }
    else {
        console.log("Welcome ", username[i], " thankyou for login.")
    }
}