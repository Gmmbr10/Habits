const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", addDay);
form.addEventListener("change", save);

function addDay() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const exists = nlwSetup.dayExists(today);

  if (exists) {
    alert("Data cadastrada anteriormente!");
    return;
  }

  nlwSetup.addDay(today);
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {};

nlwSetup.setData(data);
nlwSetup.load();
console.log(nlwSetup);
