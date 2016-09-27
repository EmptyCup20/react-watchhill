/**
 * ajax路由
 */

function ajax() {
    function req(method,url,data) {
        var defered = $.Deferred();


        var request = {
            type: method,
            url: url
            //dataType: "json"?
            //data: data
        };

        if(data) {
            request.data = data;
        }

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
            return req('POST','/user/login',data);
        },

        //注销
        logout: function() {
            return req('GET','/user/logout');
        },


        //注册
        register: function(data) {
            return req('POST','/user/register',data);
        },

        //个人中心-密码修改
        modifyPass:function(data) {
            return req('POST', '/user/profile/pass',data);
        },

        //个人中心-个签,电话,邮箱修改
        modifyInfo:function(data) {
            return req('POST', '/user/profile/info',data);
        },

        //新增文章
        addTempArticle: function(data){
            return req('POST','/article/addArticle',data);
        },

        //获取文章内容
        article:function(data) {
            return req('POST','/article/getArticle',data);
        },

        //删除文章
        delArticle:function(data){
            return req('POST','/article/delArticle',data)
        },

        //获取个人文章列表
        user: function(data) {
            return req('GET','/user/getList',data)
        },
        //保存文章
        save_article: function(data){
            return req('POST','/article/modfiyArticle',data)
        }



    };
}

export default ajax;
