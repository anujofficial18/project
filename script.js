$(function(){
  
    $(".cat-btn").hover(
        function(e) {
           $('#mens').collapse('show');
         }, function() {
           $('#mens').collapse('hide');
         }
       );

})