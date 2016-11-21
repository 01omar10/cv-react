var React = require('react');

function Header(props) {
  return (
    <header className='page-header' style={{overflow: 'hidden', borderBottomWidth: 2 + 'px'}}>
      <img className='img-thumbnail' style={{width: 150 + 'px', float: 'left'}}
      src="https://avatars3.githubusercontent.com/u/7915398?v=3&s=460" alt="" />
      <h1 style={{float: 'right', marginTop: 93 + 'px'}}>Omar A. Diaz</h1>
    </header>
  );
}

module.exports = Header;
