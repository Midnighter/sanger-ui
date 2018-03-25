import {observable} from 'mobx';

class PlasmidCardModel {
  plasmidID: string;
  @observable collapsed: boolean;

  constructor(identifier: string) {
    this.plasmidID = identifier;
    this.collapsed = true;
  }
}

export default PlasmidCardModel;
