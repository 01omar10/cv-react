var React = require('react');

var styles = {
  lightFont: {
    color: '#c7c6c6'
  }
};

function Footer(props) {
  return (
    <footer style={styles.lightFont}>
      <p>Barcelona - Spain</p>
      <p>+34 1111111 - omardiaz88@gmail.com</p>
    </footer>
  );
}

module.exports = Footer;
