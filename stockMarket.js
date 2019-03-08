var findMaxProfit = function(stockPrices) {
  var maxProfit = -1;
  var profit = -1;
  for (var i = 0; i < stockPrices.length-1; i++) {
    for (var j = 1; j < stockPrices.length; j++) {
      if (stockPrices[j] > stockPrices[i]) {
        profit = stockPrices[j] - stockPrices[i];
      } else {
        profit = -1;
      }
      if ( profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

// console.log(findMaxProfit([45, 24, 35, 31, 40, 38, 11]));