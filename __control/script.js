document.addEventListener('DOMContentLoaded',function(){
    document.querySelector(".signer").addEventListener("click",function(){
        var a = document.querySelector('.card');
        var b = document.querySelector('.card1');
        var c = document.querySelector('.card2');
        a.style.display = (a.style.display==="none")?"block":"none";
        b.style.display = "none";        
        c.style.display = "none";        
    });
});