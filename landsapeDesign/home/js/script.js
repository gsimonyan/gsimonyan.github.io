
  $(document).ready(function () {
  	$('.next').click(function(){
  		var currentImg = $('.img.active');
  		var currentImgIndex = $('.img.active').index();
  		var nextImgIndex = currentImgIndex + 1;
  		var nextImg = $('.img').eq(nextImgIndex);
  		currentImg.fadeOut(1000);
  		currentImg.removeClass('active');

  		if(nextImgIndex == ($('.img:last').index()+1)){
  			$('.img').eq(0).fadeIn(1000);
  			$('.img').eq(0).addClass('active');
  		}
  		else {
  			nextImg.fadeIn(1000);
  			nextImg.addClass('active');
  		}
  	});

  	 $('.prev').click(function(){
  	 var currentImg = $('.img.active');
  		var currentImgIndex = $('.img.active').index();
  		var prevImgIndex = currentImgIndex - 1;
  		var prevImg = $('.img').eq(prevImgIndex);

  		currentImg.fadeOut(1000);
  		currentImg.removeClass('active');
  		prevImg.fadeIn(1000);
  		prevImg.removeClass('active');

  	 });
  })

	