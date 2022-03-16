const overall = document.querySelector(".overall");
const people = document.querySelector(".people");
const tip = document.querySelector("select");
const btn = document.querySelector("button");
const p = document.querySelector(".msg");
const span = document.querySelector("span");

const checkFill = () => {
  if (overall.value === "" || people.value === "" || tip.value === "empty") {
    p.textContent = "Wypełnij wszystkie pola!";
  } else {
    calculate();
    clear();
  }
};

function calculate() {
  let price = parseFloat(overall.value);
  let number = parseInt(people.value);
  let extra = parseFloat(tip.value);
  const cal = (price * extra + price) / number;
  p.textContent = `Razem do zapłaty: ${cal.toFixed(2)}zł ;)`;
  p.style.color = "black";
}
const clear = () => {
  overall.value = "";
  people.value = "";
  tip = tip.selectedIndex = null;
};

btn.addEventListener("click", checkFill);

//Kwota*%+kwota/ilosc osob
