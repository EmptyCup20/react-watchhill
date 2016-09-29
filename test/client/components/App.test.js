import React from 'react';
import TestUtils from 'react-addons-test-utils'; //官方测试工具库
import { expect } from 'chai';
import { findDOMNode } from 'react-dom';
import { shallow,render } from 'enzyme';

//测试组件
import App from '../../../react/components/views/App';

/**
 * 返回浅渲染的虚拟DOM对象
 * @param Component
 */
function shallowRender(Component) {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Component/>);
    return renderer.getRenderOutput();
}

describe('components',function() {
    describe('App.jsx', function () {

        //官方库
        it('标题是Watchhill首页', function () {
            const app = shallowRender(App);  //对App进行浅渲染
            expect(app.props.children[0].type).to.equal('h1');
            expect(app.props.children[0].props.children).to.equal('Watchhill首页');
        });


        it('li标签个数为3', function () {
            const app = TestUtils.renderIntoDocument(<App/>);    //App真实的DOM环境
            let lis = TestUtils.scryRenderedDOMComponentsWithTag(app, 'li');
            expect(lis.length).to.equal(3);
        });


        it('li标签', function () {
            const app = TestUtils.renderIntoDocument(<App/>);    //App真实的DOM环境
            const appDOM = findDOMNode(app);
            const lis = appDOM.querySelector('li');
            expect(lis.nodeName).to.equal('LI');
        });


        //enzyme库
        it('标题是Watchhill首页', function () {
            let app = shallow(<App/>);   //对App进行浅渲染
            expect(app.find('h1').text()).to.equal('Watchhill首页');
        });

        it('li标签个数为3', function () {
            let app = render(<App/>);
            expect(app.find('li').length).to.equal(3);
        });
    });
});




