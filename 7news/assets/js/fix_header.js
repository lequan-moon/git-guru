$(document).ready(function() {
	 $(".table-header").css('width', $(".table-responsive").width());
	 changeColumnWidth('#mytable-header', '#mytable');
	 $(".wrapper-seat").scroll(function(){
        $(".table-responsive-header")
            .scrollLeft($(".wrapper-seat").scrollLeft());
    })
});
$(window).resize(function() {
	 $(".table-header").css('width', $(".table-responsive").width());
	 changeColumnWidth('#mytable-header', '#mytable');
	 $(".wrapper-seat").scroll(function(){
        $(".table-responsive-header")
            .scrollLeft($(".wrapper-seat").scrollLeft());
    })
});
$(window).load(function() {
	 $(".table-header").css('width', $(".table-responsive").width());
	 changeColumnWidth('#mytable-header', '#mytable');
	 $(".wrapper-seat").scroll(function(){
        $(".table-responsive-header")
            .scrollLeft($(".wrapper-seat").scrollLeft());
    })
});	
$(window).scroll(function(){
    var top_heigh = $(".breadcrumb").height() + $(".navbar").height() + $("#search_form > div").height();
    if($(this).scrollTop() > top_heigh) {
    	$(".table-header").addClass('fixed-top');
        $(".table-responsive").css('padding-top', $(".table-header").height()-16);
    } else {
        $(".table-header").removeClass('fixed-top');
        $(".table-responsive").css('padding-top', 0);
    }
});