import React, {Component} from ("react")
import axios from ("axios")

class WordGetter extends Component {
    constructor(){
        super()
        this.state = {

        }    
    }

    axios.get("/word")
    
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default WordGetter