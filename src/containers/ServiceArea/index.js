import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent'
import data from '../../data/serviceArea.json';

const DefaultServiceArea = asyncComponent(() =>
    import('./DefaultServiceArea').then(module => module.default)
)
const FathersDayServiceArea = asyncComponent(() =>
    import('./FathersDayServiceArea').then(module => module.default)
)

export default class ServiceArea extends Component {
    // constructor(props) {
    //   super(props);
    // }
  
    renderServiceArea = () => {
      if (this.props.theme) {
        switch (this.props.theme) {
          case 'fathers-day':
            return <FathersDayServiceArea data={data}/>
          default:
            return <DefaultServiceArea data={data}/>
        }
      }
    }
  
    render() {
      return (
        <section>
          {this.renderServiceArea()}
        </section>
      )
    }
  }