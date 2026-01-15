let userS=0;
let compS=0;
let choice=document.querySelectorAll(".choice");
let message=document.querySelector("#msg");
let uscore=document.querySelector("#uscore");
let cscore=document.querySelector("#cscore");

//computer choice
const genCompChoice=()=>{
    options=["rock","paper","sessior"];
     index=Math.floor(Math.random()*3);
     return options[index];
}
const showResult=(uWin)=>{
    if(uWin){
        
        console.log("user win");
        message.textContent="Hurrey! You Won";
        message.style.cssText="background-Color:green;color:black"
       userS++;
       console.log(userS);
       uscore.innerText=userS;
    }
    else{
        console.log("computer wins !! you lost");
                message.textContent="You Lost!";
        message.style.cssText="background-Color:red;color:black";
        compS++;
        cscore.innerText=compS;
    }
}



const draw=()=>{
    console.log(`match has been drawn`);
    message.innerText="The match has drawn!";
    message.style.cssText="background-Color:yellow;color:black;"
}

const playGame=(uChoice)=>{
Computer=genCompChoice();
if(uChoice===Computer){
    draw()
}
else {
    let uWin=true;
    if(uChoice==="rock"){
        uWin=Computer==="paper"?false:true;
    }
    else if(uChoice==="paper"){
        uWin=Computer==="sessior"?false:true;
    }
    else{
        uWin=Computer==="rock"?false:true;
    }
    showResult(uWin);
}}





// UserChoice
choice.forEach((choices)=>{
    choices.addEventListener("click",()=>{
        const uChoice=choices.getAttribute("id");
        // console.log(uChoice);
playGame(uChoice);
    }   )
})

