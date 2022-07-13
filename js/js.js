$('.dropbtn').click(function(){
    $('.dropdown').toggleClass('display');
    $('.dropdown2').removeClass('display');
})


$('.dropbtn2').click(function(){
    $('.dropdown2').toggleClass('display');
})

$('.fa-bars').click(function(){
    $('.menu-content').toggle();
})


var typed = new Typed(".auto-type",{
    strings: ["Website Educational", "يسهل عملية التعلم"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true
})