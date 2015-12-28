/**
 * Delete detail area
 * @param j
 */
function group_delete(j) {
    if (confirm("選択された項目を削除して宜しいですか？")) {
        $('#spec-org-' + j).remove();

        checkHiddenBtnAdd();

        // reset title when delete 所属組織
        reset_title();
    }
}

/**
 * When delete or add detail area, reset 所属組織 + index (index from 1 to n)
 */
function reset_title() {
    $('#hrm > div').each(function(index) {
        $(this).find('#spec-org-title').html('所属組織' + (index + 1));
    });
}

$(".department_pulldown").change(function(){
    change_department_group($(this), 'group_pulldown');
});

$(".group_pulldown").change(function(){
    change_department_group($(this), 'team_pulldown');
});

/**
 * When 部門, グループ pulldown is changed, get list グループ, チーム matching
 * @param object
 * @param id_append
 */
function change_department_group(object, id_append){
    var unique_id = object.attr('unique_id');
    var orgId = object.val();

    $("#team_pulldown" + unique_id).html('<option value=""></option>');
    $("#select2-team_pulldown" + unique_id + "-container").html('');
    var processResponse = function(ret) {
        processResponseSuccess(ret, id_append + unique_id);
        return false;
    }

    var notifyFailure = function(json, status, e)
    {
        return false;
    }

    if (orgId > 0) {
        var url = $("#base_url").html() + "restajax/getgroup.json";
        var dataInput = [orgId];
        $.ajax({
            'type'      : 'GET',
            'url'       : url,
            'data'      : { dataInput },
            'success'   : processResponse,
            'error'     : notifyFailure
        });
    } else {
        $("#group_pulldown" + unique_id).html('<option value=""></option>');
        $("#select2-group_pulldown" + unique_id + "-container").html('');
    }
}

/**
 * add or remove class center and margin-top-10 for btn add group
 */
function addOrRemoveClassBtnAddGroup() {
    var number_div = $("#hrm > div").length;
    if (number_div >= 3) {
        $('#btn-add-group').addClass('margin-top-10');
    }

    if (number_div % 3 != 0 && number_div != 0) {
        $('#btn-add-group').addClass('center');
    } else {
        $('#btn-add-group').removeClass('center');
    }
}

/**
 * If count detail area >= 5, hide add button, otherwise, show add button
 */
function checkHiddenBtnAdd() {
    var number_div = $("#hrm > div").length;

    if (number_div >= 5) {
        $('#btn-add-group').hide();
    } else if (number_div < 5) {
        $('#btn-add-group').show();
    }
}