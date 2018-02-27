let propTypes={
    leftCount:PT.number,
    changeView:PT.func,
    showClearButton:PT.bool,
    onClearCompleted:PT.func,
    view:PT.oneOf(['all','active','complete'])
}
function Footer(props){
    let {leftCount,showClearButton,changeView,view,onClearCompleted}=props;
    let clearButton=null;
    if(showClearButton){
        clearButton=(
            <button className="clear-completed" onClick={onClearCompleted}>clear all completed</button>
        );
    }
    return(
        <footer className="footer">
            <span className="todo-count"><strong>{leftCount}</strong><b>item left</b></span>
            <ul className="filters">
                <li className='active'>
                    <a onClick={ev=>changeView('all')} href="#/all" className={view=='all'?'selected':''}>all</a>
                </li>
                <li>
                    <a onClick={ev=>changeView('active')} href="#/active" className={view=='active'?'selected':''}>active</a>
                </li>
                <li>
                    <a onClick={ev=>changeView('complete')} href="#/complete" className={view=='complete'?'selected':''}>complete</a>
                </li>
            </ul>
            {clearButton}
        </footer>
    )

}
Footer.propTypes=propTypes;
export default Footer;
