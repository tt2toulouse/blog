import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  field: {
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2
  },
  card: {
    width: '100%',
    boxShadow: 'none',
    textAlign: 'left'
  },
  media: {
    objectFit: 'cover',
  },
})

function Header(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6} sm={6} md={3} className={classes.field}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                height='160'
                image='http://icicestlesudouest.com/wp-content/uploads/2016/07/atelier-du-burger-dwichtorialist-toulouse.jpg'
                title='Food'
              />
              <CardContent>
                <Typography gutterBottom variant='headline' component='h2'>
                  Food
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6} md={3} className={classes.field}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                height='160'
                image='https://fashionista.com/.image/t_share/MTQ5OTU0MTkxNTUxNzY4NTIw/38-new-york-fashion-week-street-style-spring-2018-day-6.jpg'
                title='Mode'
              />
              <CardContent>
                <Typography gutterBottom variant='headline' component='h2'>
                  Mode
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>        
        </Grid>
        <Grid item xs={6} sm={6} md={3} className={classes.field}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                height='160'
                image='https://image.noelshack.com/fichiers/2018/36/3/1536157162-img-1648.jpg'
                title='Travels'
              />
              <CardContent>
                <Typography gutterBottom variant='headline' component='h2'>
                  Let's go !
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={6} sm={6} md={3} className={classes.field}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component='img'
                className={classes.media}
                height='160'
                image='https://qph.fs.quoracdn.net/main-qimg-2f7dc65f098e40878bc5b91875d82bec-c'
                title='Culture'
              />
              <CardContent>
                <Typography gutterBottom variant='headline' component='h2'>
                  Culture
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)