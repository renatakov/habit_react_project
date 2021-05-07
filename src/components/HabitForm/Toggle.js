import React, { Component } from 'react';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <>
        <h6>Напомнить</h6>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Включено' : 'Выключено'}
        </button>
      </>
    );
  }
}

export default Toggle;
