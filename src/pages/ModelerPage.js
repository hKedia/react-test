import React, { Component } from "react";
import Modeler from "bpmn-js/lib/Modeler";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

// export a modeler page component
// use the Modeler to instantiate a modeler instance
export default class ModelerPage extends Component {
  componentDidMount() {
    new Modeler({ container: "#canvas" });
  }
  render() {
    return (
      <>
        <h1>Modeler</h1>
        <div id="canvas" />
      </>
    );
  }
}
