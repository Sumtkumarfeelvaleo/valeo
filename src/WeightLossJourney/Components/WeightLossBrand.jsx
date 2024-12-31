import React from "react";
import brand1 from "../assets/image 169-1.png";
// import brand2 from "../assets/image 169.png";

export const WeightLossBrand = () => {
  const brandsInfo = [
    {
      brand: "Mounjaro.o",
      brandDetails:
        "Mounjaro.o contains Tirzepatid.e, targets GLP-1 and GLP receptors to control blood sugar, curb appetite, and aid weight loss. It’s taken weekly.",
      imgUrl: brand1,
    },
    {
      brand: "Wegov.y",
      brandDetails:
        "Wegov.y is a weight loss medication containing Semaglutide, which mimics the GLP-1 hormone to reduce hunger and cravings. It is administered once weekly.",
      imgUrl: brand1,
    },
    {
      brand: "Mounjaro.o",
      brandDetails:
        "Mounjaro.o contains Tirzepatid.e, targets GLP-1 and GLP receptors to control blood sugar, curb appetite, and aid weight loss. It’s taken weekly.",
      imgUrl: brand1,
    },
    {
      brand: "Wegov.y",
      brandDetails:
        "Wegov.y is a weight loss medication containing Semaglutide, which mimics the GLP-1 hormone to reduce hunger and cravings. It is administered once weekly.",
      imgUrl: brand1,
    },
  ];

  return (
    <div className="weight-loss-brand-container">
      <p className="weight-loss-heading">Revolutionary Weight Loss Brands</p>
      <div className="brands-flex">
        {brandsInfo.map((brandData, index) => (
          <div key={index} className="brand-card">
            <img
              src={brandData.imgUrl}
              alt={brandData.brand}
              className="brand-image"
            />
            <p className="brand-name">{brandData.brand}</p>
            <p className="brand-description">{brandData.brandDetails}</p>
          </div>
        ))}
      </div>
      <button className="weight-loss-button">Book teleconsultation</button>
    </div>
  );
};
