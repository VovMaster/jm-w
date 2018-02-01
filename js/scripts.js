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
	$('.title-accordion-style').click(function() {
		if($(this).parent().hasClass('open')) {
			$(this).parent().removeClass('open');
			$(this).next().slideUp(400);
		}else {
			$(this).parent().addClass('open');
			$(this).next().slideDown(400);
		}
	});
});
