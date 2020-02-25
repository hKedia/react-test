import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class Navigation extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item as={Link} to="/">
          HOME
        </Menu.Item>
        <Menu.Item as={Link} to="/modeler">
          MODELER
        </Menu.Item>
        <Menu.Item as={Link} to="/frameworks">
          FRAMEWORKS
        </Menu.Item>
      </Menu>
    );
  }
}
