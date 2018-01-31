$(document).ready(function() {
	/*$('.button-menu').click(function() {
		$('body').toggleClass('menu-open');
	});*/
	$('.accordion-heading').click(function() {
		$(this).next().toggleClass('open');
		$(this).children('.plus').toggleClass('close');
		return false
	});
	$('.tobi-grid').click(function() {
		$(this).toggleClass('active');
		$('.mini-list').toggleClass('mini-list2');
	});
});
