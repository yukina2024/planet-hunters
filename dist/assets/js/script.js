$(function () {
  $(window).on("load", function () {
    setTimeout(function () {
      var t = $("#js-loading");
      t.fadeOut(2e3, function () {
        $(this).addClass("hidden");
      });
    }, 1e3);
  }),
    $(window).resize(function () {
      var t = $(window).height();
      $(".mv").height(t);
    }),
    $('a[href^="#"]').on("click", function () {
      var t = 300,
        n = $(this).attr("href"),
        e = $(n == "#" || n == "" ? "html" : n),
        s = e.offset().top;
      return $("html, body").animate({ scrollTop: s }, t, "swing"), !1;
    });
  var o = $("#js-audio").get(0),
    i = !1;
  (o.volume = 0.5),
    $("#js-audio-play").click(function () {
      i ? o.pause() : o.play();
    }),
    (o.onplaying = function () {
      (i = !0),
        $(".audioSwitch").addClass("on"),
        $(".audioSwitch-text").html("SOUND OFF").css("color", "white"),
        $(".audioSwitch-icon").css("color", "white");
    }),
    (o.onpause = function () {
      (i = !1),
        $(".audioSwitch").removeClass("on"),
        $(".audioSwitch-text").html("SOUND ON").css("color", "#BFBFBF"),
        $(".audioSwitch-icon").css("color", "#BFBFBF");
    });
});
$(function () {
  var o = $(".js-footer-btn");
  if (o.length === 0) {
    console.error("ボタンが見つかりません！");
    return;
  }
  console.log("ボタンが見つかりました！"),
    $(window).on("scroll", function () {
      console.log("スクロール量:", $(this).scrollTop()),
        $(this).scrollTop() > 300
          ? o
              .removeClass("opacity-0 pointer-events-none")
              .addClass("opacity-100 pointer-events-auto")
          : o
              .removeClass("opacity-100 pointer-events-auto")
              .addClass("opacity-0 pointer-events-none");
    });
});
