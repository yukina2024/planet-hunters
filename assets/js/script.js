$(function () {
  $(window).on("load", function () {
    setTimeout(function () {
      var loading = $("#js-loading");
      loading.fadeOut(2000, function () {
        $(this).addClass("hidden");
      });
    }, 1000);
  });

  //画面リサイズ時にMVの高さを調整
  $(window).resize(function () {
    var windowHeight = $(window).height();
    $(".mv").height(windowHeight);
  });

  //ページ内スクロール
  $('a[href^="#"]').on("click", function () {
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      speed,
      "swing"
    );
    return false;
  });

  // //SP用のCTAボタンの表示
  // if (window.matchMedia("(max-width: 768px)").matches) {
  //   $spCTA = $(".spCTA");
  //   $spCTA.hide();
  //   $(window).scroll(function () {
  //     if ($(this).scrollTop() > 1000) {
  //       $spCTA.fadeIn();
  //     } else {
  //       $spCTA.fadeOut();
  //     }
  //   });
  //   $spCTA.on("click", function () {
  //     $("body,html").animate({ scrollTop: 0 }, 300);
  //     return false;
  //   });
  // }

  //オーディオの再生と停止
  var audio = $("#js-audio").get(0);
  var isPlaying = false;
  audio.volume = 0.5;

  $("#js-audio-play").click(function () {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  });
  audio.onplaying = function () {
    isPlaying = true;
    $(".audioSwitch").addClass("on");
    $(".audioSwitch-text").html("SOUND OFF").css("color", "white");
    $(".audioSwitch-icon").css("color", "white");
  };

  audio.onpause = function () {
    isPlaying = false;
    $(".audioSwitch").removeClass("on");
    $(".audioSwitch-text").html("SOUND ON").css("color", "#BFBFBF");
    $(".audioSwitch-icon").css("color", "#BFBFBF");
  };
});
