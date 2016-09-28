import { LOGIN_REQUEST,LOGIN_RECEIVE,LOGIN_INIT } from '../../../react/constants/actionType';
import { login_init } from '../../../react/actions/login';
import { expect } from 'chai';
import sinon from 'sinon';

describe('actions',function() {
    describe('login.js', function () {

        let actions,dispatchSpy,getStateSpy;

        beforeEach(function() { //beforeEach方法在describe中每个Spec(it)执行之前运行
            actions = [];
            dispatchSpy = sinon.spy(action => {
                actions.push(action)
            })
        });


        it('login_init',() => {
            const action = login_init();
            expect(action).to.be.deep.equal({
                type:LOGIN_INIT
            })
        });





    });
});


