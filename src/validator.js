const validator = {
  isValid: (cardNumber) => {
    let sum = 0;

    for (let i = 0; i < cardNumber.length; i++) {
      let cardDigit = parseInt(cardNumber[i]);
      //Step 1: Double the value of every second digit
      if (i % 2 !== 0) {
        cardDigit *= 2;
        // Step 2: If the result is greater than 10, then rest 9
        if (cardDigit > 9) {
          cardDigit -= 9;
        }
      }
      // Step 3: Take the sum of all the digits
      sum += cardDigit;
    }
    // Step 4: If the total ends in zero, this is a valid card number
    if (sum % 10 === 0){
      return true;
    }
    return false;
  },

  maskify: (cardNumber) => {
    let lengthCardNumber = cardNumber.length;
    if (lengthCardNumber<=4){
      return cardNumber;
    }
    //Extracts the last four digits
    let lastNumber = cardNumber.slice(-4);
    return '#'.repeat(lengthCardNumber - 4) + lastNumber;

  }
};

export default validator;