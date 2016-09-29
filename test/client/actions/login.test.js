import { LOGIN_REQUEST,LOGIN_RECEIVE,LOGIN_INIT } from '../../../react/constants/actionType';
import * as loginActions from '../../../react/actions/login';
import { expect } from 'chai';
import sinon from 'sinon';

describe('actions',function() {
    describe('login.js', function () {

        let actions,dispatchSpy,getStateSpy,xhr,requests;

        beforeEach(function() { //beforeEach方法在describe中每个Spec(it)执行之前运行
            actions = [];

            //spy的作用在于可以监视一个函数被调用的情况
            //spy相当于给我们感兴趣的函数加了一层wrapper
            //于是记录下了这个函数被调用的次数,每次传入的参数是什么
            //以及返回的结果是什么
            //或者抛出了怎样的异常
            dispatchSpy = sinon.spy(action => {
                actions.push(action)
            });


            //测试ajax请求
            xhr = sinon.useFakeXMLHttpRequest();
            requests = [];
            xhr.onCreate = (xhr) => {
                requests.push(xhr);
            };


        });

        afterEach(function() {
            xhr.restore();
        });


        it('login_init',() => {
            const action = loginActions.login_init();
            expect(action).to.be.deep.equal({
                type:LOGIN_INIT
            })
        });


        it('login_authen',() => {

            const ok = {
                login:{
                    logined:false,
                    logining:false
                }
            };

            const notOk = {
                login:{
                    logined:false,
                    logining:true
                }
            };
            const bool_ok = loginActions.login_authen(ok);
            const bool_notOk = loginActions.login_authen(notOk);

            expect(bool_ok).to.be.ok;
            expect(bool_notOk).to.not.be.ok;
        });




    });
});


