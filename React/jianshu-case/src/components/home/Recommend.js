import {Link} from 'react-router-dom';
import Author from './Author';
import S from './Recommend.scss';

export default function Recommend({authors}){
    // authors=[];
    console.log(authors);
    return(
        <div className={S.recommend}>
            <div className={S.title}>
                <span>作者列表</span>
            </div>
            <div className="ui items">
                {
                    authors.map((ele,i)=>{
                        return(
                            <Author {...{user:ele}} key={i}/>
                        );
                    })
                }
            </div>
        </div>
    );
}
