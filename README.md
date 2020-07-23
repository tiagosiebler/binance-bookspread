# Spread Monitor - Binance

Simple script to monitor bid/ask spread for binance tickers, filtering by % difference and printing any values above x%.

## Usage
```
npm install
node src/monitorspread.js
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
