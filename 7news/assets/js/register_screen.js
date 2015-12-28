var num_div_in_hrm = $("#hrm > div").length;
$('#btn-add-group').click(function(){
    num_div_in_hrm++;
    $('#btn-add-group').before($('#spec-org').html().replace(/\[_i_\]/g, num_div_in_hrm));

    addOrRemoveClassBtnAddGroup();
    checkHiddenBtnAdd();

    // reset title when delete 所属組織
    reset_title();
    $(".department_pulldown").on('change', function(){
        change_department_group($(this), 'group_pulldown');
    });
    $(".group_pulldown").on('change', function(){
        change_department_group($(this), 'team_pulldown');
    });
    $(".date").bind('click', callback_datepicker());
    $('#spec-org-' + num_div_in_hrm).find('select.register-select2').select2();
});

$(document).ready(function() {
    checkHiddenBtnAdd();
    reset_title();
});