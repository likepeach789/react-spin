import React from 'react';
import { shallow, mount } from 'enzyme';
import Progress from '../index.jsx';

describe('<Progress />', () => {
    it('renders <Progress /> component successfully', () => {
        const wrapper = shallow(<Progress number={20}/>);
        console.log(wrapper);
        expect(wrapper.find('svg').exists()).toBe(true);
        expect(wrapper.find('.my-progress-container').exists()).toBe(true);
        expect(wrapper.find('.circle-bg').exists()).toBe(true);
        expect(wrapper.find('.circle-path').exists()).toBe(true);
        expect(wrapper.find('.progress-text').exists()).toBe(true);
    });

    it('renders children when passed in', () => {
        const wrapper = mount((
            <Progress number={20}>
                <button>test</button>
            </Progress>
        ));
        expect(wrapper.find("button").html()).toEqual('<button>test</button>')
    });



});