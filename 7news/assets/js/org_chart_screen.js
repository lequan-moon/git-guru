$(document).ready(function() {
    // set width for table-sub
    changeTableWidth('.table-responsive', '.table-main', '.table-sub');

    // set height for table-sub
    changeTableHeight('#mytable', '#mytable-sub');
    changeTableHeight('#my_table_1', '.sub_my_table_1');
});

$(window).resize(function() {
    // set width for table-sub
    changeTableWidth('.table-responsive', '.table-main', '.table-sub');

    // set height for table-sub
    changeTableHeight('#mytable', '#mytable-sub');
    changeTableHeight('#my_table_1', '.sub_my_table_1');

});
$(window).load(function() {
    // set width for table-sub
    changeTableWidth('.table-responsive', '.table-main', '.table-sub');

    // set height for table-sub
    changeTableHeight('#mytable', '#mytable-sub');
    changeTableHeight('#my_table_1', '.sub_my_table_1');
});