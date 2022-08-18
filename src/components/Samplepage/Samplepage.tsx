import React from 'react';
import {createUseStyles} from "react-jss";

const useStyles = createUseStyles(() => ({
  header: {
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: 400
  },
  para: {
    fontFamily: 'roboto',
    fontSize: 12
  }
}))

const Samplepage = () => {

  const classes = useStyles()

  return(<>
    <h1 className={classes.header}>Sample page</h1>
    <p className={classes.para}>Sample page goes here</p>
  </>)
}

export default Samplepage
