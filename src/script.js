window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
})

const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
})

//$(document).ready(function(e){
//    $('.btn').on('mouseenter', function(e){
//        x = e.pageX - $(this).offset().left;
//        y = e.pageY - $(this).offset().top;
//        $(this).find('span').css({top:y, left:x})
//    })
//})