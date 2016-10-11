var user = require('../../mongo/model/user');


let initUsers = [
    {
        author:'xiangxiao3',
        password:'1111',
        email:'xiangxiao3@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author:'lisanchuan',
        password:'1111',
        email:'lisanchuan@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author:'chenguanbin',
        password:'1111',
        email:'chenguanbin@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author:'zhangbiying',
        password:'1111',
        email:'zhangbiying@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author:'wangzhipei',
        password:'1111',
        email:'wangzhipei@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author:'zouxiumei',
        password:'1111',
        email:'zouxiumei@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author:'zhengjunling',
        password:'1111',
        email:'zhengjunling@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author:'zhangxin',
        password:'1111',
        email:'zhangxin@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author:'liumeng6',
        password:'1111',
        email:'liumeng6@hikvision.com.cn',
        tel:'11111111111',
        team:'Web前端组'
    },
    {
        author: 'zhuxiankang',
        password: '1111',
        email: 'zhuxiankang@hikvision.com.cn',
        tel: '18768107826',
        team: 'web前端组'
    }
];

user.remove({},(err) => {
    if(err) {
        console.log('Clear user model db data failed!');
    } else {
        user.create(initUsers,function(err){
            if(err) {
                console.log(err);
            } else {
                console.log('Init user model db data successed!');
            }

        })
    }
});


