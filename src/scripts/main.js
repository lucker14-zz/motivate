$(document).scroll(function(){
    var reference = $('#our-references').offset().top - 80  ;
    var coNabizime = $('#our-work').offset().top - 80;
    var nasTym = $('#our-team').offset().top - 80;
    var contact = $('#contact').offset().top - 80;

    var slider = $('#hero').height() + 65;
    console.log(slider)
    var menu = $('ul.nav');
    var y = $(this).scrollTop();
    if(y < slider)
    {
        $('#menu-background').attr('style','');
        menu.find('li').attr('class','');
    }

    if(y > slider)
    {
        $('#menu-background').css({
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px'
        });
    }
    if(y > slider && y < reference)
    {
        menu.find('li').attr('class','');
        menu.find('li:nth-of-type(1)').addClass('active');
    }
    if(y>reference && y < coNabizime)
    {
        menu.find('li').attr('class','');
        menu.find('li:nth-of-type(2)').addClass('active');
    }
    if(y>coNabizime && y < nasTym)
    {
        menu.find('li').attr('class','');
        menu.find('li:nth-of-type(3)').addClass('active');
    }
    if(y>nasTym && y < contact)
    {
        menu.find('li').attr('class','');
        menu.find('li:nth-of-type(4)').addClass('active');
    }
    if(y>contact)
    {
        menu.find('li').attr('class','');
        menu.find('li:nth-of-type(4)').addClass('active');
    }

    $('#link-blog').removeClass('active');
});

$(function(){
    $('#link-blog').on('click', function(e) {
        window.open($(this).attr('href'), '_blank');
    });
});