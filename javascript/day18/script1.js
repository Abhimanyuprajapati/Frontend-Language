// Event Object

// const button =document.querySelector('button');
// button.addEventListener('click' , function(){
//     console.log("welcome back to world");
// });

// most imp one is event.target


// keydown is a event when we give the input 



// bubble is the simple example
const makecolor=function(){
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b= Math.floor(Math.random()*255);
    const random=`rgb(${r},${g},${b})`;
    return random;
};

const grandparent=document.getElementById('grandparent');
const parent=document.getElementById('parent');
const child=document.getElementById('child');
const body=document.querySelector('body');

grandparent.addEventListener('click', function(){
    const make=makecolor();
    grandparent.style.backgroundColor=make;
});

parent.addEventListener('click', function(){
    const make=makecolor();
    parent.style.backgroundColor=make;
});

child.addEventListener('click', function(){
    const make=makecolor();
    child.style.backgroundColor=make;
});

body.addEventListener('click', function(){
    const make=makecolor();
    body.style.backgroundColor=make;
});