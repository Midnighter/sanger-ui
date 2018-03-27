// @flow
import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {CardActions} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import classnames from 'classnames';

import uiStore from '../../../../stores/UIStore';

const styles = (theme) => ({
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
});

@observer
class PlasmidCardAction extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };
  uiStore = uiStore;

  render() {
    const {classes, index} = this.props;
    return (
      <CardActions className={classes.actions} disableActionSpacing>
        <Typography>Sequencing Details</Typography>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: !this.uiStore.cards[index].collapsed,
          })}
          onClick={(...args) => this.uiStore.onToggle(index)}
          aria-expanded={!this.uiStore.cards[index].collapsed}
          aria-label="Show more"
        >
          <ExpandMoreIcon/>
        </IconButton>
      </CardActions>
    );
  }
}

export default withStyles(styles)(PlasmidCardAction);
