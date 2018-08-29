import React from 'react';
import { expect } from 'chai';
import enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Game } from './Game';


const adapter = new Adapter()
enzyme.configure({adapter})


describe('Components:', () => {
  describe(" <Game />", () => {
    it('renders a single form', () => {
      let Gamish = shallow(<Game />)
      expect(Gamish.find('form')).to.have.length(1)
    })

    it('renders five input tags', () => {
      let Gamish = shallow(<Game />)
      expect(Gamish.find('input')).to.have.length(5)
    })

    it('renders three select tags', () => {
      let Gamish = shallow(<Game />)
      expect(Gamish.find('select')).to.have.length(3)
    })
  })

})
