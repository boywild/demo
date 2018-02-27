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
        this.handleKeyDownPost=this.handleKeyDownPost.bind(this);
        this.onDestroy=this.onDestroy.bind(this);
        this.onChangeInputVal=this.onChangeInputVal.bind(this);
        this.toggleAll=this.toggleAll.bind(this);
        this.onToggle=this.onToggle.bind(this);
        this.onClearComplete=this.onClearComplete.bind(this);
        this.changeView=this.changeView.bind(this);
        this.itemEditDone=this.itemEditDone.bind(this);
    }
    handleKeyDownPost(ev){
        if(ev.keyCode!==13) return;
        let {inputVal}=this.state;
        let value=inputVal.trim();
        if(value==='') return;
        let todo={};
        todo.id=new Date().getTime();
        todo.value=value;
        todo.hasComplate=false;
        let {todoData}=this.state;
        todoData.push(todo);
        this.setState({
            todoData:todoData,
            inputVal:''
        });
    }
    toggleAll(ev){
        let {checked}=ev.target;
        let {todoData}=this.state;
        todoData=todoData.map((ele)=>{
            console.log(ele);
            ele.hasComplate=checked;
            return ele;
        });
        this.setState({
            todoData:todoData
        });
    }
    onToggle(todo){
        let {todoData}=this.state;
        todoData=todoData.map((ele)=>{
            if(ele.id===todo.id){
                ele.hasComplate=!ele.hasComplate;
            }
            return ele;
        });
        this.setState({
            todoData:todoData
        });
    }
    onDestroy(todo){
        let {todoData}=this.state;
        todoData=todoData.filter((ele)=>{
            return ele.value!==todo.value;
        });
        this.setState({
            todoData:todoData
        });
    }
    onClearComplete(){
        let {todoData}=this.state;
        todoData=todoData.filter((ele)=>{
            return !ele.hasComplate;
        });
        this.setState({
            todoData:todoData
        });
    }
    onChangeInputVal(ev){
        this.setState({
            inputVal:ev.target.value
        });
    }
    changeView(view){
        this.setState({view:view});
    }
    itemEditDone(todo,value){
        let {todoData}=this.state;
        todoData=todoData.map(ele=>{
            if(ele.id===todo.id){
                ele.value=value;
            }
            return ele;
        });
        this.setState({
            todoData
        });
    }
    render(){
        let {handleKeyDownPost,onDestroy,onClearComplete,onChangeInputVal,toggleAll,onToggle,changeView,itemEditDone}=this;
        let items=null,footer=null,itemsBox=null;
        let {todoData,inputVal,view}=this.state;
        let leftCount=todoData.length;
        items=todoData.filter((ele)=>{
            console.log(view);
            if(ele.hasComplate) leftCount--;
            switch (view) {
                case 'active':
                    return !ele.hasComplate;
                break;
                case 'complete':
                    return ele.hasComplate;
                break;
                default:
                    return true;
            }
        });
        items=items.map((ele,index)=>{
            return (
                <Item {...{
                    onDestroy,
                    onToggle,
                    todo:ele,
                    itemEditDone
                }} key={index} />
            )
        });
        if(todoData.length){
            itemsBox=(
                <section className="main">
                    <input type="checkbox" className="toggle-all" onChange={toggleAll} checked={leftCount===0}/>
                    <ul className="todo-list">
                        {items}
                    </ul>
                </section>
            );
            footer=(
                <Footer {...{
                    showClearButton:leftCount<todoData.length,
                    leftCount,
                    onClearComplete,
                    view,
                    changeView
                }}/>
            );
        }

        return(
            <div>
                <header className="header">
                    <h1>TODO</h1>
                    <input type="input" className="new-todo" value={inputVal} onChange={onChangeInputVal} onKeyDown={handleKeyDownPost} />
                </header>
                {itemsBox}
                {footer}
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.getElementById('root')
);
