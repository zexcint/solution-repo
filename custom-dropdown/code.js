const selectedItem = document.querySelector("#selected-item");
const optionsList = document.querySelector(".options-list");
const checkbox = document.querySelector("input[type='checkbox'");
const input = document.querySelectorAll("input[type='radio']");

radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    selectedItem.textContent = event.target.dataset.id;
    checkbox.checked = false;
  });
});