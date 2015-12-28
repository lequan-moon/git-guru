$(document).ready(function(){
    $('#type_char_color').colorpicker()
        .on('change.color', function(evt, color){
            $('.evo-pop').attr('style','color:'+color);
        })
        .on('mouseover.color', function(evt, color){
            $('.evo-pop').attr('style','background-color:'+color);
        });
});