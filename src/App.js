import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  const [step, setStep] = useState(1);
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        />

        {/* <button onClick={() => setStep((c) => c - 1)}>-</button> */}
        <span> Step:{step}</span>
        {/* <button onClick={() => setStep((c) => c + 1)}>+</button> */}
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        {/* <span> Count:{count}</span> */}
        <input
          type="number"
          min="0"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is : "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days agao was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );

  function handleReset() {
    setCount(0);
    setStep(1);
  }
}
