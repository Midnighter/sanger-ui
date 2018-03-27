// @flow
import React from 'react';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Card from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';

import uiStore from '../../../../stores/UIStore';
import plasmidStore from '../../../../stores/PlasmidStore';
import PlasmidCardHeader from './PlasmidCardHeader';
import PlasmidCardAction from './PlasmidCardAction';
import PlasmidCardContent from './PlasmidCardContent';

const styles = theme => ({
  card: {
    maxWidth: 1000,
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
class PlasmidCard extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
  };
  uiStore = uiStore;
  plasmidStore = plasmidStore;

  render() {
    const {classes} = this.props;
    // Local reference makes this unreactive but PlasmidModel is static.
    const plasmid = this.plasmidStore.plasmids
      .get(this.uiStore.cards[this.props.index].plasmidID);
    return (
      <Card
        className={classes.card}
        key={this.props.index}
      >
        <PlasmidCardHeader
          plasmid={plasmid}
        />
        <PlasmidCardAction index={this.props.index}/>
        <Collapse
         in={!this.uiStore.cards[this.props.index].collapsed}
         timeout="auto" unmountOnExit
        >
          <PlasmidCardContent index={this.props.index}/>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(PlasmidCard);
