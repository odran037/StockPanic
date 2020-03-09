```
   _____ __             __   ____              _     
  / ___// /_____  _____/ /__/ __ \____ _____  (_)____
  \__ \/ __/ __ \/ ___/ //_/ /_/ / __ `/ __ \/ / ___/
 ___/ / /_/ /_/ / /__/ ,< / ____/ /_/ / / / / / /__  
/____/\__/\____/\___/_/|_/_/    \__,_/_/ /_/_/\___/  
```


*This Markdown file was written using my personal markdown previewer.*
- [App and code view](https://codepen.io/odran037/pen/XKXORd)
- [Full app view](https://codepen.io/odran037/full/XKXORd)


# Epic: As an American panicking about the market last week, I want a web app to keep track of my stocks performance.

---------------------------------------------------------------------------------------------------------------------

### **Story**:
As a holder of NYSE stocks, I want to be able to tell the application what stocks I have so that it can validate they're correct and keep track of them.

**Acceptance criteria**:
- I want to input the stock using only the symbol, but have it look up the detail like name, price for me
- Validate that the symbol exists on US exchanges

---------------------------------------------------------------------------------------------------------------------

### **Story**:
As a person with poor long term memory, I want to have the system maintain the list of stocks for me and show high-level details on them

**Acceptance criteria**:
- I want the symbols in my list to be persisted across browser sessions, but there's no need for this to be shareable across browsers (consider using localstorage)
- When I view the list, I want to get the latest price; it doesn't need to be realtime streaming though; here's the API: https://finnhub.io/docs/api#stock-symbols

---------------------------------------------------------------------------------------------------------------------

### **Story**:
As a nervous stock market investor, I want to see a real-time view of my stock's performance.

**Acceptance criteria**:
- I want a big graph of the price that's interactive, by default showing a 24 hour window; we want to try D3.js
- The graph should be updated in real time using websockets and this API: https://finnhub.io/docs/api#websocket-price

---------------------------------------------------------------------------------------------------------------------


