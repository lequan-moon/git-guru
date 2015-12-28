var top_margin = $(".manpowerplan > div").height() + 10;
$(document).ready(function() {
    $("#content-table-div").scroll(function(){
        $("#right-table")
            .scrollLeft($("#content-table-div").scrollLeft());
    });
});

$('.breadcrumb').resize(function() {
    	eventWhenLoadAndResize();
});

$(window).load(function() {
   eventWhenLoadAndResize();
});
function eventWhenLoadAndResize() {
	 // set width for table-sub
    $(".manpowerplan > div").css('width', $(".manpowerplan").width());
    changeTableWidth('.manpowerplan', '#title-table', '#content-table-div');
    changeTableWidth('#table-header', '#left-table', '#right-table');
    
    // set height for table-sub
    changeTableHeight('#title-table', '#content-table');
    changeTableHeight('#left-table', '#right-table table');
    
    //set width for column header and body
    changeColumnPlanWidth('#left-table', '#title-table', 'first-child');
    changeColumnPlanWidth('#right-table table', '#content-table', 'last-child');
    
    $("#content-table-div").attachScroll();
}
/*scroll to top*/

$(window).scroll(function(){
    var heigh = $(".breadcrumb").height() + $(".navbar").height();
    if($(this).scrollTop() >= heigh) {
    	$("form#man_power_plan").css('margin-top', top_margin);
    	$(".manpowerplan > div").addClass('fixed-top');
    } else {
    	$("form#man_power_plan").css('margin-top', 0);
        $(".manpowerplan > div").removeClass('fixed-top');
    }
});

function changeColumnPlanWidth(first_table, second_table, position) {
    var count = $(first_table + ' tr:' + position + ' > th').length;
    $(second_table + ' tr:first-child > td > span').removeAttr( "style" );
    $(first_table + ' tr:' + position + ' > th > span').removeAttr( "style" );
    for (i = 1; i <= count; i++) {
    		
    	var width_header = $(first_table + ' tr:' + position + ' > th:nth-child(' + i + ') > span').width();
    	var width_body = $(second_table + ' tr:first-child > td:nth-child(' + i + ') > span').width();
    	if (width_header > width_body) {
    		$(second_table + ' tr:first-child > td:nth-child(' + i + ') > span').width(width_header);
    		$(first_table + ' tr:' + position + ' > th:nth-child(' + i + ') > span').width(width_header);
    	} else {
    		$(second_table + ' tr:first-child > td:nth-child(' + i + ') > span').width(width_body);
    		$(first_table + ' tr:' + position + ' > th:nth-child(' + i + ') > span').width(width_body);
    	}
    }
}