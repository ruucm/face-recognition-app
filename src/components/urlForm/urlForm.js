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
class UrlForm extends Component {
  render() {
    const { submitTest, required } = this.props;
    log('this.props(submitTest)', this.props)
    return (
      <Card>
        <Card.Title>enter url here</Card.Title>
        <Card.Form onSubmit={handleSubmit(values => submit(values))}>
          <Field
            name="phone"
            type="text"
            component={renderField}
            placeholder="http://img.of.awesome..."
            validate={[required]}
          />
          <Card.InputHr />
          <Card.Button onClick={ () => submitTest(120) }></Card.Button>
        </Card.Form>
      </Card>
    );
  }
}

export default reduxForm({
  form: 'url-form'
})(UrlForm);
