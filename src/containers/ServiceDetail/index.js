import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent'
import data from '../../data/packageDetail.json';

const DefaultServiceDetail = asyncComponent(() =>
    import('./DefaultServiceDetail').then(module => module.default)
)
const FathersDayServiceDetail = asyncComponent(() =>
    import('./FathersDayServiceDetail').then(module => module.default)
)

export default class ServiceDetail extends Component {
    // constructor(props) {
    //   super(props);
    // }
  
    renderServiceDetail = () => {
      if (this.props.theme) {
        switch (this.props.theme) {
          case 'fathers-day':
            return <FathersDayServiceDetail data={data}/>
          default:
            return <DefaultServiceDetail data={data}/>
        }
      }
    }
  
    render() {
      return (
        <section>
          {this.renderServiceDetail()}
        </section>
      )
    }
  }