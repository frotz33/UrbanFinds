import axios from 'axios';

export class CoinBaseApiHandler {
  static getExchangeRates = async (currency: string) => {
    try {
      const fetchedExchangeRates = await axios.get(
        `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
      );
      return fetchedExchangeRates.data.data.rates;
    } catch (error) {
      console.error(error);
    }
  };
}
