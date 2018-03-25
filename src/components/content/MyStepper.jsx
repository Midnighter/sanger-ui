import React from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Stepper, {Step, StepLabel} from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import uiStore from '../../stores/UIStore';
import plasmids from '../../stores/PlasmidStore';
import UploadStep from './upload/UploadStep';
import ResultStep from './result/ResultStep';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

function getSteps() {
  return ['Upload', 'Results'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (<UploadStep/>);
    case 1:
      return (<ResultStep/>);
    default:
      return 'Unknown step';
  }
}

@observer
class MyStepper extends React.Component {
  static propTypes = {classes: PropTypes.object};

  constructor(props) {
    super(props);
    this.uiStore = uiStore;
    this.store = plasmids;
    this.state = {
      activeStep: 0,
    };
  }

  handleNext = () => {
    this.setState({activeStep: this.state.activeStep + 1});
  };

  handleBack = () => {
    this.setState({activeStep: this.state.activeStep - 1});
  };

  handleReset = () => {
    this.uiStore.clear();
    this.store.clear();
    this.setState({activeStep: 0});
  };

  render() {
    const {classes} = this.props;
    const steps = getSteps();
    const {activeStep} = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                Done!
              </Typography>
              <Button onClick={this.handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              {getStepContent(activeStep)}
              <div>
                {/*<Button*/}
                  {/*disabled={activeStep === 0}*/}
                  {/*onClick={this.handleBack}*/}
                  {/*className={classes.button}*/}
                {/*>*/}
                  {/*Back*/}
                {/*</Button>*/}
                <Button
                  variant="raised"
                  color="primary"
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MyStepper);