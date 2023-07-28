import Currency from './3-currency';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  } set amount(newAmount) {
    if (typeof newAmount !== 'number') {
        throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
      if (!(newCurrency instanceof Currency)) {
        throw new TypeError('Currency must be a Currency');
      }
      this._currency = newCurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, ConversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } if (typeof ConversionRate !== 'number') {
        throw new TypeError('ConversionRate must be a number');
      } 
    return amount * ConversionRate;
  }
}

export default Pricing;
