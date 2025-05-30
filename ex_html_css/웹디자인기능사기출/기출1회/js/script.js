
    $(function() {
        var $slides = $('.mainSlide li');
        var current = 0;
        var total = $slides.length;

        $slides.eq(current).addClass('active').show();

        function showNextSlide() {
            var next = (current + 1) % total;

            // 현재 슬라이드 왼쪽으로 이동
            $slides.eq(current).animate({ left: '-100%' }, 800, function() {
                $(this).removeClass('active').hide().css({ left: 0 });
            });

            // 다음 슬라이드 오른쪽에서 들어오게 설정
            $slides.eq(next).css({ left: '100%', display: 'block' }).addClass('active')
                .animate({ left: '0' }, 800);

            current = next;
        }

        // 3초마다 자동 슬라이드
        setInterval(showNextSlide, 3000);

         // 초기 상태: 첫 번째 탭과 콘텐츠 활성화
    $('.tab a').eq(0).addClass('active');
    $('.noticeContent > div').eq(0).addClass('active');

    // 탭 클릭 이벤트
    $('.tab a').click(function(e) {
        e.preventDefault();

        var index = $(this).parent().index(); // 클릭된 탭의 순서

        // 탭 스타일 변경
        $('.tab a').removeClass('active');
        $(this).addClass('active');

        // 콘텐츠 표시 변경
        $('.noticeContent > div').removeClass('active');
        $('.noticeContent > div').eq(index).addClass('active');
    });

    //모달창
    $('.first').click(function(){
        $('.madalWrap').css('display','block');
    });
    $('.close').click(function(){
        $('.madalWrap').css('display','none');
    });
});
   