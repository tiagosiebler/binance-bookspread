const Binance = require('node-binance-api');
const binance = new Binance().options({});

const spreadStore = {};
const formatPrice = price => (+price).toFixed(8);
const tickersWs = binance.websockets.bookTickers(event => {
  const symbol = event.symbol;
  const bestAsk = +event.bestAsk;
  const bestBid = +event.bestBid;

  const spreadPercent = Math.abs((1 - (bestBid / bestAsk)) * 100);

  spreadStore[symbol] = {
    symbol,
    bestAsk: formatPrice(bestAsk),
    bestAskQty: +event.bestAskQty,
    bestBid: formatPrice(bestBid),
    bestBidQty: +event.bestBidQty,
    spreadPercent: +spreadPercent.toFixed(2)
  };
});

let spreadScaleStore = [];
const updateSpreadScaleStore = () => {
  spreadScaleStore = Object
    .keys(spreadStore)
    .map(symbol => spreadStore[symbol])
    .sort((a, b) => b.spreadPercent - a.spreadPercent)
    .filter(state => state.spreadPercent >= MIN_SPREAD_PERCENT && state.spreadPercent <= MAX_SPREAD_PERCENT)
    .filter(state => SYMBOL_ENDS_WITH ? state.symbol.endsWith(SYMBOL_ENDS_WITH) : true);
};

const printTableToConsole = (clearConsoleFirst = true) => {
  clearConsoleFirst && console.clear();
  spreadScaleStore.length && console.table(spreadScaleStore);
};

// What minimum % we want to see in our output
const MAX_SPREAD_PERCENT = 100;
const MIN_SPREAD_PERCENT = 2;
const TABLE_UPDATE_DELAY_MS = 150;
// const SYMBOL_ENDS_WITH = 'BTC';
const SYMBOL_ENDS_WITH = false;

setInterval(() => {
  updateSpreadScaleStore();
  printTableToConsole();
}, TABLE_UPDATE_DELAY_MS);