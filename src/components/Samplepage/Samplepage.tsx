import React from 'react';
import {createUseStyles} from "react-jss";
import {MEDIA_QUERIES} from "../../constants";
import useThings from "./useThings";

const useStyles = createUseStyles(() => ({
  header: {
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: 400,
    [MEDIA_QUERIES.TABLET]: {
      fontSize: 24,
    }
  },
  para: {
    fontFamily: 'roboto',
    fontSize: 12
  }
}))

const Samplepage = () => {

  const classes = useStyles()

  const things = useThings()

  console.log('things', things)

  return(<>
    <h1 className={classes.header}>Sample page</h1>
    <p className={classes.para}>Sample page goes here</p>
  </>)
}

export default Samplepage
