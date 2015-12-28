$(".table-responsive-header th").click(function() {
    var attrClass = $(this).attr("class");

    /**
     * If current class is sort_asc, change sort_mode_input to desc
     * If current class is sort_desc, change sort_mode_input to asc
     * If current class is sort_both (no sort), change sort_mode_input to asc
     */
    if (attrClass.search("sort_asc") >= 0) {
        $("#sort_mode_input").val('desc');
    } else if (attrClass.search("sort_desc") >= 0) {
        $("#sort_mode_input").val('asc');
    } else if (attrClass.search("sort_both") >= 0) {
        $("#sort_mode_input").val('asc');
    }

    var id = $(this).attr("column");
    $("#sort_input").val(id);
    $("#search_form").submit();
});

$(document).ready(function() {
    var id = $("#sort_input").val();

    // get value behind of the dot [.]
    var search = new RegExp("(.*)[.](.*)");
    var replace = new RegExp("$2");
    id = id.replace(search, replace);
    id = trimFirstAndLastChar(id);

    // set class css for column sort
    className = $("#sort_mode_input").val();
    $("#" + id).attr("class", "sort_" + className);
});

function trimFirstAndLastChar(string) {
    if (string.search("/") >= 0) {
        string = string.substr(1, string.length-2);
    }
    return string;
}