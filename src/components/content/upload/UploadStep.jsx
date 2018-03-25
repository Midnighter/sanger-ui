import React from 'react';
import {DropzoneComponent} from 'react-dropzone-component';
import {withStyles} from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class UploadStep extends React.Component {
  constructor(props) {
    super(props);
    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      addRemoveLinks: true,
      acceptedFiles: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,application/zip,application/octet-stream",
      autoProcessQueue: false
    };

    this.componentConfig = {
      iconFiletypes: ['.xlsx', '.xls', '.zip'],
      showFiletypeIcon: true,
      postUrl: 'http://localhost:8000/samples',
      dropzoneSelector: 'div#indazone'
    };

    this.dropzone = null;
    this.handlePost = this.handlePost.bind(this);
    this.handleFileAdded = this.handleFileAdded.bind(this);
  }

  handleFileAdded(file) {
    console.log(file);
  }

  handlePost() {
    this.dropzone.processQueue();
  }

  render() {
    const {classes} = this.props;
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      init: (dz) => {
        this.dropzone = dz
      },
      addedfile: this.handleFileAdded
    };

    return (
      <div id="indazone" style={{ width: 800, height: 400, borderWidth: 'thin', borderColor: 'grey', borderStyle: 'dotted' }}>
        <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig}/>
        <Button variant="raised" onClick={this.handlePost} className={classes.button}>Upload</Button>
      </div>
    );
  }
}

export default withStyles(styles)(UploadStep);
