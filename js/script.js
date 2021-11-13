// скролл по кнопке

const introButton = document.getElementById('ibtn');


let box = document.querySelector('#intro');
let istyle = getComputedStyle(box);
let height = box.clientHeight;


introButton.addEventListener('click', function() {
    window.scroll(0, height);
})

// эмбед

$('#play-video').on('click', function(e){
    e.preventDefault();
    $('#video-overlay').addClass('open');
    $("#video-overlay").append('<iframe width="800" height="500" src="https://www.youtube.com/embed/ngElkyQ6Rhs" frameborder="0" allowfullscreen></iframe>');
  });
  
  $('.video-overlay, .video-overlay-close').on('click', function(e){
    e.preventDefault();
    close_video();
  });
  
  $(document).keyup(function(e){
    if(e.keyCode === 27) { close_video(); }
  });
  
  function close_video() {
    $('.video-overlay.open').removeClass('open').find('iframe').remove();
  };