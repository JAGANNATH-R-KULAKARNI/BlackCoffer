import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import BackGroundGB from './greenB.jpeg';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Kit from './kitbox.png';
import PaymentUI from '../payment/payment';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const styles = {
  paperContainer: {
      height : 600,
      width : 800,
      backgroundImage: `url(${BackGroundGB})`,
      backgroundColor : 'white',
      backgroundSize: '800px 600px',
      backgroundRepeat: 'noRepeat',
  },
};

const images = [
  {
    imgPath:
      'https://i.ytimg.com/vi/xdlS3IWkOZY/maxresdefault.jpg',
  },
  {
    imgPath:
      'https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Visualization_Tools.jpg'
    },
  {
    imgPath:
      'https://financialservicesblog.accenture.com/wp-content/uploads/2020/11/Data_Visualization2.jpg',
  },
  {
    imgPath:
      'https://soulpageit.com/wp-content/uploads/2020/09/2020-09-14.png',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{  flexGrow: 1 }} style={{backgroundImage : <BackGroundGB/>}}>
    <Grid container spacing={2}>
        <Grid item xs={6}>
          {/* <img src={BackGroundGB} style={{height : 600,width : 850}}></img> */}
          <Paper style={styles.paperContainer} elevation={0}>
            <br/>
            <br/>
          <Grid container spacing={2}>
  <Grid item xs={1}>
    
  </Grid>
  <Grid item xs={10}>
  <Typography variant="h3" component="h1" gutterBottom color="white">
          Buy Kit
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom color="white"> 
          {'Imagination will be the only blockers in the sim world. '}
          {'Unlock the creativity. You just need to think how & what to do.'}
          {' Connect with the worlds best Robotics '}
          {'community to solve the real world problems'}
         
        </Typography>
        <a target="_blank" href="https://qtpi.in/" style={{color : "white"}}>Read More --> </a>
  </Grid>
  <Grid item xs={1}>
  </Grid>
</Grid>
<Grid container spacing={2}>
  <Grid item xs={3}>
  <img src={Kit} />
  </Grid>
  <Grid item xs={8}>

  </Grid>
  <Grid item xs={1}>
  </Grid>
</Grid>
            </Paper>
        </Grid>
        <Grid item xs={6}>
        <PaymentUI/>
        </Grid>
      </Grid>

    {/* <BoxUI/> */}
    </Box>
  );
}

export default SwipeableTextMobileStepper;
