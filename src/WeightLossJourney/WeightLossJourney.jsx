import React from 'react'
import TopBanner from './Components/TopBanner'
import { Facilities } from './Components/Facilities'
import { BMICalculator } from './Components/BMICalculator'
import { WeightLossProgram } from './Components/WeightLossProgram'
import { GlobalResult } from './Components/GlobalResult'
import { WeightLossBrand } from './Components/WeightLossBrand'

function WeightLossJourney() {
  return (
    <div>
        <TopBanner/>
        {/* <Facilities/> */}
        {/* <BMICalculator/>
        <WeightLossProgram/>
        <GlobalResult/> */}
        <WeightLossBrand/>
    </div>
  )
}

export default WeightLossJourney