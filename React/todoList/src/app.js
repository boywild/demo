import Item from 'components/item/item.js';
import Footer from 'components/footer/footer.js';

require('common/style/base.css');
require('common/style/index.css');

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            todoData:[],
            inputVal:'',
            view:'all'
        }
        this.onInputChange=this.onInputChange.bind(this);
        this.addTodoList=this.addTodoList.bind(this);
        this.toggleAll=this.toggleAll.bind(this);
        this.onToggle=this.onToggle.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
        this.changeView=this.changeView.bind(this);
        this.onClearCompleted=this.onClearCompleted.bind(this);
        this.onEditDone=this.onEditDone.bind(this);
    }
    onInputChange(ev){
        let val=ev.target.value;
        this.setState({
            inputVal:val
        })
    }
    addTodoList(ev){
        if(ev.keyCode != 13) return;
        let {inputVal}=this.state;
        let todo={};
        let value=inputVal.trim();
        if(value.length<=0) return;
        todo.id=new Date().getTime();
        todo.value=value;
        todo.hasComplete=false;
        let {todoData}=this.state;
        todoData.push(todo);
        this.setState({
            todoData,
            inputVal:''
        })
    }
    toggleAll(ev){
        let {checked}=ev.target;
        let {todoData}=this.state;
        todoData=todoData.map((ele)=>{
            console.log(ele.hasComplete);
            ele.hasComplete=checked;
            return ele;
        });
        this.setState({
            todoData
        });
    }
    onToggle(todo){
        let {todoData}=this.state;
        todoData=todoData.map((ele)=>{
            if(ele.id===todo.id){
                ele.hasComplete=!ele.hasComplete;
            }
            return ele;
        });
        this.setState({
            todoData
        });
    }
    deleteTodo(todo){
        let {todoData}=this.state;
        todoData=todoData.filter((ele)=>{
            if(ele.id!=todo.id){
                return ele;
            }
        });
        this.setState({
            todoData
        });
    }
    changeView(view){
        this.setState({
            view:view
        });
    }
    onClearCompleted(){
        let {todoData}=this.state;
        todoData=todoData.filter((ele,index)=>{
            return !ele.hasComplete
        });
        this.setState({
            todoData
        });
    }
    onEditDone(todo,newVal){
        let {todoData}=this.state;
        todoData=todoData.map((ele,index)=>{
            if(ele.id===todo.id){
                ele.value=newVal;
            }
            return ele;
        });
        this.setState({
            todoData
        });
    }
    render(){
        let {addTodoList,toggleAll,onInputChange,onToggle,deleteTodo,changeView,onClearCompleted,onEditDone}=this;
        let {todoData,inputVal,view}=this.state;
        let item=null;
        let leftCount=todoData.length;
        let footer=null,content=null;
        item=todoData.filter((ele,index)=>{
            if(ele.hasComplete) leftCount--;
            switch (view) {
                case 'active':
                    return !ele.hasComplete
                    break;
                case 'complete':
                    return ele.hasComplete;
                    break;
                default:
                    return true;
            }
        });
        item=item.map((ele,index)=>{
            return (
                <Item {...{
                    todo:ele,
                    onToggle,
                    deleteTodo,
                    onEditDone
                }} key={index} />
            )
        });
        if(todoData.length){
            content=(
                <section className="main">
                    <input type="checkbox" className="toggle-all" onClick={ev=>toggleAll(ev)} />
                    <ul className="todo-list">
                        {item}
                    </ul>
                </section>
            );
            footer=(
                <Footer {...{
                    leftCount:leftCount,
                    showClearButton:leftCount<todoData.length,
                    onClearCompleted,
                    changeView,
                    view
                }} />
            );
        }
        return(
            <div>
                <header className="header">
                    <h1>TODO</h1>
                    <input type="input" value={inputVal} onChange={ev=>onInputChange(ev)} onKeyDown={ev=>addTodoList(ev)} className="new-todo" />
                </header>
                {content}
                {footer}
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);
