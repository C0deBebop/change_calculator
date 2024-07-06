const submitButton = document.querySelector('#submit');
const amount = document.querySelector('#amount')
var change = []

function changeCalculator(amount) {
      const amountAfterDecimal = amount.split('.')[1];
      const lastDigit = amountAfterDecimal[amountAfterDecimal.length-1];
      
      let quarterCoins = Math.floor(parseFloat(amount/0.25));
      let dimeCoins = Math.floor((amountAfterDecimal/10));
      let nickelCoins = Math.floor(lastDigit/5);
      let pennyCoin = parseInt(lastDigit);

      let nickelAmount = 5;

      if(pennyCoin % 5 == 0) {
           pennyCoin = 0;
      } else if(pennyCoin > nickelAmount) {
           pennyCoin = amountAfterDecimal - nickelAmount;
      } 

      change.push({pennies: pennyCoin, quarters: quarterCoins, nickels: nickelCoins, dimes: dimeCoins});
      
} 

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    changeCalculator(amount.value);
    console.log(change);
})