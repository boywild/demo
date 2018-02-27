let propTypes={
    todo:PT.object,
    onToggle:PT.func,
    deleteTodo:PT.func,
    onEdit:PT.func
}
class Item extends React.Component{
    constructor(){
        super();
        this.state={
            inEdit:false,
            inputVal:''
        }
        this.onEdit=this.onEdit.bind(this);
        this.onBlur=this.onBlur.bind(this);
        this.onEditChange=this.onEditChange.bind(this);
        this.onEnter=this.onEnter.bind(this);
    }
    onEdit(){
        let value=this.props.todo.value;
        this.setState({
            inEdit:true,
            inputVal:value
        },()=>this.refs.chentian.focus());
    }
    onBlur(){
        let {inEdit}=this.state;
        this.setState({
            inEdit:false,
            inputVal:''
        });
    }
    onEditChange(ev){
        let value=ev.target.value;
        this.setState({
            inputVal:value
        });
    }
    onEnter(ev){
        if(ev.keyCode !=13) return;
        let {onEditDone,todo}=this.props;

        onEditDone(todo,this.state.inputVal);
        this.setState({
            inEdit:false
        });
    }
    render(){
        let {todo,onToggle,deleteTodo}=this.props;
        let {onEdit,onBlur,onEditChange,onEnter}=this;
        let {inEdit,inputVal}=this.state;
        return(
            <li className={inEdit?'editing':''}>
                <div className="view">
                    <input type="checkbox" checked={todo.hasComplete} onClick={ev=>onToggle(todo)} className="toggle" />
                    <label onDoubleClick={onEdit}>
                        {todo.value}
                    </label>
                    <button className="destroy" onClick={ev=>deleteTodo(todo)}></button>
                </div>
                <input type="text" className="edit"
                    value={inputVal}
                    onChange={ev=>onEditChange(ev)}
                    onKeyUp={onEnter}
                    onBlur={onBlur} ref="chentian" />
            </li>
        )
    }
}
Item.propTypes=propTypes;
export default Item;
