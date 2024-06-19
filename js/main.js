$(document).ready(function() {

  window.addEventListener("scroll",function() {
    var header = document.querySelector("header")
    header.classList.toggle("sticky",window.scrollY > 0);
    // header.classList.toggle("pageD",window.scrollY > 100);
  });



  // cursor
  $(".all").mousemove(function(e){
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    $(".main>.bg span").eq(0).css("transform","translate("+mouseX/70+"%,"+mouseY/70+"%)rotate(0deg)scale(1.2)");
    $(".main>.bg span").eq(1).css("transform","translate(-"+mouseX/70+"%,"+mouseY/70+"%)rotate(90deg)scale(1.1)");
    $(".main>.bg span").eq(2).css("transform","translate("+mouseX/70+"%,"+mouseY/70+"%)rotate(180deg)scale(1.0)");
  });

  // 포트폴리오 버튼
  var btnstatus = false;
  $(".gnb li").eq(2).click(function(e) {
    e.preventDefault();
    if (btnstatus == false) {
      $(this).addClass("on");
      $(".all2").addClass("on");
      btnstatus = true;
    }else {
      $(this).removeClass("on");
      $(".all2").removeClass("on");
      $("div.sliderWrap>ul").css("left","0px");
      btnstatus = false;
    };
  });

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



});


























// ls
