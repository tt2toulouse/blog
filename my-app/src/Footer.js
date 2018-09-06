import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grid: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    backgroundColor: '#FFFFFF'
  },
  logo: {
    width: '40%'
  }
})

function Footer (props) {
  const { classes } = props

  return (
    <Grid container spacing={0}>
      <Grid item>
        <Grid container>
          <Grid item className={classes.grid} xs sm md>
          </Grid>
          <Grid item className={classes.grid} xs={10} sm={10} md={8}>


            <Grid container>
              <Grid item xs sm md>
              </Grid>
              <Grid item className={classes.grid} xs={4} sm={3} md={2}>
                <a href='https://www.facebook.com/profile.php?id=100005786436254' target='_blank'><img className={classes.logo} src='https://image.noelshack.com/fichiers/2018/26/4/1530199952-facebook-icon-icons-com-65926.png' alt='FacebookLogo' /></a>
              </Grid>
              <Grid item className={classes.grid} xs={4} sm={3} md={2}>
                <a href='https://www.instagram.com/tt2toulouse/' target='_blank'><img className={classes.logo} src='https://image.flaticon.com/icons/png/512/7/7679.png' alt='InstagramLogo' /></a>
              </Grid>
              <Grid item className={classes.grid} xs={4} sm={3} md={2}>
                <a href='https://twitter.com/tt2toulouse' target='_blank'><img className={classes.logo} src='https://image.noelshack.com/fichiers/2018/26/4/1530199313-1491579542-yumminkysocialmedia22-83078.png' alt='TwitterLogo' /></a>
              </Grid>
              <Grid item xs sm md>
              </Grid>
            </Grid>

          </Grid>
          <Grid item className={classes.grid} xs sm md>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
