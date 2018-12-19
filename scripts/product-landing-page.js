// Changes nav-bar icons color fills on hover
// *Make change of color on hover dynamic if possible. DRY is the goal!
//Nav-bar Logo
document.getElementById("logo-img").addEventListener("mouseover", function () {
    let element = document.getElementById("logo-img");
    element.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRv%0D%0AcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVy%0D%0Ac2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4%0D%0AbWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3%0D%0ALnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNjAgNjAi%0D%0AIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVz%0D%0AZXJ2ZSI+CjxwYXRoIHN0eWxlPSJmaWxsOiMyNTQ5ZDQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdp%0D%0AZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNNTAu%0D%0AMDAzLDI3CgljLTAuMTE1LTguNjk5LTcuMTkzLTE2LTE1LjkxOS0xNmMtNS41NTksMC0xMC43Nzks%0D%0AMy4wMDUtMTMuNjYxLDcuMzM2QzE5LjE1NywxNy40OTMsMTcuNjM2LDE3LDE2LDE3Yy00LjQxOCww%0D%0ALTgsMy41ODItOCw4CgljMCwwLjE1MywwLjAxNCwwLjMwMiwwLjAyMywwLjQ1NEM4LjAxMywyNS42%0D%0AMzYsOCwyNS44Miw4LDI2Yy0zLjk4OCwxLjkxMi03LDYuNDU3LTcsMTEuMTU1QzEsNDMuNjcsNi4z%0D%0AMyw0OSwxMi44NDUsNDloMjQuNTA3CgljMC4xMzgsMCwwLjI3Mi0wLjAxNiwwLjQwOC0wLjAyMUMz%0D%0ANy44OTcsNDguOTg0LDM4LjAzMSw0OSwzOC4xNjksNDloOS44MDNDNTQuMDM3LDQ5LDU5LDQ0LjAz%0D%0ANyw1OSwzNy45NzIKCUM1OSwzMi42MDEsNTUuMTA2LDI3Ljk2MSw1MC4wMDMsMjd6Ii8+CjxwYXRo%0D%0AIHN0eWxlPSJmaWxsOiMyNTQ5ZDQ7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tl%0D%0ALWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNNTAuMDAzLDI3CgljMCww%0D%0ALTIuNTM1LTAuMzc1LTUuMDAzLDAiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzI1NDlkNDtzdHJva2U6%0D%0AIzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJs%0D%0AaW1pdDoxMDsiIGQ9Ik04LDI1YzAtNC40MTgsMy41ODItOCw4LTgKCXM4LDMuNTgyLDgsOCIvPgo8%0D%0AZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4K%0D%0APC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9n%0D%0APgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K";
});

document.getElementById("logo-img").addEventListener("mouseout", function () {
    let element = document.getElementById("logo-img");
    element.src = "/media/logo-bar/logo.svg";
});

//Nav-bar Cart
document.getElementById("cart-img").addEventListener("mouseover", function () {
    let element = document.getElementById("cart-img");
    element.src = "/media/logo-bar/cart-plus-solid-hover.svg";
});

document.getElementById("cart-img").addEventListener("mouseout", function () {
    let element = document.getElementById("cart-img");
    element.src = "/media/logo-bar/cart-plus-solid.svg";
});

//Nav-nar Details
document.getElementById("details-a").addEventListener("mouseover", function () {
    let element = document.getElementById("details-img");
    element.src = "/media/nav-bar-icons/details-hover.svg";
});

document.getElementById("details-a").addEventListener("mouseout", function () {
    let element = document.getElementById("details-img");
    element.src = "/media/nav-bar-icons/details.svg";
});

//Nav-bar Gallery
document.getElementById("gallery-a").addEventListener("mouseover", function () {
    let element = document.getElementById("gallery-img");
    element.src = "/media/nav-bar-icons/gallery-hover.svg";
});

document.getElementById("gallery-a").addEventListener("mouseout", function () {
    let element = document.getElementById("gallery-img");
    element.src = "/media/nav-bar-icons/gallery.svg";
});

//Nav-bar Products
document.getElementById("products-a").addEventListener("mouseover", function () {
    let element = document.getElementById("products-img");
    element.src = "/media/nav-bar-icons/products-hover.svg";
});

document.getElementById("products-a").addEventListener("mouseout", function () {
    let element = document.getElementById("products-img");
    element.src = "/media/nav-bar-icons/products.svg";
});

/*Nav-bar mobile v1*/
//Bottom padding
/*
window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width : 62rem)").matches) {
        let topNavMobilePadding = this.document.getElementsByClassName("top-nav--mobile-padding");
        let navBarHeight = this.document.getElementById("header").offsetHeight + "px";
        this.document.getElementById("test").style.height = navBarHeight;
    }
    else {
        this.document.getElementById("test").style.height = "0px";
    }
});
*/

/*Nav-bar mobile v2*/
//INSERT AND REMOVE NAV BAR CLASSES
/*
window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width : 62rem)").matches) {
        let headerMobile = this.document.getElementById('header');
        headerMobile.classList.add("top-nav-bar__mobile");
        
    }
    else {
        headerMobile.classList.remove("top-nav-bar__mobile");
    }
});
*/