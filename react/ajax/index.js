/**
 * ajax路由
 */

function ajax() {
    function req(request) {
        var defered = $.Deferred();

        $.ajax(request)
            .done(function(data){
                defered.resolve(data);
            })
            .fail(function(){
                defered.reject();
            });

        return defered.promise();
    }

    return {
        //登录
        login: function(data){
            return req({
                type: 'POST',
                url: '/user/login',
                data: data
            });
        },

        //注销
        logout: function() {
            return req({
                type: 'GET',
                url: '/user/logout'
            });
        },


        //注册
        register: function(data) {
            return req({
                type: 'POST',
                url: '/user/register',
                data: data
            });
        },

        //个人中心-密码修改
        modifyPass:function(data) {
            return req({
                type: 'POST',
                url: '/user/profile/pass',
                data: data
            });
        },

        //个人中心-个签,电话,邮箱修改
        modifyInfo:function(data) {
            return req({
                type: 'POST',
                url: '/user/profile/info',
                data: data
            });
        },

        //新增文章
        addTempArticle: function(data){
            return req({
                type: 'POST',
                url: '/article/addArticle',
                data: data
            });
        },

        //获取文章内容
        article:function(data) {
            return req({
                type: 'POST',
                url: '/article/getArticle',
                data: data
            });
        },


        //获取主页文章列表
        homeArticle: function(data) {
            return req({
                type: 'POST',
                url: '/article/homeArticle',
                data:data
            });
        },

        //删除文章
        delArticle:function(data){
            return req({
                type: 'POST',
                url: '/article/delArticle',
                data: data
            });
        },

        //获取个人文章列表
        user: function(data) {
            return req({
                type: 'GET',
                url: '/user/getList',
                data: data
            });
        },
        //保存文章
        save_article: function(data){
            return req({
                type: 'POST',
                url: '/article/modfiyArticle',
                data: data
            });
        }



    };
}

export default ajax;
