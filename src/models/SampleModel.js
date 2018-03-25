import ConflictModel from './ConflictModel';

class SampleModel {
  name: string;
  primerID: string;
  tubeID: string;
  readLength: integer;
  medianQuality: number;
  cutBeginning: integer;
  cutEnd: integer;
  unresolved: ConflictModel[];
  potential: ConflictModel[];
  resolved: ConflictModel[];

  constructor(name: string,
              primerID: string,
              tubeID: string,
              readLength: integer,
              medianQuality: number,
              cutBeginning: integer,
              cutEnd: integer,
              unresolved?: ConflictModel[],
              potential?: ConflictModel[],
              resolved?: ConflictModel[]) {
    this.name = name;
    this.primerID = primerID;
    this.tubeID = tubeID;
    this.readLength = readLength;
    this.medianQuality = medianQuality;
    this.cutBeginning = cutBeginning;
    this.cutEnd = cutEnd;
    this.unresolved = (typeof unresolved === 'undefined') ? [] : unresolved;
    this.potential = (typeof potential === 'undefined') ? [] : potential;
    this.resolved = (typeof resolved === 'undefined') ? [] : resolved;
  }

  numUnresolvedConflicts() {
    return this.unresolved.length;
  }

  numPotentialConflicts() {
    return this.potential.length;
  }

  numResolvedConflicts() {
    return this.resolved.length;
  }
}

export default SampleModel;
