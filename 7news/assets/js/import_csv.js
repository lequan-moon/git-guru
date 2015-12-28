var is_submit = false;
$('#form-import-csv').submit(function(event) {
    if (!is_submit) {
        is_submit = true;
        $(this).submit();
    } else {
        event.preventDefault();
    }
});