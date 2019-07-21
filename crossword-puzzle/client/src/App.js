import React, { Component } from 'react';
import axios from "axios";
import './App.css';

class App extends Component {
    construcchetor(props) {
        super(props);
        this.state = { 
            word: ""
        }
    }

    getWord = () => {
        axios.get("/word")
        .then(response => {
            this.setState({word: response.data})
            return response.data
        })
    }
    
    render() { 
        console.log(this.state.word)
        return ( 
            <div>
                <h1 className="word" onClick={this.getWord}>
                    {this.state.word}
                </h1>
            </div>
         );
    }
}
 
export default App;