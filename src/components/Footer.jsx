import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgStyle: { backgroundColor: "#f5f5f5" }
    };
  }

  render() {
    return (
      <footer style={this.state.bgStyle} className="mt-auto py-3 text-center">
        {/* <strong> &copy; 2019 </strong>*/}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/prasoonjha"
          aria-label="My GitHub"
        >
          Prasoon Jha
        </a>{" "}
        using <i className="fab fa-react" />
      </footer>
    );
  }
}

export default Footer;
