$(document).ready(function() {
    $("#btnClose").click(function(){
        parent.$.fancybox.close();
    });
    if ($("#close_pop_up_flg").html() == "1") {
         parent.$.fancybox.close();
    }
});