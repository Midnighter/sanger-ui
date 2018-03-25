import {observable, action} from 'mobx';

import PlasmidCardModel from '../models/PlasmidCardModel';
import SampleModel from '../models/SampleModel';

class UIStore {
  @observable cards: PlasmidCardModel[] = [];
  @observable sampleDialog: {open: boolean, sample: SampleModel} = {
    open: false,
    sample: undefined
  };

  @action
  onToggle(index: integer) {
    this.cards[index].collapsed = !this.cards[index].collapsed;
  }

  @action
  addCard(identifier: string) {
    this.cards.push(new PlasmidCardModel(identifier));
  }

  @action
  clear() {
    this.cards.clear();
  }

  @action
  openSampleDialog(sample: SampleModel) {
    this.sampleDialog.sample = sample;
    this.sampleDialog.open = true;
  }

  @action
  closeSampleDialog() {
    this.sampleDialog.sample = undefined;
    this.sampleDialog.open = false;
  }
}

export default new UIStore();