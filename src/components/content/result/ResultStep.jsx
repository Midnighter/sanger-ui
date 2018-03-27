// @flow
import React from 'react';
import {observer} from 'mobx-react';
import {withStyles} from 'material-ui/styles';

import uiStore from '../../../stores/UIStore';
import PlasmidCard from './plasmid/PlasmidCard';
import SampleDialog from './SampleDialog';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

@observer
class ResultStep extends React.Component {
  uiStore = uiStore;

  render() {
    // TODO: Use a grid layout maybe?
    return (
      <div>
        {this.uiStore.cards.map((card, idx) => {
          return (<PlasmidCard key={card.plasmidID} index={idx}/>);
        })}
        <SampleDialog open={this.uiStore.sampleDialog.open}/>
      </div>
    );
  }
}

export default withStyles(styles)(ResultStep);
