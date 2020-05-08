const leftArrow = document.getElementById("left-move");
const rightArrow = document.getElementById("right-move");
const demoBg = document.getElementById("product-demo");
const dotslide = document.getElementsByClassName("fas fa-circle");
let count = 0;
const menuIcon = document.getElementById("hamburger-icon");
const login = document.getElementById("menu-btn");
const displayMenu = document.getElementById("mainMenu");


menuIcon.addEventListener("click", function(){
   if (displayMenu.style.display === "none" && login.style.display === "none") {
      displayMenu.style.display = "flex";
      displayMenu.style.flexDirection = "column"
      login.style.display = "block"; 
   } else {
      displayMenu.style.display = "none";
      login.style.display = "none";  
   }  
});

leftArrow.addEventListener("mouseover", slidearrow);
leftArrow.addEventListener("click", slidearrow);
rightArrow.addEventListener("mouseover", slidearrow);
rightArrow.addEventListener("click", slidearrow);
for(i=0; i<dotslide.length; i++){
   dotslide[i].addEventListener("mouseover", slidearrow);
}
setInterval(slideTimer, 1000);

console.log(dotslide.item);
console.log(dotslide.length);

function slideTimer(){
   count++;
   console.log(count);
   if(count == 3){
      document.querySelector(".slide-1").style.display= "none";
      document.querySelector(".slide-2").style.display="block";
      document.querySelector(".slide-3").style.display="none";
      document.querySelector(".slide-4").style.display="none";
      demoBg.style.backgroundImage = "url('images/demo-2.jpg')";
   }
   if (count == 6 && count > 3){
      document.querySelector(".slide-1").style.display= "none";
      document.querySelector(".slide-2").style.display="none";
      document.querySelector(".slide-3").style.display="block";
      document.querySelector(".slide-4").style.display="none";
      demoBg.style.backgroundImage = "url('images/demo-3.jpg')";
   }
   if(count == 9 && count > 6){
      document.querySelector(".slide-1").style.display="none";
      document.querySelector(".slide-2").style.display="none";
      document.querySelector(".slide-3").style.display="none";
      document.querySelector(".slide-4").style.display= "block";
      demoBg.style.backgroundImage = "url('images/demo-4.jpg')"; 
   }
   if(count == 12 && count > 9){
      document.querySelector(".slide-1").style.display= "block";
      document.querySelector(".slide-2").style.display="none";
      document.querySelector(".slide-3").style.display="none";
      document.querySelector(".slide-4").style.display="none";
      demoBg.style.backgroundImage = "url('images/demo-1.jpg')";
      return count = 0 ;  
   }
}

function slidearrow(){
    count++;
      
     if (count == 1){
        document.querySelector(".slide-1").style.display= "none";
        document.querySelector(".slide-2").style.display="block";
        document.querySelector(".slide-3").style.display="none";
        document.querySelector(".slide-4").style.display="none";
        demoBg.style.backgroundImage = "url('images/demo-2.jpg')";
     }

     if(count == 2){
      document.querySelector(".slide-1").style.display= "none";
      document.querySelector(".slide-2").style.display="none";
      document.querySelector(".slide-3").style.display="block";
      document.querySelector(".slide-4").style.display="none";
      demoBg.style.backgroundImage = "url('images/demo-3.jpg')";  
     }

     if(count == 3){
       document.querySelector(".slide-1").style.display="none";
       document.querySelector(".slide-2").style.display="none";
       document.querySelector(".slide-3").style.display="none";
       document.querySelector(".slide-4").style.display= "block";
       demoBg.style.backgroundImage = "url('images/demo-4.jpg')";   
     }

     if(count > 3){
        document.querySelector(".slide-1").style.display= "block";
        document.querySelector(".slide-2").style.display="none";
        document.querySelector(".slide-3").style.display="none";
        document.querySelector(".slide-4").style.display="none";
        demoBg.style.backgroundImage = "url('images/demo-1.jpg')";
        return count = 0 ;
     }
}


console.log("Working");

