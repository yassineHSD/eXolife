import React from 'react';
function About(){
  return(
    <React.Fragment>
        <div className="banner">
         <h1 className="title">About eXolife</h1>
        </div>
        <br/>
        <div className="has-text-centered">
          <h2 className="subtitle">Do you belive in Aliens?</h2>
          <img alt="" src="./Img/About.jpg" />
          <p>This App uses NASA API</p>
          <p>&copy; Yassine Ben Alaya | <a href="https://github.com/yassineHSD">Github</a></p>
        </div>
    </React.Fragment>
  )
}
export default About;
