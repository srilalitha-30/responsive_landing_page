//select the elements
var toggle_btn ;
var big_wrapper ;
var hamburger_menu;

function declare(){
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    hamburger_menu = document.querySelector(".hamburger-menu")
}
let dark = false;
 
const main = document.querySelector("main");

declare();
function toggleAnimation(){
  //clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if(dark){
        clone.classList.remove("light");
        clone.classList.add("dark");
    }
    else{
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone); 

    
    clone.addEventListener("animationend",() =>{
        
        big_wrapper.remove();
        clone.classList.remove("copy");
        //reset the variable
        declare();
        events();
    });
}
function events(){
    toggle_btn.addEventListener("click",toggleAnimation);
    hamburger_menu.addEventListener("click",() =>{
    big_wrapper.classList.toggle("active");
});
}
events();