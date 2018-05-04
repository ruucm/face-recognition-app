import React, { Component } from 'react';
import { log } from 'ruucm-util';
import Card from '../../blocks/Card';
import { Field, reduxForm } from 'redux-form'
import submit from './submit';
import { isEmpty } from 'lodash';
import { List } from 'immutable';
import FaceBox from './FaceBox';

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

const trimNum = (source, num) => {
  return source.toString().slice(0, num)
}

class UrlForm extends Component {
  render() {
    const { handleSubmit, submitTest, submitUrl, 
      isSubmitted, submittedUrl, setResultData, resultData,
      w
    } = this.props;
    log('FaceBox', FaceBox)
    var faceResults = resultData.toJS();
    return (
        (isSubmitted) ? (
          <Card top='48px'>
            {(faceResults == [] || isEmpty(faceResults.Landmarks)) ? ('') : (<FaceBox w={263} h={269} info={faceResults.BoundingBox} />)}
            
            <Card.Image src={submittedUrl} width='263px' height='269px' />
            <Card.Title marginTop='41px'>the result is ..</Card.Title>
            {(faceResults == [] || isEmpty(faceResults.Landmarks)) ? (
              <Card.Text>Loading</Card.Text>
            ) : (
              <div>
                <Card.Text>BoundingBox ({trimNum(faceResults.BoundingBox.Left, 4)}, {trimNum(faceResults.BoundingBox.Top, 4)}, {trimNum(faceResults.BoundingBox.Width, 4)}, {trimNum(faceResults.BoundingBox.Height, 4)})</Card.Text>
                <Card.Text>eyeLeft ({trimNum(faceResults.Landmarks[0].X, 4)}, {trimNum(faceResults.Landmarks[0].Y, 4)})</Card.Text>
                <Card.Text>eyeRight ({trimNum(faceResults.Landmarks[1].X, 4)}, {trimNum(faceResults.Landmarks[1].Y, 4)})</Card.Text>
                <Card.Text>nose ({trimNum(faceResults.Landmarks[2].X, 4)}, {trimNum(faceResults.Landmarks[2].Y, 4)})</Card.Text>
                <Card.Text>mouthLeft ({trimNum(faceResults.Landmarks[3].X, 4)}, {trimNum(faceResults.Landmarks[3].Y, 4)})</Card.Text>
                <Card.Text>mouthRight ({trimNum(faceResults.Landmarks[4].X, 4)}, {trimNum(faceResults.Landmarks[4].Y, 4)})</Card.Text>
              </div>
            )}
            <Card.Button onClick={submitUrl} />
          </Card>
        ) : (
          <Card top='158px'>
            {/* <FaceBox w={120} h={120} /> */}
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
