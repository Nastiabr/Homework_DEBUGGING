class MonthException {
    constructor(message) {
      this.name = 'MonthException';
      this.message = message;
    }
  }
  
  function showMonthName(month) {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    if (month >= 1 && month <= 12) {
      return months[month - 1];
    } else {
      throw new MonthException("Incorrect month number");
    }
  }
  
  try {
    console.log(showMonthName(5));  // May
    console.log(showMonthName(14)); // Throws: MonthException Incorrect month number
  } catch (error) {
    if (error instanceof MonthException) {
      console.error(error.name + ' ' + error.message);
    } else {
      console.error(error);
    }
  }
  