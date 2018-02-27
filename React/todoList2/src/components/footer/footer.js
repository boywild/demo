let propTypes={
    onClearComplete:PT.func,
    showClearButton:PT.bool,
    leftCount:PT.number,
    changeView:PT.func,
    view:PT.oneOf(['all','active','complete'])
}
function Footer(props){

    let {onClearComplete,showClearButton,leftCount,changeView,view}=props;
    let clearButton=null;
    if(showClearButton){
        clearButton=(
            <button className="clear-completed" onClick={onClearComplete}>clear all completed</button>
        );
    }
    return(
        <footer className="footer">
            <span className="todo-count"><strong>{leftCount}</strong><b>item left</b></span>
            <ul className="filters">
                <li>
                    <a onClick={ev=>changeView('all')} className={view==='all'?'selected':''} href="#/all">all</a>
                </li>
                <li>
                    <a onClick={ev=>changeView('active')} className={view==='active'?'selected':''} href="#/active">active</a>
                </li>
                <li>
                    <a onClick={ev=>changeView('complete')} className={view==='complete'?'selected':''} href="#/complete">complete</a>
                </li>
            </ul>
            {clearButton}
        </footer>
    )

}
Footer.propTypes=propTypes;
export default Footer;
