/*Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/
const user = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "dark",
        language: "en"
    }
};
//Shallow Copy of user object
const copiedUser = { ...user };

//change name in the copied object
copiedUser.name = "Amit";
//change preferences.theme in the copied object
copiedUser.preferences.theme = "light";
console.log("Original User:", user);
console.log("Copied User:", copiedUser);

/*Observation:
Original User: {
  id: 101,
  name: 'Ravi',
  preferences: { theme: 'light', language: 'en' }
}
Copied User: {
  id: 101,
  name: 'Amit',
  preferences: { theme: 'light', language: 'en' }
}*/









