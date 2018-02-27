import React,{Component} from 'react';


class Input extends Component{
    constructor(){
        super();
        this.state={
            inputVal:''
        }
        this.changeValue=this.changeValue.bind(this);
    }
    changeValue(evnet){
        console.log(evnet.target.value);
        if(this.state.inputVal!=evnet.target.value){
            this.setState({
                inputVal:evnet.target.value
            });
        }
    }
    render(){
        var {inputVal}=this.state;
        return(
            <div className="ui input">
              <input
              onChange={this.changeValue}
              type="text" placeholder="Search..." value={inputVal}/>
            </div>
        )
    }
}

export default Input;
