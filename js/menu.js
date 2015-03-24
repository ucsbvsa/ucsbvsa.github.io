$(document).ready(function(){

  //mouse over menu 
	$('#header_wrapper').mouseenter(function() {
       $(this).animate({
           "border-bottom-width":"+=27"
       },40);
       //$('#button1').find('.subtopic1').css('visibility', 'visible');  

   });

  //mouse exitting menu 
   $('#header_wrapper').mouseleave(function() {
       $(this).animate({
           "border-bottom-width":"-=27"
       },40); 
       $('.topic').find('ul').css('visibility', 'hidden');
   });   	

   $("#button1").hover(function(){
    $(".subtopic2").css('visibility', 'hidden');
    $(".subtopic3").css('visibility', 'hidden');
    $(".subtopic4").css('visibility', 'hidden');
    $(".subtopic5").css('visibility', 'hidden');
    $(".subtopic6").css('visibility', 'hidden');
    $(".subtopic1").css('visibility', 'visible');
    });

   $("#button2").hover(function(){
    $(".subtopic2").css('visibility', 'visible');
    $(".subtopic3").css('visibility', 'hidden');
    $(".subtopic4").css('visibility', 'hidden');
    $(".subtopic5").css('visibility', 'hidden');
    $(".subtopic6").css('visibility', 'hidden');
    $(".subtopic1").css('visibility', 'hidden');
    });
   $("#button3").hover(function(){
    $(".subtopic2").css('visibility', 'hidden');
    $(".subtopic3").css('visibility', 'visible');
    $(".subtopic4").css('visibility', 'hidden');
    $(".subtopic5").css('visibility', 'hidden');
    $(".subtopic6").css('visibility', 'hidden');
    $(".subtopic1").css('visibility', 'hidden');
    });

   $("#button4").hover(function(){
    $(".subtopic2").css('visibility', 'hidden');
    $(".subtopic3").css('visibility', 'hidden');
    $(".subtopic4").css('visibility', 'visible');
    $(".subtopic5").css('visibility', 'hidden');
    $(".subtopic6").css('visibility', 'hidden');
    $(".subtopic1").css('visibility', 'hidden');
    });

   $("#button5").hover(function(){
    $(".subtopic2").css('visibility', 'hidden');
    $(".subtopic3").css('visibility', 'hidden');
    $(".subtopic4").css('visibility', 'hidden');
    $(".subtopic5").css('visibility', 'visible');
    $(".subtopic6").css('visibility', 'hidden');
    $(".subtopic1").css('visibility', 'hidden');
    });

   $("#button6").hover(function(){
    $(".subtopic2").css('visibility', 'hidden');
    $(".subtopic3").css('visibility', 'hidden');
    $(".subtopic4").css('visibility', 'hidden');
    $(".subtopic5").css('visibility', 'hidden');
    $(".subtopic6").css('visibility', 'visible');
    $(".subtopic1").css('visibility', 'hidden');
    });
});