import React, { Component } from "react";
import counterStyle from "../css/counter.module.css";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: 0,
    };
  }

  handleIncreaseOneClick = () =>
    this.setState({
      counterValue:
        parseInt(this.state.counterValue) + parseInt(this.props.minusOrPlusOne),
    });
  handleDecreaseOneClick = () =>
    this.setState({
      counterValue:
        parseInt(this.state.counterValue) - parseInt(this.props.minusOrPlusOne),
    });
  handleIncreaseFiveClick = () =>
    this.setState({
      counterValue:
        parseInt(this.state.counterValue) +
        parseInt(this.props.minusOrPlusFive),
    });
  handleDecreaseFiveClick = () =>
    this.setState({
      counterValue:
        parseInt(this.state.counterValue) -
        parseInt(this.props.minusOrPlusFive),
    });
  handleResetClick = () => this.setState({ counterValue: 0 });

  render() {
    return (
      <div className={counterStyle.container}>
        <button
          className={counterStyle.decrease}
          onClick={this.handleDecreaseFiveClick}
        >
          - {this.props.minusOrPlusFive}
        </button>
        <button
          className={counterStyle.decrease}
          onClick={this.handleDecreaseOneClick}
        >
          - {this.props.minusOrPlusOne}
        </button>
        <b className={counterStyle.number}>{this.state.counterValue}</b>
        <button
          className={counterStyle.increase}
          onClick={this.handleIncreaseOneClick}
        >
          + {this.props.minusOrPlusOne}
        </button>
        <button
          className={counterStyle.increase}
          onClick={this.handleIncreaseFiveClick}
        >
          + {this.props.minusOrPlusFive}
        </button>
        <br />
        <button className={counterStyle.reset} onClick={this.handleResetClick}>
          Reset
        </button>
      </div>
    );
  }
}
