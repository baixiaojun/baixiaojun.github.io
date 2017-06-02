$(function() {
	var vh = $(window).height();
	var fullpage = $('section');
    var  xianxia=$(".xianxia");
	var slides = $("section >.section");
	var anniu = $(".anniu>li");
	var state = {
		vh: $(window).height(),
		currentSlide: 0,
		canScroll: true
	};

	function displayCurrent(n) {
		console.log(n)
		slides.removeClass("active").eq(n).addClass("active");
		var valve = 'translate3d(0,' + -state.vh * n + 'px,0)';
		fullpage.css('transform', valve);

	}
	anniu.on("click", function() {
		var index = $(".dian").index($(this))
		$(".dian").removeClass("active").eq(index).addClass("active")
		displayCurrent($(this).index());
		state.currentSlide = $(this).index();

	})
    xianxia.on("click",function(){
    	next();
    	$(".dian").removeClass("active").eq(state.currentSlide).addClass("active")
		state.flag=false;
		return false;
    })
	function next() {
		state.currentSlide = (state.currentSlide + 1 > slides.length - 1) ? 0 : state.currentSlide + 1;
		displayCurrent(state.currentSlide);
	}

	function prev() {
		state.currentSlide = (state.currentSlide - 1 < 0) ? (slides.length - 1) : state.currentSlide - 1;
		displayCurrent(state.currentSlide);
	}
	handelmousewheel = function(e) {
		if(state.canScroll) {
			if(e.originalEvent.wheelDeltaY < 0) {
				next();
				//			var index=$(".dian").index(state.currentSlide)
				$(".dian").removeClass("active").eq(state.currentSlide).addClass("active")
			}
			if(e.originalEvent.wheelDeltaY > 0) {
				prev();
				$(".dian").removeClass("active").eq(state.currentSlide).addClass("active")
			}
			state.canScroll = false;

		}
	}
	handeltransitionend = function() {
		state.canScroll = true;
		//		slides.eq(state.currentSlide).addClass('active')
	}
	onresize = function() {
		slides.height(state.vh);
		state.vh = $(window).height;
	}
	$(window).on('wheel', handelmousewheel);
	$(window).on('resize', onresize);
	fullpage.on('transitionend', handeltransitionend);
})