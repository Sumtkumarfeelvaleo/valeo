import "../WeightLossJourney.css";
export const BMICalculator = () => {
  return (
    <div className="bmi-calculator-container">
      <div className="header">
        <div>Matric</div>
        <div>Standard</div>
      </div>
      <div className="bmi-calculator">
        <div>
          <div>
            <span>Your Weight: </span>
            <span>
              <span>70</span>
              <span>kg</span>
            </span>
          </div>
          <input type="range" value={70} min={10} max={200} />
          <span className="range">
            <span>10</span>
            <span>50</span>
            <span>100</span>
            <span>200</span>
          </span>
          <div>
            <span>Your Weight: </span>
            <span>
              <span>180</span>
              <span>cm</span>
            </span>
          </div>
          <input type="range" value={180} min={50} max={250} />
          <span className="range">
            <span>50</span>
            <span>100</span>
            <span>200</span>
            <span>250</span>
          </span>
          <span className="range-drag-text">Drag to set your current weight & height</span>
          <div className="bmi-chart">
            <div>
              <span>UnderWeight</span>
              <span> {"<"} 18.5 </span>
            </div>
            <div>
              <span>Normal</span>
              <span> 18.5-24.9 </span>
            </div>
            <div>
              <span>Overweight</span>
              <span> 25-29.9 </span>
            </div>
            <div>
              <span>Obesity</span>
              <span>30 or above</span>
            </div>
          </div>
        </div>
        <div className="bmi-result">
          <span>
            Achieve a BMI of <span>19</span>
          </span>
          <span>Your current BMI is 25</span>
          <button>Calculate BMI</button>
        </div>
      </div>
    </div>
  );
};
