function burger() {
        var x = document.getElementById("navbar");
        if (x.className === "navbar") {
            x.className += " responsive";
            } else {
            x.className = "navbar";
            }

        var y = document.getElementById("navbar-menu");
        if (y.className === "navbar-menu") {
            y.className += " responsive";
            } else {
            y.className = "navbar-menu";
            }
    }