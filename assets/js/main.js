var opaque = false;

function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
    var projects = document.getElementById("projects");
    if (opaque) {
        projects.setAttribute("style", "none");
        opaque = false;
    }
    else {
        projects.setAttribute("style", "opacity: 1");
        opaque = true;
    }
}
