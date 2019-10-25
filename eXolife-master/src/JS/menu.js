import React from 'react';
import { Redirect,Link,BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Home from './Home';
import About from './About';
import Sort from './Sort';
import 'bulma/css/bulma.css';
function Menu(props){
  return(
    <React.Fragment>
      <Router>
        <Redirect from="/" to="/home" />
        <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className="switch-wrapper" >
          <Route exact path="/home"  render={()=> <Home data={props.HomeContent}/>}/>
          <Route path="/descmethod" render={()=> <Sort   DiscoMethod={props.DiscoMethod}  LoadingOff={props.LoadingOff} LoadingOn={props.LoadingOn} ShowSelect={props.ShowSelect} onPressSelect={props.onPressSelect}  isHidden={props.isHidden} onPress={(e)=>props.HideShow(e)} data={props.Exoplanets}/>}/>
          <Route path="/about" component={About}/>
        </AnimatedSwitch>
        <div className="navigation-bar has-text-white has-background-link">
          <Link className="navbar-item" to="/home"><img  src="./Img/home.svg"/> </Link>
          <Link className="navbar-item middle" to="/descmethod"><img  onClick={(e)=>props.DiscoMethodSwitch(e)} disc-method="Click to Select" className="middleimg" src="./Img/planet.svg"/></Link>
          <Link className="navbar-item" to="/About"><img  onClick={(e)=>props.DiscoMethodSwitch(e)} disc-method="Click to Select" src="./Img/about.svg"/></Link>
        </div>
      </Router>
    </React.Fragment>
  )
}
export default Menu;
