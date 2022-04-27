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
const fetchUserFromServer = username => {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for ${username}`);

    setTimeout(() => {
      // Change value of isSuccess variable to simulate request status
      const isSuccess = true;

      if (isSuccess) {
        resolve("success value");
      } else {
        reject("error");
      }
    }, 2000);
  });
};

fetchUserFromServer("Mango1")
  .then(user => console.log(user))
  .catch(error => console.error(error));

  fetchUserFromServer("Mango2")
  .then(user => console.log(user))
  .catch(error => console.error(error));

  fetchUserFromServer("Mango3")
  .then(user => console.log(user))
  .catch(error => console.error(error));

fetchUserFromServer("")
  .then(user => console.log(user))
  .catch(error => console.error(error));
