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
        }
    };
}


export default ajax;