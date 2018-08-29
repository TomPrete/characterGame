import React from 'react';
import { expect } from 'chai';
import enzyme, { shallow } from 'enzyme';
import { spy } from 'sinon'
import Routes from './Routes';


spy(Routes.prototype, 'componentDidMount');


describe('Components:', () => {
  describe('<Routes />', () => {
    it('calls componentDidMount', () => {
      const wrapper = shallow(<Routes />);
      expect(Routes.prototype.componentDidMount).to.have.property('callCount', 1);
    });
  });

})
