$(document).ready(function ()
{
    sizeSlider();
    $(window).resize(function ()
    {
        sizeSlider();
    });
});

function sizeSlider()
{
    $('#slider').fadeSlideShow({
        width: $(this).parent().width(),
        height: $(window).height() - 60,
        allowKeyboardCtrl: false,
        PlayPauseElement: false,
        interval: '7000',
        speed: 1500,
        NextElement: false,
        PrevElement: false,
        ListElement: false
    });
}