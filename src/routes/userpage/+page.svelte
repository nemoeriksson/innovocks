<script>
import { onMount } from "svelte";
import { keys, saveUserData } from "../../stores";

let userData = undefined;
let profits = 0;
let prices = [];
let combinedPrices = [];
let keyindex = Math.floor(Math.random()*keys.length);

// Function work in progress :: Does not work as indented
async function getStockPrices(symbol, a=0){
    let result = [];
    let key = keys[keyindex]; keyindex++;
    if(keyindex>keys.length){ keyindex = 0; } 
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${key}`;

    const response = await fetch(url);
    const responseData = await response.json();
    const stockData = await responseData['Time Series (5min)'];
    setTimeout(() => {
        if(stockData == null || stockData == undefined){
            console.log(`Error collecting ${symbol} from ${url}`);
        }

        let i = 0
        for(const [key,value] of Object.entries(stockData)){
            result.push([key, parseFloat(value['1. open'])]);
            i+=5;
        }    
        
        result = result.reverse();
        prices.push(result);
    }, 1000);
}

function combinePrices(){
    console.log(prices);
    for(let i = 0; i < prices[0].length; i+=1){
        let total = 0;
        let date = ''
        for(let j = 0; j < prices.length; j+=1){
            total += prices[i][j][1];
            date = prices[i][j][0];
        }
        combinedPrices.push([date, total]);
    }
    console.log(combinedPrices);
}

function renderGraph(){
    let result = [0,4,8,5,2,8,14]
    Highcharts.chart('container', {
        title: {
            text: `Price history `, 
            align: 'left'
        },
        subtitle: {
            text: 'Showing price history of all owned stocks - WARNING: Only placeholder data',
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

onMount(()=>{
    userData = JSON.parse(sessionStorage.getItem('currentUser'));
    if(userData == null){
        window.location = '/login';
    }
    profits = userData['data']['budget']-100000;
    setTimeout(() => {
        renderGraph();
    }, 25);
});
</script>

<head>
    {#if userData != null}
        <title>Welcome {userData['user']}!</title>
    {/if}
    <link rel="stylesheet" href="/styles/theme.css">
    <link rel="stylesheet" href="/styles/userpage.css">
</head>


<body>
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/js/themes/dark-unica.js"></script>
    
    {#if userData!=undefined}
        <nav>
            <a href="/" class="logo select-hidden logo-font"><span class="icon"></span> Innovocks</a>
            <div class="links">
                <a href="/trade" class="select-hidden">Trade <span class="underline"></span></a>
                <a href="/" class="select-hidden">Log out <span class="underline"></span></a>
            </div>
        </nav>

        <main>
            <section class="welcome-section">
                <p class="select-light title">Welcome {userData['user']}</p>
                <hr class="divider">
                <p class="select-light subtitle">Account Cash Amount</p>
                <p class="select-light data moneyDisplay">
                    {(Math.round(userData['data']['budget']*100)/100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })}
                </p>
                <hr class="divider">
                <p class="select-light subtitle">Total Stock Value</p>
                <p class="select-light data">$0.00 (Placeholder)</p>
                <hr class="divider">
                <p class="select-light subtitle">Total Cash Profits</p>
                <p class="select-light data profits positive" class:negative={profits<0}>{profits>=0 ? '' : '-'}${Math.abs(Math.round(profits*100)/100)}</p>
            </section>

            <section class="history">
                <figure class="highcharts-figure">
                    <div id="container"></div>
                </figure>       
            </section>
            <a href="/trade" class="select-hidden link-button">Trade now</a>
        </main>
    {/if}
</body>
