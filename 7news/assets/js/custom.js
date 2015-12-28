/**
 * Event when select department
 */
$( "#org_name_department" ).change(function(){
    var orgId = $( "#org_name_department" ).val();
    //$("#org_name_team").html('<option value="">グループを選択してください </option>');
    $("#select2-org_name_team-container").html('グループを選択してください');

    var processResponse = function(ret) {
        processResponseSuccess(ret, 'org_name_group');
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
        //$("#org_name_group").html('<option value="">部門を選択してください </option>');
        $("#select2-org_name_group-container").html('部門を選択してください');
    }
});

/**
 * Event when select group
 */
$( "#org_name_group" ).change(function(){
    var orgId = $( "#org_name_group" ).val();

    var processResponse = function(ret) {
        processResponseSuccess(ret, 'org_name_team');
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
        //$("#org_name_team").html('<option value="">グループを選択してください </option>');
        $("#select2-org_name_team-container").html('グループを選択してください ');
    }
});

$("#reset_btn").click(function() {
    $("#select2-org_name_group-container").html('部門を選択してください ');
    $("#select2-org_name_team-container").html('グループを選択してください ');
});

/**
 * Event when click button Cancel on fancybox dialog
 */
$(".btnCancel").click(function() {
    $.fancybox.close();
});

jQuery(document).ready(function($){
	$('.fixed-top').css('margin-top', $('.navbar').height());
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

/**
 * Generate errors
 * 
 * @param arrError
 * @returns {String}
 */
function generateErrorMessage(arrError) {
    var errorMess = "";
    for(var i = 0; i < arrError.length; i++) {
        errorMess += "<p>" + arrError[i] + "</p>";
    }
    return errorMess;
}

/**
 * Clear error and hide error-area
 */
function clearError() {
    $(".error-area").hide();
    $(".error-area").empty();
}

/**
 * Process response of select department, group
 * 
 * @param ret
 * @param idToAppend
 */
function processResponseSuccess(ret, idToAppend) {
    var strAppend = '<option value=""></option>';
    $("#select2-" + idToAppend + "-container").html('');
    if (ret.status_code == 0) {
        alert(ret.data);
    } else {
        if (ret.data.length > 0) {
            $.each(ret.data, function( index, value ) {
                strAppend += '<option value="' + value.org_id + '">' + value.org_name + '</option>';
            });
        }
        $("#" + idToAppend).html(strAppend);
    }
}

/**
 * Send ajax request
 */
function ajaxRequest(method, url, data, callback) {
    $.ajax({
        method: method,
        url: url,
        data: data,
        success: callback,
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });
}

/**
 * Process check max length input
 * 
 * @param object
 * @returns void
 */
function maxLengthCheck(object) {
  if (object.value.length > object.maxLength)
    object.value = object.value.slice(0, object.maxLength)
}
