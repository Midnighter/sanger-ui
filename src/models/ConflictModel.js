class ConflictModel {
  plasmidPos: integer;
  samplePos: integer;
  plasmidLetter: string;
  sampleLetter: string;
  meanQuality: number;
  hitFeature: string;
  featureName: string;
  plasmidAA: string;
  sampleAA: string;
  otherCoverage: [{ quality: number, tubeID: string }];

  constructor(plasmidPos: integer,
              samplePos: integer,
              plasmidLetter: string,
              sampleLetter: string,
              meanQuality: number,
              hitFeature: string,
              featureName: string,
              plasmidAA: string,
              sampleAA: string,
              otherCoverage?: [{ quality: number, tubeID: string }]) {
    this.plasmidPos = plasmidPos;
    this.samplePos = samplePos;
    this.plasmidLetter = plasmidLetter;
    this.sampleLetter = sampleLetter;
    this.meanQuality = meanQuality;
    this.hitFeature = hitFeature;
    this.featureName = featureName;
    this.plasmidAA = plasmidAA;
    this.sampleAA = sampleAA;
    this.otherCoverage = (typeof otherCoverage === 'undefined') ? [] : otherCoverage;
  }
}

export default ConflictModel;
