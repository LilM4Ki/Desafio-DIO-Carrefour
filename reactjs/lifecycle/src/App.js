import './App.css';
import React, {Component} from 'react'

class App extends Component {

constructor(props) {
  super(props)

  this.state = {
    clock: 1000,
    copo: 'agua'
  }
}


componentDidMount(){
  window.setTimeout(() => {
    this.setState({
      copo: 'suco'
    })
  }, 3000)
}

alterarCopo = () => {
  this.setState({
    copo: 'refrigerante'
  })
}

  render() {
    const {clock, copo} = this.state
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

export default App;
