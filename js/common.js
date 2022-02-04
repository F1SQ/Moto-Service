$(function() {

	//fancybox
    Fancybox.bind("[data-fancybox]", {
		infinite: true,
		dragToClose: false,
		trapFocus: false,
		placeFocusBack: false,
		hideScrollbar: false,
  });


	let priceName = document.querySelectorAll('.price-name');
	let	priceItem = document.querySelectorAll('.price-item');
	let priceTable = document.querySelectorAll('.price-table');
	

	priceName.forEach((item, i) => {		
		item.addEventListener('mouseenter', (event) => {
			event.target.parentElement.classList.add('price-item_visible');
			event.target.classList.add('price-name_active');
					
		
		});

	});  

	// priceItem.forEach((item, i) => {
	// 		item.addEventListener('mouseleave', (event) => {
	// 		event.target.parentElement.classList.remove('price-item_visible');

	// 	});
	// });


});