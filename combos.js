// COMBO EMPRESA

const selectE = document.querySelector("#selectE");
const options_listE = document.querySelector(".options-listE");
const optionsE = document.querySelectorAll(".option-E");

//show & hide options list
selectE.addEventListener("click", () => {
  options_listE.classList.toggle("active");
  selectE.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

//select option
optionsE.forEach((option) => {
  option.addEventListener("click", () => {
    optionsE.forEach((option) => {option.classList.remove('selected')});
    selectE.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_listE.classList.toggle("active");
    selectE.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});



const selectA = document.querySelector("#selectA");
const options_listA = document.querySelector(".options-listA");
const optionsA = document.querySelectorAll(".option-A");

//show & hide options list
selectA.addEventListener("click", () => {
  options_listA.classList.toggle("active");
  selectA.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

//select option
optionsA.forEach((option) => {
  option.addEventListener("click", () => {
    optionsA.forEach((option) => {option.classList.remove('selected')});
    selectA.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_listA.classList.toggle("active");
    selectA.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});

