# eth-sniperbot
Ethereum chain sniperbot for tokens. This bot sniffs the mempool for pending transactions for trading enabled and also liquidity add functions.

# Main Features
* Snipe ETH launches
* Detect liquidity add
* Detect Trading disable/enable
* Detect rugpull and auto sell
* Detect honeypot
* Buy multiple tx in sequence for better block coverage

# Note
* Need minimum 0.001 eth to buy otherwise ethersjs gives fractional decimal error
* You need to edit the json file with your details, do not use the example below that has //comments
* This can run on windows/mac/linux/android as long as you are familiar with running node packages on any of these platforms


edit env.json and save your changes
```js
{
    "PRIVATE_KEY": "REPLACEME with your private key",
    "YOUR_ADDRESS": "REPLACEME with your address that will buy",
    "NODE": "",  //if you leave it empty it will default to infuria private node 
    "TOKEN": "CONTRACTTOSNIPEADDRESSHERE", //replace with the contract address you wish to snipe 
    "INVESTMENT": "ETHER VALUE HERE", //replace with the number with decimals such as 0.01 or 5.1 etc
    "GASLIMIT": "1000000", //custom gas limit
    "GWEI": "5",
    "AUTOSELL": "TRUE",  //if true then the bot will detect profits and sell for you
    "AUTOSELLPERCENT": "110",  //set the % profit to sell at
    "TXAMOUNT": "1", //create multiple buys if you put more than 1,
    "HONEYPOTCHECKON":"TRUE", //if true then it will use a honeypot API to check the token contract functions and taxes
}
```
Run Powershell or a terminal
```shell
  npm i
  node app.js
  ```
