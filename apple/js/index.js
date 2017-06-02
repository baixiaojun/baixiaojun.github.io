/**
 * Created by DELL on 2016/12/17.
 */

$(function(){

    $(".search").on("click",function(){
        $('.topnav').addClass("search");
        $('.sousuo').show();
        $('.sousuo').get(0).offsetWidth;
        $(".sounei").addClass("souxian");
        $(".souxia ul li").css('transform','translateX(0)');
        $('.guan').show();
    });
    $(".guan").on("click",function(){
    	
        $('.topnav').removeClass("search");
        $('.sousuo').hide();
        $(".sounei").removeClass("souxian");
        $(".souxia ul li").css('transform','translateX(100%)');
        $('.guan').hide();
    });
console.log($(".guan"))
    $('.meun').on('click', function() {
        $('.pull').toggleClass('pull1');
        $('.box1').toggleClass('box1z');
        $('.box2').toggleClass('box2z');
        $('.bao').toggleClass('bao1');
        $(".x_sou").removeClass("x_souxia");
    });
    $(".x_search").on("click",function(){
        $(".x_sou").addClass("x_souxia");
    });
    $(".x_jian").on("click",function(){
        $(".x_sou").removeClass("x_souxia");
    });



    //购物车
    $(".g_gouwu").on("click",function(){
        console.log(1);
        $(".gouwu").toggleClass("gouwuxian");
    });
    $(".bao").on("click",function(){
        $(".gouwu").toggleClass("gouwuxian1");
    });


    //banner图轮播
    var lunbo=$(".bannertu li");
    var btn2=$(".btnol li");
    var btn=$(".btnol li a");
    var leftbtn=$(".leftbtn");
    var right=$(".rightbtn");
    var state = {
        now:0,
        next:0,
        dir:"right",
        timerId:null
    };
    render = function () {
        btn.removeClass("active").eq(state.next).addClass("active");
        lunbo.removeClass("active right-out right-in left-out left-in");
        if(state.dir === "right"){
            lunbo.eq(state.next).addClass("active right-in");
            lunbo.eq(state.now).addClass("right-out");
        }else{
            lunbo.eq(state.next).addClass("active left-in");
            lunbo.eq(state.now).addClass("left-out");
        }
        state.now=state.next;
    };
    dotimes = function (num,fn) {
        if(num==0){
            return;
        }
        var count=0;
        var t=setInterval(function(){
            fn();
            count++;
            if(count>=num){
                clearInterval(t);
            }
        },300);
    };
    btnclick=function(){
        var index=$(this).index();
        var num=Math.abs(index-state.now);
        if(index>state.now){
            dotimes(num,next);
        }else{
            dotimes(num,prev);
        }
        clearInterval(1);
    };
    btn2.on("click",btnclick);
    next = function () {
        state.next=(state.next+1 > 2) ? 0 : (state.next+1);
        state.dir="right";
        render();
    };
    prev = function () {
        state.next=(state.next-1 < 0) ? 2 : (state.next-1);
        state.dir="left";
        render();
    };
    timerId=setInterval(function(){
        render();
        next();
    },2000);
    leftbtn.on("click",function(){
        clearInterval(1);
        render();
        prev();
    });
    right.on("click",function(){
        clearInterval(1);
        render();
        next();
    });
    $('.footbox p').on("click",function(e){
        $(this).next().toggleClass('chu');
        $(this).find('span').toggleClass('yin');
        e.preventDefault();
    });
});
