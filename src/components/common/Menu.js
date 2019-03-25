import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (

      <Nav bsStyle="tabs">
        <IndexLinkContainer to="/">
          <NavItem>
            Contacts
          </NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/user-edit">
          <NavItem>
            Add Contact
          </NavItem>
        </LinkContainer>
      </Nav>
    );
  }
}
