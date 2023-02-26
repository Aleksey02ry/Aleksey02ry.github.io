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
    
  let options = {threshold: [0.5]};
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

$(document).ready(function(){
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.skills');
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

$(document).ready(function(){
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.portfolio');
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

$(document).ready(function(){
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.calculator');
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

$(document).ready(function(){
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.statistic');
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

$(document).ready(function(){
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.reviews');
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

$(document).ready(function(){
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.contacts');
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

$(document).ready(function(){
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.map');
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

$(document).ready(function(){
    
  let options = {threshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.footer');
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

$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$('.count').each(function (){
    $(this).prop('statistic_item',0).animate({
        statistic_item: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step:function(now){
            $(this).text(Math.ceil(now));
        }
    });
});

$(document).ready(function () {
 
    var show = true;
    var countbox = ".statistic_container";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.count').css('opacity', '1');
            $('.count').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });
 
});