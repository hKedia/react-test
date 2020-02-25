import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";

import diagramXML from "../resources/newDiagram.bpmn";
import BpmnJS from "bpmn-js/dist/bpmn-modeler.development.js";
import "bpmn-js/dist/assets/diagram-js.css";
import "bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css";

export default class ModelerPage extends Component {
  componentDidMount() {
    let viewer = new BpmnJS({ container: "#js-canvas" });
    viewer.importXML(diagramXML, err => {
      if (err) {
        console.error(err);
      }
    });
  }
  render() {
    return (
      <div>
        <Segment>
          <Header as="h1" textAlign="center">
            Modeler
          </Header>
        </Segment>
        <div className="canvas" id="js-canvas" />
      </div>
    );
  }
}
