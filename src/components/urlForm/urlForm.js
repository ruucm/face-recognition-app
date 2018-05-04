import React, { Component } from 'react';
import { log } from 'ruucm-util';
import Card from '../../blocks/Card';
import { Field, reduxForm } from 'redux-form'
import submit from './submit';
import { isEmpty } from 'lodash';
import { List } from 'immutable';

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
    const { handleSubmit, submitTest, submitUrl, 
      isSubmitted, submittedUrl, setResultData, resultData,
      w
    } = this.props;
    log('this.props(submitTest)', this.props)
    var faceResults = resultData.toJS();
    return (
        (isSubmitted) ? (
          <Card top='48px'>
            <Card.Image src={submittedUrl} width='263px' height='269px' />
            <Card.Title marginTop='41px'>the result is ..</Card.Title>
            {(faceResults == [] || isEmpty(faceResults.Landmarks)) ? (
              <Card.Text>Loading</Card.Text>
            ) : (
              <div>
                <Card.Text>eyeLeft ({faceResults.Landmarks[0].X}, {faceResults.Landmarks[0].Y})</Card.Text>
                <Card.Text>eyeRight ({faceResults.Landmarks[1].X}, {faceResults.Landmarks[1].Y})</Card.Text>
                <Card.Text>nose ({faceResults.Landmarks[2].X}, {faceResults.Landmarks[2].Y})</Card.Text>
                <Card.Text>mouthLeft ({faceResults.Landmarks[3].X}, {faceResults.Landmarks[3].Y})</Card.Text>
                <Card.Text>mouthRight ({faceResults.Landmarks[4].X}, {faceResults.Landmarks[4].Y})</Card.Text>
              </div>
            )}
            <Card.Button />
          </Card>
        ) : (
          <Card top='158px'>
            <Card.Title>enter url here</Card.Title>
            <Card.Form onSubmit={handleSubmit(values => submit(values, submitUrl, setResultData))}>
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
