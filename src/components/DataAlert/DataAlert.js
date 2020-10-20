import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { Collapse, IconButton, makeStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { errorAction } from '../../pages/Home/actions';

const useStyles = makeStyles((theme) => ({
  alert: {
    position: 'fixed',
    zIndex:1100,
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const DataAlert = ({ message, inputProps }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();

  const closeAlert = () => {
    setOpen(false);
    dispatch(errorAction(''));
  };

  setTimeout(() => {
    closeAlert();
  }, 3000);

  return (
    <Collapse in={open}>
      <Alert className={classes.alert} {...inputProps} action={
        <IconButton
          aria-label="close"
          color="inherit"
          onClick={() => {
            closeAlert();
          }}
          size="small"
        >
          <Close fontSize="inherit" />
        </IconButton>
      }>{message}</Alert>
    </Collapse>
  );
};


DataAlert.defaultProps = {
  inputProps: {},
  message: 'null',
};

DataAlert.propTypes = {
  inputProps: PropTypes.object,
  message: PropTypes.string,
};
export default DataAlert;
