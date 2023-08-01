// const sliderEl = document.querySelector("#range2")
// const sliderValue = document.querySelector(".value2")

// sliderEl.addEventListener("input", (event) => {
//   const tempSliderValue = event.target.value;
//   sliderValue.textContent = tempSliderValue;

//   const progress = (tempSliderValue / sliderEl.max) * 100;

//   sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
// })

// // 2

// const sliderEl3 = document.querySelector("#range3")
// const sliderValue3 = document.querySelector(".value3")

// sliderEl3.addEventListener("input", (event) => {
//   const tempSliderValue = Number(event.target.value);

//   sliderValue3.textContent = tempSliderValue;

//   const progress = (tempSliderValue / sliderEl3.max) * 100;

//   sliderEl3.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;

//   sliderEl3.style.setProperty("--thumb-rotate", `${(tempSliderValue/100) * 2160}deg`)
// })

// // 2

// const sliderEl4 = document.querySelector("#range4")
// const sliderValue4 = document.querySelector(".value4")

// sliderEl4.addEventListener("input", (event) => {
//   const tempSliderValue = event.target.value;
//   sliderValue4.textContent = tempSliderValue;

//   const progress = (tempSliderValue / sliderEl4.max) * 100;

//   sliderEl4.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
// })

// algoritmo para gerar senha

var sliderElement = document.querySelector("#slider");
var buttonElement = document.querySelector("#btn-primary");
var sizePassword = document.querySelector("#valor");
var password = document.querySelector("#password");

var charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#";
var novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";

  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  password.innerHTML = pass;
  novaSenha = pass;
}

async function copyPassword() {
  if (novaSenha == "") {
    alert('Você ainda não gerou uma senha, clique em "Gerar senha" para');
    return;
  }
  var text = novaSenha;
  navigator.clipboard.writeText(text).then(
    function () {
      alert("Senha copiada com sucesso.");
    },
    function (err) {
      console.error("Erro ao copiar senha", err);
    }
  );
}
