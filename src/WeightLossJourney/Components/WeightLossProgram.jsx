// Desc: Weight loss program component
import CrossSvg from "../assets/cross_icon.svg";
import CheckSvg from "../assets/check_uncheck.svg";
export const WeightLossProgram = () => {
  const weightLossData = [
    "Free online weight loss consultation with Valeo's doctor",
    "At-home blood test to identify the reason of your weight gain",
    "Personalized supplement recommendations",
    "Personalized supplement recommendations",
    "At-home nurse assistance for injections",
    "Free diet cheat sheet",
    "Nutritional guidance with certified dietician",
    "Free door delivery of medication",
  ];

  const ComparisonRow = ({ data, index }) => (
    <div className={`weight-loss-row`}>
      <p className="weight-loss-row-text">{data}</p>
      <img src={CrossSvg} alt="cross-svg" />
      <img src={CheckSvg} alt="check-svg" />
    </div>
  );

  const HeaderRow = () => (
    <div className="weight-loss-header">
      <p className="weight-loss-header-text-pharmacy">
        GLP-1 Meds from a Pharmacy
      </p>
      <p className="weight-loss-header-text-valeo">
        Valeo’s Online Weight Loss Program
      </p>
      
    </div>
  );

  return (
    <div className="weight-loss-container">
      <h1 className="weight-loss-heading">
        Why Choose Valeo’s Online Weight Loss Program
      </h1>
      <div className="weight-loss-flex">
        <div className="weight-loss-column">
          <HeaderRow />
          <div className="weight-loss-column-text">
            {weightLossData.slice(0, 4).map((data, index) => (
              <ComparisonRow key={index} data={data} index={index} />
            ))}
            <div className="box"></div>
          </div>
        </div>
        <div className="weight-loss-column">
          <HeaderRow />
          <div className="weight-loss-column-text">
            {weightLossData.slice(4, 8).map((data, index) => (
              <ComparisonRow key={index} data={data} index={index} />
            ))}
            <div className="box"></div>
          </div>
        </div>
      </div>
      <button className="weight-loss-button">Book teleconsultation</button>
    </div>
  );
};
