import React from 'react'

class Header extends React.Component {
  constructor(props){
    super(props);
      this.state= {
        name: 'Mark',
        age: 27
      }
  }
  render(){
    return(
      <div>
        <h2>Name: {this.state.name}</h2>
        <h2>Age: {this.state.age}- years old</h2>
      </div>
    )
  }
}

export default Header;