import React, {Component} from 'react';
import Business from './Business';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      fn: '',
      ln: '',
      a:'',
      ea:'',
      pn:'',
      login : false
    };
  }
  inputHandler = (event) => {
    const {fn, ln, a, ea, pn, login}= this.state;
    if(fn!=''&& ln!=''&& a!=''&& ea!=''&& pn!='') {
      this.setState({login:true})
    }
    else {
      this.setState ({login: false})
      alert("please complete the form")
    }
  }

  render() {
    const { fn,ln,a,ea,pn, login}= this.state;
    if(!login){
      return(
        <div>
        <input type="text" placeholder="First Name" onChange={event =>this.setState({ fn: event.target.value})} required></input>
        <br/>
        <input type="text" placeholder="Last Name" onChange={event =>this.setState({ ln: event.target.value})} required></input>
        <br/>
        <input type="text" placeholder="Address" onChange={event =>this.setState({ a: event.target.value})} required></input>
        <br/>
        <input type="text" placeholder="Email Address" onChange={event =>this.setState({ ea: event.target.value})} required></input>
        <br/>
        <input type="number" placeholder="Phone Number" onChange={event =>this.setState({ pn: event.target.value})} required></input>
        <br/>
        <div>
          <button onClick={event => this.inputHandler(event)}>Register</button>
        </div>
        
        
      </div>
        );
      
    }
    else {
      return(
        <div>
          <Business first={fn} second={ln}/>
        </div>)
    }
    
    }
  }

export default App;