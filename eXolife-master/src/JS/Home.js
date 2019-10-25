import React from 'react';
function Home(props){
  return(
    <React.Fragment >
      <div className="banner">
        <h1 className="title">Picture of the day </h1>
      </div>
      <br/>
      <div className="has-text-centered section">
        <h1 className="sub-title">{props.data["title"]}</h1>
        <br/>
        <img  alt="Server Side Error" className="Image" src={props.data["url"]} />
        <p >{props.data["explanation"]}</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </React.Fragment>
  )
}
export default Home;
