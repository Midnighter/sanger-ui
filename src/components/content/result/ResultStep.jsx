// @flow
import React from 'react';
import {observer} from 'mobx-react';
import {withStyles} from 'material-ui/styles';

import uiStore from '../../../stores/UIStore';
import plasmids from '../../../stores/PlasmidStore';
import PlasmidModel from '../../../models/PlasmidModel';
import PlasmidCard from './plasmid/PlasmidCard';
import SampleModel from '../../../models/SampleModel';
import ConflictModel from '../../../models/ConflictModel';
import SampleDialog from "./SampleDialog";

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

  constructor(props) {
    super(props);
    this.uiStore = uiStore;
    this.store = plasmids;
    console.log('Create test data.');
    this.uiStore.addCard('3201');
    this.uiStore.addCard('3204');
    this.store.plasmids.set('3201', new PlasmidModel('3201', [
      new SampleModel('xzy', '20120', 'FR14400', 908, 55.1, 20, 123,
        [
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R')
        ], [
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R'),
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R')
        ], [
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R'),
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R'),
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R')
        ])
    ]));
    this.store.plasmids.set('3204', new PlasmidModel('3204', [
      new SampleModel('klm', '20122', 'FR14402', 908, 52.0, 10, 50,
        [
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R')
        ], [
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R')
        ], [
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R')
        ]),
      new SampleModel('uvw', '20123', 'FR14403', 1008, 20.1, 100, 400,
        [
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R')
        ],
        [],
        [
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R'),
          new ConflictModel(180, 20, 'G', 'A', 53.2, 'CDS', 'KLM', 'N', 'R')
        ])
    ]));
  }

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
