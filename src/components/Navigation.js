import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/modeler">MODELER</Link>
          </li>
          <li>
            <Link to="/frameworks">FRAMEWORKS</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
