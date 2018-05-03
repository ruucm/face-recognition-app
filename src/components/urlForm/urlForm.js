import React, { Component } from 'react';
import { log } from 'ruucm-util';
import Card from '../../blocks/Card';
import { Field, reduxForm } from 'redux-form'
import submit from './submit';

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <Card.Input {...input} placeholder={placeholder} type={type} />
    {touched &&
      ((error && <Card.InputError>{error}</Card.InputError>) ||
        (warning && <Card.InputError>{warning}</Card.InputError>))}
  </div>
)
const required = value => (value ? undefined : 'url needed 🤨')

class UrlForm extends Component {
  render() {
    const { handleSubmit, submitTest, submitUrl, isSubmitted, submittedUrl } = this.props;
    log('this.props(submitTest)', this.props)
    return (
        (isSubmitted) ? (
          <Card>
            <Card.Title>the result is ..</Card.Title>
            {submittedUrl}
            <Card.Form onSubmit={handleSubmit(values => submit(values, submitUrl))}>
              <Field
                name="url"
                type="text"
                component={renderField}
                placeholder="http://img.of.awesome..."
                validate={[required]}
              />
              <Card.InputHr />
              <Card.Button />
            </Card.Form>
          </Card>
        ) : (
          <Card>
            <Card.Title>enter url here</Card.Title>
            {/* {this.state.form.url-form.values} */}
            {log('this.props.form', this.props.form)}
            <Card.Form onSubmit={handleSubmit(values => submit(values, submitUrl))}>
              <Field
                name="url"
                type="text"
                component={renderField}
                placeholder="http://img.of.awesome..."
                validate={[required]}
              />
              <Card.InputHr />
              <Card.Button />
            </Card.Form>
          </Card>
        )
      
    );
  }
}

export default reduxForm({
  form: 'url-form'
})(UrlForm);
