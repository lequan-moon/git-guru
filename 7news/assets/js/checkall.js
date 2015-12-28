/**
* check all checkbox in table when click "check all" (checkbox on table header)
*/
$("#checkall").click(function() {
    $(".checkthis").each(function(index) {
        $(this).prop('checked', $("#checkall").prop('checked'));
    });
    callbackCheckAll();
});

/**
 * Check if all the checkboxs was checked manually
 * If yes then check on select all checkbox
 * and vice versa
 */
function callbackCheckAll() {
    $(".checkthis").click(function() {
        if(!$(this).prop('checked')) {
            callbackRemoveCheckAll("#checkall");
        }else{
            var isAllChecked = true;
            $(".checkthis").each(function(index) {
                if(!$(this).prop('checked')){
                    isAllChecked = false;
                }
            });
            if(isAllChecked) {
                $("#checkall").prop('checked', true);
            }
        }
    });
}

/**
 * When click on each item's selectbox, it must check for selectall-checkbox
 */
$(".checkthis").click(function() {
    callbackCheckAll();
});

/**
 * Remove checked on checkbox all in header
 * @param checkAllID
 */
function callbackRemoveCheckAll(checkAllID) {
    $(checkAllID).prop('checked', false);
}