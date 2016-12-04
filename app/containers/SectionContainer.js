var React = require('react');
var axios = require('axios');

var Section = require('../components/Section');

function getSectionInfo(url) {
  return axios.get(url);
}

var SectionContainer = React.createClass({
  getInitialState: function() {
    return {
      title: 'Studies',
      items: []
    };
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    getSectionInfo('/app/data/studies.json')
      .then(function(response) {
        this.setState({
          title: response.data.title,
          items: response.data.items,
        });
      }.bind(this));
  },
  render: function() {
    return (
      <Section title={this.state.title} items={this.state.items}/>
    );
  }
});

module.exports = SectionContainer;
