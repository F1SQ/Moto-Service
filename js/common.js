$(function() {

	//fancybox
    Fancybox.bind("[data-fancybox]", {
		infinite: true,
		dragToClose: false,
		trapFocus: false,
		placeFocusBack: false,
		hideScrollbar: false,
  });


	// let priceName = document.querySelectorAll('.price-name');
	// let	priceItem = document.querySelectorAll('.price-item');
	// let priceTable = document.querySelectorAll('.price-table');
	

	// priceName.forEach((item, i) => {		
	// 	item.addEventListener('mouseenter', (event) => {
	// 		event.target.parentElement.classList.add('price-item_visible');
	// 		event.target.classList.add('price-name_active');
					
		
	// 	});

	// });  

	// priceItem.forEach((item, i) => {
	// 		item.addEventListener('mouseleave', (event) => {
	// 		event.target.parentElement.classList.remove('price-item_visible');

	// 	});
	// });

	$(function() {

  //fancybox
    Fancybox.bind("[data-fancybox]", {
    infinite: true,
    dragToClose: false,
    trapFocus: false,
    placeFocusBack: false,
    hideScrollbar: false,
  });


    $('.price-item').first().click();
    $('.price-name').click(function() {
        $(this).parent().toggleClass('price-item_visible');
        $(this).toggleClass('price-name_active');
        $(this).next().slideToggle('price-item__wrapper_active');
        $(this).next().next().slideToggle();
    });



	const clientsSlider = new Swiper('.clients-swiper', {

  loop: true,
	speed: 700,
	grabCursor: true,
	observer: true,


  // Navigation arrows
  navigation: {
    nextEl: '.clients-button-next',
    prevEl: '.clients-button-prev',
  },
	keyboard: {
        enabled: true,
        onlyInViewport: true,
	},

});


});




});