import {observable, when, computed} from 'mobx';
import request from 'superagent';

class FileStore {
  @observable template = undefined;
  @observable sequences: undefined;

  constructor() {
    console.log(process.env.REACT_APP_UPLOAD_URL);
    when(() => this.isComplete, () => this.upload());
  }

  @computed get isComplete() {
    return (typeof this.template !== 'undefined'
      && typeof this.sequences !== 'undefined');
  }

  upload() {
    request
      .post(process.env.REACT_APP_UPLOAD_URL)
      .accept('application/json')
      .timeout({
        response: 5000,  // Wait 5 s for the server to respond
        deadline: 30000, // and allow 30 s for the files to finish uploading.
      })
      .attach('template', this.template)
      .attach('sequences', this.sequences)
      .then((err, res) => {
        if (err !== null) {
          console.log('error');
          console.log(err);
        }
        if (res.status === 200) {
          // Update the uiStore with result and let UI proceed to next step.
          console.log('success');
          console.log(res);
        } else {
          // Handle all else.
          console.log('unknown');
          console.log(res);
        }
      });
  }
}

export default new FileStore();