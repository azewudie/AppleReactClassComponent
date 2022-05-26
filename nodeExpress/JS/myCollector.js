// 3. Create another module called "myCollector":
// a. Import both functions from "myFirst" and "mySecond" modules inside of your
// "myCollector" module
// b. Pass the value 5 to both functions that are imported from "myFirst" and
// "mySecond" modules
// c. Run the "myCollector" module on your terminal to display the outputs on your
// console

const first = require("./myFirst");
const second = require("./mySecond");
const fs = require("fs");

let firstModuleImport = first.myMultiplier(5);
let secondModuleImport = second.myMultiplier(5);
console.log(`myCollector:\n${firstModuleImport} \n ${secondModuleImport}`);

// 4. While you are in your "myCollector" module:
// a. Write a script inside of your "myCollector" module that passes the number 14 to
// your "myMultiplier" function that you imported from "myFirst" module and
// writes the returned value on a file called "results.txt". The result you write on the
// file should read like this: "The value of 14 when passed through the myMultiplier
// function is ( )."
// ■ Hint: You will need to find the core Node module that will allow you to
// create the “results.txt" file and write the result on this file
// b. Write another script inside of your "myCollector" module that passes the number
// 14 to your "myMultiplier" function that you imported from "mySecond" module
// and writes the returning value on the same file, the "results.txt" on a new line. The
// result you write on the file should read like this:
// "The value of 14 when passed through the myMultiplier function is ( )”.
// ■ Note: Make sure not to replace/remove what you wrote on your
// "results.txt" file previously.
// ■ Note: Also, make sure to add the new result on a new line, right below the
// result written previously.
firstModuleImport = first.myMultiplier(14);

fs.open("result.text", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});

fs.writeFile(
  "result.text",
  `The value of 14 when passed through the first  myMultiplier
 function is \n  (${firstModuleImport} ) \n `,
  function (err) {
    if (err) {
      console.log("Error!");
      console.log(err);
    } else {
      console.log("File Saved!");
    }
  }
);

secondModuleImport = second.myMultiplier(14);

// fs.appendFile(
//   "result.text",
//   `\n The value of 14 when passed through the second  myMultiplier
//    function is (${secondModuleImport} )`,
//   function (err) {
//     if (err) {
//       console.log("Error!");
//       console.log(err);
//     } else {
//       console.log("File Saved!");
//     }
//   }
// );
var adder = fs.createWriteStream("result.text", {
  flags: "a", // 'a' means appending (old data will be preserved)
});

adder.write(`\n The value of 14 when passed through the second  myMultiplier
   function is \n (${secondModuleImport} )`); // append string to your file
