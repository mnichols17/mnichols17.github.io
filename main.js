function load() {
  size();
  setTimeout(() => {
    document.getElementById("name").style.visibility = "visible";
    $("#name").addClass("animated fadeInDown");
  }, 500);
  setTimeout(() => {
    document.getElementById("avatar").style.visibility = "visible";
    $("#avatar").addClass("animated fadeInDown");
  }, 600);
  setTimeout(function () {
    document.getElementById("details").style.visibility = "visible";
    $("#details").addClass("animated fadeIn");
  }, 1250);
  setTimeout(function () {
    document.getElementById("break").style.visibility = "visible";
    $("hr").addClass("animated fadeIn");
  }, 1400);
  setTimeout(function () {
    document.getElementById("links").style.visibility = "visible";
    $("#links").addClass("animated fadeInUp");
  }, 1400);
}
