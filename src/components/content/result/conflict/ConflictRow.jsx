// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {TableRow, TableCell} from 'material-ui/Table';

const styles = {};

class ConflictRow extends React.Component {
  static propTypes = {
    conflict: PropTypes.object.isRequired
  };

  renderLetterChange(plasmid: string, sample: string) {
    if (plasmid.length === 0 || sample.length === 0) {
      return null;
    }
    return (
      <span>
        {plasmid} &rarr; {sample}
      </span>
    );
  }

  render() {
    const {conflict} = this.props;
    return (
      <TableRow>
        <TableCell>
          {conflict.plasmidPos}
        </TableCell>
        <TableCell>
          {conflict.samplePos}
        </TableCell>
        <TableCell>
          {this.renderLetterChange(
            conflict.plasmidLetter, conflict.sampleLetter)}
        </TableCell>
        <TableCell>
          {conflict.meanQuality}
        </TableCell>
        <TableCell>
          {conflict.featureName} - {conflict.hitFeature}
        </TableCell>
        <TableCell>
          {this.renderLetterChange(
            conflict.plasmidAA, conflict.sampleAA)}
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(ConflictRow);
