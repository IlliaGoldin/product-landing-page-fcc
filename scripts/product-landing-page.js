// Changes nav-bar icons color fills on hover
// *Make change of color on hover dynamic if possible. DRY is the goal!
//Nav-bar Logo
document.getElementById("logo-img").addEventListener("mouseover", function () {
    let element = document.getElementById("logo-img");
    element.src = "media/logo-bar/logo-hover.svg";
});

document.getElementById("logo-img").addEventListener("mouseout", function () {
    let element = document.getElementById("logo-img");
    element.src = "media/logo-bar/logo.svg";
});

//Nav-bar Cart
document.getElementById("cart-img").addEventListener("mouseover", function () {
    let element = document.getElementById("cart-img");
    element.src = "media/logo-bar/cart-plus-solid-hover.svg";
});

document.getElementById("cart-img").addEventListener("mouseout", function () {
    let element = document.getElementById("cart-img");
    element.src = "media/logo-bar/cart-plus-solid.svg";
});

//Nav-nar Details
document.getElementById("details-a").addEventListener("mouseover", function () {
    let element = document.getElementById("details-img");
    element.src = "media/nav-bar-icons/details-hover.svg";
});

document.getElementById("details-a").addEventListener("mouseout", function () {
    let element = document.getElementById("details-img");
    element.src = "media/nav-bar-icons/details.svg";
});

//Nav-bar Gallery
document.getElementById("gallery-a").addEventListener("mouseover", function () {
    let element = document.getElementById("gallery-img");
    element.src = "media/nav-bar-icons/gallery-hover.svg";
});

document.getElementById("gallery-a").addEventListener("mouseout", function () {
    let element = document.getElementById("gallery-img");
    element.src = "media/nav-bar-icons/gallery.svg";
});

//Nav-bar Products
document.getElementById("products-a").addEventListener("mouseover", function () {
    let element = document.getElementById("products-img");
    element.src = "media/nav-bar-icons/products-hover.svg";
});

document.getElementById("products-a").addEventListener("mouseout", function () {
    let element = document.getElementById("products-img");
    element.src = "media/nav-bar-icons/products.svg";
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