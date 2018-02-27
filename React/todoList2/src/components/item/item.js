let propTypes={
    todo:PT.object,
    onDestroy:PT.func,
    onToggle:PT.func,
    itemEditDone:PT.func
}
class Item extends React.Component{
    constructor(){
        super();
        this.state={
            inEdit:false,
            inpVal:''
        }
        this.onEdit=this.onEdit.bind(this);
        this.onBlur=this.onBlur.bind(this);
        this.onEnter=this.onEnter.bind(this);
        this.onEditChange=this.onEditChange.bind(this);
    }
    onEdit(){
        let value=this.props.todo.value;
        this.setState({
            inEdit:true,
            inpVal:value
        },()=>this.refs.chentian.focus());
    }
    onBlur(ev){
        // let {inputVal}=this.state;
        console.log(ev.target.value);
        let {itemEditDone,todo}=this.props;
        itemEditDone(todo,this.state.inpVal);
        this.setState({
            inEdit:false
        });
    }
    onEnter(ev){
        if(ev.keyCode==13){
            let {itemEditDone,todo}=this.props;
            itemEditDone(todo,this.state.inpVal);
            this.setState({
                inEdit:false
            });
        }else if(ev.keyCode==27){
            let {inputVal}=this.state;
            this.setState({
                inEdit:false,
                inputVal:inputVal
            });
        }

    }
    onEditChange(ev){
        this.setState({
            inpVal:ev.target.value
        });
    }
    render(){
        let {onDestroy,todo,onToggle}=this.props;
        let {onEdit,onBlur,onEnter,onEditChange}=this;
        let {inEdit,inpVal}=this.state;
        let editClass=[];
        todo.hasComplate?editClass.push('completed'):'';
        if(inEdit) editClass.push('editing');
        editClass=editClass.join(' ')
        return(
            <li className={editClass}>
                <div className="view">
                    <input type="checkbox" className="toggle" checked={todo.hasComplate} onChange={ev=>onToggle(todo)} />
                    <label onDoubleClick={onEdit}>
                        {todo.value}
                    </label>
                    <button className="destroy" onClick={ev=>onDestroy(todo)}></button>
                </div>
                <input type="text" value={inpVal} onKeyDown={ev=>onEnter(ev)} onBlur={ev=>onBlur(ev)} onChange={ev=>onEditChange(ev)} className="edit" ref="chentian" />
            </li>
        )
    }
}
Item.propTypes=propTypes;
export default Item;
