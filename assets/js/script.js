(function( $ ) {

    $(document).ready(function() {
        $(".header__btn-open").on("click", function() {
           $(".header__nav").toggleClass("show");
        });
    });

    $(window).scroll(function(){
        fixedHeader()
    });

    //function for header fixed
    function fixedHeader() {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('fixed_head');
        } else {
            $('header').removeClass('fixed_head');
        }
    };
})( jQuery );