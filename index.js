var datetimeGenerator = require('tea-datetime-generator');

// index.js

const axios = require('axios');

async function exchangeUSDTtoETH(name, amountUSDT, accessKey, accessSign, accessTimestamp) {
  console.info('query start ' + name + ', now is ' + datetimeGenerator.generateFormattedDate("YYYY"));
  try {
    const response = await axios.post('https://www.okx.com/api/v5/trade/order', {
      symbol: 'ETH-USDT',
      side: 'buy',
      type: 'market',
      quantity: amountUSDT,
    }, {
      headers: {
        'OK-ACCESS-KEY': accessKey,
        'OK-ACCESS-SIGN': accessSign,
        'OK-ACCESS-TIMESTAMP': accessTimestamp
      }
    });
    console.info('query: end ' + name + ', now is ' + datetimeGenerator.generateFormattedDate("YYYY"));
    return response.data;
  } catch (error) {
    throw new Error(`Error exchanging USDT to ETH: ${error.message}`);
  }
}
 module.exports = {
  getTokenDetails,
  getBalance,
  exchangeUSDTtoETH
}
