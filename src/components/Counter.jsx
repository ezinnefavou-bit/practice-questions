import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const value = 5;

  function increaseNumber() {
    setNumber(prev => prev + value);
  }

  function decreaseNumber() {
    setNumber(prev => Math.max(prev - value, 0));
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-row gap-12">
        <button
          onClick={() => decreaseNumber()}
          className="size-12 bg-red-600 text-2xl text-white">
          -
        </button>

        <p>{number}</p>

        <button
          onClick={() => increaseNumber()}
          className="size-12 bg-green-600 text-2xl text-white">
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;