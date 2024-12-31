import React from "react";
import "../WeightLossJourney.css";
function TopBanner() {
  return (
    <div className="top-banner-container">
      <div className="top-banner-content">
        <span className="top-banner-heading">Valeo's Online</span>
        <span className="top-banner-heading">GLP-1 Weight Loss Program</span>
        <span className="top-banner-price">
          <span>149 AED</span>
          <span>Free</span>
        </span>
        <button className="top-banner-button">Book teleconsultation</button>
      </div>
      <div className="top-banner-image-container">
        <img
          src="https://s3-alpha-sig.figma.com/img/fcb2/817a/3f03ca304fd093c267d9b261c369f160?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NySQ9EILFo2EDuH3Mjknb~MWNz3nQ4h4E~1A4a1yn3K59JE20kSJhyg5FrwrzDGbHUSWjv2wMsOJ6IoAaJlWZziqS7jPqKffgWbkmdFMonNmOcn-EzeN7damALCITUQqi7YO~7UlpBf2eNW-zkDmPSe~qvNplFIxc54OSG9q998eKiOLcLMLoSML5kC2KaJRUfO5FqjDg0v91D7kc~Jrv8gjIvYzEs7LMLjxrtGNYGEbW55IZ7J8Cgq~NtpVipqMaE5MQhI3sUs6lIFL9mq6sjaNVuX9H45toFEc7H2oyiPkGz3s7lCq1DslOvtm6rvYEqfzDkkUScRMRJU3xUOPeg__"
          alt="doctor-image"
          className=" top-banner-image"
        />
        <div className="top-banner-weight-loss">
          <img
            src="https://s3-alpha-sig.figma.com/img/5726/106f/7f14b0b3004a03e0d22969735eea65f1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CPKf28QqNu-9a7bT38l~dscz7XVQhBrckA9OA6tULAkrhyT4OwbxWaXBmJK1DZLIvFKl2240WBfb2V8nC2Es7QfALhq0GJMCm44WVY0tJCrBAoMr797bbTOpBp2BPWVnSxS7eyTHgz6oJdvbhu2WjHzFAyQynlzGGTO4HMSmF6vS61WWozPknO7sKKUEnTePIWY2dqZLdPUOUWz1UWc42PezCWi5hEGxFaEAyZp5QW6x9HnWFcStRdXusjFc1bh~BTrLwpt4pXM00G63Mghq0g9hdZ8HwQC7REE1BkEXkDFvPgERQeTACBZ6CCspjtobO2oBCNRlCzcsENo96co4rA__"
            alt="mounjaro-image"
            className="top-banner-image"
          />
          <div>
            <b>Loose up to <span>25%</span></b><br />
            <span>body Weight*</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopBanner;
