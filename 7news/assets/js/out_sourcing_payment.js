/**
 * Event when select year
 */
$("#year").change(function(){
    if (confirm("年度を変更して宜しいですか？")) {
        $("#edit_out_sourcing_payment").attr('method', "GET");
        $("#edit_out_sourcing_payment").attr('action', $("#base_url").html() + "outsourcing/editpayment");
        $("#edit_out_sourcing_payment").submit();
    }
});

$(document).ready(function() {
    $("#edit_out_sourcing_payment").attr('method', "POST");
    $("#edit_out_sourcing_payment").attr('action', "");
});
