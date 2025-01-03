import React from "react";
import collapseIcon from '../assets/collapse_arrow.png';
function FAQ() {
  const faqData = [
    {
      ques: "What is Longevity?",
      des: `Longevity is all about living a long, healthy, and fulfilling life. It's not just about how many years you live but also how healthy you live them. By focusing on longevity, you improve your health span. Unlike other programs that focus on treating sickness, this one shows how healthy you are and what more you can do to stay even healthier. Take charge of your health and happiness today! Book your Longevity Health Program to chat with a specialist and see if it's the right fit for you!`,
    },
    {
      ques: "What is included in the program?",
      des: [
        "Two Advanced Blood Tests (56 biomarkers)",
        "Comprehensive Food Intolerance Test (200+ items)",
        "Vo2 max test to measure peak oxygen capacity.",
        "Order supplements for your journey at 30% OFF",
        "Six consultations with our wellness coaches",
        "Customized diet plan",
      ],
    },
    {
      ques: "Why is the program different than others?",
      des: "By focusing on longevity, you improve your health span. Unlike other programs that focus on treating sickness, this one shows how healthy you are and what more you can do to stay even healthier.",
    },
  ];

  return (
    <div id="faq">
      <h1>Frequently Asked Questions</h1>
      <div id="faqQuestion">
        {faqData.map((faq, index) => (
          <details key={index} style={{ marginBottom: "20px" }}>
            <summary>
              <span>{faq.ques}</span>
              <span><img src={collapseIcon} alt="" /></span>
            </summary>
            {Array.isArray(faq.des) ? (
              <ul>
                {faq.des.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{faq.des}</p>
            )}
          </details>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
