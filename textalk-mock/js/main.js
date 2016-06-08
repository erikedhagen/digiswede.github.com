

$('.drawer-toggle').bind('click touchstart', function(event) {
	$(this).toggleClass('active');
	$('.drawer-container').toggleClass('active');
});


$('.articles-table tr:not(:first-child)').bind('click touchstart', function(event) {
	$(this).toggleClass('active');

	checkSelected();
});

function checkSelected() {
	var count = $('.articles-table tr.active').length;
	if( count ) {
		$('.table-actions-container').addClass('active');
		$('.table-actions').slideDown(120);
	} else {
		$('.table-actions-container').removeClass('active');
		$('.table-actions').slideUp(120);
	}
	$('.table-rows-selected-value').text(count);
}