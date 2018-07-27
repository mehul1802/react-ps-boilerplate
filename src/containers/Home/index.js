import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent';
import data from "../../data/home.json";

const DefaultHome = asyncComponent(() =>
    import('./DefaultHome').then(module => module.default)
)
const FathersDayHome = asyncComponent(() =>
    import('./FathersDayHome').then(module => module.default)
)

export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  renderHome = () => {
    if (this.props.theme) {
      switch (this.props.theme) {
        case 'fathers-day':
          return <FathersDayHome data={data}/>
        default:
          return <DefaultHome data={data}/>
      }
    }
  }

  render() {
    return (
      <section>
        {this.renderHome()}
      </section>
    )
  }
}
