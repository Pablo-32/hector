$(document).ready(function () {
    $('.menu_bar').click(function(){
        $('nav').animate({
          left: '0',
          transition: '.7s'
        }); 
    });
          
    $('li').click(function(){
        $('nav').animate({
          left: '-100%'
        });
    });
    
    $('section').click(function(){
        $('nav').animate({
          left: '-100%'
        });
    });
}); 