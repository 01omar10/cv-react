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
  updateSectionInfo: function(props) {
    getSectionInfo(props.dataUrl)
      .then(function(response) {
        this.setState({
          title: response.data.title,
          items: response.data.items,
        });
      }.bind(this));
  },
  componentDidMount: function() {
    this.updateSectionInfo(this.props);
  },
  componentWillReceiveProps: function(nextProps) {
    this.updateSectionInfo(nextProps);
  },
  render: function() {
    return (
      <Section title={this.state.title}
        items={this.state.items}/>
    );
  }
});

module.exports = SectionContainer;


/*Next steps:

- Click on navigator update current page
- Get new data
- Re render section with new data
- Navigator styles (float, transparents when no hover, if no next or prev, no show)*/
