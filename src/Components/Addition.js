import React, { useState } from "react";

const Addition = () => {
  const [result, setResult] = useState(0);
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const handleAddition = () => {
    const sum = number1 + number2;
    setResult(sum);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="Enter the first number"
        value={number1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Enter the second number"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
      <button onClick={handleAddition}>Add</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Addition;
