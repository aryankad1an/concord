var swiper=new swiper('.myswiper',{
    slidesperview:3,
    spacebetween:10,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
    navigation:{
        nextE1:'.swiper-button-next',
        prevE1:'.swiper-button-prev',
    },
    breakpoints:{
        320:{
            slidesperview:1,
        },
        768:{
            slidesperview:2,
            spacebetween:20,
        },
        992:{
            slidesperview:3,
            spacebetween:20,
        }
    },
});