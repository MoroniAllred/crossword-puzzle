import React, { Component } from 'react';
import axios from "axios";
import './App.css';
// import WordGetter from "./components/WordGetter.js"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            word: []
        }
    }

    getWord = () => {
        axios.get("/word")
        .then(response => {
            const wordArr = []
            
            for(let i = 0; i < response.data.length; i++){
                wordArr.push(response.data[i].word)
                // console.log(wordArr)
                this.setState({word: wordArr})
                // console.log(response.data[i].word)
            }
            console.log(this.state.word)
        })
        
    }
    
    
    render() { 
        const allwords = this.state.word.map(words => <h1>{words}</h1>)
        
        return ( 
            <div className="word" onClick={this.getWord}>
                {/* <h1 className="word" onClick={this.getWord}> */}
                    {allwords}
                    {/* {this.state.word} */}
                {/* </h1> */}
            </div>
         );
    }
}
 
export default App;