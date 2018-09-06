import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1
  },
  logo: {
    color: '#111111',
    textDecoration: 'none'
  },
  navbar : {
    backgroundColor: '#FFFFFF',
    boxShadow: 'none'
  }
}

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position='static'>
        <Toolbar>
          <Typography variant='display1' className={classes.flex}>
            <a className={classes.logo} href='/' target='blank'>
              "BLOG"
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)