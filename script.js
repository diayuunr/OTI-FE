src =
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min";

//hidden projects
document.addEventListener("DOMContentLoaded", function () {
  const moreButton = document.getElementById("more");
  const hiddenProjects = document.getElementById("hidden");
  moreButton.addEventListener("click", function () {
    const icon = moreButton.querySelector("i");
    if (
      hiddenProjects.style.display === "none" ||
      hiddenProjects.style.display === ""
    ) {
      hiddenProjects.style.display = "grid";
      icon.classList.remove("bi-chevron-down");
      icon.classList.add("bi-chevron-up");
      this.textContent = " Collapse";
      moreButton.prepend(icon);
    } else {
      hiddenProjects.style.display = "none";
      icon.classList.remove("bi-chevron-up");
      icon.classList.add("bi-chevron-down");
      this.textContent = " More";
      moreButton.prepend(icon);
    }
  });
});

//hidden contibutor
const moreButton = document.getElementById("morecon");
const hiddenContri = document.getElementById("hiddenContri");
moreButton.addEventListener("click", () => {
  if (
    hiddenContri.style.display === "none" ||
    hiddenContri.style.display === ""
  ) {
    hiddenContri.style.display = "block";
    moreButton.textContent = "Show less";
  } else {
    hiddenContri.style.display = "none";
    moreButton.textContent = "+3 More";
  }
});

//Light-Dark mode
const toggle = document.getElementById("theme-toggle");
const body = document.body;
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggle.checked = true;
} else {
  body.classList.add("light-mode");
}
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    localStorage.setItem("theme", "light");
  }
});

//contact box
const contactBox = document.getElementById("contactBox");
const closeBtn = document.getElementById("closeBtn");
const contactLink = document.getElementById("contact");
contactLink.onclick = () => {
  contactBox.style.display = "block";
};
closeBtn.onclick = () => {
  contactBox.style.display = "none";
};

//Sign in-up
const signInBtn = document.querySelector(".signin");
const signUpBtn = document.querySelector(".signup");
const signInModal = document.getElementById("signIn");
const signUpModal = document.getElementById("signUp");
const closeSignIn = document.getElementById("closeSignIn");
const closeSignUp = document.getElementById("closeSignUp");

signInBtn.addEventListener("click", function () {
  signModal.style.display = "flex";
});
signUpBtn.addEventListener("click", function () {
  signModal.style.display = "flex";
});

closeSignIn.addEventListener("click", function () {
  signModal.style.display = "none";
});
closeSignUp.addEventListener("click", function () {
  signModal.style.display = "none";
});

//dot mobile
const dot = document.getElementById("dot");
const menu = document.querySelector(".menu");
const signin = document.querySelector(".signin");
const signup = document.querySelector(".signup");
dot.addEventListener("click", function () {
  menu.classList.toggle("show");
  signin.classList.toggle("show");
  signup.classList.toggle("show");
});
