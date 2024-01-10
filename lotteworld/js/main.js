$(function () {
  // 헤더
  $(window).scroll(function () {
    t = $(window).scrollTop();

    if (t > 160) {
      $("header").css({ position: "fixed" });
      $("header").css({ "margin-top": "-45px" });
      $("#mobileH").css({ position: "fixed" });
    } else {
      $("header").css({ position: "relative" });
      $("header").css({ "margin-top": "0" });
      $("#mobileH").css({ position: "relative" });
    }
  });

  $("#search_open").click(function () {
    $(".search_box").toggleClass("toggle_open");
  });
  $("#search_close").click(function () {
    $(".search_box").removeClass("toggle_open");
  });

  // 자동넘김
  var n2 = 0;
  var pos = 0;

  function slideInterval() {
    if (n2 < 4) {
      n2 = n2 + 1;
    } else {
      n2 = 0;
    }
    $(".slidecontroller > ul > li > a").removeClass("on01");
    $(".slidecontroller > ul > li").eq(n2).find("a").addClass("on01");

    pos = n2 * -100 + "%";
    $("#slide > ul ").animate({ left: pos }, 500);
  }

  $(".slidecontroller > ul > li").eq(n2).find("a").addClass("on01");

  var id = setInterval(slideInterval, 8000);

  $(".slidecontroller > ul > li > a").click(function (e) {
    e.preventDefault();
    $(".slidecontroller > ul > li > a").removeClass("on01");
    $(this).addClass("on01");

    n2 = $(this).parent().index();
    pos = n2 * -100 + "%";
    $("#slide > ul").animate({ left: pos }, 500);
  });

  //슬라이드 left, right 버튼
  var w2 = 100 + "%";
  var amount2 = 0;

  $("#slide .controller02 .left_s").click(function (e) {
    e.preventDefault();
    amount2 -= w2;
    $("#slide > ul").animate({ left: amount2 }, 600, function () {
      $(this).append($("#slide > ul li:first-child"));
      amount2 += w2;
      $(this).css({ left: amount2 });
    });
  });

  $("#slide .controller02 .right_s").click(function (e) {
    e.preventDefault();
    $("#slide > ul").prepend($("#slide > ul li:last-child"));

    amount2 -= w2;
    $("#slide > ul").css({ left: amount2 });
    amount2 += w2;
    $("#slide > ul").animate({ left: amount2 }, 600);
  });

  var n3 = 0;

  $("#ipad_slide li").eq(0).addClass("slide_on");

  setInterval(function () {
    if (n3 < 4) {
      n3++;
    } else {
      n3 = 0;
    }
    $("#ipad_slide li").removeClass("slide_on");
    $("#ipad_slide li").eq(n3).addClass("slide_on");
  }, 4000);

  //메인메뉴

  $("#main_menu > li").hover(
    function () {
      $(this).find(".menubox").stop().slideDown(300);
      $(this).find("a").addClass("on_before");
    },
    function () {
      $(this).find(".menubox").stop().slideUp(400);
      $(this).find("a").removeClass("on_before");
    }
  );

  $(".m_middle .m_ul > li ")
    .on("mouseover focusin", function () {
      $(this).find(".m_submenu").addClass("menushow");
    })
    .on("mouseleave focusout", function () {
      $(this).find(".m_submenu").removeClass("menushow");
    });

  //모바일 아코디언 메뉴

  $("#openbtn").click(function () {
    $("#m_sidemenu").stop().animate({ "margin-left": "0" }, 400);
  });
  $("#closebtn").click(function () {
    $("#m_sidemenu").stop().animate({ "margin-left": "-100%" }, 400);
  });

  $("#mobile_menuul > li > a").click(function () {
    var $this = $(this);

    if ($this.next().hasClass("m_show")) {
      $this.next().removeClass("m_show");
      $this.next().slideUp(200);
      $(this).find("span").text("+");
    } else {
      $(this).parent().parent().find("li .inner").removeClass("m_show"); // 중요
      $(this).parent().parent().find("li .inner").slideUp(350);
      $(this).find("span").text("-");
      $this.next().toggleClass("m_show");
      $this.next().slideToggle(350);
    }
  });

  //섹션 01

  //퍼레이드 부분 ]
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 5,
    spaceBetween: 20,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(window).resize(function () {
    w = $(".swiper-slide").width();

    $(".swiper-slide").css({ width: "280px" });
  });
  $(window).trigger("resize");

  //어트랙션 부분
  var menu = $("#tab_ul li");
  var content = $(".tab_content");

  menu.click(function (e) {
    e.preventDefault();
    var targetIdx = $(this).index();

    content.hide();
    content.eq(targetIdx).show();
    $("#tab_ul li a").removeClass("a_on");
    $("#tab_ul li a").eq(targetIdx).addClass("a_on");
  });

  content.eq(0).show();

  //페이지 섹션별 올라오는 효과
  var t2 = 0;
  var timer = 0;

  $(window).scroll(function () {
    timer = setTimeout(function () {
      t2 = $(window).scrollTop();

      if (t2 >= $("#section01").offset().top - 500) {
        $("#section01").addClass("action");
      } else if (t2 >= $("#section02").offset().top + 500) {
        $("#section02 > .p_textbox ").addClass("action");
      }
    }, 100);
  });

  $(window).trigger("scroll");

  $("#top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
  });

  //퀵
  $(".quick_btn").click(function (e) {
    e.preventDefault();
    $(".quick_box").fadeToggle(220);
    $(".quick_box").toggleClass("emphasized");
  });
});
