/*Project story:
-------------
“We are building the data engine of an online learning platform(like Udemy / Coursera / company LMS).Frontend and backend will later consume THIS logic.”

Data setup:
-----------
const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];

const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};


TASKS
------
MODULE-1 :USER PROCESSING ENGINE
  -> Get only active users
  -> Extract names of active users
  -> Check if any admin exists
  -> Find user by id
  -> Deactivate a user immutably

MODULE 2: COURSE CATALOG ENGINE
  -> Get published courses
  -> Sort courses by price (high → low)
  -> Extract { title, price } only
  -> Calculate total value of published courses
  -> Add a new course immutably

MODULE 3: SHOPPING CART ENGINE 
  -> Merge cart with courses to get full course info
  -> Calculate total cart amount
  -> Increase quantity of a course (immutably)
  -> Remove a course from cart
  -> Check if all cart items are paid courses

MODULE 4: ROLE & PERMISSION ENGINE
  -> Get all role names
  -> Check if student can delete
  -> Create a flat list of all unique permissions
  -> Add new role moderator immutably*/
// Data setup
const users = [
    { id: 1, name: "Ravi", role: "student", active: true },
    { id: 2, name: "Anil", role: "admin", active: true },
    { id: 3, name: "Suman", role: "student", active: false }
];
const courses = [
    { id: 101, title: "JavaScript", price: 999, published: true },
    { id: 102, title: "React", price: 1499, published: false },
    { id: 103, title: "Node", price: 1299, published: true }
];
const cart = [
    { courseId: 101, qty: 1 },
    { courseId: 103, qty: 2 }
];
const roles = {
    admin: ["create", "update", "delete", "view"],
    student: ["view"]
};
// MODULE-1 :USER PROCESSING ENGINE
//  -> Get only active users
const activeUsers = users.filter(user => user.active);
console.log("Active Users:", activeUsers);
//  -> Extract names of active users
const activeUserNames = activeUsers.map(user => user.name);
console.log("Active User Names:", activeUserNames);
//  -> Check if any admin exists
const adminExists = users.some(user => user.role === "admin");
console.log("Admin Exists:", adminExists);
//  -> Find user by id
const findUserById = (id) => users.find(user => user.id === id);
console.log("User with ID 2:", findUserById(2));
//  -> Deactivate a user immutably
const deactivateUser = (id) => users.map(user => user.id === id ? { ...user, active: false } : user);
console.log("Deactivate User with ID 1:", deactivateUser(1));
// MODULE 2: COURSE CATALOG ENGINE
//  -> Get published courses
const publishedCourses = courses.filter(course => course.published);
console.log("Published Courses:", publishedCourses);
//  -> Sort courses by price (high → low)
const sortedCoursesByPrice = [...courses].sort((a, b) => b.price - a.price);
console.log("Courses Sorted by Price (High to Low):", sortedCoursesByPrice);
//  -> Extract { title, price } only
const courseTitlesAndPrices = courses.map(({ title, price }) => ({ title, price }));
console.log("Course Titles and Prices:", courseTitlesAndPrices);
//  -> Calculate total value of published courses
const totalValueOfPublishedCourses = publishedCourses.reduce((total, course) => total + course.price, 0);
console.log("Total Value of Published Courses:", totalValueOfPublishedCourses);
//  -> Add a new course immutably
const addNewCourse = (newCourse) => [...courses, newCourse];
const newCourse = { id: 104, title: "Python", price: 1199, published: true };
console.log("Courses after Adding New Course:", addNewCourse(newCourse));
// MODULE 3: SHOPPING CART ENGINE 
//  -> Merge cart with courses to get full course info
const mergedCart = cart.map(cartItem => {
    const course = courses.find(c => c.id === cartItem.courseId);
    return { ...cartItem, ...course };
});
console.log("Merged Cart with Course Info:", mergedCart);
//  -> Calculate total cart amount
const totalCartAmount = mergedCart.reduce((total, item) => total + (item.price * item.qty), 0);
console.log("Total Cart Amount:", totalCartAmount);
//  -> Increase quantity of a course (immutably)
const increaseCourseQuantity = (courseId) => cart.map(item => item.courseId === courseId ? { ...item, qty: item.qty + 1 } : item);
console.log("Increase Quantity of Course ID 101:", increaseCourseQuantity(101));
//  -> Remove a course from cart
const removeCourseFromCart = (courseId) => cart.filter(item => item.courseId !== courseId);
console.log("Remove Course ID 103 from Cart:", removeCourseFromCart(103));
//  -> Check if all cart items are paid courses
const allCartItemsPaid = mergedCart.every(item => item.price > 0);
console.log("All Cart Items are Paid Courses:", allCartItemsPaid);
// MODULE 4: ROLE & PERMISSION ENGINE
//  -> Get all role names
const roleNames = Object.keys(roles);
console.log("Role Names:", roleNames);
//  -> Check if student can delete
const studentCanDelete = roles.student.includes("delete");
console.log("Can Student Delete?:", studentCanDelete);
//  -> Create a flat list of all unique permissions
const uniquePermissions = [...new Set(Object.values(roles).flat())];
console.log("Unique Permissions:", uniquePermissions);
//  -> Add new role moderator immutably
const addNewRole = (roleName, permissions) => ({ ...roles, [roleName]: permissions });
const updatedRoles = addNewRole("moderator", ["update", "view"]);
console.log("Roles after Adding Moderator:", updatedRoles);
/*
Active Users: [
  { id: 1, name: 'Ravi', role: 'student', active: true },
  { id: 2, name: 'Anil', role: 'admin', active: true }
]
Active User Names: [ 'Ravi', 'Anil' ]
Admin Exists: true
User with ID 2: { id: 2, name: 'Anil', role: 'admin', active: true }
Deactivate User with ID 1: [
  { id: 1, name: 'Ravi', role: 'student', active: false },
  { id: 2, name: 'Anil', role: 'admin', active: true },
  { id: 3, name: 'Suman', role: 'student', active: false }
]
Published Courses: [
  { id: 101, title: 'JavaScript', price: 999, published: true },
  { id: 103, title: 'Node', price: 1299, published: true }
]
Courses Sorted by Price (High to Low): [
  { id: 102, title: 'React', price: 1499, published: false },
  { id: 103, title: 'Node', price: 1299, published: true },
  { id: 101, title: 'JavaScript', price: 999, published: true }
]
Course Titles and Prices: [
  { title: 'JavaScript', price: 999 },
  { title: 'React', price: 1499 },
  { title: 'Node', price: 1299 }
]
Total Value of Published Courses: 2298
Courses after Adding New Course: [
  { id: 101, title: 'JavaScript', price: 999, published: true },
  { id: 102, title: 'React', price: 1499, published: false },
  { id: 103, title: 'Node', price: 1299, published: true },
  { id: 104, title: 'Python', price: 1199, published: true }
]
Merged Cart with Course Info: [
  {
    courseId: 101,
    qty: 1,
    id: 101,
    title: 'JavaScript',
    price: 999,
    published: true
  },
  {
    courseId: 103,
    qty: 2,
    id: 103,
    title: 'Node',
    price: 1299,
    published: true
  }
]
Total Cart Amount: 3597
Increase Quantity of Course ID 101: [ { courseId: 101, qty: 2 }, { courseId: 103, qty: 2 } ]
Remove Course ID 103 from Cart: [ { courseId: 101, qty: 1 } ]
All Cart Items are Paid Courses: true
Role Names: [ 'admin', 'student' ]
Can Student Delete?: false
Unique Permissions: [ 'create', 'update', 'delete', 'view' ]
Roles after Adding Moderator: {
  admin: [ 'create', 'update', 'delete', 'view' ],
  student: [ 'view' ],
  moderator: [ 'update', 'view' ]
  */