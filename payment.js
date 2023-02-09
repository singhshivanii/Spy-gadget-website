const btnPlusTop = document.querySelector(".upPlus");
const btnMinusTop = document.querySelector(".upMinus");
const btnPlusBottom = document.querySelector(".downPlus");
const btnMinusBottom = document.querySelector(".downMinus");
const counter1 = document.querySelector(".countNumber1");
const counter2 = document.querySelector(".countNumber2");
const total = document.querySelector(".totalPriceUser");

btnPlusTop.addEventListener("click", () => {
  counter1.innerText++;
  total.innerText = `$${(
    +counter1.innerText * 54.99 +
    counter2.innerText * 74.99 +
    19
  ).toFixed(2)}`;
});
btnMinusTop.addEventListener("click", () => {
  counter1.innerText <= 0 ? "0" : counter1.innerText--;
  total.innerText = `$${(
    +counter1.innerText * 54.99 +
    counter2.innerText * 74.99 +
    19
  ).toFixed(2)}`;
});
btnPlusBottom.addEventListener("click", () => {
  counter2.innerText++;
  total.innerText = `$${(
    +counter1.innerText * 54.99 +
    counter2.innerText * 74.99 +
    19
  ).toFixed(2)} `;
});
btnMinusBottom.addEventListener("click", () => {
  counter2.innerText <= 0 ? "0" : counter2.innerText--;
  total.innerText = `$${(
    +counter1.innerText * 54.99 +
    counter2.innerText * 74.99 +
    19
  ).toFixed(2)} `;
});
