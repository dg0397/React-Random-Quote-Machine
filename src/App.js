import React from 'react';
import './styles/styles.scss';
import Main from './components/Main';
import Data from './components/util/Data';
import styles from "./styles";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quotes : []
    }
  }
  componentDidMount(){
    Data.getQuotes().then(response => {
      this.setState({
       quotes : [...response.quotes]
      });
    });
  }
  randomColor(){
    return styles[Math.floor(Math.random() * styles.length)]
  }
  render() {
    console.log(this.state)
    console.log(this.randomColor())
    return (
      <Main quotes={this.state.quotes}  colorGenerator = {this.randomColor}/>
    )
  }
}

export default App;
