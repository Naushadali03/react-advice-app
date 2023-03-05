
import React from "react";
import axios from 'axios'
import './App.css'
class App extends React.Component{
  state={advice: ''};
  // componentDidMount(){
  //   this.fetchData();
  // }
  fetchData=()=>{
    axios.get('https://api.adviceslip.com/advice')
          .then((response)=>{
            const {advice}=response.data.slip;
            this.setState({advice})
          })
          .catch((e)=>{
            console.log(e);
          })
  }
  render(){
    const {advice}=this.state
    return(
      <div className="app">
        <div className="ad">
        <h3 className="quote">{advice}</h3>
        <button className="btn" onClick={this.fetchData}>Get Advice</button>
        </div>
      </div>
    );
  }
}
export default App;
