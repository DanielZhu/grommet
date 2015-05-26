// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');

var RadioButton = React.createClass({

  propTypes: {
    checked: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string,
    onChange: React.PropTypes.func
  },

  render: function () {
    var classes = ["radio-button"];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return (
      <span className={classes.join(' ')}>
        <input className="radio-button__input"
          id={this.props.id} name={this.props.name} type="radio"
          checked={this.props.checked}
          defaultChecked={this.props.defaultChecked}
          onChange={this.props.onChange}/>
        <label className="radio-button__label radio" htmlFor={this.props.id}>
          {this.props.label}
        </label>
      </span>
    );
  }

});

module.exports = RadioButton;
