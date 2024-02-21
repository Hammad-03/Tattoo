import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


// sticky header
window.onscroll = function() {
    stickHeader();
  };
  
  function stickHeader() {
    var header = document.getElementById("site__header");
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (scrollPosition > 10) {
      header.classList.add("fixed__header");
    } else {
      header.classList.remove("fixed__header");
    }
  }
  
  // hero slider
  
  const heroSlider = new Swiper('.hero__slider', {
    loop: true,
    effect: 'fade',
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: '.swiper-pagination.hero__slider--pagination',
      clickable: true,
    },
  
  });
  
  // testimonials slider
  
  const testimonialSlider = new Swiper('.testimonials__slider', {
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: '.swiper-pagination.hero__slider--pagination',
      clickable: true,
    },
  
  });
  
  // Select all elements with the class 'menu__btn'
  var menuBtns = document.querySelectorAll('.menu__btn');
  var headerMenu = document.getElementById('headerNav');
  var navItems = document.querySelectorAll('.menu .nav__link');
  
  // Add a click event listener to each menu button
  menuBtns.forEach(function(menuBtn) {
    menuBtn.addEventListener('click', function(event) {
      // Toggle the 'open' class on headerMenu
      headerMenu.classList.toggle('open');
  
      // Toggle the 'open' class on all menu buttons
      menuBtns.forEach(function(btn) {
        btn.classList.toggle('open');
      });
  
      // Stop the event from propagating to the document click event listener
      event.stopPropagation();
    });
  });
  
  // Add a click event listener to each navigation item
  navItems.forEach(function(navItem) {
    navItem.addEventListener('click', function() {
      // Remove the 'open' class from headerMenu and all menu buttons
      headerMenu.classList.remove('open');
      menuBtns.forEach(function(btn) {
        btn.classList.remove('open');
      });
    });
  });
  
  // Add a click event listener to the document to close the menu when clicking outside headerNav
  document.addEventListener('click', function(event) {
    // Check if the clicked element is a child of headerNav, if not, remove the 'open' class
    if (!headerMenu.contains(event.target)) {
      // Remove the 'open' class from headerMenu and all menu buttons
      headerMenu.classList.remove('open');
      menuBtns.forEach(function(btn) {
        btn.classList.remove('open');
      });
    }
  });
  
  
  