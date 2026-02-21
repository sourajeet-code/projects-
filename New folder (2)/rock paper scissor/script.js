let userscore = 0;
let computerscore = 0;

let choices = document.querySelectorAll(".choice")
let infrom = document.querySelector("#infrom")
let player = document.querySelector("#player")
let computer=document.querySelector("#computer")


let showwinner = (userwin) => {
    if (userwin) {
        console.log("you won the match ")
        player.innerText = userscore++
        infrom.innerText = `User beated the computer`
        infrom.style.backgroundColor="green"
    }
    else {
        console.log("you loose the match")
        computer.innerText = computerscore++
        infrom.style.backgroundColor = "red"
        infrom.innerText = `Computer beats you`;

    }
}


let gencompchoice = () => {
    let option = ["rock", "paper", "scissors"]
    let indx = Math.floor(Math.random() * 3)
    return option[indx];
}



let playgame = (userchoice) => {
    
    const compchoice = gencompchoice();
    console.log("userchoice", userchoice)
    console.log("computerchoice", compchoice)
    
    if (compchoice === userchoice) {
        console.log("this game is draw")
        infrom.innerText="the game is tie"
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
             userwin = compchoice === "paper" ? false : true;

        }
        else if (userchoice === "paper") {
            userwin=compchoice==="scissors"?false:true
        }
        else if (userchoice === "scissors") {
             userwin=compchoice==="rock"?false:true
        }
        showwinner(userwin);
    }
    
    

}

// userchoice generate
choices.forEach((choice) => {
    choice.addEventListener("click",()=> {
        userchoice = choice.getAttribute("id")
        playgame(userchoice)
        
    })
})