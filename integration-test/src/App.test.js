import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('shows enzyme works', () => {
  let app = shallow(<App/>);
  console.log(app.find('div.foo'));
  expect(app.find('div.foo')).toBeDefined();
  expect(app.find('div.foo').text()).toBe('Hello, Tests');
})
