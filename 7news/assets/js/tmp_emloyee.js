var num_of_payment = $("#hrm > div").length - 1;
$("#btnAdd").click(function() {
    num_of_payment++;
    $(this).before($('#payment-input').html().replace(/\[_i_\]/g, num_of_payment));
    callback_datepicker();
});

function payment_delete(i) {
    if (confirm("選択された項目を削除して宜しいですか？")) {
        $('#payment_' + i).remove();
    }
}