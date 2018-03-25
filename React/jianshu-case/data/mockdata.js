import Mock from 'mockjs';

Mock.mock(/\/get/,{
    'code':0,
    'data|1-10':[
        {
            "id|+1":1,
            "preview":"1",
            "article_title":"@title()",
            "collection_id":"@cparagraph()",
            "collection_name":"@cname",
            "createdAt":"@datetime('yyyy-MM-dd A HH:mm:ss')",
            "liked":0,
            "user":{
                "avatar":"",
                "id|+1":1,
                "user_intro":"@word(10, 20)",
                "user_name":"@cname"
            },
            "user_id|+1":1,
            "viewer":0
        }
    ]
})

// {
//     "id|+1":1,
//     "preview":"1",
//     "article_title":"2",
//     "collection_id":"3",
//     "collection_name":"3",
//     "createdAt":"3",
//     "liked":"",
// }
