
//combo empresas
const selectE = document.querySelector(".selectE");
const options_list = document.querySelector(".options-listE");
const optionsE = document.querySelectorAll(".optionE");

//show & hide options list
selectE.addEventListener("click", () => {
  options_list.classList.toggle("active");
  selectE.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

//select option
optionsE.forEach((option) => {
  option.addEventListener("click", () => {
    optionsE.forEach((option) => {option.classList.remove('selectedE')});
    selectE.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selectedE");
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});