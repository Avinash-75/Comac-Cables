$(document).ready(function(){
   $('.food-slider').slick({
      autoplay:true,
     slidesToShow:3,
     slidesToScroll:1,
     prevArrow:".prev-btn",
     nextArrow:".next-btn",
     responsive:[
        {
           breakpoint:992,
           settings:{
            slidesToShow:2,
           }
        },
        {
         breakpoint:768,
         settings:{
          slidesToShow:1,
         }
      }
     ]

   });

   $('.nav-trigger').click(function(){
      $('.site-content-wrapper').toggleClass('scaled');
   })
});
        document.getElementById("Admin-login").addEventListener("click", function() {
            document.querySelector(".popup").style.display = "flex";
            document.querySelector(".popup-overlay").style.display = "flex";
            document.querySelector(".popup .form .Login-header").innerHTML = "Admin Login";
            document.querySelector(".popup .form .Login-header").style.fontSize = "30px";
        });
        document.getElementById("close-btn").addEventListener("click", function() {
            document.querySelector(".popup").style.display = "none";
            document.querySelector(".popup-overlay").style.display = "none";
        });
        document.getElementById("User-login").addEventListener("click", function() {
            document.querySelector(".popup").style.display = "flex";
            document.querySelector(".popup-overlay").style.display = "flex";
            document.querySelector(".popup .form .Login-header").innerHTML = "User Login";
            document.querySelector(".popup .form .Login-header").style.fontSize = "30px";
        });
        document.getElementById("Register").addEventListener("click", function() {
            document.querySelector(".popup").style.display = "flex";
            document.querySelector(".popup-overlay").style.display = "flex";
            document.querySelector(".popup .form .Login-header").innerHTML = "Register";
            document.querySelector(".popup .form .Login-header").style.fontSize = "30px";
        });


        
document.getElementsByClassName("Admin-login").addEventListener("click", function() {
            document.querySelector(".popup").style.display = "flex";
            document.querySelector(".popup-overlay").style.display = "flex";
            document.querySelector(".popup .form .Login-header").innerHTML = "Admin Login";
            document.querySelector(".popup .form .Login-header").style.fontSize = "30px";
        });
        document.getElementsByClassName("close-btn").addEventListener("click", function() {
            document.querySelector(".popup").style.display = "none";
            document.querySelector(".popup-overlay").style.display = "none";
        });
        document.getElementsByClassName("User-login").addEventListener("click", function() {
            document.querySelector(".popup").style.display = "flex";
            document.querySelector(".popup-overlay").style.display = "flex";
            document.querySelector(".popup .form .Login-header").innerHTML = "User Login";
            document.querySelector(".popup .form .Login-header").style.fontSize = "30px";
        });
        document.getElementsByClassName("Register").addEventListener("click", function() {
            document.querySelector(".popup").style.display = "flex";
            document.querySelector(".popup-overlay").style.display = "flex";
            document.querySelector(".popup .form .Login-header").innerHTML = "Register";
            document.querySelector(".popup .form .Login-header").style.fontSize = "30px";
        });