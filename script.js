Page_me = document.querySelector('#Page_me');
Page_dev = document.querySelector('#Page_dev');
Page_game = document.querySelector('#Page_game');

iframe = document.querySelector('#iframe');

Page_me.addEventListener('click', function() {
    iframe.src = 'cdlms.html'
});

Page_dev.addEventListener('click', function() {
    iframe.src = 'dev.html'
});

Page_game.addEventListener('click', function() {
    iframe.src = 'game.html'
});
