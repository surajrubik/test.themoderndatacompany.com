(function($, window){
    $(function() {

        // --- Toggle mobile menu ---

        $('.js-toggle-mobile-menu').on('click', function(e){

            $('html').toggleClass('h-menu-visible');

            e.preventDefault();

        });


        // Typing text in intro page

        if ($('.js-typed-text').length > 0)
        {

            var typed = new Typed('.js-typed-text', {
                strings: ["_Simplified^500", "_Democratized^500", "_Reimagined^500"],
                typeSpeed: 50,
                backSpeed: 20,
                loop: true
            });

        }

    });
})(jQuery, window);



