const Utils = require('./utils');

const sendPaymentRequestToApi =  (totalAmount, totalShipping) => {
    const result = Utils.calculateNumber('Sum', totalAmount, totalShipping);
    console.log(`The total is: ${result}`);
};

module.exports = sendPaymentRequestToApi;