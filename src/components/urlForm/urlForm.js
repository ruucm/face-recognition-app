import React, { Component } from 'react';
import { log } from 'ruucm-util';
import Card from '../../blocks/Card';
import { Field, reduxForm } from 'redux-form'
import submit from './submit';
import { isEmpty } from 'lodash';

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
    return (
        (isSubmitted) ? (
          <Card top='48px'>
            <Card.Image src={submittedUrl} width='263px' height='269px' />
            <Card.Title marginTop='41px'>the result is ..</Card.Title>
            datas~
            
            {/* {submittedUrl} */}
            {resultData}

            {(resultData == [] || isEmpty(resultData.Landmarks)) ? (log('hey(loading)', resultData)) : (log('hey', resultData))}
            
            {(resultData == [] || isEmpty(resultData.Landmarks)) ? (
              <Card.Text>Loading</Card.Text>
            ) : (
              <Card.Text>eyeLeft ({resultData.Landmarks[0].X}, {resultData.Landmarks[0].Y})</Card.Text>
            )}
             
            <Card.Text></Card.Text>
            <Card.Button />
          </Card>
        ) : (
          <Card top='158px'>
            {w}
            {log('w', w)}
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
