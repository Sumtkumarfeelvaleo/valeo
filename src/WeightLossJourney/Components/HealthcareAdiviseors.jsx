import React from "react";
import star from "../assets/stars.svg";
import Person1 from "../assets/person1.png";
function HealthcareAdvicor() {
  const data = [
    {
      img: Person1,
      name: "May Chalhoub",
      profession: "Licensed Dietician & Health Coach ",
      totalRating: 486,
      avgRating: 4.9,
      consultations: "800+",
      experience: "10+ yrs",
    },
    {
      img: Person1,
      name: "May Chalhoub",
      profession: "Licensed Dietician & Health Coach ",
      totalRating: 486,
      avgRating: 4.9,
      consultations: "800+",
      experience: "10+ yrs",
    },
    {
      img: Person1,
      name: "May Chalhoub",
      profession: "Licensed Dietician & Health Coach ",
      totalRating: 486,
      avgRating: 4.9,
      consultations: "800+",
      experience: "10+ yrs",
    },
    {
      img: Person1,
      name: "May Chalhoub",
      profession: "Licensed Dietician & Health Coach ",
      totalRating: 486,
      avgRating: 4.9,
      consultations: "800+",
      experience: "10+ yrs",
    },
  ];
  return (
    <div id="healthCare-advisors-container">
      <h2>Best HealthCare Adiviseors</h2>
      <h3>Book 1-on-1 Expert Guidance</h3>
      <div id="healthCare-advisiors">
        {data.map((person, index) => (
          <div key={index} className="healthCare-advisor">
            <img src={person.img} alt="person" />
            <h3>{person.name}</h3>
            <p>{person.profession}</p>
            <div className="rating">
              <img src={star} alt="" />
              <span>{person.avgRating}</span>
              <span>({person.totalRating} ratings)</span>
            </div>
            <div className="consultations">
              <span>
                <span>Consultations</span>
                <span>{person.consultations}</span>
              </span>
              <span>
                <span>Experience</span>
                <span>{person.experience}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="weight-loss-button">Book teleconsultation</button>
    </div>
  );
}

export default HealthcareAdvicor;
