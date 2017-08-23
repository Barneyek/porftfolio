   $(document).ready(function() {
            $("#content-slider").lightSlider({
                loop: true,
                keyPress: true,
                controls:false,
                speed: 500,
                auto: true,
                loop: true
            });
            $('#image-gallery').lightSlider({
                controls:false,
                gallery: true,
                item: 4,
                slideMargin: 0,
                speed: 500,
                auto: true,
                loop: true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }
            });
        });
