// @flow
import React from 'react';
import {TableHead, TableRow, TableCell} from 'material-ui/Table';

class SampleTableHead extends React.Component {
  render() {
    return (
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Primer ID</TableCell>
          <TableCell>Tube ID</TableCell>
          <TableCell>Conflicts</TableCell>
        </TableRow>
      </TableHead>
    );
  }
}

export default SampleTableHead;
