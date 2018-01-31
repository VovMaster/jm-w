$(document).ready(function() {
	$('.button-menu').click(function() {
		$('body').toggleClass('menu-open');
	});
	$('.tobi-grid').click(function() {
		$(this).toggleClass('active');
		$('.mini-list').toggleClass('mini-list2');
	});
});
