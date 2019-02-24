import React, { Component } from 'react';

export default class FormField extends Component {

  constructor(props) {
    super(props)
  }

  render(){
    return(
    <div className="field">
      <label className="label">{this.props.label}</label>
      <div className="control">
        <input className="input" type={this.props.type} name={this.props.name} placeholder={this.props.placeholder}></input>
      </div>
    </div>
    )
  }
}