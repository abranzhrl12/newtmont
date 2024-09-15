const datepicker = document.querySelector(".datepicker");
const dateInput = document.querySelector(".date-input");
const yearInput = datepicker.querySelector(".year-input");
const monthInput = datepicker.querySelector(".month-input");
const cancelBtn = datepicker.querySelector(".cancel");
const applyBtn = datepicker.querySelector(".apply");
const nextBtn = datepicker.querySelector(".next");
const prevBtn = datepicker.querySelector(".prev");
const dates = datepicker.querySelector(".dates");

let selectedDate = new Date();
let year = selectedDate.getFullYear();
let month = selectedDate.getMonth();

// show datepicker
dateInput.addEventListener("click", () => {
  datepicker.hidden = false;
});

// hide datepicker
cancelBtn.addEventListener("click", () => {
  datepicker.hidden = true;
});

// handle apply button click event
applyBtn.addEventListener("click", () => {
  // set the selected date to date input
  dateInput.value = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  // hide datepicker
  datepicker.hidden = true;
});

// handle next month nav
nextBtn.addEventListener("click", () => {
  if (month === 11) year++;
  month = (month + 1) % 12;
  displayDates();
});

// handle prev month nav
prevBtn.addEventListener("click", () => {
  if (month === 0) year--;
  month = (month - 1 + 12) % 12;
  displayDates();
});

// handle month input change event
monthInput.addEventListener("change", () => {
  month = monthInput.selectedIndex;
  displayDates();
});

// handle year input change event
yearInput.addEventListener("change", () => {
  year = yearInput.value;
  displayDates();
});

const updateYearMonth = () => {
  monthInput.selectedIndex = month;
  yearInput.value = year;
};

const handleDateClick = (e) => {
  const button = e.target;

  // remove the 'selected' class from other buttons
  const selected = dates.querySelector(".selected");
  selected && selected.classList.remove("selected");

  // add the 'selected' class to current button
  button.classList.add("selected");

  // set the selected date
  selectedDate = new Date(year, month, parseInt(button.textContent));
};

const displayDates = () => {
  // Update year & month whenever the dates are updated
  updateYearMonth();

  // Clear the dates
  dates.innerHTML = "";

  // Get the first and last date of the current month
  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month + 1, 0);

  // Determine the day of the week the month starts on
  const startDay = firstOfMonth.getDay();

  // Determine the number of days in the current month
  const totalDays = lastOfMonth.getDate();

  // Total number of days to display
  const totalButtons = 35; // 5 weeks * 7 days

  // Calculate how many days to show from the previous month
  const daysToShowFromPrevMonth = startDay;

  // Display the last days of the previous month
  const lastOfPrevMonth = new Date(year, month, 0);
  const lastMonthDays = lastOfPrevMonth.getDate();

  let prevMonthDaysToShow = daysToShowFromPrevMonth;

  // Special handling for March and June
  if (month === 2 || month === 5) { // March (2) and June (5)
    prevMonthDaysToShow = Math.max(0, daysToShowFromPrevMonth - 1); // Show one less day
  }

  for (let i = prevMonthDaysToShow; i > 0; i--) {
    const text = lastMonthDays - i + 1;
    const button = createButton(text, true, -1);
    dates.appendChild(button);
  }

  // Display the current month
  for (let i = 1; i <= totalDays; i++) {
    const button = createButton(i, false);
    button.addEventListener("click", handleDateClick);
    dates.appendChild(button);
  }

  // Calculate the number of days to add from the next month
  const daysDisplayed = prevMonthDaysToShow + totalDays;
  const daysToAdd = totalButtons - daysDisplayed;

  // Display the first days of the next month if needed
  if (daysToAdd > 0) {
    const firstOfNextMonth = new Date(year, month + 1, 1);
    for (let i = 1; i <= daysToAdd; i++) {
      const button = createButton(i, true, 1);
      dates.appendChild(button);
    }
  }
};

const createButton = (text, isDisabled = false, type = 0) => {
  const currentDate = new Date();

  // Determine the date to compare based on the button type
  let comparisonDate = new Date(year, month + type, text);

  // Check if the current button is the date today
  const isToday =
    currentDate.getDate() === text &&
    currentDate.getFullYear() === year &&
    currentDate.getMonth() === month;

  // Check if the current button is selected
  const selected = selectedDate.getTime() === comparisonDate.getTime();

  const button = document.createElement("button");
  button.textContent = text;
  button.disabled = isDisabled;
  button.classList.toggle("today", isToday && !isDisabled);
  button.classList.toggle("selected", selected);
  return button;
};

// Call the function to render the calendar
displayDates();



// // render the dates in the calendar interface
// const displayDates = () => {
//   // update year & month whenever the dates are updated
//   updateYearMonth();

//   // clear the dates
//   dates.innerHTML = "";

//   //* display the last week of previous month

//   // get the last date of previous month
//   const lastOfPrevMonth = new Date(year, month, 0);

//   for (let i = 0; i <= lastOfPrevMonth.getDay(); i++) {
//     const text = lastOfPrevMonth.getDate() - lastOfPrevMonth.getDay() + i;
//     const button = createButton(text, true, -1);
//     dates.appendChild(button);
//   }

//   //* display the current month

//   // get the last date of the month
//   const lastOfMOnth = new Date(year, month + 1, 0);

//   for (let i = 1; i <= lastOfMOnth.getDate(); i++) {
//     const button = createButton(i, false);
//     button.addEventListener("click", handleDateClick);
//     dates.appendChild(button);
//   }

//   //* display the first week of next month

//   const firstOfNextMonth = new Date(year, month + 1, 1);

//   for (let i = firstOfNextMonth.getDay(); i < 7; i++) {
//     const text = firstOfNextMonth.getDate() - firstOfNextMonth.getDay() + i;

//     const button = createButton(text, true, 1);
//     dates.appendChild(button);
//   }
// };

// const createButton = (text, isDisabled = false, type = 0) => {
//   const currentDate = new Date();

//   // determine the date to compare based on the button type
//   let comparisonDate = new Date(year, month + type, text);

//   // check if the current button is the date today
//   const isToday =
//     currentDate.getDate() === text &&
//     currentDate.getFullYear() === year &&
//     currentDate.getMonth() === month;

//   // check if the current button is selected
//   const selected = selectedDate.getTime() === comparisonDate.getTime();

//   const button = document.createElement("button");
//   button.textContent = text;
//   button.disabled = isDisabled;
//   button.classList.toggle("today", isToday && !isDisabled);
//   button.classList.toggle("selected", selected);
//   return button;
// };

// displayDates();
