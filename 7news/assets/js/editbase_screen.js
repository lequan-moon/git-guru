$('.btn-add-coupon_item').click(function(){
    $(this).before('<div class="col-sm-2 input-custom">' +
        $(this).siblings('div:first-child').html() + '</div>');
    $(this).siblings('div:last').children().val('');
});