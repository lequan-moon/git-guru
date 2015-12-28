function changeTableHeight(first_table, second_table) {
    var count = $(first_table + ' > tbody > tr').length;
    for (i = 1; i <= count; i++) {
        $(second_table + ' > tbody > tr:nth-child(' + i + ')').height(
            $(first_table + ' > tbody > tr:nth-child(' + i + ')').height()
        );
        $(first_table + ' > tbody > tr:nth-child(' + i + ')').height(
            $(second_table + ' > tbody > tr:nth-child(' + i + ')').height()
        );
    }

    count = $(first_table + ' > thead > tr').length;
    for (i = 1; i <= count; i++) {
        $(second_table + ' > thead > tr:nth-child(' + i + ')').height(
            $(first_table + ' > thead > tr:nth-child(' + i + ')').height()
        );
        $(first_table + ' > thead > tr:nth-child(' + i + ')').height(
            $(second_table + ' > thead > tr:nth-child(' + i + ')').height()
        );
    }
}
function changeColumnWidth(first_table, second_table) {
    var count = $(first_table + ' > thead > tr > th').length;
    $(first_table + ' tr > th > span').removeAttr( "style" );
    $(second_table + ' tr:first-child > td > span').removeAttr( "style" );
    for (i = 1; i <= count; i++) {
        var width_header = $(first_table + ' tr > th:nth-child(' + i + ') > span').width();
        var width_body = $(second_table + ' tr:first-child > td:nth-child(' + i + ') > span').width();
        if (width_header > width_body) {
            $(second_table + ' tr:first-child > td:nth-child(' + i + ') > span').width(width_header);
            $(first_table + ' tr > th:nth-child(' + i + ') > span').width(width_header);
        } else {
            $(first_table + ' tr > th:nth-child(' + i + ') > span').width(width_body);
            $(second_table + ' tr:first-child > td:nth-child(' + i + ') > span').width(width_body);
        }
    }
}
function changeTableWidth(parent, main_child, sub_child) {
    var totalWidth = $(parent).width();
    var tableMainWidth = $(main_child).outerWidth();
    var tableSubWidth = totalWidth - tableMainWidth - 3;
    $(sub_child).outerWidth(tableSubWidth);
}