// For Hamburger mob menu function

let burger = document.getElementById("burg");

burger.addEventListener("click", () => {
    console.log("burger clicked") //just to check
    document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".mob-nav1-ul").style.display = "block";
        document.querySelector(".nav-div").style.height = "100vh";
        document.querySelector("#burg").style.display = "none";
        document.querySelector(".close").style.display = "block";
        document.querySelector(".banner-txt").style.position = "relative";
        
})

let clos = document.getElementById("closed");

clos.addEventListener("click", ()=>{
    document.querySelector("body").style.overflow = "auto";
    document.querySelector(".mob-nav1-ul").style.display = "none";
    document.querySelector(".nav-div").style.height = "auto";
    document.querySelector("#burg").style.display = "block";
    document.querySelector(".close").style.display = "none";
    document.querySelector(".banner-txt").style.position = "absolute";
    
    console.log("check close")
})

// For Top arrow function

document.addEventListener("DOMContentLoaded", function() {
    let topArrow = document.getElementById("topArrow");

    topArrow.addEventListener("click", () => {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // You can use "auto" for instant scrolling
        });
    });
});