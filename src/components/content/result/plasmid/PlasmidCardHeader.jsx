// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CardHeader} from 'material-ui/Card';
import Tooltip from 'material-ui/Tooltip';
import Avatar from 'material-ui/es/Avatar/Avatar';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import orange from 'material-ui/colors/orange';

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

class PlasmidCardHeader extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    plasmid: PropTypes.object.isRequired
  };

  render() {
    const {classes, plasmid} = this.props;
    return (
      <CardHeader
        title={'Plasmid ' + plasmid.id + ': ' + plasmid.name}
        action={
          <div className={classes.row}>
            {
              (plasmid.unresolved > 0) &&
              <Tooltip
                id={'unresolved-' + plasmid.id}
                title="unresolved conflicts" placement="top"
              >
                <Avatar className={classes.unresolved}>
                  {plasmid.unresolved}
                </Avatar>
              </Tooltip>
            }
            {
              (plasmid.potential > 0) &&
              <Tooltip
                id={'potential-' + plasmid.id}
                title="potential conflicts" placement="top"
              >
                <Avatar className={classes.potential}>
                  {plasmid.potential}
                </Avatar>
              </Tooltip>
            }
            {
              (plasmid.resolved > 0) &&
              <Tooltip
                id={'resolved-' + plasmid.id}
                title="resolved conflicts" placement="top"
              >
                <Avatar className={classes.resolved}>
                  {plasmid.resolved}
                </Avatar>
              </Tooltip>
            }
          </div>
        }
      />
    );
  }
}

export default withStyles(styles)(PlasmidCardHeader);
