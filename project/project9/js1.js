var character=document.getElementById('character');
var block=document.getElementById('block');
function jump(){
    character.classList.add("animate");
    setTimeout(function(){
        if(character.classList!="animate"){
            character.classList.add("animate");
        }
        character.classList.remove("animate");
    },500);
}

var checkdead=setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>0 && characterTop>=200){
        block.style.animation="none";
        block.style.display="none";
        alert("u lose.");
    }
},10);