import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Tabs from './components/tab/Tabs.js';
import tabNav from './components/tab/TabNav.js';
import TabContent from './components/tab/TabContent.js';
import TabPane from './components/tab/TabPane.js';

require('./common/style/style.scss');

class App extends Component{
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);

      this.state = {
        activeIndex: 0,
      };
    }

    handleChange(e) {
      this.setState({
        activeIndex: parseInt(e.target.value, 10),
      });
    }

    render(){
        return(
            <Tabs className="tabs-bar" classPrefix={'tabs'} defaultActiveIndex={0}>
                <TabPane order={0} tab={<span><i className="fa fa-home"></i>&nbsp;Home</span>}>第一个tab中的内容</TabPane>,
                <TabPane order={1} tab={<span><i className="fa fa-book"></i>&nbsp;Home</span>}>第一个tab中的内容</TabPane>,
                <TabPane order={2} tab={<span><i className="fa fa-pencil"></i>&nbsp;Home</span>}>第一个tab中的内容</TabPane>
            </Tabs>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
