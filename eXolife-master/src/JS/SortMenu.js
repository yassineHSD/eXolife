import React from 'react';
import {Link} from 'react-router-dom';
function SortMenu(props){
  return(
    <React.Fragment >
      <div className="banner">
       <h1 className="title">Exoplanets</h1>
      </div>
      <br/>
      <div className="disc-method-select">
        <h1 className="sub-title " onClick={props.onPressSelect} ><strong>Discovery Method:{props.DiscoMethod}</strong></h1>
      </div>
      <div className={(props.ShowSelect)?"disc-method":"hideandseek"} onClick={props.onPressSelect}>
        <div className="link1"><Link  onClick={(e)=>props.LoadingOn(e)} to="/transit" disc-method="Transit">Transit </Link></div>
        <div className="link2"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Radial-Velocity" disc-method="Radial Velocity">Radial Velocity </Link></div>
        <div className="link1"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Microlensing" disc-method="Microlensing" >Microlensing </Link></div>
        <div className="link2"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Imaging" disc-method="Imaging">Imaging</Link></div>
        <div className="link1"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Transit-Timing-Variations"  disc-method="Transit Timing Variations">Transit Timing Variations</Link></div>
        <div className="link2"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Eclipse-Timing-Variations" disc-method="Eclipse Timing Variations">Eclipse Timing Variations</Link></div>
        <div className="link1"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Pulsar-Timing" disc-method="Pulsar Timing">Pulsar Timing</Link></div>
        <div className="link2"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Orbital-brightness-modulations" disc-method="Orbital brightness modulations">Orbital brightness modulations</Link></div>
        <div className="link1"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Pulsation-Timing-Variations" disc-method="Pulsation Timing Variations">Pulsation Timing Variations</Link></div>
        <div className="link2"><Link  onClick={(e)=>props.LoadingOn(e)} to="/Astrometry" disc-method="Astrometry">Astrometry</Link></div>
      </div>
    </React.Fragment>
  )
}
export default SortMenu;
