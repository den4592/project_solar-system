const btn = document.querySelector("button");
const inputValue = document.querySelector("input");
const planet = document.querySelector("#planet");
let result = 0;

function setValue(result, a) {
  let requiredAlertBox = document.querySelector(".required-alert-box");
  let requiredText = document.querySelector(".required__text");
  let img = document.createElement("img");
  requiredText.innerHTML = "";
  if (document.querySelector(".required-alert-box>img") !== null) {
    requiredAlertBox.childNodes[3].remove();
  }

  img.src = `./img/${a}.png`;
  img.style.width = "5rem";
  requiredAlertBox.appendChild(img);
  requiredText.innerHTML = `Your weight on the planet - ${a} : ` + result.toFixed(2) + `N(${Math.ceil(result / 9.80665)}Kg) `;
  return;
}

btn.addEventListener("click", (e) => {
  if (planet.value == "earth") {
    result = parseInt(inputValue.value * 1.0 * 9.80665);
    setValue(result, "earth");
  } else if (planet.value == "mars") {
    result = parseInt(inputValue.value * 0.38 * 9.80665);
    setValue(result, "mars");
  } else if (planet.value == "mercury") {
    result = parseInt(inputValue.value * 0.38 * 9.80665);
    setValue(result, "mercury");
  } else if (planet.value == "venus") {
    result = parseInt(inputValue.value * 0.91 * 9.80665);
    setValue(result, "venus");
  } else if (planet.value == "moon") {
    result = parseInt(inputValue.value * 1.62 * 9.80665);
    setValue(result, "moon");
  } else if (planet.value == "jupiter") {
    result = parseInt(inputValue.value * 2.34 * 9.80665);
    setValue(result, "jupiter");
  } else if (planet.value == "saturn") {
    result = parseInt(inputValue.value * 0.93 * 9.80665);
    setValue(result, "saturn");
  } else if (planet.value == "uranus") {
    result = parseInt(inputValue.value * 0.92 * 9.80665);
    setValue(result, "uranus");
  } else if (planet.value == "neptune") {
    result = parseInt(inputValue.value * 1.12 * 9.80665);
    setValue(result, "neptune");
  }
});
