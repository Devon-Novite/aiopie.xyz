// JavaScript Document

$('.expand').click(function(){
    $(this).stop().animate({
        width:'300px',
        height:'300px'
    });
    $('.button').show();
});
	
 $('.button').on('click',function(e){
     e.stopPropagation()
     $(this).parent('.expand').stop().animate({
         width: '300px',
         height:'50px'
     });
     $(this).hide();
 });