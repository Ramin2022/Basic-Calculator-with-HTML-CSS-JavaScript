const display = document.querySelector("#display");
const keys = document.querySelector(".keys");

let number = display.textContent,
  result = 0,
  op = "";
let is_decimal = false;

// main event , used event delegation
keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    // our variables
    const key = e.target;
    const keyContent = e.target.dataset.key;
    // Number button check
    if (key.classList.contains("btn-number")) {
      screen(keyContent);
    }
    // clear btn check
    if (key.id == "clearBtn") {
      clearBtn();
    }
    // btn clear last action
    if (key.id == "btnClearLastAction") {
      clearLastAction();
    }
    // back btn
    if (key.id == "backBtn") {
      backSpaceBtn();
    }
    // btn positiv or negative number
    if (key.id == "pnNumber") {
      PNBtn();
    }
    // adding point to number
    if (key.id == "pointBtn") {
      pointBtn();
    }
    // sum operation
    if (key.id == "additionBtn") {
      sumOperation();
    }
    // sutraction operation
    if (key.id == "subtractBtn") {
      subOperation();
    }
    // Multiplication operation
    if (key.id == "multiplyBtn") {
      multiOperation();
    }
    // Division operation
    if (key.id == "divisionBtn") {
      divOperation();
    }

    // equal function
    if (key.id == "btn-equal") {
      equalOperation();
    }
  }
});

// functions---------------
// printing numbers on screen function
function screen(text) {
  if (number == "0") {
    display.textContent = text;
    number = text;
  } else {
    display.textContent += text;
    number += text;
  }
}

// clear funtion
function clearBtn() {
  number = "0";
  result = 0;
  is_decimal = false;
  op = "";
  display.textContent = number;
}

// backspace function
function backSpaceBtn() {
  let len = number.length;
  let last_digit = number.substring(len - 1, len);
  if (last_digit == ".") {
    is_decimal = false;
  }
  if (len > 1) {
    number = number.substring(0, len - 1);
    display.textContent = number;
  } else {
    number = "0";
    display.textContent = number;
  }
}

// positive or negative number functio
function PNBtn() {
  number = number * -1;
  display.textContent = number;
}

// adding point to number function
function pointBtn() {
  if (is_decimal == false) {
    number += ".";
    display.textContent = number;
    is_decimal = true;
  }
}

// clear last action
function clearLastAction() {
  number = "0";
  display.textContent = number;
}

// sum operatin ------
function sumOperation() {
  result = result + Number(number);

  recentEvent("+");
}

// subtraction operation ----

function subOperation() {
  console.log(number);
  console.log(result);
  console.log(op);
  if (op == "") {
    result = Number(number);
  } else {
    result -= Number(number);
  }
  recentEvent("-");
}

// multiplication function
function multiOperation() {
  if (op == "") {
    result = Number(number);
  } else {
    result *= Number(number);
  }
  recentEvent("*");
}

// Division Function
function divOperation() {
  if (op == "") {
    result = Number(number);
  } else {
    result /= Number(number);
  }
  console.log(result);
  recentEvent("/");
}

// recent event on number and screen
function recentEvent(operationType) {
  number = "0";
  display.textContent = number;
  op = operationType;
  is_decimal = false;
}

function equalOperation() {
  if (op == "+") sumOperation();
  if (op == "-") subOperation();
  if (op == "*") multiOperation();
  if (op == "/") divOperation();

  number = result.toString();
  result = 0;
  op = "";
  is_decimal = true;
  display.textContent = number;
}
