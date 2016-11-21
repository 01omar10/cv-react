var React = require('react');
var Header = require('../components/Header');
var Footer = require('../components/Footer');

var Main = React.createClass({
  render: function() {
    return (
      <div className='main-container jumbotron col-sm-6 col-sm-offset-3 text-center' style={{background: 'transparent'}}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
});

module.exports = Main;
