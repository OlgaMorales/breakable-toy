import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import ContactDeletePrompt from "../../src/components/common/ContactDeletePrompt";

// unit tests for the ContactDeletePrompt component
describe('ContactDeletePrompt component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {show: true, user: {}, hideDelete: ()=>{}, userDelete: ()=>{}};
      const wrapper = shallow(<ContactDeletePrompt {...props}/>);
      assert.equal(wrapper.length, 1);
    });
  });
});
