import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent'
import data from "../../data/services.json"

const DefaultService = asyncComponent(() =>
    import('./DefaultService').then(module => module.default)
)
const FathersDayService = asyncComponent(() =>
    import('./FathersDayService').then(module => module.default)
)

export default class Service extends Component {
    // constructor(props) {
    //   super(props);
    // }
  
    renderService = () => {
      if (this.props.theme) {
        switch (this.props.theme) {
          case 'fathers-day':
            return <FathersDayService data={data}/>
          default:
            return <DefaultService data={data}/>
        }
      }
    }
  
    render() {
      return (
        <section>
          {this.renderService()}
        </section>
      )
    }
  }