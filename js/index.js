function burger() {
    var x = document.getElementById("navbar-menu");
    if (x.className === "navbar-menu") {
        x.className += " responsive";
        } else {
        x.className = "navbar-menu";
        }
}