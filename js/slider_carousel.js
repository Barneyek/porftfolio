   $(document).ready(function() {
            $('#image-gallery').lightSlider({
                item: 4,
                slideMargin: 0,
                pager: false,
                speed: 500,
                auto: true,
                controls:true,
             centerSlide:true,
                loop: true,
                onSliderLoad: function() {
                    $('#image-gallery').removeClass('cS-hidden');
                }
            });
        });
