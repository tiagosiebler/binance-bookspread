# Spread Monitor - Binance

Simple script to monitor bid/ask spread for binance tickers, filtering by % difference and printing any values above x%.

## Usage
```
npm install
node src/monitorspread.js
```

## Example Output
```
┌─────────┬────────────┬──────────────┬────────────┬──────────────┬────────────┬───────────────┐
│ (index) │   symbol   │   bestAsk    │ bestAskQty │   bestBid    │ bestBidQty │ spreadPercent │
├─────────┼────────────┼──────────────┼────────────┼──────────────┼────────────┼───────────────┤
│    0    │  'HOTBTC'  │ '0.00000009' │ 1435464047 │ '0.00000008' │ 1609408256 │     11.11     │
│    1    │  'MBLBTC'  │ '0.00000024' │  97476939  │ '0.00000023' │ 129116607  │     4.17      │
│    2    │  'POEBTC'  │ '0.00000025' │  23607884  │ '0.00000024' │  59570651  │       4       │
│    3    │  'TNBBTC'  │ '0.00000027' │  12036767  │ '0.00000026' │  27769041  │      3.7      │
│    4    │ 'IRISBUSD' │ '0.06048000' │  24761.1   │ '0.05829000' │    7065    │     3.62      │
│    5    │ 'ONEUSDC'  │ '0.00724000' │  39203.6   │ '0.00698000' │  15503.6   │     3.59      │
│    6    │ 'STMXBTC'  │ '0.00000029' │  11501391  │ '0.00000028' │  67692966  │     3.45      │
│    7    │ 'DREPBTC'  │ '0.00000030' │  10138131  │ '0.00000029' │  85868424  │     3.33      │
│    8    │ 'DOGEBTC'  │ '0.00000035' │  80248916  │ '0.00000034' │ 417735619  │     2.86      │
│    9    │  'SCBTC'   │ '0.00000035' │  54955805  │ '0.00000034' │  1877852   │     2.86      │
│   10    │  'IQBUSD'  │ '0.00210400' │   530891   │ '0.00205100' │   58701    │     2.52      │
│   11    │  'PHBBTC'  │ '0.00000047' │  4510030   │ '0.00000046' │  11140087  │     2.13      │
│   12    │  'IQBNB'   │ '0.00011470' │   454794   │ '0.00011230' │   34414    │     2.09      │
└─────────┴────────────┴──────────────┴────────────┴──────────────┴────────────┴───────────────┘
```

## Config
There's only a few parameters in `src/monitorspread.js`:
```javascript
const MAX_SPREAD_PERCENT = 100;
const MIN_SPREAD_PERCENT = 2;
const SYMBOL_ENDS_WITH = 'BTC';
// const SYMBOL_ENDS_WITH = false;
const TABLE_UPDATE_DELAY_MS = 150;

```
- MAX_SPREAD_PERCENT = what our max percent value is, ignore anything higher than this
- MIN_SPREAD_PERCENT = what our minimum percent value is, ignore anything below this
- SYMBOL_ENDS_WITH = filter to symbols ending in X. Set to false to disable (see uncommented value above)
- TABLE_UPDATE_DELAY_MS = how often in MS to update the table. Warning, the table will flash often if set less than 150.

## Contributions & Thanks
If you found this project interesting or useful, create accounts with my referral links:
- [Bybit](https://www.bybit.com/en-US/register?affiliate_id=9410&language=en-US&group_id=0&group_type=1)
- [Binance](https://www.binance.com/en/register?ref=20983262)

Or feed my coffee addiction using any of these:
- BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
- ETH (ERC20): `0xd773d8e6a50758e1ada699bb6c4f98bb4abf82da`

## Project Contributions
Contributions are very welcome, I will review any incoming pull requests. See the issues tab for todo items.
