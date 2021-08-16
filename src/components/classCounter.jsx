import React from "react";


class CounterClass extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    // const [likes, setLikes] = useState(0)
    // const [value, setValue] = useState('')
    increment =()=>{
       this.setState({count:this.state.count+1})
    }
    
   decrement = ()=>{
    this.setState({count:this.state.count-1})
    }


    render(){
        return <div>
        <h5>Press buttons: {this.state.count}</h5>
   
   <button onClick={this.increment}>increment</button>
   <button onClick={this.decrement}>Decrement</button>
   </div>
 
    }
}

export default CounterClass
