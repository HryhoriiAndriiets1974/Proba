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

// =====================================
const date = new Date();
// function pause() {
//   for (let i = 1; i < 100; i += 1) {
//     console.log(` i = ${i};`);
//   };
// };

console.log(typeof(date));
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
setTimeout(() => {
  console.log('Print out time')
}, 1);
console.log(typeof(date.toString()));
const t1 = new Date("2030-03-16");
console.log(t1);
// pause();
const t2 = new Date("2030-03");
console.log(t2);
const t3 = new Date("2018");
console.log(t3);
const t4 = new Date("03/16/2030");
console.log(t4);
const t5 = new Date("2030/03/16");
console.log(t5);
// for (let i = 1; i > 10; i += 1) {
//   console.log(` i = ${i};`);
// };
const t6 = new Date("2030/3/16");
console.log(t6);
const t7 = new Date("March 16, 2030");
console.log(t7);
const t8 = new Date("March 16, 2030 14:25:00");
console.log(t8);
const t9 = new Date("2030-03-16 14:25:00");
console.log(t9);
const t10 = new Date("2030-03-16T14:25:00");
console.log(t10);
const t11 = new Date("16 March 2030");
console.log(t11);