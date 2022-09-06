

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


    
    /*  nav bar-a  mobilni uredjaj */
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


  

/*   Pritiskom na strelicu gore/dole   */

    $('.js-toggle-usluga').click(function(){
      
        if(!$(this).parent().hasClass('active')){
            $(this).parent().addClass('active');
            $(this).parent().parent().addClass('itemActive');
            $(this).next().removeClass('no')           
            $(this).prev().get(0).innerHTML="Prikazi manje"

          $(this).children('div').addClass('oneAndTwoArrowsNew');
    
        }else{
            $(this).parent().removeClass('active');
            $(this).parent().parent().removeClass('itemActive');            
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

