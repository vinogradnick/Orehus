(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.tabs').tabs();
    $('.modal').modal();
    $('input#input_text, textarea#textarea2').characterCounter();
    $('.tap-target').tapTarget();
    $('#lrsp').hide();
    
    $('#lrspstart').click(function(){
      $('#lrsp').show();
      $('.preloading_page').hide();
    });

    $('#helper').click(function () {
      $('#helperOrehus').fadeIn(2000);
    })
    $('#helperHide').click(function () {
      $('#helperOrehus').fadeOut(2000);

    })
    $('#helperOrehus').hide();

    var start = new Date;

    setInterval(function () {
      $('#clock').text($.now());
    }, 1000);
    $('.note').click(function () {
      var el = $(this);
      if (el.parent().hasClass('double')) {
        el = $(this).parent();
      }

      el.addClass('tr');
      setTimeout(function () {
        el.slideUp('fast');
      }, 400);
      setTimeout(function () {
        el.remove();
      }, 500);
      var test = $('#notes').children().size();
      if (test == 2) {
        setTimeout(function () {
          $('#no-cards').slideDown();
        }, 650);
      }
    });



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
  $('<div class="message loading new"><figure class="avatar"><img src="orehus.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
  updateScrollbar();

  setTimeout(function () {
    $('.message.loading').remove();
    $('<div class="message new"><figure class="avatar"><img src="orehus.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + (Math.random() * 20) * 100);

}

$('.button').click(function () {
  $('.menu .items span').toggleClass('active');
  $('.menu .button').toggleClass('active');
});


function clock_2() {

  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours < 10)
    hours = "0" + hours;
  if (minutes < 10)
    minutes = "0" + minutes;
  if (seconds < 10)
    seconds = "0" + seconds;

  var str = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock_2").innerHTML = str;
  setTimeout("clock_2()", 1000);
};

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    hoursSpan.innerHTML = (t.hours);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 3 * 60 * 60 * 1000);
initializeClock('clock_container', deadline);


