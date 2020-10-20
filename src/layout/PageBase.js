import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar,Typography } from '@material-ui/core';




const PageBase = ({ children }) => {
  return (
    <div>
      <h1>header</h1>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Codeid</Typography>
        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </div>
  );
};


PageBase.defaultProps = {
  children: null,
};

PageBase.propTypes = {
  children: PropTypes.node,
};

export default PageBase;
