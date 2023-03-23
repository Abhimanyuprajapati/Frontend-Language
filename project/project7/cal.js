let string="";
let buttons=document.querySelectorAll('.button1');
Array.from(buttons).forEach((item)=>{
    item.addEventListener('click',(e)=>{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;
    })
})