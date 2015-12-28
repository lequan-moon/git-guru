var top_padding = $(".table-header").height() - 12;
$(document).ready(function() {
    var width = $(".table-responsive").width();
    $(".table-header").css('width', width);
    
    //remove class fixed if scrollbar is disasble
    if ($(".content-wrapper").height()- $(window).height()<=0) {
    	$(".button-bot").removeClass('fixed');
    }
    
    $(".table-sub").scroll(function(){
        $(".table-sub-header")
            .scrollLeft($(".table-sub").scrollLeft());
    });
});
$("#search_form").resize(function(){
	eventWhenLoadAndResize();
});

$(window).load(function() {
    eventWhenLoadAndResize();
});

/*scroll to top*/

$(window).scroll(function(){
    var height = $(".content-wrapper").height()- $(window).height();
    var top_heigh = $("#search_form").height() + $(".navbar").height();
    if($(this).scrollTop() > height){
        $(".button-bot").removeClass('fixed');
    } else {
        $(".button-bot").addClass('fixed');
    }
    
    if($(this).scrollTop() > top_heigh) {
    	$(".table-header").addClass('fixed-top');
        $(".table-responsive").css('padding-top', top_padding);
    } else {
        $(".table-header").removeClass('fixed-top');
        $(".table-responsive").css('padding-top', 0);
    }
});
  
$("#employee_delete").click(function() {
    $("#employee_form_del").attr('action', $("#url_del_user").val());
    proccessWhenCheck(1);
});

$("#employee_change_team").click(function() {
    $("#employee_form_del").attr('action', $("#url_change_team").val());
    var continue_flg = true;

    var parsonal_id = new Array();
    $(".employee_checkbox_item").each(function(index) {
        if ($(this).prop('checked') == true) {
            var result = $(this).val().split(',');
            if(parsonal_id.indexOf(result[0]) >= 0) {
                alert("重複の社員番号は一括で異動が出来ません");
                continue_flg = false;
                return false;
            }
            parsonal_id.push(result[0]);
        }
    });
    if (continue_flg) {
        proccessWhenCheck(2);
    }
});

$("#employee_change_floor").click(function() {
    $("#employee_form_del").attr('action', $("#url_change_floor").val());
    proccessWhenCheck(3);
});

$("#employee_update_contract").click(function() {
    $("#employee_form_del").attr('action', $("#url_update_contract").val());
    var continue_flg = true;

    var parsonal_id = new Array();
    $(".employee_checkbox_item").each(function(index) {
        if ($(this).prop('checked') == true) {
            var result = $(this).val().split(',');
            if(parsonal_id.indexOf(result[1]) >= 0) {
                alert("重複の社員番号は一括で契約更新が出来ません");
                continue_flg = false;
                return false;
            }
            parsonal_id.push(result[1]);
        }
    });
    if (continue_flg) {
        proccessWhenCheck(2);
    }
});

$("#employee_update_payment").click(function() {
    $("#employee_form_del").attr('action', $("#url_update_payment").val());
    proccessWhenCheck(3);
});


$("#employee_update_budget_req").click(function() {
    $("#employee_form_del").attr('action', $("#url_update_budget_req").val());
    proccessWhenCheck(3);
});

/*
 * Set default value for form search when click 検索条件をリセット button
 */
$("#reset_btn").click(function() {
    var currentTime = new Date();
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();
    $("#search_form input[type=text]").val('');
    $("#search_form select").val($('#search_form select').prop('defaultSelected'));
    $("#search_form #form_year").val(year);
    $("#search_form #form_entry_year").val(year);
    $("#search_form #form_month").val(month);
    $("#search_form input[type=checkbox]").attr('checked',false);
});

function eventWhenLoadAndResize() {
	var width = $(".table-responsive").width();
    $(".table-header").css('width',width);
    
    //set width for column header and body
    changeColumnWidth('#mytable-sub-header', '#mytable-sub');
    changeColumnWidth('#mytable-header', '#mytable');
    
    // set width for table-sub and table sub header
    changeTableWidth('.table-responsive', '.table-main', '.table-sub');
    changeTableWidth('.table-responsive-header', '.table-main-header', '.table-sub-header');

    // set height for table-sub and table sub header
    changeTableHeight('#mytable', '#mytable-sub');
    changeTableHeight('#mytable-header', '#mytable-sub-header');
     //float scroll
    $(".table-sub").attachScroll();
}

/*
 * action_code: 1 (削除), 2 (チーム移動), 3(フロア・島移動)
 */
function proccessWhenCheck(action_code) {
    var hasCheck = true;
    $(".employee_checkbox_item").each(function(index) {
        if ($(this).prop('checked') == true) {
            hasCheck = false;
        }
    });
    if (hasCheck) {
        alert("何も選択されませんでした。");
    } else {
        var userSelect = true;
        if (action_code == 1) {
            userSelect = confirm("選択された項目を削除して宜しいですか？");
        }
        if (userSelect == true) {
            $("#employee_form_del").submit();
        }
    }
}