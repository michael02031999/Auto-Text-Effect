let text = document.getElementById("text");
let input = document.getElementById("input");

let message = "We Love Programming!";

let array = [];

for (let i = 0; i < message.length; i++) {
  array.push(message[i]);
}

//let speed = input.value;

input.addEventListener("input", getValue);

let timeOut;

let value = false;
function getValue() {
  if (input.value == 1) {
    speed = 0;
    return speed;
  } else if (input.value <= 0) {
    speed = 200;
    return speed;
  } else if (input.value == 6) {
    speed = 150;
    return speed;
  } else if (input.value == 7) {
    speed = 160;
    return speed;
  } else if (input.value == 8) {
    speed = 162.5;
    return speed;
  } else if (input.value == 9) {
    speed = 165;
    return speed;
  } else if (input.value == 10) {
    speed = 170;
    return speed;
  } else if (input.value != 1) {
    speed = input.value;
    speed = speed * 25;
    return speed;
    //runItBack(speed);
  }
}
let x;

let arrayOfSpeed = [];

const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

const doSomething = async () => {
  for (let j = 0; j < message.length + 1; j++) {
    console.log(getValue());

    await sleep(200 - getValue());

    text.innerHTML += array[j];

    if (j == 20) {
      text.innerHTML = "";
      doSomething();
    }
  }
};

doSomething();

/* function runItBack(speed) {
  if (speed == undefined) {
    x = arrayOfSpeed[0];
  } else {
    x = parseInt(speed);
    arrayOfSpeed.shift();
    arrayOfSpeed.push(x);
  }

    console.log(x);
  console.log(arrayOfSpeed); 

  for (let j = 0; j < message.length + 1; j++) {
    setTimeout(function () {
      text.innerHTML += array[j];

      let value = getValue();

      if (j == 20) {
        text.innerHTML = "";
        runItBack();
      }

      return value;
    }, 100 * timeOut() * j);
  }
}

runItBack(speed);*/
