var timeout = null;
/**
 * Event when input 氏名でフィルタ
 */
$( "#input_employee_name" ).keyup(function(){
    var name = $( "#input_employee_name" ).val();
    
    var processResponse = function(ret) {
        processResponseEmployeeSuccess(ret, 'list_employee');
        return false;
    }

    var notifyFailure = function(json, status, e)
    {
        return false;
    }

    var url = $("#base_url").html() + "restajax/getdataemployee.json";
    if (name !='') {
        clearTimeout(timeout);
        timeout = setTimeout(function ()
        {
            var dataInput = [name];
            $.ajax({
                'type'      : 'GET',
                'url'       : url,
                'data'      : { dataInput },
                'success'   : processResponse,
                'error'     : notifyFailure
            });
         },1000);
     }
});
/**
 * Process response of select 
 * 
 * @param ret
 * @param idToAppend
 */
function processResponseEmployeeSuccess(ret, idToAppend) {
    var strAppend = '';
    if (ret.status_code == 0) {
        alert(ret.data);
    } else {
        if (ret.data.length > 0) {
            $.each(ret.data, function( index, value ) {
                strAppend += '<option value="' + value.parsonal_id + '.' + value.employee_name + '">';
                strAppend += value.employee_id + ' ' + value.employee_name + ' ( ';
                if (value.departerment !=''){
                    strAppend += value.departerment;
                }
                if (value.group !=''){
                    strAppend += ' | ' + value.group;
                }
            
                if (value.team !=''){
                    strAppend += ' | ' + value.team;
                }
                strAppend += ' ) </option>';
            });
        }
        $("#" + idToAppend).html(strAppend);
    }
}