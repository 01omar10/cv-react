var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  justify: {
    textAlign: 'justify',
    textJustify: 'inter-word',
    margin: '40px 0 40px 0'
  },
  spacer: {
      backgroundColor: 'black',
      height: 7 + 'px',
      width: 80 + 'px',
      display: 'inline-block',
      marginRight: 40 + 'px'
  },
  paddingBottom: {
    paddingBottom: 28 + 'px'
  }
};

function Section(props) {
  return (
    <div style={styles.justify}>
      <table>
        <tbody>
          <tr>
            <th style={styles.spacer}/>
            <th style={styles.paddingBottom}>
              {props.title}
            </th>
          </tr>
            {props.items.map(function(item, index) {
              return (
                <tr key={index}>
                  <td style={styles.paddingBottom}>{item.date}</td>
                  <td style={styles.paddingBottom}>{item.description}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired
}

module.exports = Section;
