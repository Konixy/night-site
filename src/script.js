window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleMenu(){
    var header = document.querySelector("header");
    var menuToggle = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var all = document.querySelector('html');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
    // header.classList.toggle('sticky');
    // all.classList.toggle('cantscroll');
}

function toggle(){
    var header = document.querySelector("header");
    var blur = document.querySelector('#blur');
    var all = document.querySelector('html');
    blur.classList.toggle('active');
    header.classList.toggle('sticky2');
    all.classList.toggle('cantscroll');
    var connect = document.querySelector('#connect');
    connect.classList.toggle('active');
}

function validate(){
    const form = document.getElementsById('email');
    const email = document.getElementsById('email').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if(email.match(pattern)){
        form.classList.add('valid')
    } else {
        form.classList.remove('valid')
    }
}

//$(document).ready(function(e){
//    $('.btn').on('mouseenter', function(e){
//        x = e.pageX - $(this).offset().left;
//        y = e.pageY - $(this).offset().top;
//        $(this).find('span').css({top:y, left:x})
//    })
//})
