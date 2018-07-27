import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent'
import DefaultFooter from './DefaultFooter';
import FathersDayFooter from './FathersDayFooter';
import data from "../../data/footer.json"

// const DefaultFooter = asyncComponent(() =>
//     import('./DefaultFooter').then(module => module.default)
// )
// const FathersDayFooter = asyncComponent(() =>
//     import('./FathersDayFooter').then(module => module.default)
// )
export default class Footer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  renderFooter = () => {
    if (this.props.theme) {
      switch (this.props.theme) {
        case 'fathers-day':
          return <FathersDayFooter data={data}/>
        default:
          return <DefaultFooter data={data}/>
      }
    }
  }

  render() {
    return (
      <div>
        {this.renderFooter()}
      </div>
    )
  }
}
