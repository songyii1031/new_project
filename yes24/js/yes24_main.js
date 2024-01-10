$(function(){

//top버튼 
	$(function(){
		$(window).scroll(function(){
	 			if ($(this).scrollTop() > 150 ) {
	 				$("#top").fadeIn(200);
	 			}
	 			else{
	 				$("#top").fadeOut(200);
	 			};
	 		});

	 		$("#top").click(function(){
	 			$("html,body").animate({scrollTop:0},1000);
	 		})
	});

//스티키 메뉴 
		$(window).scroll(function(){
			t = $(window).scrollTop();

			if(t > 500){
				$(".fixed").addClass("view");
				$("#sidemenubox").css({"margin-top":"35px","transistion":"0"});

				
			} else {
				$(".fixed").removeClass("view");
				$("#sidemenubox").css({"margin-top":"0","transistion":"0"});
			}
		});

// 검색창 나타내기
	$(".search_pos > a > input").click(function(){
		$("#searchbox").addClass("s_open");
	});
	$("#s_close").click(function(){
		$("#searchbox").removeClass("s_open");
	});

	$(".search_pos2 > a > input").click(function(){
		$("#searchbox2").addClass("s_open");

	});
	$("#s_close2").click(function(){
		$("#searchbox2").removeClass("s_open");
	});

//사이드메뉴 오픈 
	$(".sidemenu").click(function(){	
		$("#sidemenubox").removeClass("close_js");
		$("#sidemenubox").addClass("open_js");

	});
	$("#sidemenubox .close").click(function(){
		$("#sidemenubox").removeClass("open_js");
		$("#sidemenubox").addClass("close_js");
	});
//사이드메뉴 클로즈 

//햄버거메뉴 시작 
	$(".main_text > li").on("mouseover focusin",function(){
		$(this).find("a").addClass("hide_bottom");	
		$(this).find(".hide_menu").stop().slideDown();
	})
	.on("mouseleave focuout",function(){
		$(this).find("a").removeClass("hide_bottom");	
		$(this).find(".hide_menu").stop().slideUp();
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
//햄버거메뉴 끝

//랭킹 탭메뉴 
	var menu = $(".tab_menu li");
	var content = $("#tab_content .tab-deco");


	menu.click(function(e){
		e.preventDefault();
		var targetIdx = $(this).index();


		content.hide();
		content.eq(targetIdx).show();
		$(".tab_menu li").removeClass("r_color");
		$(".tab_menu li").eq(targetIdx).addClass("r_color");
	});
	content.eq(0).show();

	$(".tab_menu li").eq(0).addClass("r_color");
	
//슬라이더 
	//슬라이드 fadeIn/Out
			$(".main_slideul").each(function(){

				var $slides = $(this).find('li'),   
					slideCount = $slides.length,	
					currentIndex = 0;	

				$slides.eq(currentIndex).fadeIn();

				setInterval(showNextSlide,5000); 

				function showNextSlide () {
					var nextIndex = (currentIndex + 1) % slideCount;
					
					$slides.eq(currentIndex).fadeOut(10);


					$slides.eq(nextIndex).fadeIn().css({opacity:1});
					currentIndex = nextIndex; 
				}
			});
		//슬라이드 숨김박스 
			$("#controllerbox").hover(function(){
				$("#controllerbox").stop().animate({"bottom":"0"},500);
				$("#controllerbox").addClass("background");
				$(".upbtn").fadeOut(10);
				$("#controller a").css({"margin-top":"15px"});
			},
			function(){
				$("#controllerbox").stop().animate({"bottom":"-110px"},500);
				$("#controllerbox").removeClass("background");
				$(".upbtn").fadeIn(900);
				$("#controller a").css({"margin-top":"40px"});
			});

		//컨트롤러		
			var con = 0;

			$("#controller li").click(function(){
				$(".s_text01").addClass("s_active");
				$(".s_text02").addClass("s_active");
				$(".s_text03").addClass("s_active");
		
				con = $(this).index();
				console.log(con);
				$(".main_slideul li").css({display:"none"});
				$(".main_slideul li").eq(con).css({display:"block"});
			});
			
			
			



//푸터 우측 셀렉트메뉴

	$(".f_right dl dt a").click(function(e){
		e.preventDefault();

		$(this).toggleClass("active");
		$(this).parent().next("dd").slideToggle(300);
		$(".f_right dd a").removeClass("active");
	});

	$(".f_right dd a").on("click focus",function(e){
		e.preventDefault();
		$(".f_right dd a").removeClass("active");
		$(this).addClass("active");
	})
});
