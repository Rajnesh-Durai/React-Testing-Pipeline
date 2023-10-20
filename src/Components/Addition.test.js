import React from 'react';
import Addition from './Addition';
import { mount } from 'enzyme';


describe('Addition Component', () => {
    it('should correctly add two numbers', () => {
      const wrapper = mount(<Addition />);
  
      const number1Input = wrapper.find('input').at(0);
      const number2Input = wrapper.find('input').at(1);
      const addButton = wrapper.find('button');
  
      number1Input.simulate('change', { target: { value: 5 } });
      number2Input.simulate('change', { target: { value: 3 } });
      addButton.simulate('click');
  
      const result = wrapper.find('p').text();
      expect(result).toBe('Result: 8');
    });
  });