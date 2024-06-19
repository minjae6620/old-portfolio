$(document).ready(function() {

  window.addEventListener("scroll",function() {
    var header = document.querySelector("header")
    header.classList.toggle("pageD",window.scrollY > 1000);
  });

  var num = 0;
  $("body").on("mousewheel DOMMouseScroll",function(e) {
    e.preventDefault();
    var evt = e.originalEvent;
      var delta = 0;
      if (evt.detail) {
        // 브라우저가 파이어폭스인 경우
        delta = evt.detail * -40;
      }else {
        // 브라우저가 크롬 익스,오페라인 경우
        delta = evt.wheelDelta;
      };
      //휠 작업
      if (delta>0) {
        //마우스 휠을 올렸을 떄
        num--;
        if (num < 0) {
          num = 0;
        }
        $("div.canonMain>div.inner").css("top",(num/1)+33+"%");
        $("div.canonMain>img").css("top",(-num/2)+-15+"%");
      }else {
        // 마우스 휠을 내렸을
        num++;
        if (num > 90) {
          num = 90;
        }
        $("div.canonMain>div.inner").css("top",(num/1)+33+"%");
        $("div.canonMain>img").css("top",(-num/2)+-15+"%");
      };
  })

  // 포트폴리오 버튼
  var btnstatus = false;
  $(".gnb li").eq(2).click(function(e) {
    e.preventDefault();
    if (btnstatus == false) {
      $(this).addClass("on");
      $(".all2").addClass("on");
      $("header").removeClass("pageD");
      $("header").addClass("textbk");
      btnstatus = true;
    }else {
      $(this).removeClass("on");
      $(".all2").removeClass("on");
      $("div.sliderWrap>ul").css("left","0px");
      $("header").removeClass("textbk");
      btnstatus = false;
    };
  })

  // 포트폴리오 탭메뉴
  var num2 = 0;
  $(".all2").on("mousewheel DOMMouseScroll",function(e) {
    e.preventDefault();
    var evt2 = e.originalEvent;
      var delta2 = 0;
      if (evt2.detail) {
        // 브라우저가 파이어폭스인 경우
        delta2 = evt2.detail * -40;
      }else {
        // 브라우저가 크롬 익스,오페라인 경우
        delta2 = evt2.wheelDelta;
      };
      //휠 작업
      if (delta2>0) {
        //마우스 휠을 올렸을 떄
        num2--;
        if (num2 < 0) {
          num2 = 0;
        }
        $("div.sliderWrap>ul").css("left",-num2*50+"px");
      }else {
        // 마우스 휠을 내렸을
        num2++;
        if (num2 > 56) {
          num2 = 56;
        }
        $("div.sliderWrap>ul").css("left",-num2*50+"px");
      };
  });

  // 포트폴리오 마우스 호버
  $(".sliderWrap>ul>li").hover(function(e) {
    e.preventDefault();
    var liHover = $(this).index();
    $(".all2>div").removeClass();
    $(".all2>div").addClass("bg"+liHover);
  });

  // 택스트 움직임
  $(window).scroll(function() {
     var windowHeight = $(window).height();
     var currentScroll = $(window).scrollTop()+(windowHeight/1);

     $(".inner").each(function () {
       var wrapTop = $(this).offset().top;
       if (currentScroll > wrapTop) {
         $(this).addClass("on")
       }else {
         $(this).removeClass("on")
       }
     });
  });

  // 모바일 앱 오픈
  $(".app").click(function(e) {
    e.preventDefault();
    window.open("../joytrip/log_in.html","popup","width=400,height=800,scrollbars=no,left=100,top=100");
  });
  // $(".back").click(function() {
  //   history.back();
  //   history.forward();
  // });



});


































// ls
