$(document).ready(function () {
  // $("#home h1").css({ paddingTop: "450px" });
  // 새로고침

  window.onload = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };

  //home 마우스 아이콘 클릭시 woks로 이동
  document.querySelector(".mouse").addEventListener("click", function () {
    var location = document.querySelector("#about").offsetTop;

    window.scrollTo({ top: location, behavior: "smooth" });
  });

  skillView();
  docuMent();
  slideEvnt();
});

$(window).scroll(function () {
  // top버튼
  topBtn();
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 900) {
    $("#header").addClass("back");
  } else {
    $("#header").removeClass("back");
  }
});

// top버튼
function topBtn() {
  var scTop = 0;
  var topBtn = 0;

  topBtn = setTimeout(function () {
    scTop = $(window).scrollTop();
    $(".top_btn").css({ top: scTop + 680 });
  }, 150);

  $(".top_btn").click(function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

//스킬 설명
function skillView() {
  const skill = document.querySelectorAll(".skill_btn span");
  const bubble = document.querySelectorAll(".ball_txt");
  for (let i of bubble) {
    i.style.display = "none";
  }
  skill.forEach(function (target, index) {
    target.addEventListener("mouseover", function () {
      for (let i of bubble) {
        i.style.display = "none";
      }
      bubble[index].style.display = "inline-block";
    });
    target.addEventListener("mouseout", function () {
      for (let i of bubble) {
        i.style.display = "none";
      }
    });
  });
}

// 서류이미지
function docuMent() {
  $("#document .file img, #document .m_document a img").on(
    "mouseover focus",
    function () {
      $(this).attr("src", "images/file_open.png");
    }
  );

  $("#document .file img, #document .m_document a img").on(
    "mouseout focusout",
    function () {
      $(this).attr("src", "images/file_close.png");
    }
  );
}

//슬라이드

function slideEvnt() {
  const slideW = document.querySelector(".slide_wrap");

  document.querySelector(".next").addEventListener("click", function () {
    slideW.style.transform = "translate(-100vw)";
  });

  document.querySelector(".prev").addEventListener("click", function () {
    slideW.style.transform = "translate(0vw)";
  });
}
