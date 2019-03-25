import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import ContactListElement from "../../src/components/common/ContactListElement";

// unit tests for the ContactListElement component
describe('ContactListElement component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {user: {}, showDelete: ()=>{}};
      const wrapper = shallow(<ContactListElement {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
