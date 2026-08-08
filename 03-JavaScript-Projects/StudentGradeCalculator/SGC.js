// Student Grade Calculator

  let marks = prompt("Enter your Marks:");


if (marks <= 100 && marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else if (marks >= 40) {
  console.log("Grade D");
} else if (marks >= 35) {
  console.log("Grade E");
} else {
  console.log("Grade F");
}