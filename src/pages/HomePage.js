import React, { Component } from "react";
import { Header, Segment } from "semantic-ui-react";

export default class HomePage extends Component {
  render() {
    return (
      <Segment>
        <Header as="h1" textAlign="center">
          Home
        </Header>
      </Segment>
    );
  }
}
