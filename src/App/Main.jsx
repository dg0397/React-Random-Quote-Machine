import React, { Component } from 'react';
import Quote from './Quote';
import ButtonsBox from './ButtonsBox';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            text : "",
            author : "",
            data: []
        }
        this.fetchQuote = this.fetchQuote.bind(this)
    }
    componentDidMount(){
        this.fetchQuote()
        console.log(this.state.data);
        console.log("listo3")
    }
    async fetchQuote(){
        const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

        const allQuotes = await fetch(url)
            .then(data => data.json());
            console.log("listo1")
        this.setState({
            data: this.state.data.push(...allQuotes.quotes),
            text: this.state.data[2].quote,
            author: this.state.data[2].author
        })
        
        console.log("listo2")
    }
    render(){
        let {text,author} = this.state;
        return(
            <div id="quote-box">
              <Quote 
              text = {text}
              author = {author} 
              />
              <ButtonsBox/>
            </div>
        )
    }
}

export default Main