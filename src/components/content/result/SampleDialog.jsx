// @flow
import React from 'react';
import {observer} from 'mobx-react'
import {withStyles} from 'material-ui/styles';
import Dialog, {DialogTitle} from "material-ui/Dialog";
import Typography from 'material-ui/Typography';

import uiStore from '../../../stores/UIStore';
import SampleDialogTable from './sample/SampleDialogTable';
import ConflictTable from "./conflict/ConflictTable";

const styles = {};

@observer
class SampleDialog extends React.Component {
  uiStore = uiStore;

  render() {
    if (typeof this.uiStore.sampleDialog.sample === 'undefined') {
      return null;
    }
    return (
      <Dialog
        open={this.uiStore.sampleDialog.open}
        onClose={(...args) => this.uiStore.closeSampleDialog(...args)}
        aria-labelledby="sample-dialog-title"
      >
        <DialogTitle id="sample-dialog-title">
          {this.uiStore.sampleDialog.sample.name}
        </DialogTitle>
        <Typography variant={'subheading'}>
          Overview
        </Typography>
        <SampleDialogTable sample={this.uiStore.sampleDialog.sample}/>
        <Typography variant={'subheading'}>
          A Note on Quality
        </Typography>
        <Typography>
          A trustworthy sequencing
          result has a median quality of 55. Quality ranges from 0 to 62 but
          everything below 50 should be considered suspect.
        </Typography>
        {
          (this.uiStore.sampleDialog.sample.numUnresolvedConflicts() > 0) &&
          <Typography variant={'subheading'}>
            Unresolved Conflict(s)
          </Typography>
        }
        <ConflictTable conflicts={this.uiStore.sampleDialog.sample.unresolved}/>
        {
          (this.uiStore.sampleDialog.sample.numPotentialConflicts() > 0) &&
          <Typography variant={'subheading'}>
            Potential Conflict(s)
          </Typography>
        }
        <ConflictTable conflicts={this.uiStore.sampleDialog.sample.potential}/>
        {
          (this.uiStore.sampleDialog.sample.numResolvedConflicts() > 0) &&
          <Typography variant={'subheading'}>
            Resolved Conflict(s)
          </Typography>
        }
        <ConflictTable conflicts={this.uiStore.sampleDialog.sample.resolved}/>
      </Dialog>
    );
  }
}

export default withStyles(styles)(SampleDialog);
