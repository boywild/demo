import {Link} from 'react-router-dom';
import S from './style.scss';

export default function AuthorInfo(props){
    let {userInfo}=props;
    return(
        <div className={S.author_info}>
            <Link to="/my_page" className={S.avatar}><img src={userInfo.avatar} alt="" /></Link>
            <div className={S.title}>
                <Link to="/my_page" className={S.name}>{userInfo.user_name}</Link>
            </div>
        </div>
    );
}
