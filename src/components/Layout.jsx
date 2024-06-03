import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import Date from './Date'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Layout() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const buttons = [
    {name: 'Date & Time', icon:<DateRangeOutlinedIcon/>},
    {name: 'Your Information', icon:<PersonOutlineOutlinedIcon/>},
    {name: 'Booking Code', icon:<SubtitlesOutlinedIcon/>}
  ]

  return (
    <Box sx={{ display: 'flex' }}>
      {/* sidebar */}
      <Drawer variant="permanent" open={open}>
        {/* sidebar options */}
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <List>
          {buttons.map((button) => (
            <ListItem key={button.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {button.icon}
                </ListItemIcon>
                <ListItemText primary={button.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* sidebar options */}

        {/* sidebarclose icon */}
        <DrawerHeader 
            sx={{position: 'absolute', 
                bottom: '0', 
                width:'100%',
                borderTop:'solid 1px rgba(0,0,0, 0.12)'
                }}>
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        {/* sidebarclose icon */}
        </Box>
      </Drawer>
      {/* sidebar */}

      {/* content body */}
        <Date buttons={buttons}/>
      {/* content body */}
    </Box>
  );
}
