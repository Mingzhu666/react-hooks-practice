import React, { Component } from 'react';
import './ButtonOne.scss';

class ButtonOne extends Component {
  constructor(props) {
    super(props);

    this.state = {buttonText: "Click me, please"};

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({buttonText: "Thanks, been clicked"});
  };

  render() {
    const { buttonText } = this.state;

    return <button className="class-button" onClick={this.handleClick}>{buttonText}</button>
  }
}

export default ButtonOne;