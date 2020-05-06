const leftArrow = document.getElementById("demo-left");
const rightArrow = document.getElementById("demo-right");
const demoBg = document.getElementById("product-demo");
const dotslide = document.getElementsByClassName("round");
let count = 0;
const screen = window.matchMedia("(max-width: 993px)");
const nav = document.getElementById("nav-bar");
const menuIcon = document.getElementById("hamburger-icon");
const login = document.getElementById("menu-btn");
const displayMenu = document.getElementById("mainMenu");
const menuLogo = document.getElementById("menu-logo");

function screenListener(screen){
   if(screen.matches){
      menuIcon.style.display = "inline-block";
      displayMenu.style.display = "none";
      login.style.display = "none";
      nav.style.flexDirection = "column";
      nav.style.alignItems = "center";
   } else{
      menuIcon.style.display = "none"
      displayMenu.style.display = "flex";
      login.style.display = "inline-block";
      nav.style.flexDirection = "row";
      nav.style.alignItems = "baseline";
   }
}

screen.addListener(screenListener);

menuIcon.addEventListener("click", function(){
   
   if (displayMenu.style.display === "none" && login.style.display === "none") {
      displayMenu.style.display = "block";
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

function slidearrow(){
    count++;
      
     if (count == 1){
         demoBg.style.backgroundImage = "url('images/demo-2.jpg')";
     }

     if(count == 2){
        demoBg.style.backgroundImage = "url('images/demo-3.jpg')"; 
     }

     if(count == 3){
        demoBg.style.backgroundImage = "url('images/demo-4.jpg')";  
     }

     if(count > 3){
        demoBg.style.backgroundImage = "url('images/demo-1.jpg')";
        return count = 0 ;
     }

}


console.log("Working");

