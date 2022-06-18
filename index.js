// function handleClick(){
//     alert("I got Clicked");
// }

// document.querySelector("button").addEventListener("click", handleClick);

// document.querySelector("button").addEventListener("click", function(){
 
    for(var i=0;i<7;i++){
        document.querySelectorAll("button")[i].addEventListener("click", function(){
             var key=this.innerHTML;
             makeSound(key);
             buttonAnimation(key);
            

             
         });
    }

    document.addEventListener("keydown",function(event){
         makeSound(event.key);
         buttonAnimation(event.key);
    })

    // function HouseKeeper(Name, Age, City){
    //     this.Name=Name;
    //     this.Age=Age;
    //     this.City=City;
    //     this.keepLuggage=function(){
    //        alert("hello world");
    //     }
    // };
    function buttonAnimation(key){
        var activeButton=document.querySelector("."+key);
        activeButton.classList.add("pressed");
        
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100 );
    }

   function makeSound(key){
    switch(key){
        case 'w':
            var audio= new Audio("/sounds/crash.mp3");
            audio.play();
        break;
        case 'a':
            var kickBass= new Audio("/sounds/kick-bass.mp3");
            kickBass.play();
        break;
        case 's':
            var snare= new Audio("/sounds/snare.mp3");
            snare.play();
        break;
        case 'd':
            var tom1= new Audio("/sounds/tom-1.mp3");
            tom1.play();
        break;
        case 'j':
            var tom2= new Audio("/sounds/tom-2.mp3");
            tom2.play();
        break;
        case 'k':
            var tom3= new Audio("/sounds/tom-3.mp3");
            tom3.play();
        break;
        case 'l':
            var audio= new Audio("/sounds/tom-4.mp3");
            audio.play();
        break;
     }
   }

    // var housekeeper=new HouseKeeper("Pankaj", 23, "Ellenabad");
    // housekeeper.keepLuggage();

    // document.getElementsByName("button").addEventListener("click", handleClick);