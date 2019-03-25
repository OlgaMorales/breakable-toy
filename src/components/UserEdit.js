import React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Field, SubmissionError, reduxForm } from "redux-form";
import { PageHeader, Form } from "react-bootstrap";
import FormField from "./common/FormField";
import FormSubmit from "./common/FormSubmit";



const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined
const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined
const letters = value =>
  value && /[^a-zA-Z]/i.test(value)
    ? 'Only characters'
    : undefined



// User add/edit page component
export class UserEdit extends React.Component {
  // constructor
  constructor(props) {
    super(props);

    // bind <this> to the event method
    this.formSubmit = this.formSubmit.bind(this);
  }

  // render
  render() {
    const {user, handleSubmit, error, invalid, submitting} = this.props;
    return (
      <div className="page-user-edit">
        <PageHeader>{'Contact ' + (user.id ? 'edit' : 'add')}</PageHeader>
        <Form horizontal onSubmit={handleSubmit(this.formSubmit)}>
          <Field component={FormField} name="username" label="Name *" type="text" doValidate={true}/>
          <Field component={FormField} name="lastname" label="Last Name *" doValidate={true}/>
          <Field component={FormField} name="company" label="Company" doValidate={true}/>
          <Field component={FormField} name="phonenumber" label="Phone number"  doValidate={true} />
          <Field component={FormField} name="email" label="Email *" type="email" doValidate={true} />
          <Field component={FormField} name="job" label="Job"/>
          <FormSubmit error={error} invalid={invalid} submitting={submitting} buttonSaveLoading="Saving..."
                      buttonSave="Save Contact"/>
        </Form>
      </div>
    );
  }

  // submit the form
  formSubmit(values) {
    const {dispatch} = this.props;
    return new Promise((resolve, reject) => {
      dispatch({
        type: 'USERS_ADD_EDIT',
        user: {
          id: values.id || 0,
          username: values.username,
          lastname: values.lastname,
          company: values.company,
          phonenumber: values.phonenumber,
          email: values.email,
          job: values.job,
        },
        callbackError: (error) => {
          reject(new SubmissionError({_error: error}));
        },
        callbackSuccess: () => {
          dispatch(push('/'));
          resolve();
        }
      });
    });
  }
}

// decorate the form component
const UserEditForm = reduxForm({
  form: 'user_edit',
  validate: function (values) {
    const errors = {};
    if (!values.username  ) {
      errors.username = 'Name is required';
    }
    if (!values.lastname  ) {
      errors.lastname = 'Lastname is required';
    }
    if (!values.email  ) {
      errors.email = 'Email is required';
    }
    if (email(values.email) ) {
      errors.email = 'Invalid email address';
    }
    if (number(values.phonenumber) ) {
      errors.phonenumber = 'Must be a number';
    }
    if (alphaNumeric(values.company) ) {
      errors.company = 'Only alphanumeric characters';
    }
    if (letters(values.username) ) {
      errors.username = 'Only text';
    }
    if (letters(values.lastname) ) {
      errors.lastname = 'Only text';
    }
    return errors;
  },
})(UserEdit);

// export the connected class
function mapStateToProps(state, own_props) {
  const user = state.users.find(x => Number(x.id) === Number(own_props.params.id)) || {};
  return {
    user: user,
    initialValues: user,
  };
}
export default connect(mapStateToProps)(UserEditForm);
