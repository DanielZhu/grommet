// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

var React = require('react');

var Dashboard = React.createClass({

  render: function () {
    return (
      <div className={"dashboard"}>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Dashboard;
