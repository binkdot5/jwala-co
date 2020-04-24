// JavaScript Document

//self executing anonymous function

(function(){
	"use strict";
	console.log("fired");
    
    var button = document.querySelector("#hamButton");
    var burgerMenu = document.querySelector("#webLinks");
    
    function hamburgerMenu () {
        burgerMenu.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
    }
    
    button.addEventListener("click", hamburgerMenu, false);

		
})();