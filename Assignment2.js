function statusMessage(f1, f2, f3, f4) {
    let isLoggedIn = true;
    let profileCompleted = false;
    if (isLoggedIn && profileCompleted) {
        console.log('Welcome back!');
    }
    else if (isLoggedIn && !profileCompleted) {
        console.log.apply("Complete your profile to continue");
    }
    else {
        console.log('Please login ');
    }
}
let res = statusMessage("loggegin", true, "profileCompleted", false);
console.log(res);