$(document).ready(function() {

  window.addEventListener("scroll",function() {
    var header = document.querySelector("header")
    header.classList.toggle("pageD",window.scrollY > 100);
  });

  var num = 0;
  $(".Education").on("mousewheel DOMMouseScroll",function(e) {
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
        $("ul.slide").css("left",-num*25+"px");
      }else {
        // 마우스 휠을 내렸을
        num++;
        if (num > 45) {
          num = 45;
        }
        $("ul.slide").css("left",-num*25+"px");
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
      btnstatus = true;
    }else {
      $(this).removeClass("on");
      $(".all2").removeClass("on");
      $("div.sliderWrap>ul").css("left","0px");
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


  // pop-up_Slider
  var sIdx = 0;

  $(".btnNext").click(function() {
    sIdx++;
    if (sIdx > 7) {
      sIdx = 0;
    };
    slideMove(sIdx);
  });

  $(".btnPrev").click(function() {
    sIdx--;
    if (sIdx < 0) {
      sIdx = 7;
    };
    slideMove(sIdx);
  });

  function slideMove(slideIndex) {
    $(".slider").css("transform","translateX(-"+(slideIndex*11.1)+"%)");
    $(".pageList>li").removeClass("on");
    $(".pageList>li").eq(slideIndex).addClass("on");
  }

  $(".pageList>li").click(function() {
    $(".pageList>li").removeClass("on");
    $(this).addClass("on");
    var liDex = $(this).index();
    sIdx = liDex;
    slideMove(liDex);
  });

  // var timer = setInterval(function() {
  //   sIdx++;
  //   if (sIdx > 7) {
  //     sIdx = 0;
  //   };
  //   slideMove(sIdx);
  // },5000);
  //
  // $(".slideWrap").mouseover(function () {
  //   clearInterval(timer);
  // });
  //
  // $(".slideWrap").mouseout(function () {
  //   timer = setInterval(function() {
  //     sIdx++;
  //     if (sIdx > 7) {
  //       sIdx = 0;
  //     };
  //     slideMove(sIdx);
  //   },5000);
  // });




});
