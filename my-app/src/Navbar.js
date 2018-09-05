import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    color: '#111111'
  },
  button: {
    color: '#111111'
  },
  navbar : {
    backgroundColor: '#FFFFFF',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    color: '#111111'
  }
}

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography variant='title' className={classes.flex}>
            "BLOG"
          </Typography>
          <Button className={classes.button}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Navbar)