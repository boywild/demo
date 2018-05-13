import {Link} from 'react-router-dom';
import cfg from 'config/config';

export default function Author({user},history){
    let {user_name,user_intro,avatar,id:user_id}=user;
    console.log(user)
    avatar=cfg.url+avatar;
    return(
        <div className="item">
            <Link to="/"
                onClick={
                    ev=>{
                        ev.stopPropagation();
                        ev.stopPropagation();
                        history.push('/my_page',{userInfo:{
                            user_name,
                            user_intro,
                            avatar,
                            user_id
                        }});
                        initMyPage(user_id,{user_id},'所有文章');
                    }
                }
            className="ui mini avatar image">
                <img src={avatar} alt="" />
            </Link>
            <div className="content">
                <div className="header">
                    {user_name}
                </div>
            </div>
        </div>
    );

}
