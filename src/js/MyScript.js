$(document).ready(function(){
    $(".preloader__scene").css("display", "none");
    
    function calculate(){
      let sum = parseInt($("#select1 option:selected").val()) + parseInt($("#select2 option:selected").val()) + parseInt($("#select3 option:selected").val());
       let days = parseInt($("#select1 option:selected").attr("days")) + parseInt($("#select2 option:selected").attr("days")) + parseInt($("#select3 option:selected").attr("days"));
       $(".days .cena_c").text(days);
       $(".price .cena_i").text(sum);
    }
    $("select").on("change", function(){
        calculate();
   });
    calculate();
    
    
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        
        $('.selection').each((i, el) => {
            
            if ($(el).offset().top - $('.nav').outerHeight() <= scrollDistance) {
                $('.nav').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                
                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }
        });
    });
});