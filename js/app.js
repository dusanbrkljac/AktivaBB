

$(document).ready(function(){


//menajnje header na< od laptop
  $(window).on("scroll",function(){
    let scroll = $(window).scrollTop();
    if(scroll > 780){

      $('.header-title').addClass('addColorBlac')
      $('.menu ul li a').addClass('addColorBlac')
      $('.action2').addClass('addBackColorBlac')

      //dodavanje slike za telefon (mobilna verzija)
    $('.js-footer-contact').removeClass('no')

    }else{
      $('.header-title').removeClass('addColorBlac')
      $('.menu ul li a').removeClass('addColorBlac')
      $('.action2').removeClass('addBackColorBlac')

      //dodavanje slike za telefon (mobilna verzija)
      $('.js-footer-contact').addClass('no')

    }
  })
  

  /* postepljeno pojavljivanje teksta  prilikom ocitavanje stranice  */

const show = () => {
  $('#naslov').hide().delay(3000).fadeIn('slow');
  $('#naslov2').hide().delay(2000).fadeIn();
  $('#naslov3').hide().delay(1000).fadeIn('slow');

  $('.js-action').addClass('actionActive');

}

show()



    

 

    // setTimeout(() => {
    //   $('.js-action2').addClass('actionActive');
    // }, 5000);

    // setTimeout(() => {
    //   $('.js-action2').removeClass('actionActive');

    // }, 10000);


    
    /* funkcionisanje nav bar-a za mobilni uredjaj */
    $('.js-menuImage').click(function(){

        if(!$(this).hasClass('active')){
            $(this).addClass('active')
            $('body').addClass('overflow')
            $('.openIcon').css('display', 'none')
            $('.closeIcon').css('display', 'block')
           $('.hamburger-mobile').addClass('activeHamburger')
        }else{     
              
            $(this).removeClass('active')
            $('body').removeClass('overflow')
            $('.openIcon').css('display', 'block')
            $('.closeIcon').css('display', 'none')
            $('.hamburger-mobile').removeClass('activeHamburger')
        }        
    })

    $('.link').click(function(){
      $('body').removeClass('overflow')
      $('.openIcon').css('display', 'block')
      $('.closeIcon').css('display', 'none')
      $('.hamburger-mobile').removeClass('activeHamburger')

    })


  

/*   Pritiskom na strelicu gore/dole se prosuruje/smanjuje tekst  */

    $('.js-toggle-usluga').click(function(){
      
        if(!$(this).parent().hasClass('active')){
            $(this).parent().addClass('active');
            $(this).parent().parent().addClass('itemActive');

        //    $(this).addClass('no');
       //     $(this).next().removeClass('no')
            $(this).next().removeClass('no')           
            $(this).prev().get(0).innerHTML="Prikazi manje"

            /*NOVO */ 
          $(this).children('div').addClass('oneAndTwoArrowsNew');

            
        }else{
            $(this).parent().removeClass('active');
            $(this).parent().parent().removeClass('itemActive');

           // $(this).addClass('no') 
        //    $(this).prev().removeClass('no')
         //   $(this).next().addClass('no')
            // $(this).next().next().addClass('no')
            // $(this).prev().prev().get(0).innerHTML="Prikazi vise"
            
            $(this).next().addClass('no')           
            $(this).prev().get(0).innerHTML="Prikazi vise"

            $(this).children('div').removeClass('oneAndTwoArrowsNew');

  
        }
    })


    $('.js-strelica').click(function(){

      if($(this).parent().parent().hasClass('active')){
        $(this).parent().parent().removeClass('active')
        $(this).parent().parent().parent().removeClass('itemActive')

        $(this).parent().prev().prev().get(0).innerHTML="Prikazi vise"
        $(this).parent().prev().children('div').removeClass('oneAndTwoArrowsNew');
        $(this).parent().addClass('no')

      }
    })


    // U odeljku za informacije slide se okrecu!

    // $('.js-info').hover(

    //   function(){

    //     if(!$(this).parent().hasClass('active')){
    //       $(this).parent().addClass('active')
    //       $('.image', this).addClass('rotate')
    //       $('.drugaStrana',this).addClass('rotate')
    //       $('div div',this).addClass('rotate');

    //       setTimeout(() => {
    //         $('.image',this).addClass('no')
    //         $('.drugaStrana',this).removeClass('no')
    //       }, 1000);

    //     }     
    //   },
    

    //   function(){

    //     if($(this).parent().hasClass('active')){
    //       $(this).parent().removeClass('active')
    //       $('.image', this).removeClass('rotate')
    //       $('.drugaStrana',this).removeClass('rotate')
    //       $('div div',this).removeClass('rotate');

    //       setTimeout(() => {
    //         $('.image',this).removeClass('no')
    //         $('.drugaStrana',this).addClass('no')
    //       }, 1000);

    //     }
    //   }

    // )








    // !Informacije

    $('.js').click(function(){
      //  console.dir(this)
        if($(this).hasClass('js-prvi')){

            const father =   $(this).parent().parent();
            $(father).children('div').eq(1).removeClass('no-visible')
            $(father).children('div').eq(2).addClass('no-visible')
            $(father).children('div').eq(3).addClass('no-visible')

            $(this).addClass('btn-active')
            $(this).next().removeClass('btn-active')
            $(this).next().next().removeClass('btn-active')
           
        }else if($(this).hasClass('js-drugi')){

           const father =   $(this).parent().parent();
           $(father).children('div').eq(2).removeClass('no-visible')
           $(father).children('div').eq(1).addClass('no-visible')
           $(father).children('div').eq(3).addClass('no-visible')

           $(this).addClass('btn-active')
           $(this).next().removeClass('btn-active')
           $(this).prev().removeClass('btn-active')

           // console.log(this)
        }else if($(this).hasClass('js-treci')) {
    
          const father =   $(this).parent().parent();     
          $(father).children('div').eq(3).removeClass('no-visible')
          $(father).children('div').eq(1).addClass('no-visible')
          $(father).children('div').eq(2).addClass('no-visible')

          $(this).addClass('btn-active')
          $(this).prev().removeClass('btn-active')
          $(this).prev().prev().removeClass('btn-active')
     
        }
    })

   





  })

