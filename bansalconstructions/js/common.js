$(document).ready(function() {

            $('#loader').fadeOut('fast');

            var press = 0;
            $('.resp_nav_trig').on('click', function() {
                if (press == 0) {
                    $('.main_nav').animate({
                        left: '0'
                    }, 'fast');
                    press = 1;
                } else {
                    $('.main_nav').animate({
                        left: '-100%'
                    }, 'fast');
                    press = 0;
                }
            })


            $('.navigation li').on('mouseenter', function() {
                $(this).children('ul').stop().fadeIn('fast');
            });
            $('.navigation li').on('mouseleave', function() {
                $(this).children('ul').stop().fadeOut('fast');
            });


        })