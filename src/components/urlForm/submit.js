import { SubmissionError } from 'redux-form';
import { log } from 'ruucm-util'

function submit(values, rt) {
  return fetch('https://1ujep9zay7.execute-api.ap-northeast-2.amazonaws.com/dev/detectFace?url=' + values.url).
    then((Resoponse)=>Resoponse.json()).
    then((findresponse)=> {
      log('findresponse', findresponse)
      if (findresponse.data.resultMsg == 'SUCCESS') {
      }
      else {
        throw new SubmissionError({
          username: '가입된 회원이 아닙니다. 이메일을 확인 해 주세요.',
          _error: '가입된 회원이 아닙니다. 이메일 비밀번호를 확인 해 주세요.'
        })
      }
  })
}

export default submit;
