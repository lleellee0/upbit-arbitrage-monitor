const http = require('http');

let krwUrls = new Array();

krwUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.KRW-BTC,CRIX.UPBIT.KRW-DASH,CRIX.UPBIT.KRW-ETH,CRIX.UPBIT.KRW-NEO,CRIX.UPBIT.KRW-BCC,CRIX.UPBIT.KRW-MTL,CRIX.UPBIT.KRW-LTC,CRIX.UPBIT.KRW-STRAT,CRIX.UPBIT.KRW-XRP,CRIX.UPBIT.KRW-ETC,CRIX.UPBIT.KRW-OMG,CRIX.UPBIT.KRW-CVC,CRIX.UPBIT.KRW-DGB,CRIX.UPBIT.KRW-PAY,CRIX.UPBIT.KRW-SC,CRIX.UPBIT.KRW-SNT,CRIX.UPBIT.KRW-XVG,CRIX.UPBIT.KRW-WAVES,CRIX.UPBIT.KRW-NMR,CRIX.UPBIT.KRW-SYNX,CRIX.UPBIT.KRW-PIVX,CRIX.UPBIT.KRW-GBYTE,CRIX.UPBIT.KRW-XEM,CRIX.UPBIT.KRW-FUN,CRIX.UPBIT.KRW-ZEC,CRIX.UPBIT.KRW-XMR,CRIX.UPBIT.KRW-LBC,CRIX.UPBIT.KRW-QTUM,CRIX.UPBIT.KRW-GNT,CRIX.UPBIT.KRW-NXT');
krwUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.KRW-BAT,CRIX.UPBIT.KRW-XEL,CRIX.UPBIT.KRW-EDG,CRIX.UPBIT.KRW-LSK,CRIX.UPBIT.KRW-RDD,CRIX.UPBIT.KRW-DCT,CRIX.UPBIT.KRW-STEEM,CRIX.UPBIT.KRW-GAME,CRIX.UPBIT.KRW-FCT,CRIX.UPBIT.KRW-PTOY,CRIX.UPBIT.KRW-DCR,CRIX.UPBIT.KRW-DOGE,CRIX.UPBIT.KRW-BNT,CRIX.UPBIT.KRW-XLM,CRIX.UPBIT.KRW-PART,CRIX.UPBIT.KRW-MCO,CRIX.UPBIT.KRW-UBQ,CRIX.UPBIT.KRW-ARDR,CRIX.UPBIT.KRW-KMD,CRIX.UPBIT.KRW-ARK,CRIX.UPBIT.KRW-ADX,CRIX.UPBIT.KRW-SYS,CRIX.UPBIT.KRW-ANT,CRIX.UPBIT.KRW-MUE,CRIX.UPBIT.KRW-XDN,CRIX.UPBIT.KRW-STORJ,CRIX.UPBIT.KRW-QRL,CRIX.UPBIT.KRW-NXS,CRIX.UPBIT.KRW-GRS,CRIX.UPBIT.KRW-VOX');
krwUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.KRW-VTC,CRIX.UPBIT.KRW-CLOAK,CRIX.UPBIT.KRW-SIB,CRIX.UPBIT.KRW-REP,CRIX.UPBIT.KRW-VIA,CRIX.UPBIT.KRW-WINGS,CRIX.UPBIT.KRW-CFI,CRIX.UPBIT.KRW-1ST,CRIX.UPBIT.KRW-UNB,CRIX.UPBIT.KRW-NBT,CRIX.UPBIT.KRW-SWT,CRIX.UPBIT.KRW-MAID,CRIX.UPBIT.KRW-SLS,CRIX.UPBIT.KRW-AGRS,CRIX.UPBIT.KRW-MONA,CRIX.UPBIT.KRW-AMP,CRIX.UPBIT.KRW-HMQ,CRIX.UPBIT.KRW-SNGLS,CRIX.UPBIT.KRW-TX,CRIX.UPBIT.KRW-RLC,CRIX.UPBIT.KRW-BLOCK,CRIX.UPBIT.KRW-DYN,CRIX.UPBIT.KRW-GUP,CRIX.UPBIT.KRW-MEME,CRIX.UPBIT.KRW-OK,CRIX.UPBIT.KRW-XZC,CRIX.UPBIT.KRW-ADT,CRIX.UPBIT.KRW-FTC,CRIX.UPBIT.KRW-ION,CRIX.UPBIT.KRW-BSD');
krwUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.KRW-GNO,CRIX.UPBIT.KRW-DGD,CRIX.UPBIT.KRW-EMC2,CRIX.UPBIT.KRW-EXCL,CRIX.UPBIT.KRW-SPHR,CRIX.UPBIT.KRW-EXP,CRIX.UPBIT.KRW-XAUR,CRIX.UPBIT.KRW-BITB,CRIX.UPBIT.KRW-BAY,CRIX.UPBIT.KRW-VRC,CRIX.UPBIT.KRW-BURST,CRIX.UPBIT.KRW-SHIFT,CRIX.UPBIT.KRW-BLK,CRIX.UPBIT.KRW-ZEN,CRIX.UPBIT.KRW-KORE,CRIX.UPBIT.KRW-RADS,CRIX.UPBIT.KRW-MYST,CRIX.UPBIT.KRW-IOP,CRIX.UPBIT.KRW-SAFEX,CRIX.UPBIT.KRW-RISE,CRIX.UPBIT.KRW-NAV,CRIX.UPBIT.KRW-ADA,CRIX.UPBIT.KRW-MANA,CRIX.UPBIT.KRW-SALT,CRIX.UPBIT.KRW-SBD,CRIX.UPBIT.KRW-TIX,CRIX.UPBIT.KRW-RCN,CRIX.UPBIT.KRW-VIB,CRIX.UPBIT.KRW-POWR,CRIX.UPBIT.KRW-MER');
krwUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.KRW-BTG,CRIX.UPBIT.KRW-BTC,CRIX.UPBIT.KRW-ETH');

let btcUrls = new Array();

btcUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.BTC-DASH,CRIX.UPBIT.BTC-ETH,CRIX.UPBIT.BTC-NEO,CRIX.UPBIT.BTC-BCC,CRIX.UPBIT.BTC-MTL,CRIX.UPBIT.BTC-LTC,CRIX.UPBIT.BTC-STRAT,CRIX.UPBIT.BTC-XRP,CRIX.UPBIT.BTC-ETC,CRIX.UPBIT.BTC-OMG,CRIX.UPBIT.BTC-CVC,CRIX.UPBIT.BTC-DGB,CRIX.UPBIT.BTC-PAY,CRIX.UPBIT.BTC-SC,CRIX.UPBIT.BTC-SNT,CRIX.UPBIT.BTC-XVG,CRIX.UPBIT.BTC-WAVES,CRIX.UPBIT.BTC-NMR,CRIX.UPBIT.BTC-SYNX,CRIX.UPBIT.BTC-PIVX,CRIX.UPBIT.BTC-GBYTE,CRIX.UPBIT.BTC-XEM,CRIX.UPBIT.BTC-FUN,CRIX.UPBIT.BTC-ZEC,CRIX.UPBIT.BTC-XMR,CRIX.UPBIT.BTC-LBC,CRIX.UPBIT.BTC-QTUM,CRIX.UPBIT.BTC-GNT,CRIX.UPBIT.BTC-NXT');
btcUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.BTC-BAT,CRIX.UPBIT.BTC-XEL,CRIX.UPBIT.BTC-EDG,CRIX.UPBIT.BTC-LSK,CRIX.UPBIT.BTC-RDD,CRIX.UPBIT.BTC-DCT,CRIX.UPBIT.BTC-STEEM,CRIX.UPBIT.BTC-GAME,CRIX.UPBIT.BTC-FCT,CRIX.UPBIT.BTC-PTOY,CRIX.UPBIT.BTC-DCR,CRIX.UPBIT.BTC-DOGE,CRIX.UPBIT.BTC-BNT,CRIX.UPBIT.BTC-XLM,CRIX.UPBIT.BTC-PART,CRIX.UPBIT.BTC-MCO,CRIX.UPBIT.BTC-UBQ,CRIX.UPBIT.BTC-ARDR,CRIX.UPBIT.BTC-KMD,CRIX.UPBIT.BTC-ARK,CRIX.UPBIT.BTC-ADX,CRIX.UPBIT.BTC-SYS,CRIX.UPBIT.BTC-ANT,CRIX.UPBIT.BTC-MUE,CRIX.UPBIT.BTC-XDN,CRIX.UPBIT.BTC-STORJ,CRIX.UPBIT.BTC-QRL,CRIX.UPBIT.BTC-NXS,CRIX.UPBIT.BTC-GRS,CRIX.UPBIT.BTC-VOX');
btcUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.BTC-VTC,CRIX.UPBIT.BTC-CLOAK,CRIX.UPBIT.BTC-SIB,CRIX.UPBIT.BTC-REP,CRIX.UPBIT.BTC-VIA,CRIX.UPBIT.BTC-WINGS,CRIX.UPBIT.BTC-CFI,CRIX.UPBIT.BTC-1ST,CRIX.UPBIT.BTC-UNB,CRIX.UPBIT.BTC-NBT,CRIX.UPBIT.BTC-SWT,CRIX.UPBIT.BTC-MAID,CRIX.UPBIT.BTC-SLS,CRIX.UPBIT.BTC-AGRS,CRIX.UPBIT.BTC-MONA,CRIX.UPBIT.BTC-AMP,CRIX.UPBIT.BTC-HMQ,CRIX.UPBIT.BTC-SNGLS,CRIX.UPBIT.BTC-TX,CRIX.UPBIT.BTC-RLC,CRIX.UPBIT.BTC-BLOCK,CRIX.UPBIT.BTC-DYN,CRIX.UPBIT.BTC-GUP,CRIX.UPBIT.BTC-MEME,CRIX.UPBIT.BTC-OK,CRIX.UPBIT.BTC-XZC,CRIX.UPBIT.BTC-ADT,CRIX.UPBIT.BTC-FTC,CRIX.UPBIT.BTC-ION,CRIX.UPBIT.BTC-BSD');
btcUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.BTC-GNO,CRIX.UPBIT.BTC-DGD,CRIX.UPBIT.BTC-EMC2,CRIX.UPBIT.BTC-EXCL,CRIX.UPBIT.BTC-SPHR,CRIX.UPBIT.BTC-EXP,CRIX.UPBIT.BTC-XAUR,CRIX.UPBIT.BTC-BITB,CRIX.UPBIT.BTC-BAY,CRIX.UPBIT.BTC-VRC,CRIX.UPBIT.BTC-BURST,CRIX.UPBIT.BTC-SHIFT,CRIX.UPBIT.BTC-BLK,CRIX.UPBIT.BTC-ZEN,CRIX.UPBIT.BTC-KORE,CRIX.UPBIT.BTC-RADS,CRIX.UPBIT.BTC-MYST,CRIX.UPBIT.BTC-IOP,CRIX.UPBIT.BTC-SAFEX,CRIX.UPBIT.BTC-RISE,CRIX.UPBIT.BTC-NAV,CRIX.UPBIT.BTC-ADA,CRIX.UPBIT.BTC-MANA,CRIX.UPBIT.BTC-SALT,CRIX.UPBIT.BTC-SBD,CRIX.UPBIT.BTC-TIX,CRIX.UPBIT.BTC-RCN,CRIX.UPBIT.BTC-VIB,CRIX.UPBIT.BTC-POWR,CRIX.UPBIT.BTC-MER');
btcUrls.push('http://crix-api-endpoint.upbit.com/v1/crix/recent?codes=CRIX.UPBIT.BTC-BTG,CRIX.UPBIT.BTC-ETH');

let stateArray = new Array();

let BTC_PRICE;

const sendFirstRequest = (i) => {
  http.get(krwUrls[i], (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        for(let i = 0; i < parsedData.length; i++) {
          let obj = {};
          obj.name = parsedData[i].code.split("CRIX.UPBIT.KRW-")[1]
          obj.state = parsedData[i].marketState;
          obj.krwPrice = parsedData[i].tradePrice;

          if(obj.state === 'ACTIVE')    // KRW-XXX가 액티브인 것만 푸쉬
            stateArray.push(obj);
        }

      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

const sendKrwRequest = (i) => {
  http.get(krwUrls[i], (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        for(let i = 0; i < parsedData.length; i++) {
          let obj = {};
          obj.name = parsedData[i].code.split("CRIX.UPBIT.KRW-")[1]
          obj.krwPrice = parsedData[i].tradePrice;

          if(obj.name === 'BTC')
            BTC_PRICE = parsedData[i].tradePrice;

          for(let j = 0; j < stateArray.length; j++) {
            if(stateArray[j].name === obj.name)
              stateArray[j].krwPrice = parsedData[i].tradePrice;
          }
        }

      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

const sendBtcRequest = (i) => {
  http.get(btcUrls[i], (res) => {
    const { statusCode } = res;
    const contentType = res.headers['content-type'];

    let error;
    if (statusCode !== 200) {
      error = new Error('Request Failed.\n' +
                        `Status Code: ${statusCode}`);
    } else if (!/^application\/json/.test(contentType)) {
      error = new Error('Invalid content-type.\n' +
                        `Expected application/json but received ${contentType}`);
    }
    if (error) {
      console.error(error.message);
      // consume response data to free up memory
      res.resume();
      return;
    }

    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        for(let i = 0; i < parsedData.length; i++) {
          let obj = {};
          obj.name = parsedData[i].code.split("CRIX.UPBIT.BTC-")[1]
          obj.btcPrice = parsedData[i].tradePrice;

          for(let j = 0; j < stateArray.length; j++) {
            if(stateArray[j].name === obj.name) {
              stateArray[j].btcPrice = parsedData[i].tradePrice;
              stateArray[j].calcPrice = stateArray[j].btcPrice * BTC_PRICE;
            }
          }
        }

      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
}

// 첫 호출은 배열을 채우기만 한다.
for(let i = 0; i < krwUrls.length; i++) {
    sendFirstRequest(i);
}

setInterval(() => {
  for(let i = 0; i < krwUrls.length; i++) {
      sendKrwRequest(i);
      sendBtcRequest(i);
  }
}, 1000 * 1);


const calcPercent = () => {
  for(let i = 0; i < stateArray.length; i++) {
    stateArray[i].percent = (stateArray[i].krwPrice - stateArray[i].calcPrice) / stateArray[i].krwPrice * 100;
  }
  stateArray.sort((a, b) => { // 정렬
    return Math.abs(b.percent) - Math.abs(a.percent);
  });
}

setInterval(() => {
  calcPercent();
}, 1000 * 0.5);




const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/api', function (req, res) {
  res.json(stateArray);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
