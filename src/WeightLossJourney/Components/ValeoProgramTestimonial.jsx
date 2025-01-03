import React from "react";
import video from "../assets/weightLossvideo.mp4";
import previewImg from "../assets/Group 628608.png";
import doctorImg from '../assets/doctor.png';
function ValeoProgramTestimonial() {
  const data = [
    {
      title: "Schedule Free Tele-consultation",
      description:
        "Our weight loss specialist will answer all your questions and review your medical history to check if you are eligible to this program.",
    },
    {
      title: "Receive your treatment plan",
      description:
        "Get a personalized weight loss plan tailored to your needs with the right dosage and instructions to secure safety.",
    },
    {
      title: "At-home Delivery",
      description:
        "Receive your medication at the comfort of your home discreetly without any hassle.",
    },
    {
      title: "Holistic Support",
      description:
        "Order a nurse visit at-home to help you with your injection, connect with a nutritionist for additional diet & supplement support.",
    },
    {
      title: "Continuous care",
      description:
        "Live whatsapp support &  monthly check-ins with your specialist to track your progress, adjust your dosage, and have your medicine & supplement refills.",
    },
  ];
  return (
    <div className="valeo-program-testimonial">
      <h1>Valeo’s Program Testimonial</h1>
      <video controls>
        <source src={video} type="video/mp4" />
        <source src={previewImg} type="video/ogg" />
      </video>
      <div id="easyToStepUI">
        <span>
            <span>5 Easy Steps</span>
            <span>to follow</span>
        </span>
        <img src={doctorImg} alt="" />
      </div>
      <div id="easyToSteps">
        {data.map((item, index) => (
          <div key={index} className="easy-to-step">
            <div>
              <span>{index + 1}</span>
            </div>
            <div className="stepsDetails">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ValeoProgramTestimonial;
