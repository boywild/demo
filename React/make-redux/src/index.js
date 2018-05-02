//1. 增加修改限制 dispatch
//2. 创建createStore
//3. 订阅模式修改手动渲染的问题
//4. 共享模式修改性能问题
//5. reducer



function createStore (reducer) {
  const listeners = [];
  let state = null;
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state=stateChanger(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({});
  return { getState, dispatch, subscribe }
}
function renderApp(newState,oldState={}){
    if(newState===oldState) return;
    console.log('render app');
    renderTitle(newState.title,oldState.title);
    renderContent(newState.content,oldState.content);
}

function renderTitle(newTitle,oldTitle={}){
    if(newTitle===oldTitle) return;
    console.log('render title');
    var titleDOM=document.getElementById('title');
    titleDOM.innerHTML=newTitle.text;
    titleDOM.style.color=newTitle.color;
}

function renderContent(newContent,oldContent={}){
    if(newContent===oldContent) return;
    console.log('render content');
    var contentDOM=document.getElementById('content');
    contentDOM.innerHTML=newContent.text;
    contentDOM.style.color=newContent.color;
}


function stateChanger (state, action) {
    if(!state){
        return {
           title: {
             text: 'React.js 小书',
             color: 'red',
           },
           content: {
             text: 'React.js 小书内容',
             color: 'blue'
           }
         }
    }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
        return {
            ...state,
            title:{
                ...state.title,
                title:action.text
            }
        }
    case 'UPDATE_TITLE_COLOR':
        return {
            ...state,
            title:{
                ...state.title,
                color:action.color
            }
        }
    default:
      return state // 没有修改，返回原来的对象
  }
}
const appState = {
  title: {
    text: 'React.js 小书',
    color: 'red',
  },
  content: {
    text: 'React.js 小书内容',
    color: 'blue'
  }
}

const store = createStore(stateChanger)
let oldState = store.getState() // 缓存旧的 state
store.subscribe(() => {
  const newState = store.getState() // 数据可能变化，获取新的 state
  renderApp(newState, oldState) // 把新旧的 state 传进去渲染
  oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
})
renderApp(store.getState());
store.dispatch({type:'UPDATE_TITLE_TEXT',text:'《 React 小书 》'});
store.dispatch({type:'UPDATE_TITLE_COLOR',color:'blue'});
