var React = require('react');

var iconSize = '30px';

var styles = {
  verticalCentered: {
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    width: '100%'
  },
  leftIcon: {
    float: 'left',
    left: -45 + 'px',
    fontSize: iconSize,
    cursor: 'pointer'
  },
  rightIcon: {
    float: 'right',
    right: -15 + 'px',
    fontSize: iconSize,
    cursor: 'pointer'
  }
}

function Navigator(props) {
  return (
    <div style={styles.verticalCentered}>
      {
        (props.thereIsLeftPage)?
          <span className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
            style={styles.leftIcon}
            onClick={props.onPrevPage} >
          </span>
          : null
      }
      {
        (props.thereIsRightPage)?
          <span className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
            style={styles.rightIcon}
            onClick={props.onNextPage} >
          </span>
          : null
      }
    </div>
  )
}

module.exports = Navigator;
