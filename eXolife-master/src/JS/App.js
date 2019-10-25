import React from 'react';
import logo from '../Img/logo.svg';
import '../CSS/App.css';
import Menu from './menu';
let Parser = require('rss-parser');
let parser = new Parser();
class App extends React.Component {
 constructor(props){
    super(props);
    this.state={
      TodayPic:[],
        exoplanetsData : [],
        ShowSelect:true,
        Loading:false,
        DiscoMethod:"Click to Select"
      }
      this.state2={
        exoplanetDetails:[]
      }
 }
 componentDidMount(e){
    const that = this;
    fetch("https://api.nasa.gov/planetary/apod?api_key=Hom2zqxl9Xpymj2M9OVWbkCjO9G6mCfuZtUmq7B0")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            that.setState({ TodayPic: jsonData });
        });
 }
 Exoplanets(e){
   const that = this;
   fetch("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json")
       .then(function(response) {
           return response.json();
       })
       .then(function(jsonData) {
           that.setState({ exoplanetsData: jsonData });
       });
 }
 Loader(e){
  this.Exoplanets(e);
  this.componentDidMount(e);
 }
 HideShowDetails(e){
    let planetID = e.target.getAttribute("item-index")
    if(this.state2.exoplanetDetails[planetID] === "hidden"){
      this.state2.exoplanetDetails[planetID] = undefined
    }
    else{
      this.state2.exoplanetDetails[planetID] = "hidden"
    }
    this.forceUpdate()
 }
 SelectSwitchState(e){
    this.setState({ ShowSelect: !(this.state.ShowSelect) });
 }
 LoadingSwitchOn(e){
  this.setState({ Loading: true });
  this.DiscoMethodSwitch(e);
 }
 LoadingSwitchOff(e){
  this.setState({ Loading: false });
 }
 DiscoMethodSwitch(e){
  this.setState({ DiscoMethod: e.target.getAttribute('disc-method') });
 }
 render(){
  return (
      <div onLoad={(e)=>this.Loader(e)}>
        <div className={"Loadingdiv" + (this.state.Loading?" seekandhide":"")  }>
        </div>
        <Menu
           DiscoMethodSwitch={(e)=>this.DiscoMethodSwitch(e)}
           DiscoMethod={this.state.DiscoMethod}
           LoadingOff={(e)=>this.LoadingSwitchOff(e)}
           LoadingOn={(e)=>this.LoadingSwitchOn(e)}
           ShowSelect={this.state.ShowSelect}
           onPressSelect={(e)=>this.SelectSwitchState(e)}
           isHidden={this.state2.exoplanetDetails}
           HideShow={(e)=>this.HideShowDetails(e)}
           HomeContent={this.state.TodayPic}
           Exoplanets={this.state.exoplanetsData}/>
      </div>
  )
 }
}
export  {App};
