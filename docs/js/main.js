let containerE1 = document.querySelector('#portfolio__works');
let mixit = mixitup(containerE1, {
	classNames: {
	}
});

$(function() {
  function init() {
    $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
    $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
  };
  
  function toggleMenuIcon() {
    $(this).toggleClass('active');
    $('[data-element="toggle-nav"]').toggleClass('active');
    $('[data-element="overlay"]').toggleClass('active');
    $('[data-element="no-scroll"]').toggleClass('active');
  };
  
  init()
});