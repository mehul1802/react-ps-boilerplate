import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent'
import data from "../../data/contact.json"

const DefaultContact = asyncComponent(() =>
    import('./DefaultContact').then(module => module.default)
)
const FathersDayContact = asyncComponent(() =>
    import('./FathersDayContact').then(module => module.default)
)

export default class Contact extends Component {
    // constructor(props) {
    //   super(props);
    // }
  
    renderContact = () => {
      if (this.props.theme) {
        switch (this.props.theme) {
          case 'fathers-day':
            return <FathersDayContact data={data}/>
          default:
            return <DefaultContact data={data}/>
        }
      }
    }
  
    render() {
      return (
        <section>
          {this.renderContact()}
        </section>
      )
    }
  }