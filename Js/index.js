console.log("script imported");
const bar = document.querySelector(".header__menu-icon")
const times = document.querySelector(".header__cancel-icon")
const header_nav = document.querySelector(".header__nav")
const Search_Delivery = document.querySelector(".search-delivery")

const contact_form__submit = document.querySelector(".contact__form__submit")

const contact_form_name = document.getElementById("contact__form__name")
const name_validator = document.querySelector(".contact__form__nameValidator")

const contact_form_email = document.getElementById("contact__form__email")
const email_validator = document.querySelector(".contact__form__emailValidator")

const contact_form_phone = document.getElementById("contact__form__phone")
const phone_validator = document.querySelector(".contact__form__PhoneValidator")


function barClick() {
    if (bar.style.display = "block") {
        header_nav.style.display = "block";
        bar.style.display = "none";
        times.style.display = "block";
    }
    else {
        header_nav.style.display = "none"
        bar.style.display = "block";
        header_nav.style.display = "none";
    }
    // header_nav.style.display = "block";
    // bar.textContent = times;
}
function timesClick() {
    header_nav.style.display = "none"
    bar.style.display = "block";
    header_nav.style.display = "none";
    times.style.display = "none";
}

function formValidator(e) {
    e.preventDefault()
    const name = form.contact_form_name.value;
    const namePattern = /^[a-zA-Z]$/;
    const email = form.contact_form_email.value;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const phone = form.contact_form_phone.value;
    const phonePattern = /^[0-9]{10}$/;

    if (name === "") {
        name_validator.textContent = "This field is required.";
    }
    if (!namePattern.test(name)) {
        name_validator.textContent = "Invalid name";
    }
    if (email === "") {
        email_validator.textContent = "This field is required.";
    }
    if (!emailPattern.test(email)) {
        email_validator.textContent = "Invalid email"
    }
    if (phone === "") {
        phone_validator.textContent = "This field is required."
    }
    if (!phonePattern.test(phone)) {
        phone_validator.textContent = "Invalid phone number"
    }

}

console.log(bar, "herer");
bar.addEventListener('click', barClick, false)
times.addEventListener('click', timesClick, false)
    // contact_form__submit.addEventListener('submit', formValidator)







