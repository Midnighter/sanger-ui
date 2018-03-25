// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Table, {
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from 'material-ui/Table';

import ConflictRow from './ConflictRow';

const styles = {};

class ConflictTable extends React.Component {
  static propTypes = {
    conflicts: PropTypes.array.isRequired
  };

  render() {
    const {conflicts} = this.props;
    if (conflicts.length === 0) {
      return null;
    }
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Plasmid Position
            </TableCell>
            <TableCell>
              Sample Position
            </TableCell>
            <TableCell>
              SNP
            </TableCell>
            <TableCell>
              Mean Read Quality (&plusmn;1 Sample Positions)
            </TableCell>
            <TableCell>
              Affected Plasmid Feature
            </TableCell>
            <TableCell>
              Effect
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            conflicts.map((conflict, idx) => {
              return (
                <ConflictRow key={idx} conflict={conflict}/>
              );
            })
          }
        </TableBody>
      </Table>
    );
  }
}

export default withStyles(styles)(ConflictTable);
