import {BrowserRouter as Router,Route} from 'react-router-dom';
import Frame from 'frame/Frame';


ReactDOM.render(
    <Router>
        <Route path="/" component={Frame}></Route>
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
