// =====================================
// Task 1: Employee Registration
// =====================================

let employeeName = "Sharveshwaran";
let employeeId = "STK-26-2961";
let department = "Development";
const salary = 50000;
let isPermanent = true;

console.log(`
Employee Details
----------------
Name       : ${employeeName}
ID         : ${employeeId}
Department : ${department}
Salary     : ${salary}
Permanent  : ${isPermanent}
`);


// =====================================
// Task 2: Employee Skills
// =====================================

let skills = ["HTML","CSS","JavaScript","React","Git","Node.js"];

console.log("First Skill :", skills[0]);
console.log("Third Skill :", skills[2]);
console.log("Last Skill :", skills[skills.length - 1]);
console.log("Total Skills :", skills.length);


// =====================================
// Task 3: Company Object
// =====================================

const company = {
    companyName : "Stackly IT",
    location : "Bangalore",
    employees : 100,
    technologies : ["HTML","CSS","JavaScript","React"]
};

console.log("Company Name :", company.companyName);
console.log("Location :", company.location);
console.log("Second Technology :", company.technologies[1]);
console.log("Total Technologies :", company.technologies.length);


// =====================================
// Task 4: Salary Calculator
// =====================================

let basicSalary = 30000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("Total Salary :", totalSalary);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);


// =====================================
// Task 5: Attendance Checker
// =====================================

let attendance = 92;

let examStatus = attendance >= 75 
? "Eligible for Exam" 
: "Not Eligible";

console.log(examStatus);


// =====================================
// Task 6: Login Verification
// =====================================

let username = "admin";
let password = "12345";

if(username == "admin" && password == "12345")
{
    console.log("Login Successful");
}
else
{
    console.log("Invalid Credentials");
}


// =====================================
// Task 7: Product Billing
// =====================================

let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log(`
Product : ${productName}

Price : ${productPrice}

Quantity : ${quantity}

Total : ${totalBill}
`);


// =====================================
// Task 8: Increment & Decrement
// =====================================

let visitors = 100;

console.log("Pre Increment :", ++visitors);
// Value increases first then prints (101)

console.log("Post Increment :", visitors++);
// Prints current value then increases (101)

console.log("After Post Increment :", visitors);
// Now value is 102

console.log("Pre Decrement :", --visitors);
// Decreases first then prints (101)

console.log("Post Decrement :", visitors--);
// Prints current value then decreases (101)

console.log("After Post Decrement :", visitors);
// Now value is 100


// =====================================
// Task 9: Comparison Checker
// =====================================

console.log(10 == "10"); 
// true

console.log(10 === "10"); 
// false

console.log(20 != "20"); 
// false

console.log(20 !== "20"); 
// true

console.log(5 < 10); 
// true

console.log(15 >= 20); 
// false

console.log(100 <= 100); 
// true


// =====================================
// Task 10: User Interaction
// =====================================

let userName = prompt("Enter Employee Name");
let age = prompt("Enter Employee Age");

let join = confirm("Do you want to join our company?");

if(join)
{
    alert(`Welcome ${userName}`);
}
else
{
    alert("Thank You");
}


// =====================================
// 🏆 Final Challenge: Mini Employee Portal
// =====================================


let employee = {
    name : "Sharveshwaran",
    id : "STK-26-2961",
    department : "Development",
    experience : 1,
    salary : 50000,
    attendance : 92
};


let employeeSkills = [
"HTML",
"CSS",
"JavaScript",
"React",
"Git",
"Node.js"
];


let employeeBonus = 5000;

let finalPay = employee.salary + employeeBonus;


let loginStatus =
(username == "admin" && password == "12345")
? "Success"
: "Failed";


let attendanceResult =
(employee.attendance >= 75)
? "Eligible"
: "Not Eligible";


let experienceCheck =
(employee.experience >= 2)
? "Experienced"
: "Fresher";


console.log(`
==============================
      EMPLOYEE PORTAL
==============================

Employee Name : ${employee.name}

Employee ID   : ${employee.id}

Department    : ${employee.department}

Experience    : ${employee.experience} Years

Salary        : ₹${employee.salary}

Bonus         : ₹${employeeBonus}

Final Salary  : ₹${finalPay}

Skills        : ${employeeSkills.join(", ")}

Attendance    : ${employee.attendance}%

Exam Status   : ${attendanceResult}

Login Status  : ${loginStatus}

Experience    : ${experienceCheck}

Company       : ${company.companyName}

Location      : ${company.location}
`);