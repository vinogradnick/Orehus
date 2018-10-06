(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.tabs').tabs();
    $('.modal').modal();
    $('input#input_text, textarea#textarea2').characterCounter();




  }); // end of document ready
})(jQuery); // end of jQuery name space




var $messages = $('.messages-content'),
  d, h, m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});


function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate() {
  d = new Date()
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    $('<div class="checkmark-sent-delivered">&check;</div>').appendTo($('.message:last'));
    $('<div class="checkmark-read">&check;</div>').appendTo($('.message:last'));
  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
  setDate();
  $('.message-input').val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function () {
  insertMessage();
});

$(window).on('keydown', function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})


var Fake = [
 'Добрый день, я ваш Помошник Орехус, чем я могу вам услужить?',
'Привет, у тебя возникают трудности при работе с системой?',
'Как настроение? Готов ответить на ваши вопросы',
'Готов вкалывать',
'Опять работа?',
'Помошник Орехус прибыл',
'Вам помочь?',
]
function fakeMessage() {
  if ($('.message-input').val() != '') {
    return false;
  }
  $('<div class="message loading new"><figure class="avatar"><img src="https://cs6.pikabu.ru/post_img/2014/03/22/11/1395512426_1670946460.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function () {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="https://cs6.pikabu.ru/post_img/2014/03/22/11/1395512426_1670946460.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}

$('.button').click(function () {
  $('.menu .items span').toggleClass('active');
  $('.menu .button').toggleClass('active');
});