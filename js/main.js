const login = document.querySelector(".login")
const phoneNumber = document.querySelector(".phone");
const divPhone = document.querySelector(".phone-number");
const divPhoneLink1 = document.querySelector(".link1");
const divPhoneLink2 = document.querySelector(".link2");
const country = document.querySelector(".country");
const title = document.querySelector(".title");
const value = document.querySelector(".value");
const hr = document.querySelector(".hr");

phoneNumber.addEventListener("click", loginForm);

function loginForm() {
    login.classList.add("inter_number");
    divPhone.classList.add("center");
    divPhoneLink1.classList.add("show_link");
    divPhoneLink2.classList.add("show_link");
    country.classList.add("display-none");
    title.innerHTML = "Авторизация";
    hr.classList.add("display-none");
}


// Маска для телефонного номера в input
$('.art-stranger').mask('+7 (999) 999-99-99');

$.fn.setCursorPosition = function(pos) {
if ($(this).get(0).setSelectionRange) {
  $(this).get(0).setSelectionRange(pos, pos);
} else if ($(this).get(0).createTextRange) {
  var range = $(this).get(0).createTextRange();
  range.collapse(true);
  range.moveEnd('character', pos);
  range.moveStart('character', pos);
  range.select();
}
};
$('input[type="tel"]').click(function(){
  $(this).setCursorPosition(4);  // set position number
});