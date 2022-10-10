/* slick test */
let a = jQuery.noConflict();
a(function(){
    a('.slider').each(function(key,item){
        let promotionSliderId = 'promotion_ul' + key; //프로모션 슬라이드
        let packageSliderId = 'package_ul' + key; //패키지 슬라이드
        //let overviewSliderId ='overview_slider'+key; //오버뷰 메인 슬라이드

        //this.id=promotionSliderId;
        a('#promotion_ul')[key].id = promotionSliderId;
        a('#package_ul')[key].id = packageSliderId;
        //$('#overview_slider')[key].id = overviewSliderId;

        let promotionSlider = '#' + promotionSliderId;
        let packageSlider = '#' + packageSliderId;
        //let overviewSlider = '#' + overviewSliderId;

        a(promotionSlider).slick({
            dots: true,
            arrows: true,
            prevArrow : $('.prev_button'),
            nextArrow : $('.next_button'),
            slidesToShow: 3,
            pauseOnHover : true,
            centerMode: false,
            variableWidth: true,
            padding : '-20px',
            /* autoplay: true,
            infinite: true, */

            responsive: [ //반응형 웹 사이즈
                {
                    breakpoint : 375,
                    settings:{
                        slideToShow:2,
                        dots: true,
                        arrows: true,
                        slidesToShow: 1,
                        centerMode: false,
                        padding : '-20px',
                        
                    }
                },
                {
                    breakpoint : 768,
                    settings:{
                        slideToShow:2,
                        /* dots:false, */
                        arrows: true,
                        prevArrow : $('.prev_button'),
                        nextArrow : $('.next_button'),
                        slidesToShow: 3,
                        centerMode: false,
                        padding : '-20px',
                        
                    }
                },
                {
                    breakpoint : 1200,
                    settings:{
                        slideToShow:2,
                        /* dots: false, */
                        arrows: true,
                        prevArrow : $('.prev_button'),
                        nextArrow : $('.next_button'),
                        slidesToShow: 3,
                        centerMode: false,
                        padding : '-20px',
                        
                    }
                }
            ]
        })
        a('')
        a(packageSlider).slick({
            dots: true,
            arrows: true,
            prevArrow : $('.prev_button_package'),
            nextArrow : $('.next_button_package'),
            slidesToShow: 3,
            pauseOnHover : true, 
            centerMode: false,
            variableWidth: true,
            padding : '-20px',
            /* autoplay: true,
            infinite: true, */

            responsive: [ //반응형 웹 사이즈
                {
                    breakpoint : 375,
                    settings:{
                        slideToShow:2,
                        dots: true,
                        arrows: true,
                        slidesToShow: 1,
                        centerMode: false,
                        padding : '-20px',
                    }
                },
                {
                    breakpoint : 768,
                    settings:{
                        slideToShow:2,
                        /* dots: false, */
                        arrows: true,
                        prevArrow : $('.prev_button_package'),
                        nextArrow : $('.next_button_package'),
                        slidesToShow: 3,
                        centerMode: false,
                        padding : '-20px',
                        
                    }
                },
                {
                    breakpoint : 1200,
                    settings:{
                        slideToShow:2,
                        arrows: true,
                        /* dots: false, */
                        prevArrow : $('.prev_button_package'),
                        nextArrow : $('.next_button_package'),
                        slidesToShow: 3,
                        centerMode: false,
                        padding : '-20px',
                        
                    }
                }
            ]
        })
        /* $(overviewSlider).slick({
            prevArrow : $('.prev_overview'),
            nextArrow : $('.next_overview'),
            slidesToShow: 1,
            pauseOnHover : true, 
            centerMode: true,
            variableWidth: true,
            padding : '-20px',
            autoplay: true,
            infinite: true
        })  */
    });
    a('.slider').not('slick-initialized').slick();
})
