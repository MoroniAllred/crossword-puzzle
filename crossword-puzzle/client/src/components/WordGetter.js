import React, {Component} from "react"
import axios from "axios"

class WordGetter extends Component{
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
        })
        
    }

    // wordChooser = () => {
    //     for(let i = 0; i> 10; i++){
    //         const used = []
    //         const choosen = Math.floor(Math.random() * 61)
    //         console.log(choosen)
    //     }
    // }

    render(){
        const mappedWords=this.state.word.map(words => <h1>{words}</h1>)

        return(
            <div>
                <div className="word" onClick={this.getWord}>
                    {mappedWords}
                </div>
                <button onClick={this.wordChooser}></button>
            </div>
        )
    }
}
export default WordGetter