   $(document).ready(function() {
            $("#content-slider").lightSlider({
                loop: true,
                keyPress: true,
                controls:false
            });
            $('#image-gallery').lightSlider({
                controls:false,
                gallery: true,
                item: 1,
                thumbItem: 5,
                slideMargin: 0,
                speed: 500,
                auto: true,
                loop: true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }
            });
        });
