

$(document).ready(function(){


/* postepljeno pojavljivanje teksta  prilikom ocitavanje stranice  */
    $('#naslov').hide().delay(5500).fadeIn('slow');
    $('#naslov2').hide().delay(3500).fadeIn();
    $('#naslov3').hide().delay(1500).fadeIn('slow');

 
    $('.js-action').addClass('actionActive');

    setTimeout(() => {
      $('.js-action2').addClass('actionActive');
    }, 5000);

    setTimeout(() => {
      $('.js-action2').removeClass('actionActive');

    }, 10000);


    
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
     var img = document.createElement("IMG");
     img.src =  '../icon/strelicaGore.png';
     var img2 = document.createElement("IMG");
     img2.src =  '../icon/strelicaDole.png';

        if(!$(this).parent().hasClass('active')){
            $(this).parent().addClass('active');
            $(this).next().removeClass('no')
            $(this).parent().parent().addClass('itemActive');
            $(this).html(img)
            $(this).prev().get(0).innerHTML="Prikazi manje"
            
        }else{
            $(this).parent().removeClass('active');
            $(this).parent().parent().removeClass('itemActive');
            $(this).next().addClass('no')
            $(this).html(img2)
            $(this).prev().get(0).innerHTML="Prikazi vise"           

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

            console.log(this)
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

