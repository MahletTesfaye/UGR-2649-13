const main = document.querySelector('main');
// const bar = document.querySelector(".fas fa-bars");
const times = document.querySelector(".header__cancel-icon");
const header_nav = document.querySelector(".header__nav");

function barClick() {
    if (bar.style.display = "block") {
        header_nav.style.display = "flex";
        bar.style.display = "none";
        times.style.display = "block";
        main.style.marginTop = "155px";
    }
}

function timesClick() {
    header_nav.style.display = "none"
    bar.style.display = "block";
    header_nav.style.display = "none";
    times.style.display = "none";
    main.style.marginTop = "0";


}

// bar.addEventListener('click', barClick, false)
// times.addEventListener('click', timesClick, false)

