<script>
import { onMount } from "svelte";
import { saveUserData, keys } from "../../stores";

const decimals = 2;

let data = [];
let showingDetailed = false;
let detailedData = undefined;
let keyindex = Math.floor(Math.random()*keys.length);
let currentPrice;
let inputElementAmount;
let inputElementPrice;
let lastSymbol;
let userData = null;

function buyStock(){
    if(inputElementPrice.value >= 1){
        if(!userData['data']['stocks'].hasOwnProperty(detailedData['symbol'])){
            userData['data']['stocks'][detailedData['symbol']] = parseFloat(inputElementAmount.value);
        }
        else{
            userData['data']['stocks'][detailedData['symbol']] += parseFloat(inputElementAmount.value);
        }
        userData['data']['budget'] -= parseFloat(inputElementPrice.value); 
        saveUserData(userData);
        inputElementAmount.value = null;
        inputElementPrice.value = null;
    }
}

function sellStock(){
    if(inputElementAmount.value > 0){
        if(userData['data']['stocks'].hasOwnProperty(detailedData['symbol'])){
            if(userData['data']['stocks'][detailedData['symbol']] >= inputElementAmount.value){
                userData['data']['stocks'][detailedData['symbol']] -= parseFloat(inputElementAmount.value);
                userData['data']['budget'] += parseFloat(inputElementPrice.value);
                saveUserData(userData);
                inputElementAmount.value = null;
                inputElementPrice.value = null;          
            }
        }
    }
}

function amountToPrice(){
    inputElementPrice.value = Math.round(currentPrice*inputElementAmount.value*(10**decimals))/(10**decimals);
}

function priceToAmount(){
    inputElementAmount.value = Math.round((inputElementPrice.value/currentPrice)*(10**decimals))/(10**decimals);
}

function showDetails(entry){
    if(showingDetailed){ // Doesnt trigger when first loading elements
        inputElementAmount.value = null;
        inputElementPrice.value = null;
    }
    showingDetailed = true;
    detailedData = entry;
}

async function getData(symbol, a=0){
    if (lastSymbol != symbol){
        let result = [];
        let key = keys[keyindex]; keyindex++;   
        if(keyindex>keys.length){ keyindex = 0; } 
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${key}`;

        const response = await fetch(url);
        const responseData = await response.json();
        const stockData = await responseData['Time Series (5min)'];
        
        if(stockData == null || stockData == undefined){
            console.log(`Error collecting data for ${symbol} using ${key}`);
            if(a<keys.length){
                getData(symbol, a+1);
            }
            return;
        }

        let i = 0
        for(const [key,value] of Object.entries(stockData)){
            result.push([key, parseFloat(value['1. open'])]);
            i+=5;
        }

        currentPrice = result[0][1];
        result = result.reverse();

        Highcharts.chart('container', {
            title: {
                text: `Price history of ${symbol} (USD)`,
                align: 'left'
            },
            subtitle: {
                text: `Intradaily 5 minute interval`,
                align: 'left'
            },
            legend: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: ''
                }
            },
            xAxis: {
                labels: {
                    enabled: false
                }
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 0
                }
            },
            series: [{
                name: 'Price',
                data: result,
            }],
        });
    }
    lastSymbol = symbol;
}

function checkValue(value){
    if(value == undefined || value == NaN) { return 0 };
    return value;
}

onMount(async ()=>{
    userData = JSON.parse(sessionStorage.getItem('currentUser'));
    if(userData == null){
        window.location = '/login';
    }
    
    fetch('/files/stocks.json').then((response)=>response.json()).then((json)=>{
        data = Object.entries(json);
        showDetails(data[1][1]);
        getData('AMZN');
    }); 
});        
</script>

<head>
    <title>Trading</title>
    <link rel="stylesheet" href="/styles/theme.css">
    <link rel="stylesheet" href="/styles/trade.css">
</head>

<body>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/js/themes/dark-unica.js"></script>

    <nav>
        <a href="/" class="logo select-hidden logo-font"><span class="icon"></span> Innovocks</a>
        <div class="links">
            <a href="/userpage" class="select-hidden">Profile <span class="underline"></span></a>
            <a href="/" class="select-hidden">Log out <span class="underline"></span></a>
        </div>
    </nav>

    <section class="stock-list">
        <div class="title-section">
            <p class="select-light title">Stocks</p>
            <hr/>
        </div>
        
        <div class="stocks">
            <table>
                {#each data as entry}
                <tr>
                    <td class="select-light">{entry[1]['symbol']}</td>
                    <td class="select-light">{entry[1]['company']}</td>
                    <td>
                        <span class="select-hidden details-button" 
                            on:keypress={()=>{
                                showDetails(entry[1]);
                                getData(entry[1]['symbol']);
                            }} 
                            on:click={()=>{
                                showDetails(entry[1]);
                                getData(entry[1]['symbol']);
                            }}>
                            Show
                        </span>
                    </td>
                </tr>
                {/each}
            </table>
        </div>
    </section>

    <section class="detailed-view" class:hidden={showingDetailed}>
        <div class="title-section">
            <p class="select-light title">Click a stock listing to show details</p>
            <hr/>
        </div>        
    </section>

    <section class="detailed-view" class:hidden={!showingDetailed}>
        {#if detailedData!=undefined}
            <div class="title-section">
                <p class="title">
                    <span class="tooltipParent select-light">
                        {detailedData['symbol']} | {detailedData['company']}
                        <span class="tooltip select-light">{detailedData['description']}</span>
                    </span>
                    <span class="rightAlign select-light">
                        {(Math.round(userData['data']['budget']*100)/100).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                        })}    
                    </span>
                </p>
                <hr/>
            </div>

            <figure class="highcharts-figure">
                <div id="container"></div>
            </figure>
            
            <div class="trade">
                <div class="title-section">
                    <p class="select-light title">
                        Trade {detailedData['symbol']}
                        <span class="rightAlign select-light">
                            Owned: {checkValue(userData['data']['stocks'][detailedData['symbol']])} | 
                            Value: {checkValue(userData['data']['stocks'][detailedData['symbol']]) * currentPrice}
                        </span>
                    </p>
                    <hr/>
                </div>
                
                <div class="options">
                    <div class="field">
                        <input class="select-light" placeholder=" " type="number" id="amount" name="amount" min="1" required
                            on:change={()=>{amountToPrice()}} bind:this={inputElementAmount}/>
                        <label for="amount" class="select-hidden">Amount (stocks)</label>                
                    </div>
                    <div class="field">
                        <input class="select-light" placeholder=" " type="number" id="price" name="price" min="1" required
                            on:change={()=>{priceToAmount()}} bind:this={inputElementPrice}/>
                        <label for="amount" class="select-hidden">Price ($USD)</label>                
                    </div>
                    <div class="select-hidden button" on:click={buyStock} on:keypress={buyStock}>Buy</div>
                    <div class="select-hidden button" on:click={sellStock} on:keypress={sellStock}>Sell</div>
                </div>
            </div>

        {/if}
    </section>
</body>
