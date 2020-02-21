	jQuery(document).ready(function(){
  $(".oculto").hide();              
    $(".inf").click(function(){
          var nodo = $(this).attr("href");  
 
          if ($(nodo).is(":visible")){
               $(nodo).hide();
               $(".inf").text("+");
               return false;
          }else{
            $(".oculto").hide("fast");                             
            $(nodo).fadeToggle("fast");
            $(".inf").text("-");
            return false;
          }
    });
}); 