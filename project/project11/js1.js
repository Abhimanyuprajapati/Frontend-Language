// select the elements
const quotescontainer=document.getElementById('quotes-container');
const quotertext=document.getElementById('quoter');
const authortext=document.getElementById('author');
const tweeter=document.getElementById('twitter');
const newbutton=document.getElementById('new-button');
const loader=document.querySelector('span.loader');

function loading(){
    loader.classList.remove('hide');
    quotescontainer.classList.add('hide');
}

function complete(){
    loader.classList.add('hide');
    quotescontainer.classList.remove('hide');
}



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
    loading();
    const apiurl="https://type.fit/api/quotes";
    try{
        const responsess= await fetch(apiurl);
        apiQuotes=await responsess.json();
       newQuotes();

       complete();
    }catch(error){
// catch the error
    }
}


// tweet Quotes
/* Query parameter   - learn this how to use */
function tweetOnce(){
    const tweeturl=`https://twitter.com/intent/tweet?text=${quotertext.textContent} - ${authortext.textContent}`;
    window.open(tweeturl , "_blank");
}


// event Listeners
tweeter.addEventListener("click",tweetOnce);
newbutton.addEventListener("click",newQuotes);

// on load
getQuotes();

// https://twitter.com/compose/tweet