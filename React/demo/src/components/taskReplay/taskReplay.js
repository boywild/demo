import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class Replay extends Component {
    render(){
        return(
            <div className="replay-box">
                <div className="ui form">
                    <div className="field">
                      <input type="text" name="first-name" placeholder="First Name" />
                    </div>
                  <div className="field">
                    <textarea></textarea>
                  </div>
                  <div className="field">
                      <button className="ui primary button">回复</button>
                  </div>
                </div>
            </div>
        )
    }
}
export default Replay;
