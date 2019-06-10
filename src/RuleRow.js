import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    const (score, name, doScore) = this.props;
    const disabled = 
    return (
      <tr className={`RuleRow RuleRow-${score === undefined ? "active" : "disabled"}`} onClick={this.props.score === undefined ? this.props.doScore : null}>
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    )
  }
}

export default RuleRow;