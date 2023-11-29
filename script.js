const input = document.getElementById("text-input");
const buttons = document.getElementById("button");

function operation(buttonValue) {
  if (buttonValue === "C") input.value = "";
  else if (buttonValue === "Del") input.value = input.value.slice(0, -1);
  else if (buttonValue === "=") input.value = calculate(input.value);
  else input.value += buttonValue;
}

function calculate(expression) {
  console.log(expression);
  try {
    return new Function("return " + expression)();
  } catch (error) {
    return "Malformed Operation";
  }
}

buttons.array.forEach((button) => {
  let buttonValue = button.innerText;
  button.addEventListener("click", function () {
    operation(buttonValue);
  });
});
