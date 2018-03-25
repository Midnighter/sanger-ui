// @flow
import React from 'react';
import {observer} from 'mobx-react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {TableBody} from 'material-ui/Table';

import uiStore from '../../../../stores/UIStore';
import plasmids from '../../../../stores/PlasmidStore';
import SampleTableRow from './SampleTableRow';

const styles = {};

@observer
class SampleTableBody extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.uiStore = uiStore;
    this.store = plasmids;
  }

  render() {
    const idx = this.props.index;
    return (
      <TableBody>
        {
          this.store.plasmids
            .get(this.uiStore.cards[idx].plasmidID).samples
            .map((sample, i) => {
              return (
                <SampleTableRow
                  key={i}
                  sample={sample}
                  index={i}
                />
              );
            })
        }
      </TableBody>
    );
  }
}

export default withStyles(styles)(SampleTableBody);
