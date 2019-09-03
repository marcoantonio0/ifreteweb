

$(document).ready(function() {

    AOS.init({
        once: true,
        easing: 'ease',
        delay: 150
    });
    
    $(document).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $(".navbar-light").css("background-color", "white"); // if not, change it back to transparent
            $(".navbar").css("padding", ".5rem 1rem"); // if not, change it back to transparent
            $(".navbar-light .navbar-nav .nav-link").css("color", "#00004E"); // if not, change it back to transparent
            $(".navbar-brand").addClass('scroll'); 
            $("nav .btn-cadastro").addClass('scroll'); 
        }
        else {
            $(".navbar-light").css("background-color", "transparent"); // if not, change it back to transparent
            $(".navbar").css("padding", "1.5rem 1rem"); // if not, change it back to transparent
            $(".navbar-light .navbar-nav .nav-link").css("color", "#97C93C"); // if not, change it back to transparent
            $(".navbar-brand").removeClass('scroll'); 
            $("nav .btn-cadastro").removeClass('scroll'); 
        }
    })



    

})

$('.navTrigger').click(function(){
    $(this).toggleClass('active');
    $(".mobile-nav").toggleClass('active');
    $("html").toggleClass('active');
    $(".navbar-brand").toggleClass('scroll'); 
  });




