const main = document.querySelector('main');
const bar = document.querySelector(".header__menu-icon");
const times = document.querySelector(".header__cancel-icon");
const header_nav = document.querySelector(".header__nav");

function barClick() {
    if (bar.style.display = "block") {
        header_nav.style.display = "flex";
        bar.style.display = "none";
        times.style.display = "block";
        main.style.marginTop = "155px";
        // Search_Delivery.style.float = "left";
        // SaronMB.style.clear = "left";
    }
    // else {
    //     header_nav.style.display = "none"
    //     bar.style.display = "block";
    //     header_nav.style.display = "none";
    // }
}

function timesClick() {
    header_nav.style.display = "none"
    bar.style.display = "block";
    header_nav.style.display = "none";
    times.style.display = "none";
    main.style.marginTop = "0";
    // Search_Delivery.style.float = "right"
    // SaronMB.style.clear = "right";
}


// console.log(bar, "herer");
bar.addEventListener('click', barClick, false)
times.addEventListener('click', timesClick, false)








