$(document).ready(function() {
    $('.fancybox').fancybox({closeBtn:false});
    $(".various").fancybox({
        maxWidth    : 400,
        maxHeight   : 300,
        fitToView   : false,
        width       : 350,
        height      : 200,
        autoSize    : false,
        closeClick  : false,
        closeBtn    : false,
        openEffect  : 'none',
        closeEffect : 'none',
        type        : 'iframe',
        afterClose: function () {
            parent.location.reload(true);
        }
    });
    $(".load").fancybox({
        maxWidth    : 500,
        maxHeight   : 500,
        fitToView   : false,
        width       : 450,
        height      : 400,
        autoSize    : false,
        closeBtn    : false,
        type        : 'iframe',
        afterShow: function() {
         var iframe = $('.fancybox-iframe');
            var btn_confirm = iframe.contents().find(".confirm");
            var opt_employee = iframe.contents().find("#list_employee");
            btn_confirm.on("click", function(event){
                if($(event.target).is(".yes")){
                 var employee_info = opt_employee.val().split(".");
                 $('#display_name').val(employee_info[1]);
                 $("#contracting_officer").val(employee_info[0]);
                } 
            $.fancybox.close();
            });
        },
        afterClose: function () {
            //parent.location.reload(false);
        }
    });
    $(".search-employee-custodian").fancybox({
        maxWidth    : 600,
        maxHeight   : 400,
        fitToView   : false,
        width       : 600,
        height      : 400,
        autoSize    : false,
        closeClick  : false,
        closeBtn    : false,
        openEffect  : 'none',
        closeEffect : 'none',
        type        : 'iframe',
        afterShow: function() {
            var iframe = $('.fancybox-iframe');
               var btn_confirm = iframe.contents().find(".confirm");
               var opt_employee = iframe.contents().find("#list_employee");
               btn_confirm.on("click", function(event){
                   if($(event.target).is(".yes")){
                    var employee_info = opt_employee.val().split(".");
                    $('#custodian_name').val(employee_info[1]);
                    $("#custodian").val(employee_info[0]);
                   } 
               $.fancybox.close();
               });
        },
        afterClose: function () {
        //parent.location.reload(false);
        }
    });
    $(".masterauthority-register").fancybox({
        maxWidth    : 900,
        maxHeight   : 280,
        fitToView   : false,
        width       : 900,
        height      : 400,
        autoSize    : false,
        closeClick  : false,
        closeBtn    : false,
        openEffect  : 'none',
        closeEffect : 'none',
        type        : 'iframe',
        afterClose: function () {
            parent.location.reload(true);
        }
    });
    $(".employee-type").fancybox({
        maxWidth    : 500,
        maxHeight   : 500,
        fitToView   : false,
        width       : 500,
        height      : 500,
        autoSize    : false,
        closeClick  : false,
        closeBtn    : false,
        openEffect  : 'none',
        closeEffect : 'none',
        type        : 'iframe',
        afterClose: function () {
            parent.location.reload(true);
        }
    });
    $(".search-employee-conductor").fancybox({
        maxWidth    : 600,
        maxHeight   : 400,
        fitToView   : false,
        width       : 600,
        height      : 400,
        autoSize    : false,
        closeClick  : false,
        closeBtn    : false,
        openEffect  : 'none',
        closeEffect : 'none',
        type        : 'iframe',
        afterShow: function() {
            var iframe = $('.fancybox-iframe');
               var btn_confirm = iframe.contents().find(".confirm");
               var opt_employee = iframe.contents().find("#list_employee");
               btn_confirm.on("click", function(event){
                   if($(event.target).is(".yes")){
                    var employee_info = opt_employee.val().split(".");
                    $('#conductor_name').val(employee_info[1]);
                    $("#conductor").val(employee_info[0]);
                   } 
               $.fancybox.close();
               });
        },
        afterClose: function () {
        //parent.location.reload(false);
        }
    });
});