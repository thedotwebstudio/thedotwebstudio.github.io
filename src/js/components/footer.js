import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { Link, Route } from "react-router-dom"
import ReactDOM from "react-dom"

export default class Footer extends Component {
  render() {
    return (<footer>
      {/* <div id="copyright">© 2020 </div> */}
      <ul>
        <li><a href="https://www.facebook.com/StudioTheDot" target="_blank">facebook</a></li>
        <li><a href="https://twitter.com//StudioTheDot" target="_blank">Twitter</a></li>
        <li><a href="https://www.instagram.com/StudioTheDot" target="_blank">Instagram</a></li>
        <li><a href="http://studiothedot.tumblr.com" target="_blank">Tumblr</a></li>



      </ul>

    </footer>)
  }
}


