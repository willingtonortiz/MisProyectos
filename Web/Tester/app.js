window.onload = () => {

    window.onscroll = () => {
        stickyNav()
    };

    var navItem = document.querySelector("#stickyNav");
    var navSize = navItem.offsetTop;

    var stickyNav = () => {
        if (window.pageYOffset >= navSize) {
            navItem.classList.add("sticky");
        } else {
            navItem.classList.remove("sticky");
        }
    }
}