// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');

var Search = React.createClass({

  render: function() {
    var className = 'control-icon control-icon-search';
    if (this.props.className) {
      className += ' ' + this.props.className;
    }
    return (
      <svg className={className} viewBox="0 0 48 48" version="1.1">
        <g fill="none">
          <circle strokeWidth="2" cx="21.5" cy="21.5" r="9"/>
          <line strokeWidth="2" x1="35.5" y1="35.5" x2="27.8" y2="27.8"/>
        </g>
      </svg>
    );
  }

});

module.exports = Search;
