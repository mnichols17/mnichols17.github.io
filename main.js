function load() {
    size();
    setTimeout(() => {
        document.getElementById('heading').style.visibility = "visible";
        $('#heading').addClass('animated fadeInDown');
    }, 500)
    setTimeout(() => {
        document.getElementById('photo').style.visibility = "visible";
        $('#photo').addClass('animated fadeInDown');
    }, 600)
    setTimeout(function(){
        document.getElementById("details").style.visibility = "visible";
        $("#details").addClass('animated fadeIn');
    }, 1250);
    setTimeout(function(){
        document.getElementById("break").style.visibility = "visible";
        $("hr").addClass('animated fadeIn');
    }, 1400);
    setTimeout(function(){
        document.getElementById("links").style.visibility = "visible";
        $("#links").addClass('animated fadeInUp');
    }, 1400);
}

function size() {
    if (window.innerWidth >= 500){
        document.getElementById("details").innerHTML = "<p>Web & Information Systems - New Jersey Institute of Technology</p>"
    } else {
        document.getElementById("details").innerHTML = "<p>Web & Information Systems</p><p>New Jersey Institute of Technology</p>"
    }
}