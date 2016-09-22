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

        //新增空白文章
        addTempArticle: function(){
            return req('POST','/article/addArticle');
        }



    };
}

export default ajax;
