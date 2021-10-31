import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from '../ListItem/listitem';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import Display from '../Display/display';
import ClearIcon from '@mui/icons-material/Clear';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MainListItems2 from '../ListItem/listitem2';
import PreviewUI from '../Preview/preview';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import SpeedDialUI from '../speedDial/speedDial';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import DeleteIcon from '@mui/icons-material/Delete';
import Editor from '../Editor/editor'
import SettingsUI from '../Settings/settings';
import LanguageUI from '../ListItem/dialog';
import { useMediaQuery } from '@mui/material';
import RatingUI from './ratings';

const actions = [
  { icon: <DeleteIcon />, name: 'Delete' },
  { icon: <ZoomOutIcon />, name: 'ZoomOut' },
  { icon: <ZoomInIcon />, name: 'ZoomIn' },
  { icon: <ZoomOutMapIcon />, name: 'Reset' },
];


const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    <Link color="inherit" target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
      Jagannath R Kulakarni
    </Link>{' '}
    {'.'}
    <br/>
    <br/>
    <RatingUI/>
  </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [editorStatus,setEditorStatus]=React.useState(false);
  const [settingsStatus,setSettingsStatus]=React.useState(false);
  const [lanStatus, setLanStatus] = React.useState(false);
  const [openSD, setOpenSD] = React.useState(false);
  const handleOpenSD = () => setOpenSD(true);
  const handleCloseSD = () => setOpenSD(false);
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [open2,setOpen2]=React.useState(false);

  const toggleDrawer2=()=>{
    setOpen2(!open2);
  };
  const matches = useMediaQuery('(min-width:414px)');
  const Heading=(
    <ThemeProvider
    theme={createTheme({
      components: {
        MuiListItemButton: {
          defaultProps: {
            disableTouchRipple: true,
          },
        },
      },
      palette: {
        mode: 'dark',
        primary: { main: 'rgb(102, 157, 246)' },
        background: { paper: 'rgb(5, 30, 52)' },
      },
    })}
  >
    <Paper elevation={0} sx={{ maxWidth: 256 }}>
      <FireNav component="nav" disablePadding>
        <ListItemButton component="a" href="#customized-list">
          <ListItemIcon sx={{ fontSize: 20 }}>🔥</ListItemIcon>
          <ListItemText
            sx={{ my: 0 }}
            primary="QtLearn"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItemButton>
        </FireNav>
        </Paper>
        </ThemeProvider>
  );

  return (
    <Box>
      {editorStatus ? <Editor setEditorStatus={setEditorStatus}/> : null}
      {settingsStatus ? <SettingsUI setSettingsStatus={setSettingsStatus}/> : null}
      {lanStatus ? <LanguageUI setLanStatus={setLanStatus}/> : null}
       <Backdrop open={openSD} />
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
       {!openSD ? <AppBar position="absolute" open={open} style={{backgroundColor : 'rgb(5, 30, 52)'}}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
             { !open2 ?<MenuIcon /> : null}            
             </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
                {!open ? Heading : null}
            </Typography>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer2}
              sx={{
                ...(open && { display: 'none' }),
              }}
            >
            {!open2 ?  <MenuIcon /> : <ClearIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
        : null }
       {!openSD ? 
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              backgroundColor : 'rgb(5, 30, 52)'
            }}
          >
            {Heading}
            <IconButton onClick={toggleDrawer} style={{color : 'rgba(255,255,255,.8)'}}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        <List style={{color : 'rgba(255,255,255,.8)'}}>{mainListItems}</List>
        </Drawer>
        : null }
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
        
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              
              <Grid item xs={12} md={8} lg={9}>
                {/*<Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  chart
                </Paper>*/}
                  <Display/>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: matches ? 440 : 500,
                    bgcolor: 'grey.200'
                  }}
                >
                     <ListItem>
          <ListItemIcon sx={{ fontSize: 40 }}>🔥</ListItemIcon>
          <ListItemText
            sx={{ my: 0 }}
            primary="About"
            primaryTypographyProps={{
              fontSize: 20,
              fontWeight: 'medium',
              letterSpacing: 0,
            }}
          />
        </ListItem>
        <Typography>
        QtPi Robotics has built an ecosystem of over 20,000 children aged between 7-17 across India, since we started in 2016. It’s about time we pull students out of the rat race and teach them how to think instead of what to think! QtPi Robotics is doing just that!.
        </Typography>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      <Link
          display="block"
          variant="body1"
          href="https://qtpi.in/"
          target="_blank"
          sx={{ mb: 0.5 }}
          style={{color: 'rgb(5, 30, 52)'}}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <LanguageIcon />
            <span>Website</span>
          </Stack>
        </Link>
        <Link
          display="block"
          variant="body1"
          href="https://qtpi.in/#contact"
          target="_blank"
          sx={{ mb: 0.5 }}
          style={{color: 'rgb(5, 30, 52)'}}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <EmailIcon />
            <span>Contact</span>
          </Stack>
        </Link>
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
               { !openSD ? <PreviewUI/> : null}
                <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute',right : 100,top : 320 }}
        icon={<SpeedDialIcon />}
        onClose={handleCloseSD}
        onOpen={handleOpenSD}
        open={openSD}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
          />
        ))}
      </SpeedDial>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
        {!openSD ?
        <Drawer variant="permanent" open={open2}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
              backgroundColor : 'rgb(5, 30, 52)'
            }}
          >
            {Heading}
            <IconButton onClick={toggleDrawer2} style={{color : 'rgba(255,255,255,.8)'}}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
        <List style={{color : 'rgba(255,255,255,.8)'}}>
          <MainListItems2 
          setEditorStatus={setEditorStatus}
          setSettingsStatus={setSettingsStatus}
          setLanStatus={setLanStatus}
          />
          </List>
        </Drawer>
         : null }
      </Box>
    </ThemeProvider>
    </Box>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}