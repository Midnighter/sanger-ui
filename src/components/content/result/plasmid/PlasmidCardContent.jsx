// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CardContent} from 'material-ui/Card';
import Table from 'material-ui/Table';

import SampleTableHead from '../sample/SampleTableHead';
import SampleTableBody from '../sample/SampleTableBody';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class PlasmidCardContent extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };

  render() {
    const {classes, index} = this.props;
    return (
      <CardContent>
          <Table className={classes.table}>
            <SampleTableHead/>
            <SampleTableBody index={index}/>
          </Table>
      </CardContent>
    );
  }
}

export default withStyles(styles)(PlasmidCardContent);
