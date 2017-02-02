$(document).ready(function(){

	var currentIndex = 0,
  slides = $('.container div'),
  slideNum = slides.length;


	function cycleItems() {
  var slide = $('.container div').eq(currentIndex);
  slides.hide();
  slide.css('display','inline-block');
}


$('.next').click(function() {

  currentIndex += 1;
  if (currentIndex > slideNum - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.last').click(function() {

  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = slideNum - 1;
  }
  cycleItems();
});
		

});
