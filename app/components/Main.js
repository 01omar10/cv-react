var React = require('react');
var Header = require('../components/Header');

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container jumbotron col-sm-6 col-sm-offset-3 text-center' style={{background: 'transparent'}}>
        <Header />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
