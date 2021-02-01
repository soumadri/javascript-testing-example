
import CounterUtils from "./counterUtils"

let counter = 0;

const onIncrement = () => {
  //counter += 1;
  counter = CounterUtils.increment(counter);
  document.getElementById("count").innerHTML = counter;
};

const onDecrement = () => {
  //counter -= 1;
  counter = CounterUtils.decrement(counter);
  document.getElementById("count").innerHTML = counter;
};


document.getElementById("count").innerHTML = counter;
document.getElementById("increment").addEventListener("click", onIncrement);
document.getElementById("decrement").addEventListener("click", onDecrement);

