
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".peek").click(function() {
    $("#peek-showing").slideToggle();
    $("#peek-hidden").slideToggle();
  });
});