import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux"
// import { Motion, spring } from 'react-motion';

import Sketch2 from "../p5/sketch2";
import Sketch from "../p5/sketch";
import Dot from "../p5/dot";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componantDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1500); // simulates loading of data
  }

  componantWillMount() { }

  render() {
    return (<div >
      <Dot />
      <Sketch />
      {/* <Sketch2 /> */}
    </div>)
  }

}

ProjectsPage.PropTypes = {
  pages: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    pages: state.pages,
  }
}

export default connect(mapStateToProps)(ProjectsPage);