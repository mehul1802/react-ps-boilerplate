import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent'
import DefaultHeader from './DefaultHeader';
import FathersDayHeader from './FathersDayHeader';
import data from "../../data/header.json"

// const DefaultHeader = asyncComponent(() =>
//     import('./DefaultHeader').then(module => module.default)
// )
// const FathersDayHeader = asyncComponent(() =>
//     import('./FathersDayHeader').then(module => module.default)
// )
export default class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }

  renderHeader = () => {
    if (this.props.theme) {
      switch (this.props.theme) {
        case 'fathers-day':
          return <FathersDayHeader isAuthenticated={this.props.isAuthenticated} handleLogout={this.props.handleLogout} data={data}/>
        default:
          return <DefaultHeader isAuthenticated={this.props.isAuthenticated} handleLogout={this.props.handleLogout} data={data}/>
      }
    }
  }

  render() {
    return (
      <section>
        {this.renderHeader()}
      </section>
    )
  }
}
