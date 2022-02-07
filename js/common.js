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
  autoHeight: true,


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


const menuLinks = document.querySelectorAll('.header a[data-goto], .footer-nav a[data-goto], .hidden-menu a[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
      return false;
    }
  }
}
// let nav = document.querySelector('.header');
//   nav.addEventListener('scroll', function () {
//     if ($(this).scrollTop() > 50) {
// 			nav.addClass("header_scroll");
// 		} else {
// 			nav.removeClass("header_scroll");
// 		}
//   });



 let servicesItem = document.querySelectorAll('services-item__info');

 servicesItem.forEach((item, i) => {
	item.addEventListener('click', () => {		
		event.target.classList.toggle('_active');

	});
 });

    $('.services-item').first().click();
    $('.services-item__info').click(function() {
        // $(this).parent().toggleClass();
        $(this).toggleClass('services-item__info_active');
        $(this).next().toggleClass('services-item__button_active');
        // $(this).next().next().slideToggle();
    });

var map = $('.main');
  var mapTop = map.offset().top;
  $(window).bind('scroll', function() {
    var windowTop = $(this).scrollTop();
    if(windowTop > mapTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A15c45f9ef9a4c2dd0871c440e90b7c31cd01dbee160b6112871fad9484d95027&amp;width=100%25&amp;height=100%25&amp;lang=ru_RU&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
    var nav = $('.header'); 
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			nav.addClass("header_scroll");
		} else {
			nav.removeClass("header_scroll");
		}
	});

  });


  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal-close');

    modalButton.on('click', openModal);

    closeModalButton.on('click', closeModal);

  function openModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal-overlay');
    var modalDialog = $('.modal-dialog');
    modalOverlay.addClass('modal-overlay--visible');
    modalDialog.addClass('modal-dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal-overlay');
    var modalDialog = $('.modal-dialog');
    modalOverlay.removeClass('modal-overlay--visible');
    modalDialog.removeClass('modal-dialog--visible');
  }

  let menuBurger = document.querySelector('.header-burger');
  let hiddenMenu = document.querySelector('.hidden-menu');
  let mobileHeader = document.querySelector('.header-wrapper');
  menuBurger.addEventListener('click', function() {
    
    hiddenMenu.classList.toggle('hidden-menu--active');
    menuBurger.classList.toggle('_active');
    mobileHeader.classList.toggle('_active');
  });

  const hiddenLinks = document.querySelectorAll('.hidden-menu__list a');
if (hiddenLinks.length > 0) {
  hiddenLinks.forEach(hiddenLink => {
    hiddenLink.addEventListener("click", function(){
      console.log('click');     
      hiddenMenu.classList.remove('hidden-menu--active');
      menuBurger.classList.remove('_active');
      mobileHeader.classList.remove('_active');
    }); 
  });
  }

});