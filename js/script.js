let menu = document.querySelector(".list")
let menuBtn = document.querySelector(".bars-icon")
let menuBtnIcon = document.querySelector(".bars-icon i")

menuBtn.addEventListener("click",function(){

    if(menuBtnIcon.classList.contains("fa-bars")){

        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    }
    else{
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }



}


)