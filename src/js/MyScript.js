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

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 60 + "px"});
});
    
    
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        
        $(".section").each((i, el) => {
            
            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });
                
                $('nav li:eq('+ i +')').find('a').addClass('active');
            }
        });
    });
});

$(document).ready(function(){
    
  let options = {threshold: [0.9]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.about_me');
    elements.each((i,el) => {
        observer.observe(el);
    });
})

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}