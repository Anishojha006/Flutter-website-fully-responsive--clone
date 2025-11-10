let button = document.querySelector(".tab-menue");
console.log(button);
let elemnt;

button.addEventListener("click" , (e)=>{

     elemnt = e.target;

    if(!(elemnt.style.backgroundColor=="blue" && elemnt.style.color=="white")){
     elemnt.style.backgroundColor = "blue";
     elemnt.style.color = "white";
    }
    
})
