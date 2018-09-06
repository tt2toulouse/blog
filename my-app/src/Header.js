import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import FastfoodOutlined from '@material-ui/icons/FastfoodOutlined'
import ShoppingBasketOutlined from '@material-ui/icons/ShoppingBasketOutlined'
import LandscapeOutlined from '@material-ui/icons/LandscapeOutlined'
import AccountBalanceOutlined from '@material-ui/icons/AccountBalanceOutlined'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 2
  },
  field: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  card: {
    width: '100%',
    boxShadow: 'none',
    textAlign: 'center'
  },
  title :{
    backgroundColor: '#F5F5F5'
  },
  media: {
    objectFit: 'cover'
  }
})

function Header(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs sm md>
        </Grid>
        <Grid item xs={10} sm={10} md={8}>
          <Grid container>
            <Grid item xs sm md>
            </Grid>
            <Grid item xs={6} sm={6} md={6} className={classes.field}>
              <Card className={classes.card}>
                <CardActionArea href='/food' target='blank'>
                  <CardMedia
                    component='img'
                    className={classes.media}
                    height='160'
                    image='http://icicestlesudouest.com/wp-content/uploads/2016/07/atelier-du-burger-dwichtorialist-toulouse.jpg'
                    title='Food'
                  />
                  <CardContent className={classes.title}>
                    <Typography gutterBottom variant='title' component='h2'>
                      Food   <FastfoodOutlined />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={6} className={classes.field}>
              <Card className={classes.card}>
                <CardActionArea href='/mode' target='blank'>
                  <CardMedia
                    component='img'
                    className={classes.media}
                    height='160'
                    image='https://fashionista.com/.image/t_share/MTQ5OTU0MTkxNTUxNzY4NTIw/38-new-york-fashion-week-street-style-spring-2018-day-6.jpg'
                    title='Mode'
                  />
                  <CardContent className={classes.title}>
                    <Typography gutterBottom variant='title' component='h2'>
                      Mode   <ShoppingBasketOutlined />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>        
            </Grid>
            <Grid item xs={6} sm={6} md={6} className={classes.field}>
              <Card className={classes.card}>
                <CardActionArea href='/travels' target='blank'>
                  <CardMedia
                    component='img'
                    className={classes.media}
                    height='160'
                    image='https://image.noelshack.com/fichiers/2018/36/3/1536157162-img-1648.jpg'
                    title='Travels'
                  />
                  <CardContent className={classes.title}>
                    <Typography gutterBottom variant='title' component='h2'>
                      Travels   <LandscapeOutlined />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            <Grid item xs={6} sm={6} md={6} className={classes.field}>
              <Card className={classes.card}>
                <CardActionArea href='/culture' target='blank'>
                  <CardMedia
                    component='img'
                    className={classes.media}
                    height='160'
                    image='https://i.ytimg.com/vi/MgJmR02ti4c/maxresdefault.jpg'
                    title='Culture'
                  />
                  <CardContent className={classes.title}>
                    <Typography gutterBottom variant='title' component='h2'>
                      Culture   <AccountBalanceOutlined />
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs sm md>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs sm md>
        </Grid>
      </Grid>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)