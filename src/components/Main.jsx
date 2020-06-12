import React, { Component } from 'react';
import Quote from './Quote';
import ButtonsBox from './ButtonsBox';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            text : "",
            author : "",
            loading : false,
            mounted : false
        }
        this.randonQuote = this.randonQuote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            loading: true
        },this.randonQuote)
    }
    randonQuote(){
        if(this.state.loading){
            let num = Math.floor(Math.random() * this.props.quotes.length);
            this.setState({
                text: this.props.quotes[num].quote,
                author: this.props.quotes[num].author,
                mounted : true
            })
            console.log(num)
        }
    }
    handleClick(){
        this.setState({mounted : false},this.randonQuote);
    }
    componentDidUpdate(){
        if(this.state.mounted){
            let color = this.props.colorGenerator();
            document.body.style.background = `${color}`;
            document.getElementById("text").style.color = `${color}`;
            document.getElementById("author").style.color = `${color}`;
            document.querySelector(".icon-box").style.background = `${color}`;
            document.getElementById("new-quote").style.background = `${color}`
        }else return;
        
    }
    render(){
        console.log(this.state)
        let {text,author} = this.state;
        let quote = this.state.mounted && (<Quote text = {text} author = {author} />)
        return(
            <div id="quote-box">
              <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={800}
              transitionLeaveTimeout={500}
              >
              {quote}
              </ReactCSSTransitionGroup>
              <ButtonsBox 
              onClick = {this.handleClick}
              text = {text}
              author = {author} 
              />
              <div>

              </div>
            </div>
        )
    }
}

export default Main