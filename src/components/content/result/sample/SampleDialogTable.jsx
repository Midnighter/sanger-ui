// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Table, {TableBody, TableRow, TableCell} from 'material-ui/Table';

const styles = {};

class SampleDialogTable extends React.Component {
  static propTypes = {
    sample: PropTypes.object.isRequired
  };

  render() {
    const {sample} = this.props;
    if (typeof sample === 'undefined') {
      return null;
    }
    return (
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              Tube
            </TableCell>
            <TableCell>
              {sample.tubeID}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Primer
            </TableCell>
            <TableCell>
              {sample.primerID}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Read Length
            </TableCell>
            <TableCell>
              {sample.readLength}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Median Quality
            </TableCell>
            <TableCell>
              {sample.medianQuality}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Ignored Nucleotides (Beginning)
            </TableCell>
            <TableCell>
              {sample.cutBeginning}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Ignored Nucleotides (End)
            </TableCell>
            <TableCell>
              {sample.cutEnd}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(SampleDialogTable);
