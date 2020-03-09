import React, { Fragment } from 'react';

const BASE_URL = 'https://finnhub.io/api/v1';

export const API_KEY = process.env.REACT_APP_API_KEY;
export const SYMBOLS_URL = `${BASE_URL}/stock/symbol?exchange=US&token=${API_KEY}`;
export const EXCHANGE_URL = `${BASE_URL}/stock/exchange?token=${API_KEY}`;
export const SOCKET_URL = `wss://ws.finnhub.io?token=${API_KEY}`;
export const PROFILE_URL = (sym) => `${BASE_URL}/stock/profile?symbol=${sym}&token=${API_KEY}`;
export const QUOTE_URL = (sym) => `${BASE_URL}/quote?symbol=${sym}&token=${API_KEY}`;

export const socket = new WebSocket(`wss://ws.finnhub.io?token=${API_KEY}`);

export const STOCK = [
  {
    ticker: 'AZO',
    name: 'AutoZone',
    exchange: 'NEW YORK STOCK EXCHANGE, INC.'
  },
  {
    ticker: 'AAPL',
    name: 'Apple, Inc',
    exchange: 'NASDAQ NMS - GLOBAL MARKET'
  },
  {
    ticker: 'GOOGL',
    name: 'Alphabet, Inc',
    exchange: 'NASDAQ NMS - GLOBAL MARKET'
  },
  {
    ticker: 'TSLA',
    name: 'Tesla, Inc',
    exchange: 'NASDAQ NMS - GLOBAL MARKET'
  }
];

export const PRICES = { c: 0, h: 0, l: 0, o: 0, pc: 0, t: 0 };

export const LABELS = {
  c: 'Open price of the day',
  h: 'High price of the day',
  l: 'Low price of the day',
  o: 'Current price',
  pc: 'Previous close price',
  t: 'Current daily bar',
};


export const getStockPrices = (stock, cb) => {
  fetch(QUOTE_URL(stock))
    .then((response) => response.json())
    .then((data) => {
      cb(data);
    })
    .catch(e => console.error('An error occured', e));
};

export const getStock = (stock, success, fail) => {
  let newStockData = {
    name: '',
    ticker: '',
    exchange: ''
  };

  fetch(PROFILE_URL(stock))
    .then((profileResponse) => profileResponse.json())
    .then((profileData) => {
      if (Object.entries(profileData).length === 0) {
        fail(`${stock} is not a valid stock symbol`);
      } else {
        for (let prop in newStockData) {
          newStockData[prop] = profileData[prop];
        }
        success(newStockData);
      }
    })
    .catch(e => {
      console.error('An error occured', e);
    });
};


export const parseDetail = (data) => {
  let label = LABELS[data[0]];
  if (label === 'Current daily bar') {
    return (
      <Fragment>
        <span>{label}</span>
        <span>{new Date(data[1]).toLocaleString()}</span>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <span>{label}</span>
        <span>${data[1]}</span>
      </Fragment>
    );
  }
};