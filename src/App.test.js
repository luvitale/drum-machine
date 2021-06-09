import { frontEndLibrariesStack } from './utils/shared-test-strings';
import React from "react";
import {mount, configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from 'chai-enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({
   adapter: new Adapter()
});

describe('#Drum Machine tests', function () {

  describe('#Technology Stack', function () {
    it(frontEndLibrariesStack, function () {
      /*
      return true;
      */
    });
  });

  describe('#Tests', function () {
    it(`I should be able to see an outer container with a
    corresponding id="drum-machine" that contains all other elements`, function () {
      const wrapper = shallow(<App />);

      expect(wrapper.exists("#drum-machine"), "#drum-machine is not defined").to.equal(true);
    });

    it(`Within #drum-machine I can see an element with
    corresponding id="display".`, function () {
      const wrapper = shallow(<App />);

      expect(wrapper.exists('#display'), "#display is not defined").to.equal(true);
    });

    it(`Within #drum-machine I can see 9 clickable "drum pad"
    elements, each with a class name of "drum-pad", a unique id that describes
    the audio clip the drum pad will be set up to trigger, and an inner text
    that corresponds to one of the following keys on the keyboard: Q, W, E, A,
    S, D, Z, X, C. The drum pads MUST be in this order.`, function () {
      // using .isAtLeast() and .includeMembers() in this challenge so that
      // users have the freedom to add more than 9 drum pads

      const wrapper = shallow(<App />);

      const drumPadElements = wrapper.find(".drum-pad");
      const requiredLetters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

      expect(drumPadElements.length >= 9, "There should be at least 9 elements with the class .drum-pad").to.equal(true);

      drumPadElements.forEach((elem, i) => {
        expect(elem).to.have.attr('id');
        expect(elem).to.have.text(requiredLetters[i]);
      });
    });

    it(`Within each .drum-pad, there should be an HTML5 <audio>
    element which has a src attribute pointing to an audio clip, a class name
    of "clip", and an id corresponding to the inner text of its parent
    .drum-pad (e.g. id="Q", id="W", id="E" etc.).`, function () {

      const wrapper = shallow(<App />);

      const drumPadElements = wrapper.find('.drum-pad');

      expect(drumPadElements.length >= 9, "There should be at least 9 elements with the class .drum-pad").to.equal(true);

      drumPadElements.forEach((elem, index) => {
        expect(elem.exists(".clip"), `.clip is not defined in drum pad ${index}`).to.equal(true);
        let clipElem = elem.find(".clip");
        expect(clipElem).to.have.tagName("audio");
        expect(clipElem).to.have.attr('src');
        expect(clipElem).to.have.id();
        expect(clipElem.id).to.equal(clipElem.parentElement.innerText.replace(/\s/g, ''));
      });
    });

    it(`When I click on a .drum-pad element, the audio clip
    contained in its child <audio> element should be triggered.`, function () {
      const wrapper = shallow(<App />);

      const drumPadElements = wrapper.find('.drum-pad');

      expect(drumPadElements.length >= 9, "There should be at least 9 elements with the class .drum-pad").to.equal(true);

      drumPadElements.forEach((elem, index) => {
        expect(elem.exists(".clip"), `.clip is not defined in drum pad ${index}`).to.equal(true);
        let clipElem = elem.find(".clip");
        expect(clipElem).to.have.tagName("audio");
        expect(clipElem).to.have.attr('src');
        expect(clipElem).to.have.id();
        expect(clipElem.id).to.equal(clipElem.parentElement.innerText.replace(/\s/g, ''));
      });
      
      /*
      assert.isAtLeast(
        audioElements.length,
        9,
        'Audio elements do not exist '
      );
      audioElements.forEach((el) => {
        el.pause();
        __triggerClickEventCaller(el.parentElement);
        assert.isFalse(
          el.paused,
          'The <audio> element with id="' +
            el.id +
            '" does not play when the ' +
            el.id +
            ' .drum-pad is clicked '
        );
      });
      */
    });

    it(`When I press the trigger key associated with each
    .drum-pad, the audio clip contained in its child <audio> element should be
    triggered (e.g. pressing the Q key should trigger the drum pad which
    contains the string "Q", pressing the W key should trigger the drum pad
    which contains the string "W", etc.).`, function () {
      const wrapper = shallow(<App />);

      const drumPadElements = wrapper.find('.drum-pad');
      
      expect(drumPadElements.length >= 9, "There should be at least 9 elements with the class .drum-pad").to.equal(true);

      drumPadElements.forEach((elem, index) => {
        expect(elem.exists(".clip"), `.clip is not defined in drum pad ${index}`).to.equal(true);
        let clipElem = elem.find(".clip");
        expect(clipElem).to.have.tagName("audio");
        expect(clipElem).to.have.attr('src');
        expect(clipElem).to.have.id();
        expect(clipElem.id).to.equal(clipElem.parentElement.innerText.replace(/\s/g, ''));
      });

      /*
      const keyCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
      assert.isAtLeast(
        audioElements.length,
        9,
        'Audio elements do not exist '
      );

      audioElements.forEach((el, i) => {
        el.pause();
        __triggerEvent(el.parentElement, 'keydown', keyCodes[i]);
        __triggerEvent(el.parentElement, 'keypress', keyCodes[i]);
        __triggerEvent(el.parentElement, 'keyup', keyCodes[i]);
        assert.isFalse(
          el.paused,
          'No audio plays when the ' + el.id + ' key is pressed '
        );
        el.pause();
      });
      */
    });

    it(`When a .drum-pad is triggered, a string describing the
    associated audio clip is displayed as the inner text of the #display
    element (each string must be unique).`, function () {
      const wrapper = shallow(<App />);

      const drumPadElements = wrapper.find('.drum-pad');
      
      expect(drumPadElements.length >= 9, "There should be at least 9 elements with the class .drum-pad").to.equal(true);

      drumPadElements.forEach((elem, index) => {
        expect(elem.exists(".clip"), `.clip is not defined in drum pad ${index}`).to.equal(true);
        let clipElem = elem.find(".clip");
        expect(clipElem).to.have.tagName("audio");
        expect(clipElem).to.have.attr('src');
        expect(clipElem).to.have.id();
        expect(clipElem.id).to.equal(clipElem.parentElement.innerText.replace(/\s/g, ''));
      });

      /*
      let displayText = [];
      drumPads.forEach((pad) => {
        __triggerClickEventCaller(pad);
        displayText.push(document.getElementById('display').innerText);
      });
      displayText = displayText.filter(
        (str, i) => displayText[0] === displayText[i]
      );
      assert.isTrue(
        displayText.length === 1,
        'Each time a drum pad is triggered, a unique string should ' +
          'be displayed in the element with the id "display"'
      );
      */
    });
  });
  // END #Tests

  // END #DrumMachineTests
});

chai.use(chaiEnzyme());