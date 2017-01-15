var React = require('react');
var Header = require('../components/Header');
var Footer = require('../components/Footer');
var Navigator = require('../components/Navigator');
var SectionContainer = require('../containers/SectionContainer');

var Main = React.createClass({
  getInitialState: function() {
    return {
      currentPage: 0
    };
  },
  handleNextPage: function() {
    if (this.state.currentPage < (sectionsInfoUrls.length - 1)) {
      var nextPageIndex = (this.state.currentPage + 1);
      debugger
      this.setState({
        currentPage: nextPageIndex
      });
    }
  },
  handlePrevPage: function() {
    if (this.state.currentPage > 0) {
      var nextPageIndex = (this.state.currentPage - 1);

      this.setState({
        currentPage: nextPageIndex
      });
    }
  },
  render: function() {
    return (
      <div className='main-container jumbotron col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 text-center' style={{background: 'transparent'}}>
        <Header />
        <Navigator
          onNextPage={this.handleNextPage}
          onPrevPage={this.handlePrevPage}
          thereIsLeftPage={(this.state.currentPage > 0 )}
          thereIsRightPage={(this.state.currentPage < (sectionsInfoUrls.length - 1))}/>
        <SectionContainer dataUrl={sectionsInfoUrls[this.state.currentPage]}/>
        <Footer />
      </div>
    );
  }
});


var sectionsInfoUrls = [
  '/app/data/studies.json',
  '/app/data/programming.json',
  '/app/data/experience.json',
  '/app/data/languages.json'
]

module.exports = Main;
