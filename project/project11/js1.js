// select the elements
const quotescontainer=document.getElementById('quotes-container');
const quotertext=document.getElementById('quoter');
const authortext=document.getElementById('author');
const tweeter=document.getElementById('twitter');
const newbutton=document.getElementById('new-button');

let apiQuotes=[];

//  create new function for random value
function newQuotes(){
// pick the random number
    // const randomIndex = Math.floor ( Math.random() * apiQuotes.length );
                /*  give floor value    select random value     apiQuotes length */
    const quotes=apiQuotes[Math.floor ( Math.random() * apiQuotes.length )]; 
    // console.log(quotes);
    quotertext.textContent=quotes.text;    /* this will display the text*/
    if(quotes.text.length>120){
        quotertext.classList.add("long-text");
    }else{
        quotertext.classList.remove("long-text");
    }
    // authortext.textContent=quotes.author ? quotes.author : "unknown";
    authortext.textContent=quotes.author || "unknown" ;
    /* 
        or not doing "unknown" then use if else
        if(!quotes.author){
             authortext.textContent="unknown";
        }else{
             authortext.textContent=quotes.author
        }
    */

}
// get the api quotes from website
async function getQuotes(){
    const apiurl="https://type.fit/api/quotes";
    try{
        const responsess= await fetch(apiurl);
        apiQuotes=await responsess.json();
       newQuotes();
    }catch(error){
// catch the error
    }
}

// on load
getQuotes();