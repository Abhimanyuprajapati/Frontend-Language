
// var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=8H0BQOMU0ZET8BNJ';
let data=[];
async function stockData(){
    const apiurl="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=8H0BQOMU0ZET8BNJ";
    try{
        const response= await fetch(apiurl);
         data= await response.json();
    }catch(error){
        console.log(error);
    }
};
// const apiurl="https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=8H0BQOMU0ZET8BNJ";
// data=apiurl;
console.log(data);
// stockData();