$(document).ready(function(){
	
	Slick.first();
	Slick.block3();
	Slick.block5();
	Style_elem.block5();

$(window).scroll(function(){
		if($(window).scrollTop()>90){
			//alert('stop');
			$('.b-header').addClass('i-scroll');
		}else{
			$('.b-header').removeClass('i-scroll');
		}
	});

});



//==>Slick
Slick ={

	first:function(){
		$('.b-first_content_carosel_slick').slick({
			dots: true,
			infinite: true,
			speed: 500,
			fade: true,
			cssEase: 'linear'
		});

		$('.b-first_content_btn_left').click(function(){
			$("#slider_block1").slick('slickNext');
		});

		$('.b-first_content_btn_right').click(function(){
			$("#slider_block1").slick('slickPrev');
		});
	},


	block3:function(){
		$('.b-block3_content_carossel_slick').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3
		});

		$('.b-block3_content_carossel_btn_left').click(function(){
			$("#slider_block3").slick('slickNext');
		});

		$('.b-block3_content_carossel_btn_right').click(function(){
			$("#slider_block3").slick('slickPrev');
		});
	},


	block5:function(){
		$('.b-block5_content_slick').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4
		});

		$('.b-block5_content_carossel_left').click(function(){
			$("#slider_block5").slick('slickNext');
		});

		$('.b-block5_content_carossel_right').click(function(){
			$("#slider_block5").slick('slickPrev');
		});

	},

}




//==>Style_elem
Style_elem ={
	block5:function(){

		$('#slider_block5 .i-slick5_elem').mouseenter(function(){
			$url_imgs = $(this).find('img').attr('src');
			$url_imgD =  $url_imgs.split('.');
			$(this).find('img').attr('src', $url_imgD[0]+'b.'+ $url_imgD[1]);
		});
		$('#slider_block5 .i-slick5_elem').mouseleave(function(){
			$url_imgs2 = $(this).find('img').attr('src');
			$url_imgD2 =  $url_imgs2.split('b.');
			$(this).find('img').attr('src', $url_imgD2[0]+'.'+ $url_imgD[1]);
		});

	}

}