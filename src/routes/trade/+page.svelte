<script>
import { onMount } from "svelte";

let data = [];
let showingDetailed = false;
let detailedData = undefined;
const keys = ['EYLHD54ANLK9PH46','SIBNYQ6NRXGA5L9X','Y8164UHSNHTR7NTP','762H20UFF2CJVEHP','RNVZL2M74XAFFQS0','F46PNCGPM32UNOJI','K0UB0JS4QXHNLWED', 'A738NKYH7AXPQ11X', 'W1D8N6M9X978RQ9O', '8KQMNHWC6HL2YSJ7', '4N6ETIY0J58GVW7P', '6RW7HHE2AYNY07CJ', 'F0WSS307XFFXFL52', 'A7TRLSYW4HC2LMZM', 'JHNBU6ZCGB8O86G9', 'UXA4Y3EOJILEITUX', '5DVNGIZEWM63SLBW', 'KK5JT8FUU7OYVL8B', 'LXG5OWTGJN2P3BN9', 'JBUYMHC1IT82PGSB', 'Q3S1EOJB5NFB0BJB', 'YR0JH6WEVCGQD6XA', '538NJ32TA392W0SC', 'F7284O4455H1AGSH', '37X85AIWKXH9VIDO', 'Z4CYHMU0DK2E0EQ4', '5AKNLV6J5ZG6WMA6', '1MAVYX37T98VNQIA', 'DPIZL3YC2RUACXKP', 'GN61NMGBHB8XJMUD', '1N4C74HI99MIRKPZ'];
let keyindex = Math.floor(Math.random()*keys.length);
let currentPrice;
let inputElementAmount;
let inputElementPrice;
let lastSymbol;

function amountToPrice(){
    inputElementPrice.value = Math.round(currentPrice*inputElementAmount.value*100)/100;
}

function priceToAmount(){
    inputElementAmount.value = Math.round((inputElementPrice.value/currentPrice)*100)/100;
}

function showDetails(entry){
    if(showingDetailed){ // Doesnt trigger when first loading elements
        inputElementAmount.value = null;
        inputElementPrice.value = null;
    }
    showingDetailed = true;
    detailedData = entry;
}

async function getData(symbol){
    if (lastSymbol != symbol){
        let result = [];
        let key = keys[keyindex]; keyindex++;    
        const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${key}`;

        const response = await fetch(url);
        const responseData = await response.json();
        const stockData = await responseData['Time Series (5min)'];
        
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

onMount(async ()=>{
    fetch('/files/stocks.json').then((response)=>response.json()).then((json)=>{
        data = Object.entries(json);
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
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
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
                <p class="select-light title">{detailedData['symbol']} | {detailedData['company']}</p>
                <hr/>
            </div>

            <figure class="highcharts-figure">
                <div id="container"></div>
            </figure>
            
            <div class="trade">
                <div class="title-section">
                    <p class="select-light title">Trade {detailedData['symbol']}</p>
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
                    <div class="select-hidden button">Buy</div>
                    <div class="select-hidden button">Sell</div>
                </div>
            </div>

        {/if}
    </section>
</body>
