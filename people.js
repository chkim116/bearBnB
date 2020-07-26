const plusBtn = document.querySelector("#people__plus");
const minusBtn = document.querySelector("#people__minus");
const number = document.querySelector(".number");

let num = 0;

const plusPeople = () => {
  number.innerText = num += 1;
};

plusBtn.addEventListener("click", plusPeople);

const minusPeople = () => {
  num > 0 ? (number.innerText = num -= 1) : alert("0이하 입니다");
};

minusBtn.addEventListener("click", minusPeople);
