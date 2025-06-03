$(function(){
    let current=0;
    let slider=$('#main>ul>li');

    setInterval(function(){
        let prev=slider.eq(current);
        move(prev, 0, '-100%');

        current++

        if(current==slider.length) current=0;

        let next=slider.eq(current);
        move(next, '100%', 0);

    },3000)

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left: end},500)
    }




    $('.click').click(function(){
        $('.modal').removeClass('hide');
    });

    $('.close').click(function(){
        $('.modal').addClass('hide');
    });

});