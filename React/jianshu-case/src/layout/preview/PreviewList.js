import {Link} from 'react-router-dom';
import Preview from './Preview';
import S from './Preview.scss';
import cfg from 'config/config.json';

export default function PreviewList(props){
    let {previews,initMyPage}=props
    previews=previews.map((ele,i)=>{
        let {
            id: article_id, article_title,
            createdAt,
            preview: previewContent,
            collection_name,
            user_id,
            collection_id,
            user
        }=ele;

        let {avatar, user_name, user_intro} = user;
        avatar=cfg.url+avatar;
        return (
            <Preview {...{
                article_id,
                article_title,
                previewContent,
                user_id,
                user_name,
                createdAt,
                avatar,
                user_intro,
                initMyPage
            }} key={i}>
                <Link to="" className={`${S.tag}`}>{collection_name}</Link>
            </Preview>
        );
    });
    return(
        <div>
            {previews}
        </div>
    );
}