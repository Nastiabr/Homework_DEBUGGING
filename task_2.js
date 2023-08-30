function checkAge() {
    try {
      const name = prompt("Please enter your name:");
      if (!name) {
        throw new Error("The field is empty! Please enter your name");
      }
  
      const age = prompt("Please enter your age:");
      if (!age) {
        throw new Error("The field is empty! Please enter your age");
      }
      const numericAge = parseInt(age, 10);
      if (isNaN(numericAge)) {
        throw new EvalError("Age should be a number");
      }
      if (numericAge < 18 || numericAge > 70) {
        throw new RangeError("Age should be between 18 and 70");
      }
  
      const status = prompt("Please enter your status (admin, moderator, user):");
      if (!status || !["admin", "moderator", "user"].includes(status)) {
        throw new EvalError("Invalid status entered");
      }
  
      alert("You have access to watch the movie!");
    } catch (error) {
      alert(`Error: ${error.name}\n${error.message}`);
    }
  }
  
  checkAge();