import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper plr15">
          <a href="/" className="brand-logo">
            My TS+REACT
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Sass</a>
            </li>
            <li>
              <a href="/">TS</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
