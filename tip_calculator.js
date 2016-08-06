function tipAmount(bill, perc=0.2) {
  return bill * perc;
}

function totalWithGrat(bill, perc=0.2) {
  return bill + tipAmount(bill, perc);
}

console.log(totalWithGrat(100).toFixed(2));
