let caja = 3;
let caja2 = 5;
let caja3;
caja3= 2;
console.log (caja3*caja);
let boton_git = document.querySelector("body main .main1 .seccion1 .boton-git2");
let bodyjs = document.querySelector("body");
console.log(boton_git);
boton_git.addEventListener("click", (event)=>{
    if (bodyjs.style.backgroundColor == "white"){
        bodyjs.style.backgroundColor = "black";
    }else{
        bodyjs.style.backgroundColor = "white";
    } 
    
})
