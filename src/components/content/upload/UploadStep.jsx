import React from 'react';
import {action} from 'mobx';
import {observer} from 'mobx-react';
import Dropzone from 'react-dropzone';
import {withStyles} from 'material-ui/styles';
import fileStore from '../../../stores/FileStore';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

@observer
class UploadStep extends React.Component {
  fileStore = fileStore;

  @action
  onDrop = (accepted, rejected) => {
    accepted.map((file) => {
      if (file.type === 'application/zip' || file.type === 'application/octet-stream') {
        this.fileStore.sequences = file;
      } else {
        this.fileStore.template = file;
      }
    });
    // Flash an error message or something.
    console.log(rejected);
  };

  render() {
    const {classes} = this.props;

    return (
      <Dropzone
        accept={
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' +
          'application/vnd.ms-excel,' +
          'application/zip,' +
          'application/octet-stream'
        }
        onDrop={this.onDrop}
      />
    );
  }
}

export default withStyles(styles)(UploadStep);
