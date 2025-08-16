const body = document.body;

const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};
