var React = require('react');

function Navigator(props) {
  return (
    <div>
      <span className="glyphicon glyphicon-chevron-left"
        aria-hidden="true"
        onClick={props.onPrevPage} >
      </span>
      <span className="glyphicon glyphicon-chevron-right"
        aria-hidden="true"
        onClick={props.onNextPage} >
      </span>
    </div>
  )
}

module.exports = Navigator;
