import SampleModel from './SampleModel';

class PlasmidModel {
  id: string;
  name: string;
  samples: SampleModel[];
  unresolved: integer;
  potential: integer;
  resolved: integer;

  constructor(identifier: string, name:string, samples: SampleModel[],
              unresolved?: integer, potential?: integer, resolved?: integer) {
    this.id = identifier;
    this.name = name;
    this.samples = samples.slice();
    if (typeof unresolved === 'undefined') {
      this.unresolved = this.samples
        .map(sample => sample.numUnresolvedConflicts())
        .reduce((a, b) => a + b, 0);
    } else {
      this.unresolved = unresolved;
    }
    if (typeof potential === 'undefined') {
      this.potential = this.samples
        .map(sample => sample.numPotentialConflicts())
        .reduce((a, b) => a + b, 0);
    } else {
      this.potential = potential;
    }
    if (typeof resolved === 'undefined') {
      this.resolved = this.samples
        .map(sample => sample.numResolvedConflicts())
        .reduce((a, b) => a + b, 0);
    } else {
      this.resolved = resolved;
    }
  }
}

export default PlasmidModel;
