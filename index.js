var log = function(value) {
    console.log(value);
}

$(document).ready(function() {
    $('.smooth-scroll').click(function(){
       //  $(this).addClass('active');
      var href = $(this).attr('href');
       $('html, body').animate({scrollTop:$(href).position().top - 50}, 2000);
    });
});