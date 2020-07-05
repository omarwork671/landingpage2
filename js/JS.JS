var myVideo = document.getElementById("video1");

function playPause() {
    if (myVideo.paused)
    myVideo.play();
    else
  	myVideo.pause(); // <-- صح
}

$(document).ready(function(){

  $(function () {
    $("#comment-form").validate();
  });

  //حركة التأثير عتد أرتفاع الصفحة
  $(".go-dwon").on('click', function(event) {
    event.preventDefault();
    var el = this.hash;
    $('html, body').animate({
      scrollup: $(el).offset().top
    }, 1500);
});


});