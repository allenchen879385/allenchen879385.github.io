$(function(){
       $("#variety dd").hide();
       $("#variety dt").click(function() {
          $("+dd",this).slideToggle(1200);
       });
     });