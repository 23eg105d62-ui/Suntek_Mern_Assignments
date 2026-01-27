/*Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss*/
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const date = String(currentDate.getDate()).padStart(2, '0');
const dayOfWeek = currentDate.toLocaleString('default', { weekday: 'long' });
const hours = String(currentDate.getHours()).padStart(2, '0');
const minutes = String(currentDate.getMinutes()).padStart(2, '0');
const seconds = String(currentDate.getSeconds()).padStart(2, '0');

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Date: ${date}`);
console.log(`Day of Week: ${dayOfWeek}`);
console.log(`Time: ${hours}:${minutes}:${seconds}`);

const formattedDate = `${date}-${month}-${year} ${hours}:${minutes}:${seconds}`;
console.log(`Formatted Date: ${formattedDate}`);
/*Output
Year: 2026
Month: 01
Date: 21
Day of Week: Wednesday
Time: 20:35:27
Formatted Date: 21-01-2026 20:35:27*/











