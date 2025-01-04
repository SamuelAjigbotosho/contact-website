const navBtn = document.querySelector(".menu-icon");

const dropdown = document.getElementById("dropdown");

navBtn.addEventListener("click", function () {
  dropdown.classList.toggle("show");
});

const autoCaptcha = document.getElementById("security");

const userCaptcha = document.getElementById("captcha");

const submit = document.getElementById("sendBtn");
// Generate captcha
window.addEventListener("load", function randomNumbers() {
  let numLength = 7;
  let arr = [];
  for (let i = 0; i < numLength; i++) {
    let number = Math.floor(Math.random() * 7);
    arr.push(number);
  }
  autoCaptcha.value = arr.join("");
  console.log(...arr);
});

//validate captcha
submit.addEventListener("click", (e) => {
  if (autoCaptcha.value === userCaptcha.value) {
    alert("submission is successful");
  } else {
    alert("Robot detected!, invalid entry.");
  }
});
