import { SubmissionError } from 'redux-form';
import { log } from 'ruucm-util'

function submit(values, action) {
  return fetch('https://1ujep9zay7.execute-api.ap-northeast-2.amazonaws.com/dev/detectFace?url=' + values.url).
    then((Resoponse)=>Resoponse.json()).
    then((findresponse)=> {
      log('findresponse', findresponse)
      if (findresponse.Labels.FaceDetails) {
        log('action!')
        action();
      }
      else {
        throw new SubmissionError({
          _error: findresponse.message
        })
      }
  })
}

export default submit;
