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