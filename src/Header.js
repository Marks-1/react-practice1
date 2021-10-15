import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: `Mark's Todo's`,
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}

export default Header;
