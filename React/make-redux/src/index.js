//1. 增加修改限制 dispatch
//2. 创建createStore
//3. 订阅模式修改手动渲染的问题
//4. 共享模式修改性能问题
//5. reducer

function renderApp(state){
    renderTitle(state.title);
    renderContent(state.content);
}

function renderTitle(title){
    var titleDOM=document.getElementById('title');
    titleDOM.innerHTML=title.text;
    titleDOM.style.color=title.color;
}

function renderContent(content){
    var contentDOM=document.getElementById('content');
    contentDOM.innerHTML=content.text;
    contentDOM.style.color=content.color;
}

function stateChanger(state,action){
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text=action.text;
        break;
        case 'UPDATE_TITLE_COLOR':
            state.title.color=action.color;
        break;
        default:
    }
}

function createStore(state,stateChanger) {
    const getState=()=>state;
    const dispatch=(action)=> stateChange(state,action);
    return {getState,dispatch}
}

const appState={
    title:{
        text:'React 小书',
        color:'red'
    },
    content:{
        text:'React 小书内容',
        color:'blue'
    }
}
renderApp(appState);
dispatch({type:'UPDATE_TITLE_TEXT',text:'《 React 小书 》'});
dispatch({type:'UPDATE_TITLE_COLOR',color:'blue'});
renderApp(appState);
