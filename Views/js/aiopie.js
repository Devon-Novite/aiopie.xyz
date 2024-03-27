// JavaScript Document

$('.button').click(function(){
    $(this).stop().animate({
        width:'300px',
        height:'300px'
    });
    $('.column').show();
});
	
 $('.button').on('click',function(e){
     e.stopPropagation()
     $(this).parent('.column').stop().animate({
         width: '300px',
         height:'50px'
     });
     $(this).hide();
 });