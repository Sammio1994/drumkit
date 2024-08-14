const playclapButton = () => {
    const audio= document.getElementById("clapSound");
    audio.play();
}

 document.addEventListener("clapButton", function(event) {
     let audio = document.getElementById("clapSound");
     if (event.code === "KeyA") {
         audio.play();
     }
 })

//  document.getElementById("keydown").addEventListener("click", playclapButton);
//  document.addEventListener("keyPress", (event)=>{
//      if (event.key==="a"){
//          playclapButton();
//     }
// })