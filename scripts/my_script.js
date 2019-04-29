$(document).ready(function(){
    $(".navbar").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() < 100) {
            $('.navbar').fadeOut();
            console.log('lol');
        } else {
            $('.navbar').fadeIn();
            console.log('xd')
        }
    });
});

particlesJS.load('particles-js', 'scripts/particles.json',
        function(){
            console.log('particles.json loaded...');
        })