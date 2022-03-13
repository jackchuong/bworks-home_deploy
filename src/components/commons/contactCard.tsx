import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CallIcon from '@material-ui/icons/Call';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

interface cardProps {
  address: string;
  phone: string;
  email: string;
  name: string;
}

export default function ContactCard(props: CardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <IconButton aria-label="settings">
              <CallIcon />
            </IconButton>
          </Avatar>
        }
        title="mysite"
        subheader={props.name}
      />
      <hr style={{ width: '50%' }} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <li> {props.address} </li>
          <li> {props.phone} </li>
          <li> {props.email} </li>
        </Typography>
      </CardContent>
    </Card>
  );
}
