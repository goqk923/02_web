$(function () {
    let currentIndex = 0;//현재 보이는 값을 지정하기 위한 변수
    const maxIndex = $('.section1-left .item-contents li').length;//이미지 갯수

    // 전환 함수
    function showSlide(index) {
      // 왼쪽 이미지 페이드 전환
      $('.section1-left .item-contents li').fadeOut(500);
      $('.section1-left .item-contents li').eq(index).fadeIn(500);

      // 오른쪽 이미지 전환
      $('.section1-right-imgBox > div').hide();
      $('.section1-right-imgBox > div').eq(index).show();

      // 오른쪽 텍스트 전환
      $('.textWrap > p').hide();
      $('.textWrap > p').eq(index).show();

      // 탭 활성화
      $('.section1-right-tabBox ul li').removeClass('active');
      $('.section1-right-tabBox ul li').eq(index).addClass('active');

      currentIndex = index;
    }

    // 자동 슬라이드
    let slideTimer = setInterval(function () {
      let nextIndex = (currentIndex + 1) % maxIndex;
      showSlide(nextIndex);
    }, 3000);

    // 탭 클릭 시 수동 전환
    $('.section1-right-tabBox ul li').on('click', function (e) {
      e.preventDefault();
      let index = $(this).index();
      showSlide(index);

      // 타이머 초기화 후 다시 시작
      clearInterval(slideTimer);
      slideTimer = setInterval(function () {
        let nextIndex = (currentIndex + 1) % maxIndex;
        showSlide(nextIndex);
      }, 5000);
    });
  });

  $(function () {
    let currentIndex1 = 0;//현재 보이는 값을 지정하기 위한 변수
    let section3Slide=$('.section3-right .item-contents li');
    const maxIndex1 = section3Slide.length;//이미지 갯수

    // 전환 함수
    function showSlide1(index) {
      // 오른쪽 이미지 페이드 전환
      section3Slide.fadeOut(500);
      section3Slide.eq(index).fadeIn(500);

      // 왼쪽 이미지 전환
      $('.section3-left  .contentBox > div').hide();
      $('.section3-left  .contentBox > div').eq(index).show();

  

      // 탭 활성화
      $('.tab ul li').removeClass('active');
      $('.tab ul li').eq(index).addClass('active');

      currentIndex1 = index;
    }

    // 자동 슬라이드
    let slideTimer1 = setInterval(function () {
      let nextIndex = (currentIndex1 + 1) % maxIndex1;
      showSlide1(nextIndex);
    }, 3000);

    // 탭 클릭 시 수동 전환
    $('.tab ul li').on('click', function (e) {
      e.preventDefault();
      let index = $(this).index();
      showSlide1(index);

      // 타이머 초기화 후 다시 시작
      clearInterval(slideTimer1);
      slideTimer1 = setInterval(function () {
        let nextIndex = (currentIndex1 + 1) % maxIndex1;
        showSlide1(nextIndex);
      }, 5000);
    });
  });

  $(function () {
    let currentIndex2 = 0;//현재 보이는 값을 지정하기 위한 변수
    const maxIndex2 = $('.section4-imgBox>div').length;//이미지 갯수

    // 전환 함수
    function showSlide2(index) {
      // 왼쪽 이미지 페이드 전환
      $('.section4-imgBox>div').fadeOut(500);
      $('.section4-imgBox>div').eq(index).fadeIn(500);
       

      // 탭 활성화
      $('.section4-txtBox>div').removeClass('active');
      $('.section4-txtBox>div').eq(index).addClass('active');

      currentIndex2 = index;
    }


    // 탭 클릭 시 수동 전환
    $('.section4-txtBox>div').on('click', function (e) {
      e.preventDefault();
      let index = $(this).index();
      showSlide2(index);
    });


    $('.currency').on('click', function(e){
      e.preventDefault();
      $(this).next('.hide').toggle();
    });

  });

  $(window).on('scroll', function(){
    if($(this).scrollTop() > 50){
        $('header').addClass('scrolled');
    }else{
        $('header').removeClass('scrolled');
    }
  });

