function loadFunction() {
  document.getElementById("body").style.visibility = "hidden";
  document.getElementById("break").style.visibility = "hidden";
  document.getElementById("footer").style.visibility = "hidden";
    setTimeout(function(){
      document.getElementById("name").style.visibility = "visible";
      $('#name').addClass('animated fadeInDown');
    }, 500);
    setTimeout(function(){
      document.getElementById("photoSelf").style.visibility = "visible";
      $("#photoSelf").addClass('animated fadeInDown');
    }, 600);
    setTimeout(function(){
      document.getElementById("major").style.visibility = "visible";
      $("#major").addClass('animated fadeIn');
    }, 1250);
    setTimeout(function(){
      document.getElementById("school").style.visibility = "visible";
      $("#school").addClass('animated fadeIn');
    }, 1350);
    setTimeout(function(){
      document.getElementById("break").style.visibility = "visible";
      $("hr").addClass('animated fadeIn');
    }, 1400);
    setTimeout(function(){
      document.getElementById("footer").style.visibility = "visible";
      $("#footer").addClass('animated fadeInUp');
    }, 1400);
}
