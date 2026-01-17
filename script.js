let button = document.querySelectorAll(".tab-menue");
console.log(button);
let elemnt;

button.addEventListener("click" , (e)=>{
    console.log(button.target[0]);
    //  elemnt = e.target;
    //  for(let i=button.target[0], i<button.length();)
    //  buttons.style.backgroundColor="white";
    //  buttons.style.color="blue";

    if(!(elemnt.style.backgroundColor=="blue" && elemnt.style.color=="white")){
        
     elemnt.style.backgroundColor = "blue";
     elemnt.style.color = "white";
    }
    else{ 
    elemnt.style.backgroundColor = "white";
    elemnt.style.color = "blue";
    }
    
})
