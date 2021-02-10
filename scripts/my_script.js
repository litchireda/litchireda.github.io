$(document).ready(function(){
    $(".navbar").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() < 100) {
            $('.navbar').fadeOut();
        } else {
            $('.navbar').fadeIn();
        }
    });
});



particlesJS.load('particles-js', 'scripts/particles.json',
    function(){
        console.log('particles.json loaded...');
    }
);

function isElementVisible($elementToBeChecked)
{
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $elementToBeChecked.offset().top;
    var BotElement = TopElement + $elementToBeChecked.height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

$(window).scroll(function () {
    $( ".skills-bar" ).each(function() {
        $this = $(this);
        isOnView = isElementVisible($(this));
        if(isOnView && !$(this).hasClass('bar-animation')){
            $(".php-bar").addClass('bar-animation');
            $(".php-bar").removeClass('empty-bar');
            $(".node-bar").addClass('bar-animation');
            $(".node-bar").removeClass('empty-bar');
            $(".react-bar").addClass('bar-animation');
            $(".react-bar").removeClass('empty-bar');
            $(".ruby-py-bar").addClass('bar-animation');
            $(".ruby-py-bar").removeClass('empty-bar');
            $(".adapt-bar").addClass('bar-animation');
            $(".adapt-bar").removeClass('empty-bar');
        }
    });
});