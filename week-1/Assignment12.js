const user = {
    id: 101,
    name: "Ravi",
    email: "ravi@gmail.com",
    role: "student",
    isActive: true
};

/*Tasks:
    
Read and print the user’s name and email
Add a new property lastLogin: "2026-01-01"
Update role from "student" to "admin"
Delete the isActive property
Use Object.keys() to list all remaining fields*/

console.log("User Name:", user.name);
console.log("User Email:", user.email);

user.lastLogin = "2026-01-01";

user.role = "admin";

delete user.isActive;

console.log(Object.keys(user));
console.log(user.id, " ", user.name, " ", user.email, " ", user.role, " ", user.lastLogin);