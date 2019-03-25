import React from "react";
import { shallow } from "enzyme";
import assert from "assert";
import { ContactList } from "../../src/components/common/ContactList";

// unit tests for the ContactList component
describe('ContactList component', () => {
  describe('render()', () => {
    it('should render the progressbar', () => {
      const props = {users: []};
      const wrapper = shallow(<ContactList {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
