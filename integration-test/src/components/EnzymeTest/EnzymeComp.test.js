import React from 'react';
import EnzymeComp from './EnzymeComp';
import { shallow } from 'enzyme';

describe('unit test for Enzyme', () => {

    it('renders without crashing', () => {
        shallow(<EnzymeComp/>);
    })

    it('renders the correct text from props', () => {
        let someText = 'Hello, Test';
        let copy = shallow(<EnzymeComp text={someText}/>)

        expect(copy.find('div.foo').text()).toEqual(someText);
    })
})
