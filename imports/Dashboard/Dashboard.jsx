import React from 'react';

class Dashboard extends React.Component {
  render() {
    return  <div>
      <h1>Hello, {this.props.name}</h1>
    </div>
  }
}

module.exports = Dashboard
