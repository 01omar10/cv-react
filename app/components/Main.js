var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        MAIN CONTAINER
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
