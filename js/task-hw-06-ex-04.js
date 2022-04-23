// --------------------- 1 old
let counterValue = document.querySelector("#value");
const button = document.querySelectorAll("button");

button[0].addEventListener("click", () => {
  counterValue.textContent -= 1;
});

button[1].addEventListener("click", () => {
  counterValue.textContent =
  parseInt(counterValue.textContent) + 1;
});
// ---------------------- 2 new
// const counterValue = {
//   value: 0,
//   add() {this.value += 1;},
//   dec() {this.value -= 1;},
// };
// const btnElAdd = document.querySelector('[data-action="increment"]');
// const btnElAddClick = () => {
//   counterValue.add();
//   value.textContent = counterValue.value;
// };
// btnElAdd.addEventListener('click', btnElAddClick);

// const btnElDec = document.querySelector('[data-action="decrement"]');
// const btnElDecClick = () => {
//   counterValue.dec();
//   value.textContent = counterValue.value;
// };
// btnElDec.addEventListener('click', btnElDecClick);
