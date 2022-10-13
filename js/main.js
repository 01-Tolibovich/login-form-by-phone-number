const phoneNumber = document.querySelector(".phone");
const keyboard = document.querySelector(".buttons");
const divPhone = document.querySelector(".phone-number");
const divPhoneLink1 = document.querySelector(".link1");
const divPhoneLink2 = document.querySelector(".link2");
const country = document.querySelector(".country");
const title = document.querySelector(".title");
const btn = document.querySelector(".btn");
const value = document.querySelector(".value");

phoneNumber.addEventListener("click", loginForm);

function loginForm() {
    keyboard.classList.add("show");
    divPhone.classList.add("center");
    divPhoneLink1.classList.add("show_link");
    divPhoneLink2.classList.add("show_link");
    country.classList.add("display-none");
    title.innerHTML = "Авторизация";
}

value.addEventListener("click", function(event) {
    const number = event.target.innerText;
    phoneNumber.innerText += number;
    console.log(number);
});