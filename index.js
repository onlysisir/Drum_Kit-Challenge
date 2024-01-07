var buttonEls=document.querySelectorAll("button");

buttonEls.forEach(function(buttonEl) {
buttonEl.addEventListener("click",function(){

    var innerHtmlEl=this.innerHTML;
    switch (innerHtmlEl) {
        case "w":
            var audio = new Audio(`sounds/tom-1.mp3`);
            audio.play();
            break;

            case "a":
            var audio = new Audio(`sounds/tom-2.mp3`);
            audio.play();
            break;

            case "s":
            var audio = new Audio(`sounds/tom-3.mp3`);
            audio.play();
            break;

            case "d":
            var audio = new Audio(`sounds/tom-4.mp3`);
            audio.play();
            break;

            case "j":
            var audio = new Audio(`sounds/crash.mp3`);
            audio.play();
            break;
            
    
        default:
            var audio = new Audio(`sounds/kick-bass.mp3`);
            audio.play();
            break;
    }
    buttonAnimation(innerHtmlEl);
}); 
});


document.addEventListener("keydown",function(event){
    // console.log(event.key);
    var keyPressed=event.key;

    switch (keyPressed) {
        case "w":
            var audio = new Audio(`sounds/tom-1.mp3`);
            audio.play();
            break;

            case "a":
            var audio = new Audio(`sounds/tom-2.mp3`);
            audio.play();
            break;

            case "s":
            var audio = new Audio(`sounds/tom-3.mp3`);
            audio.play();
            break;

            case "d":
            var audio = new Audio(`sounds/tom-4.mp3`);
            audio.play();
            break;

            case "j":
            var audio = new Audio(`sounds/crash.mp3`);
            audio.play();
            break;
            
    
        default:
            var audio = new Audio(`sounds/kick-bass.mp3`);
            audio.play();
            break;
    }
    buttonAnimation(keyPressed)
    
}); 



function buttonAnimation(currKey){
    var x=document.querySelector("."+currKey);
    x.classList.add("pressed")

    setTimeout(() => {
        x.classList.remove("pressed");
    }, 100);


}