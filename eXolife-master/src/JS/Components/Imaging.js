import React from 'react';
function Imaging(props){
  var m=0;
  var object = props.data.map( (object,i)=> {
    if(object["pl_discmethod"]==="Imaging"){
      m++;
      return (
        <React.Fragment key={i}>
           <img alt="" src="" hidden onError={(e)=>props.LoadingOff(e)}/>
           <div className={"planetHeader" + " item" +  m%2} >
            <h1  item-index={i} onClick={(e)=>props.onPress(e)} className="title">{object["pl_name"]}</h1>
           </div>
           <div  className={"planetDetais " + props.isHidden[i]}>
             <p ><strong>Host Star Name:</strong> {object["pl_name"]}</p>
             <p ><strong>Discovery Method:</strong> {object["pl_discmethod"]}</p>
             <p ><strong>Number of Planets in System:</strong> {object["pl_pnum"]}</p>
             <p ><strong>Orbital Period (days):</strong> {object["pl_orbper"]}</p>
             <p ><strong>Orbit Semi-Major Axis (AU):</strong> {object["pl_orbsmax"]}</p>
             <p ><strong>Eccentricity:</strong> {object["pl_orbeccen"]}</p>
             <p ><strong>Inclination (deg):</strong> {object["pl_orbincl"]}</p>
             <p ><strong>Planet Mass or M*sin(i) [Jupiter mass]:</strong> {object["pl_bmassj"]}</p>
             <p ><strong>Planet Mass or M*sin(i) Provenance:</strong> {object["pl_bmassprov"]}</p>
             <p ><strong>Planet Radius (Jupiter radii):</strong> {object["pl_radj"]}</p>
             <p ><strong>Planet Density (g/cm**3):</strong> {object["pl_dens"]}</p>
             <p ><strong>Distance to the planetary system (parsecs):</strong> {object["st_dist"]}</p>
             <p ><strong>Distance computed from Gaia parallax (parsecs):</strong> {object["gaia_dist"]}</p>
             <p ><strong>Declination of the planetary system (decimal degrees) :</strong> {object["dec"]}</p>
             <p ><strong>Effective Temperature (of the star) (K):</strong> {object["st_teff"]}</p>
             <p ><strong>Stellar Mass (solar mass):</strong> {object["st_mass"]}</p>
             <p ><strong>Stellar Radius (solar radii):</strong> {object["st_rad"]}</p>
             <p ><strong>Date of Last Update:</strong> {object["rowupdate"]}</p>
             <p ><strong>Discovery Facility:</strong> {object["pl_facility"]}</p>
           </div>
        </React.Fragment>
     )};
   });
  return(
    <React.Fragment >
      <section  className="allContent section" >
        <h1 className="sub-title ">Exoplanets found:{m}</h1>
        {object}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </section>
    </React.Fragment>
  )
}
export default Imaging;
