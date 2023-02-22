import React, { Component } from "react";
//import : here it has to import a class / function from the provided location / library.

export default class Landing extends Component {
  render() {
    return <></>;
  }
}

// export : to use it as public
// default : will use the same name
// class : keyword to define the class
// Landing : name of the class i.e. Name of the component

// extends : will use it for inheritance
// Component : name of the base class/ parent class
// render method/ function : this method is used to render/display the content to the browser
// return st. from render mehtod will hold the complete rendering content under the fragment (<></>)
// fragment (<></>) : its coming from react to hold the rendering content/ displaying content to the browser
// instead of fragment we can use div to hold the content but in recent versions of react like 17 or 18 fragment is recommended to hold the content which needs to be rendered.
