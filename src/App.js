import React, {useState , useEffect} from 'react';
import './styles/styles.scss';
import Main from './components/Main';
import Data from './components/util/Data';
import styles from "./styles";


const App = () => {
  
  // State Quote and update function
  const [quotes , setQuotes] = useState([]);
 
  //First Update after first rendering
  useEffect( () => {
    Data()
      .then( response => {
        setQuotes([...response.quotes])
      });
  }, [] );
 
  // State Loading and update function
  const [loading , setLoading] = useState(false); 
 
  //Second Update after first rendering (actually second rendering)
  useEffect( () => {
    if(quotes.length > 0){
      setLoading(true)
    }
  }, [quotes.length])
  
  const randomColor = () => {
    return styles[Math.floor(Math.random() * styles.length)]
  }

  const randomQuote = () => {
    if(quotes.length > 0){
      const num = Math.floor(Math.random() * quotes.length);
      return quotes[num];
    } 
  }
  
 //console.log(quotes)
 //console.log(loading)
 //console.log(randomColor())
 //console.log(randomQuote())
  return (
    <Main colorGenerator = {randomColor} quoteGenerator = {randomQuote} loading = {loading}/>
  )
}

export default App;
