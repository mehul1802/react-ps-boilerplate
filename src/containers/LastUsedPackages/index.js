import React, { Component } from 'react';
import asyncComponent from '../../routes/AsyncComponent';

const DefaultLastUsedPackages = asyncComponent(() =>
    import('./DefaultLastUsedPackages').then(module => module.default)
)
const FathersDayLastUsedPackages = asyncComponent(() =>
    import('./FathersDayLastUsedPackages').then(module => module.default)
)

export default class LastUsedPackages extends Component {
  // constructor(props) {
  //   super(props);
  // }

  renderLastUsedPackages = () => {
    if (this.props.theme) {
      switch (this.props.theme) {
        case 'fathers-day':
          return <FathersDayLastUsedPackages />
        default:
          return <DefaultLastUsedPackages />
      }
    }
  }

  render() {
    return (
      <section>
        {this.renderLastUsedPackages()}
      </section>
    )
  }
}
