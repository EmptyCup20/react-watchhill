import login from '../../../react/reducers/login';
import { expect } from 'chai';

import { LOGIN_REQUEST,LOGIN_RECEIVE,LOGOUT_RECEIVE,LOGIN_INIT,MODIFY_LOGIN } from '../../../react/constants/actionType';
import { init,user_no_exist,password_err,success } from '../../../react/constants/httpType';

describe('reducers', () => {
    describe('login.js', () => {

        const loginUser = {
            name:'test'
        };

        const initialState = {
            logined:false,
            loginStatus:init,			//登录状态
            logining:false,				//有没有正在登录标志
            loginUser:{}
        };

        const requestState = {
            ...initialState,
            logining:true
        };

        const receiveUserNoExistState = {
            ...initialState,
            loginStatus:user_no_exist
        };


        const receivePasswordErrState = {
            ...initialState,
            loginStatus:password_err
        };

        const receiveSuccessState = {
            ...initialState,
            logined:true,
            logining:false,
            loginStatus:success,
            loginUser:loginUser
        };

        const modifyState = {
            ...initialState,
            loginUser:loginUser
        };


        it('INIT',() => {
            expect(login(undefined, {})).to.be.deep.equal(initialState)
        });


        it('LOGIN_INIT',() => {
            expect(login(undefined, {
                type:LOGIN_INIT
            })).to.be.deep.equal(initialState)
        });

        it('LOGIN_REQUEST',() => {
            expect(login(undefined, {
                type:LOGIN_REQUEST
            })).to.be.deep.equal(requestState)
        });

        it('LOGIN_RECEIVE - user_no_exist',() => {
            expect(login(undefined, {
                type:LOGIN_RECEIVE,
                user: loginUser,
                status: user_no_exist
            })).to.be.deep.equal(receiveUserNoExistState)
        });


        it('LOGIN_RECEIVE - password_err',() => {
            expect(login(undefined, {
                type:LOGIN_RECEIVE,
                user: loginUser,
                status: password_err
            })).to.be.deep.equal(receivePasswordErrState)
        });


        it('LOGIN_RECEIVE - success',() => {
            expect(login(undefined, {
                type:LOGIN_RECEIVE,
                user: loginUser,
                status: success
            })).to.be.deep.equal(receiveSuccessState)
        });

        it('LOGOUT_RECEIVE',() => {
            expect(login(undefined, {
                type:LOGOUT_RECEIVE,
                status: success
            })).to.be.deep.equal(initialState)
        });


        it('MODIFY_LOGIN',() => {
            expect(login(undefined, {
                type:MODIFY_LOGIN,
                user:loginUser
            })).to.be.deep.equal(modifyState)
        });
    });
});

