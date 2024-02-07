import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(1);

  function decreaseStep() {
    setStep((s) => s - 1);
  }

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseCount() {
    setCount((c) => c - step);
  }

  function increaseCount() {
    setCount((c) => c + step);
  }

  return (
    <div>
      <div className="counter">
        <button className="decrease" onClick={decreaseStep}>
          -
        </button>
        <span className="count">{step}</span>
        <button className="increase" onClick={increaseStep}>
          +
        </button>
      </div>

      <div className="counter">
        <button className="decrease" onClick={decreaseCount}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="increase" onClick={increaseCount}>
          +
        </button>
      </div>
    </div>
  );
}
