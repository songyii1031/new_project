$(function(){
	$(window).scroll(function(){
			t = $(window).scrollTop();

			if(t > 500){
				$(".fixed").addClass("view");
				$("#sidemenubox").css({"margin-top":"35px","transistion":"0"});

				
			} else {
				$(".fixed").removeClass("view");
				$("#sidemenubox").css({"margin-top":"35px","transistion":"0"});
			}
	});

// 메인 메가메뉴

	$(".show_menu_ul01 > li").mouseover(function(){
		$(this).find("div").addClass("show_menu");
		$(".fixed").addClass("padding");
		$(this).find(">a").not("a.not").css({"border-bottom":"3px solid orange"});
	});


	$(".show_menu_ul01 > li").mouseout(function(){
		$(this).find("div").removeClass("show_menu");
		$(".fixed").removeClass("padding");
		$(".show_menu_ul01 > li").find(">a").not("a.not").css({"border-bottom":"none"});
	});
	$(".show_menu_ul01 > li").eq(0).find(">a").css({"border-bottom":"3px solid orange"});

//메인 슬라이드 
	var w =400;
	var amount = 0;

	$(".fa-chevron-left").click(function(){
		amount -= w;

		$(".slide_ul").animate({"left":amount},500,function(){
			$(this).append($(".slide_view li:first-child"));
			amount += w;
			$(this).css({left:amount});
		});
	});


	$(".fa-chevron-right").click(function(){
		$(".slide_ul").prepend($(".slide_view li:last-child"));

		amount -= w;
		$(".slide_ul").css({"left":amount});
		amount += w;
		$(".slide_ul").animate({"left":amount},500);
	});

	setInterval(function(){
      
      $(".slide_ul").append($(".slide_view li").first());
      
  	 },5000);


	$(".fa-chevron-right").trigger("click");
// 검색창 나타내기
	$(".search_pos > a > input").click(function(){
		$("#searchbox").addClass("s_open");

	});
	$("#s_close").click(function(){
		$("#searchbox").removeClass("s_open");
	});


	//랭킹 순위

	$("#rank_ul li").hover(function(){

				$("#rank_ul li").removeClass("r_height");
				$(".r_img").removeClass("r_on");
				$(".r_title").removeClass("r_width");

				$(this).addClass("r_height");
				$(this).find(".r_img").addClass("r_on");
				$(this).find(".r_title").addClass("r_width")

			},
			function(){
				$(this).removeClass("r_height");
				$(".r_img").removeClass("r_on");
				$(".r_title").removeClass("r_width");

				$(this).removeClass("r_height");
				
			});

	//최근본상품 슬라이드 
		$(".f_menuspan").click(function(){
			n=0;
			$(".f_menu_box> ul").css({"margin-left":"-120px"});
		});	
		$(".f_menuspan2").click(function(){
			n=0;
			$(".f_menu_box> ul").css({"margin-left":"0"});
		});	
});

