var React = require('react');
var PropTypes = React.PropTypes;

var styles = {
  justify: {
    textAlign: 'justify',
    textJustify: 'inter-word',
    margin: '40px 0 40px 0'
  },
  spacer: {
      backgroundColor: '#3873b3',
      height: 7 + 'px',
      width: 80 + 'px',
      display: 'inline-block',
      marginRight: 40 + 'px'
  },
  paddingBottom: {
    paddingBottom: 18 + 'px'
  },
  title: {
    color: '#6291c6',
    fontSize: 30 + 'px',
    paddingBottom: 28 + 'px'
  },
  subTitle: {
    color: '#6291c6',
    fontSize: 23 + 'px'
  }
};

function Section(props) {
  return (

    <div style={styles.justify}>
      <table>
        <tbody>
          <tr>
            <th style={styles.spacer}/>
            <th style={styles.title}>
              {props.title}
            </th>
          </tr>
            {props.items.map(function(item, index) {
              if (typeof item.subTitle !== "undefined") {
                return (
                  <tr key={index}>
                    <td></td>
                    <td style={styles.paddingBottom}>
                      <div style={styles.subTitle}>
                        {item.subTitle}
                      </div>
                      <div>
                        {item.description}
                      </div>
                    </td>
                  </tr>
                )
              }else {
                return (
                    <tr key={index}>
                      <td style={styles.paddingBottom}>{item.date}</td>
                      <td style={styles.paddingBottom}>{item.description}</td>
                    </tr>
                  )}
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
