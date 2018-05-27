import React ,{Component} from 'react';

class WriteHint extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let {history}=this.props;
        setTimeout(()=>{
            history.push('/sign_in');
        },1000);
    }
    render(){
        return(
            <h1>asdfasdfasd</h1>
        );
    }
}
export default WriteHint;
