/** @format */

const readline = require("readline-sync");

let isValid = false;

// this has the loop running for as long as isValid is not valid.  So, it is TRUE that isValid is false.

while (!isValid) {
  let password = readline.question(`A valid password must have the following:
● The password must be at least 8 characters long.
● The password must contain at least one uppercase letter.
● The password must contain at least one number.

Please enter a password: `);

  console.log(`You entered, ${password}`);

  //check for length
  let isLongEnough = false;

  if (password.length >= 8) {
    isLongEnough = true;
  }

  // check for capital
  let hasCapital = false;
  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    if (char === char.toUpperCase() && char !== char.toLowerCase()) {
      hasCapital = true;
    }
  }

  // check for number
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    let char = password[i];
    // This is confusing.  But we want to check to see if the character is a valid number.  The best way to do that is to 1. convert it to a number.  check to see if the result is NaN (or not a number).  Then check that it is not, not a number. This will only return true if the character turns into a valid number.

    if (!isNaN(Number(char))) {
      hasNumber = true;
    }
  }
  if (!isLongEnough) {
    console.log(
      `\u274C Your password has ${password.length} characters.  Please choose a password that has at least 8 characters.`
    );
  }

  if (!hasCapital) {
    console.log(`\u274C Your password does not contain at least one uppercase letter.`
    );
  }

  if (!hasNumber) {
    console.log(`\u274C Your password does not contain at least one number`);
  }

  if (hasNumber && isLongEnough && hasCapital) {
    isValid = true;
    console.log(
      `\u2705 Your password has been created.  Please keep your password secure.`
    );
  } else {
    console.log(`
Password not created.  Please try again.
      `);
  }
}
