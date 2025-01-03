import React, { useState } from "react";
import "../WeightLossJourney.css";

export const BMICalculator = () => {
  const [bmiValue, setBmiValue] = useState({
    Matric: {
      weight: 70,
      height: 180,
    },
    Standard: {
      weight: 154,
      height: 70,
    },
  });

  const [bmiResult, setBmiResult] = useState({
    currentBMI: null,
    targetBMI: 19,
  });

  // Function to calculate BMI
  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100; // Convert height to meters
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmiResult((prev) => ({ ...prev, currentBMI: bmi }));
  };

  // Update state and recalculate BMI
  const handleInputChange = (type, value) => {
    setBmiValue((prev) => {
      const updatedValue = {
        ...prev,
        Matric: { ...prev.Matric, [type]: value },
      };
      calculateBMI(updatedValue.Matric.weight, updatedValue.Matric.height);
      return updatedValue;
    });
  };

  return (
    <div className="bmi-calculator-container">
      <div className="header">
        <div>Matric</div>
        <div>Standard</div>
      </div>
      <div className="bmi-calculator">
        <div>
          {/* Weight Section */}
          <div>
            <span>Your Weight: </span>
            <span>
              <span>{bmiValue.Matric.weight}</span>
              <span>kg</span>
            </span>
          </div>
          <input
            type="range"
            onChange={(e) => handleInputChange("weight", e.target.value)}
            value={bmiValue.Matric.weight}
            min={10}
            max={200}
          />
          <span className="range">
            <span>10</span>
            <span>50</span>
            <span>100</span>
            <span>200</span>
          </span>

          {/* Height Section */}
          <div>
            <span>Your Height: </span>
            <span>
              <span>{bmiValue.Matric.height}</span>
              <span>cm</span>
            </span>
          </div>
          <input
            type="range"
            onChange={(e) => handleInputChange("height", e.target.value)}
            value={bmiValue.Matric.height}
            min={50}
            max={250}
          />
          <span className="range">
            <span>50</span>
            <span>100</span>
            <span>200</span>
            <span>250</span>
          </span>
          <span className="range-drag-text">
            Drag to set your current weight & height
          </span>

          {/* BMI Chart */}
          <div className="bmi-chart">
            <div>
              <span>Underweight</span>
              <span>{"<"} 18.5</span>
            </div>
            <div>
              <span>Normal</span>
              <span>18.5 - 24.9</span>
            </div>
            <div>
              <span>Overweight</span>
              <span>25 - 29.9</span>
            </div>
            <div>
              <span>Obesity</span>
              <span>30 or above</span>
            </div>
          </div>
        </div>

        {/* BMI Result Section */}
        <div className="bmi-result">
          <span>
            Achieve a BMI of <span>{bmiResult.targetBMI}</span>
          </span>
          <span>
            Your current BMI is {bmiResult.currentBMI || "not calculated yet"}
          </span>
        </div>
      </div>
    </div>
  );
};
