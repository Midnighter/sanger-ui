import {observable, action} from 'mobx';

class PlasmidStore {
  @observable plasmids = new Map(null, {deep: false, name: 'Plasmid Store'});

  @action
  clear() {
    this.store.clear();
  }
}

export default new PlasmidStore();