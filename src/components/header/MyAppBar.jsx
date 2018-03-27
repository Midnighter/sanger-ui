import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import logo from './dna-128.png';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MyAppBar extends React.Component {
  static propTypes = {classes: PropTypes.object.isRequired};

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <img src={logo} alt="Automated Sanger sequence analysis" height="50em"/>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Automated Sanger Sequence Analysis
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(MyAppBar);