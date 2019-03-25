import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

// User List Element component
export default class ContactListElement extends React.Component {
  // render
  render() {
    const {user, showDelete} = this.props;
    return (
      <tr>
        <td>#{user.id}</td>
        <td>{user.username}</td>
        <td>{user.lastname}</td>
        <td>{user.company}</td>
        <td>{user.phonenumber}</td>
        <td>{user.email}</td>
        <td>{user.job}</td>
        <td>
          <Link to={'user-edit/' + user.id}>
            <Button bsSize="xsmall">
               <Glyphicon glyph="pencil"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button bsSize="xsmall" className="user-delete" onClick={() => showDelete(user)}>
            <Glyphicon glyph="trash"/>
          </Button>
        </td>
      </tr>
    );
  }
}

// prop checks
ContactListElement.propTypes = {
  user: PropTypes.object.isRequired,
  showDelete: PropTypes.func.isRequired,
}
