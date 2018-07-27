import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent'
import data from '../../data/terms.json'

const DefaultTerms = asyncComponent(() =>
    import('./DefaultTerms').then(module => module.default)
)
const FathersDayTerms = asyncComponent(() =>
    import('./FathersDayTerms').then(module => module.default)
)

export default class Terms extends Component {
    // constructor(props) {
    //   super(props);
    // }
  
    renderTerms = () => {
      if (this.props.theme) {
        switch (this.props.theme) {
          case 'fathers-day':
            return <FathersDayTerms data={data}/>
          default:
            return <DefaultTerms data={data}/>
        }
      }
    }
  
    render() {
      return (
        <section>
          {this.renderTerms()}
        </section>
      )
    }
  }