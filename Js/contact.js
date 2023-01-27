const contact_form_submit = document.querySelector("#contact__form__submit");

const contact_form_name = document.querySelector("#contact__form__name");
const name_validator = document.querySelector(".contact__form__nameValidator");

const contact_form_email = document.querySelector("#contact__form__email");
const email_validator = document.querySelector(".contact__form__emailValidator");

const contact_form_phone = document.querySelector("#contact__form__phone");
const phone_validator = document.querySelector(".contact__form__PhoneValidator");

const contact__form__message_check = document.querySelector(".contact__form__message-check");
const contact_form_message = document.querySelector("#contact__form__message");

function formValidator() {
    console.log("message");
    const name = contact_form_name.value;
    const email = contact_form_email.value;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phone = contact_form_phone.value;
    const message = contact_form_message.value;
    const phonePattern = /^[0-9]{10}$/;

    if (name === "") {
        name_validator.innerHTML = "This field is required.";
    }
    else{
        name_validator.innerHTML = "";
    }

    if (email === "") {
        email_validator.innerHTML = "This field is required.";
    }
    else if (!emailPattern.test(email)) {
        email_validator.innerHTML = "Invalid email";
    }
    else{
        email_validator.innerHTML = "";
    }

    if (phone === "") {
        phone_validator.innerHTML = "This field is required.";
    }
    else if (!phonePattern.test(phone)) {
        phone_validator.innerHTML = "Invalid phone number";
    }
    else{
        phone_validator.innerHTML = "";
    }
    if (message === "" ){
        contact__form__message_check.innerHTML = "Write a message";
    }
    else{
        contact__form__message_check.innerHTML = "";
    }

    if (email_validator.innerHTML === "" && phone_validator.innerHTML === "" && name_validator.innerHTML ==="" && contact__form__message_check.innerHTML === ""){
        alert("Your message is successfully sent.");
    }
}
contact_form_submit.addEventListener('click', formValidator);
