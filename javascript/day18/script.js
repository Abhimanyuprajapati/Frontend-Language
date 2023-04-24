/*
const makeColorRandom= ()=>{
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    // console.log(r,g,b);
    const random=`rgb(${r} , ${g} , ${b})`;
    return random;
};
makeColorRandom();

const button=document.querySelector('button');
const h1=document.querySelector('h1');
const body=document.querySelector('body');

button.addEventListener('click', function(){
    const randomno=makeColorRandom();
    h1.textContent=randomno;
    body.style.backgroundColor=randomno;
});
*/

const button=document.querySelector('button');
const h1=document.querySelector('h1');
const body=document.querySelector('body');

const makecolor=function(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    const random=`rgb(${r},${g},${b})`;
    return random;
};

const make=function(){
    const p=Math.floor(Math.random()*255);
    const q=Math.floor(Math.random()*255);
    const r= Math.floor(Math.random()*255);
    const rand=`rgb(${p},${q},${r})`;
    return rand;
};

button.addEventListener('click',function(){
    const random=makecolor();
    // const make=make();
    // h1.style.color=make;
    body.style.backgroundColor=random;
});

button.addEventListener('click',function(){
    // const random=makecolor();
    const makes=make();
    h1.style.color=makes;
    // body.style.backgroundColor=random;
});

