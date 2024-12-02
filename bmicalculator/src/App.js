import React, { useMemo, useState } from 'react';
import './App.css';

const App = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(70);

  const onWeightChange = (event) => setWeight(event.target.value);
  const onHeightChange = (event) => setHeight(event.target.value);

  const output = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  const getBMICategory = () => {
    const bmi = parseFloat(output);
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
  };

  return (
    <main>
      <h1>ProNext: BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
          value={weight}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="140"
          max="220"
          onChange={onHeightChange}
          value={height}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
        <p className="bmi-category">{getBMICategory()}</p>
      </div>
    </main>
  );
};

export default App;
