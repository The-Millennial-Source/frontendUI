$(document).on('click', '.menu-icon', function () {


            $(".menu-toggle").animate({
                left: "0"
            }, {
                duration: 800
            });

        
        });


        $(document).on('click', '.close-menu', function () {


            $(".menu-toggle").animate({
                left: "-1000"
            }, {
                duration: 800
            });

        
        });


        $(function() {
            var body = $("body ");
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
      
                if (scroll >= 100) {
                    body.addClass("stick");
                } else {
                    body.removeClass("stick");
                }
            });
        });
      
      