/* remove icon on input */

const firstname = document.querySelector("#firstName");
const firstnameIcon = document.querySelector("#firstnameIcon");
const email = document.querySelector("#email");
const emailIcon = document.querySelector("#emailIcon");
const phone = document.querySelector("#phone");
const phoneIcon = document.querySelector("#phoneIcon");
const lastname = document.querySelector("#lastName");
const lastnameIcon = document.querySelector("#lastnameIcon");

firstname.oninput = () => {
  firstnameIcon.classList.add("invisible");
};
lastname.oninput = () => {
  lastnameIcon.classList.add("invisible");
};
email.oninput = () => {
  emailIcon.classList.add("invisible");
};
phone.oninput = () => {
  phoneIcon.classList.add("invisible");
};

/* help icon setup */
const helpIcon = document.querySelector("#helpIcon");
const video = document.querySelector("iframe");

helpIcon.addEventListener("mouseenter", () => {
  video.classList.remove("hide");
});
helpIcon.addEventListener("mouseleave", () => {
  video.classList.add("hide");
});

const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  alert("This is not a real form, ha ha ha!");
});
