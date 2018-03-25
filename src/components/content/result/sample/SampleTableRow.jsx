// @flow
import React from 'react';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {TableRow, TableCell} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';
import red from 'material-ui/colors/red';
import orange from 'material-ui/colors/orange';
import blue from 'material-ui/colors/blue';

import uiStore from '../../../../stores/UIStore';

const styles = theme => ({
  unresolved: {
    margin: 10,
    color: '#fff',
    backgroundColor: red[500]
  },
  potential: {
    margin: 10,
    color: '#fff',
    backgroundColor: orange[500]
  },
  resolved: {
    margin: 10,
    color: '#fff',
    backgroundColor: blue[500]
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
});

@observer
class SampleTableRow extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    sample: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.sample = this.props.sample;
    this.uiStore = uiStore;
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.uiStore.openSampleDialog(this.sample);
  }

  render() {
    const {classes, index} = this.props;
    return (
      <TableRow key={index} onClick={this.onClick}>
        <TableCell>
          {this.sample.name}
        </TableCell>
        <TableCell>
          {this.sample.primerID}
        </TableCell>
        <TableCell>
          {this.sample.tubeID}
        </TableCell>
        <TableCell>
          <div className={classes.row}>
            {
              (this.sample.numUnresolvedConflicts() > 0) &&
              <Avatar className={classes.unresolved}>
                {this.sample.numUnresolvedConflicts()}
              </Avatar>
            }
            {
              (this.sample.numPotentialConflicts() > 0) &&
              <Avatar className={classes.potential}>
                {this.sample.numPotentialConflicts()}
              </Avatar>
            }
            {
              (this.sample.numResolvedConflicts() > 0) &&
              <Avatar className={classes.resolved}>
                {this.sample.numResolvedConflicts()}
              </Avatar>
            }
          </div>
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(SampleTableRow);
