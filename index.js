//unhighlight all other headers, highlight selected header
$('.highlightSelect').click(function() {
    $(".dealheaders").children().removeClass("highlight");
    $(this).addClass("highlight");
});
