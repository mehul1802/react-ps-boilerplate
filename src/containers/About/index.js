import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent'
import data from "../../data/about.json";

const DefaultAbout = asyncComponent(() =>
    import('./DefaultAbout').then(module => module.default)
)
const FathersDayAbout = asyncComponent(() =>
    import('./FathersDayAbout').then(module => module.default)
)

export default class About extends Component {
    // constructor(props) {
    //   super(props);
    // }
  
    renderAbout = () => {
      if (this.props.theme) {
        switch (this.props.theme) {
          case 'fathers-day':
            return <FathersDayAbout data={data}/>
          default:
            return <DefaultAbout data={data}/>
        }
      }
    }
  
    render() {
      return (
        <section>
          {this.renderAbout()}
        </section>
      )
    }
  }