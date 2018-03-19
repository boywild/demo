import {Link} from 'react-router-dom';
import S from './Preview.scss';

export default function Preview(props){
    let {
        article_id,
        article_title,
        previewContent,
        user_id,
        user_name,
        createdAt,
        avatar,
        user_intro
    }=props;

    createdAt = new Date(createdAt).toLocaleString();
    return(
        <div className={`${S.note}`}>
            <div className="ui divider hidden"></div>
            <div className={`${S.content}`}>
                <div className={`${S.author}`}>
                    <Link to="/" className="avatar">
                        <img src={avatar} alt="" className="ui avatar image"/>
                    </Link>
                    <div className={`${S.name}`}>
                        <Link to="/">{user_name}</Link>
                        <span className="time">{createdAt}</span>
                    </div>
                </div>
                <p className={`${S.abstract}`}>
                     {previewContent}
                </p>
                <Link to="/" className={S.title}>{article_title}</Link>
                <div className={`${S.meta}`}>
                    {props.children}
                </div>
            </div>
        </div>
    );


}
