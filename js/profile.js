const settingsBtn = document.querySelectorAll(".profile__settings-btn");
const settingsBox = document.querySelectorAll(".profile__box-item");

for (let i = 0; i < settingsBtn.length; i++) {
  settingsBtn[i].addEventListener("click", () => {
    console.log(settingsBox)
    for (let j = 0; j < settingsBtn.length; j++) {
      settingsBtn[j].classList.remove("active");
    }
    if (i == 3 || i == 4 || i == 5) {
      for (let j = 0; j < settingsBox.length; j++) {
        settingsBox[j].classList.remove("active");
      }
      settingsBox[i - 3].classList.add("active");
      if (i - 3 == 1) {
        if (!document.querySelector(".switch__in").classList.contains("active")) {

          document.querySelectorAll('.profile__send')[1].classList.add('active')
        }
      }
      else {

        document.querySelectorAll('.profile__send')[1].classList.remove('active')
      }
    }
    else {
      for (let j = 0; j < settingsBox.length; j++) {
        settingsBox[j].classList.remove("active");
      }
      settingsBox[i].classList.add("active");

      if (i == 1) {
        if (!document.querySelector(".switch__in").classList.contains("active")) {

          document.querySelectorAll('.profile__send')[1].classList.add('active')
        }
      }
      else {
        document.querySelectorAll('.profile__send')[1].classList.remove('active')
      }
    }
    settingsBtn[i].classList.add("active");
  });
}

document.querySelector(".slider").addEventListener("click", () => {


  document.querySelector(".switch__in").classList.toggle("active");
  if (document.querySelector(".switch__in").classList.contains("active")) {
    document.querySelectorAll('.profile__send')[1].classList.remove('active')
  }
  else {
    document.querySelectorAll('.profile__send')[1].classList.add('active')
  }
});
document.querySelector(".profile__photo-edit").addEventListener("click", () => {
  document.querySelector(".popup__photo").classList.add('active');
  document.querySelector(".shadow").classList.add('active')
})
