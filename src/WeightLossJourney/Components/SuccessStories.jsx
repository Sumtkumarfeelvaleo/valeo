import React from "react";
import beforeImg from "../assets/before.png";
import afterImg from "../assets/after.png";
import star from "../assets/stars.svg";
function SuccessStories() {
  const data = [
    {
      beforeImg: beforeImg,
      afterImg: afterImg,
      rating: 5,
    },
    {
      beforeImg: beforeImg,
      afterImg: afterImg,
      rating: 5,
    },
    {
      beforeImg: beforeImg,
      afterImg: afterImg,
      rating: 5,
    },
  ];

  return (
    <div id="successStories">
      <h2>Success Stories</h2>
      <div id="imgPreviewContainer">
        {data.map((item, index) => (
          <div key={index}>
            <div id="imgPreview">
              <div id="imgContainer">
                <img src={item.beforeImg} alt="" />
                <img src={item.afterImg} alt="" />
              </div>
              <div id="details">
                <span>Before</span>
                <span>
                  <span>Result in</span>
                  <span>6 months</span>
                </span>
                <span>After</span>
              </div>
            </div>
            <div id="reviewContainer">
              <span id="rating">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <img key={i} src={star} alt="star" />
                  ))}
              </span>
              <span id="review">Amazing!</span>
              <p id="desc">
                I’m thrilled with my Valeo Longevity Score! A quick blood test,
                and their algorithm does the rest. Seeing how I stack up against
                others is super motivating. My friend Ahmed and I now have a fun
                health competition going. Thanks, Valeo Health!
              </p>
              <span id="nameLocation">
                <span>Omar,</span>
                <span>Dubai</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuccessStories;
