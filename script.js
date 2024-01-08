let burger = document.getElementById("burg");

burger.addEventListener("click", () => {
    console.log("burger clicked") //just to check
        document.querySelector(".mob-nav1-ul").style.display = "block";
        document.querySelector(".nav-div").style.height = "100vh";
        document.querySelector("#burg").style.display = "none";
        document.querySelector(".close").style.display = "block";
})

let clos = document.getElementById("closed");

clos.addEventListener("click", ()=>{
    document.querySelector(".mob-nav1-ul").style.display = "none";
    document.querySelector(".nav-div").style.height = "auto";
    document.querySelector("#burg").style.display = "block";
    document.querySelector(".close").style.display = "none";
    console.log("check close")
})