import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Microlensing from './Components/Microlensing';
import Imaging from './Components/Imaging';
import Transit from './Components/Transit';
import Astrometry from './Components/Astrometry';
import RadialVelocity from './Components/RadialVelocity';
import TransitTimingVariations from './Components/TransitTimingVariations';
import EclipseTimingVariations from './Components/EclipseTimingVariations';
import PulsarTiming from './Components/PulsarTiming';
import OrbitalBrightnessModulations from './Components/OrbitalBrightnessModulations';
import PulsationTimingVariations from './Components/PulsationTimingVariations';
import SortMenu from './SortMenu';
function Sort(props){
  return(
    <React.Fragment>
      <Router>
        <SortMenu   DiscoMethod={props.DiscoMethod}  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} onPressSelect={props.onPressSelect}  ShowSelect={props.ShowSelect}/>
        <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper" >
          <Route path="/Microlensing" render={()=> <Microlensing LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Imaging" render={()=> <Imaging  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Transit" render={()=> <Transit LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Astrometry" render={()=> <Astrometry  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Radial-Velocity" render={()=> <RadialVelocity  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Transit-Timing-Variations" render={()=> <TransitTimingVariations  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Eclipse-Timing-Variations" render={()=> <EclipseTimingVariations  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Pulsar-Timing" render={()=> <PulsarTiming  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Orbital-Brightness-Modulations" render={()=> <OrbitalBrightnessModulations  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
          <Route path="/Pulsation-Timing-Variations" render={()=> <PulsationTimingVariations  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} isHidden={props.isHidden} onPress={(e)=>props.onPress(e)} data={props.data}/>}/>
        </AnimatedSwitch>
      </Router>
    </React.Fragment>
  )
}
export default Sort;
