//alert("Hello");
// document.querySelector(".w").addEventListener("click",clicked);
// function clicked(){
//     console.log("I got clicked");
// }

let x = document.querySelectorAll(".drum");
for(let i=0;i<x.length;i++){
    x[i].addEventListener("click",function (){
        let buttonInnerHTML= this.innerHTML;
        buttonAnimation(buttonInnerHTML);
        switch(buttonInnerHTML){
            case "w":
                let beat = new Audio("./sounds/crash.mp3");
                beat.play();
            break;
            
            case "a":
                let beat2 = new Audio("./sounds/kick-bass.mp3");
                 beat2.play();
            break;
            
            case "s":
                let beat3 = new Audio("./sounds/snare.mp3");
                beat3.play();
            break;

            case "d":
                let beat4 = new Audio("./sounds/tom-1.mp3");
                beat4.play();
            break;

            case "j":
                let beat5 = new Audio("./sounds/tom-2.mp3");
                beat5.play();
            break;

            case "k":
                let beat6 = new Audio("./sounds/tom-3.mp3");
                beat6.play();
            break;

            case "l":
                let beat7 = new Audio("./sounds/tom-4.mp3");
                beat7.play();    
            break;

            default:
                console.log(buttonInnerHTML);
            break;
        }
    });
}

function player (){
    console.log("I am clicked");
    let beat = new Audio("./sounds/crash.mp3");
    beat.play();
}

document.addEventListener("keydown",function(e){
    console.log(e);
    let x=e.key;
    buttonAnimation(x);
    switch(x){
        case "w":
                let beat = new Audio("./sounds/crash.mp3");
                beat.play();
            break;
            
            case "a":
                let beat2 = new Audio("./sounds/kick-bass.mp3");
                 beat2.play();
            break;
            
            case "s":
                let beat3 = new Audio("./sounds/snare.mp3");
                beat3.play();
            break;

            case "d":
                let beat4 = new Audio("./sounds/tom-1.mp3");
                beat4.play();
            break;

            case "j":
                let beat5 = new Audio("./sounds/tom-2.mp3");
                beat5.play();
            break;

            case "k":
                let beat6 = new Audio("./sounds/tom-3.mp3");
                beat6.play();
            break;

            case "l":
                let beat7 = new Audio("./sounds/tom-4.mp3");
                beat7.play();    
            break;

        default:
            console.log(e);
        break;
            
    }    
});

function buttonAnimation(t){
    let activebtn=document.querySelector("."+t)//
    console.log(activebtn);
    activebtn.classList.add("pressed");
    
    setTimeout(
        function(){document.querySelector("."+t).classList.remove("pressed");
        console.log("100 ms delay");}
        ,100
        );
    
}