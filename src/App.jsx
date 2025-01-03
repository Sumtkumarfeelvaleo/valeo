import "./App.css";
import { BMICalculator } from "./WeightLossJourney/Components/BMICalculator";
import { Facilities } from "./WeightLossJourney/Components/Facilities";
import { WeightLossProgram } from "./WeightLossJourney/Components/WeightLossProgram";
import { GlobalResult } from "./WeightLossJourney/Components/GlobalResult";
import { WeightLossBrand } from "./WeightLossJourney/Components/WeightLossBrand";
import HealthcareAdvicor from "./WeightLossJourney/Components/HealthcareAdiviseors";
import ValeoProgramTestimonial from "./WeightLossJourney/Components/ValeoProgramTestimonial";
import SuccessStories from "./WeightLossJourney/Components/SuccessStories";
import FAQ from "./WeightLossJourney/Components/FAQ";
import TopBanner from "./WeightLossJourney/Components/TopBanner";
function App() {
  return (
    <>
      {/* <TopBanner /> */}
      {/* <Facilities /> */}
      {/* <BMICalculator /> */}
      {/* <WeightLossProgram /> */}
      <GlobalResult />
      {/* <WeightLossBrand />
      <HealthcareAdvicor />
      <ValeoProgramTestimonial />
      <SuccessStories />
      <FAQ /> */}
    </>
  );
}

export default App;
