import React, { ReactChildren, ReactChild } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import {useDispatch} from 'react-redux'
import { push } from 'connected-react-router'
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import classNames from "classnames";
import {
  Person as AccountIcon,
  Search as SearchIcon,
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: '55px',
      [theme.breakpoints.up('sm')]: {
        width: '60px',
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    profile: {
      position:'absolute',
      right: '10px'
    },
    toolbarWrapper :{
      width:'100%'
    },
    icon : {
      marginRight:'10px'
    },
    headerMenu: {
      marginTop: theme.spacing(7),
    },
    headerMenuList: {
      display: "flex",
      flexDirection: "column",
    },
    headerMenuItem: {
      "&:hover, &:focus": {
        // backgroundColor: theme.palette.background.light,
        // color: "white",
      }
    },
    profileMenu: {
      minWidth: 265,
    },
    profileMenuUser: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(2),
    },
    profileMenuItem: {
      color: theme.palette.text.hint,
    },
    profileMenuIcon: {
      marginRight: theme.spacing(2),
      color: theme.palette.text.hint,
      '&:hover': {
        color: theme.palette.primary.main,
      }
    },
    profileMenuLink: {
      fontSize: 16,
      textDecoration: "none",
      "&:hover": {
        cursor: "pointer",
      },
    },
    messageNotification: {
      height: "auto",
      display: "flex",
      alignItems: "center",
    },
    messageNotificationSide: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginRight: theme.spacing(2),
    },
    messageNotificationBodySide: {
      alignItems: "flex-start",
      marginRight: 0,
  },
  }),
);

interface AuxProps {
  children: ReactChild | ReactChildren;
}

export default function MiniDrawer({ children, ...props }: AuxProps) {
  const classes         = useStyles();
  const theme           = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const dispatch        = useDispatch();

  const changeRoute = (text:string) => {
    const page = text.toLowerCase();
    dispatch(push(page))
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    setAnchorEl(null);
    dispatch(push('/login'));
};


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbarWrapper}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            React Boilerplate
          </Typography>
          <div className={classes.profile}>
            <Button aria-controls="simple-menu" aria-haspopup="true"  onClick={handleClick}>
                <Avatar className={classes.avatar} >
                    <PersonIcon />
                </Avatar>
            </Button>

            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className={classes.headerMenu}
              classes={{ paper: classes.profileMenu }}
              disableAutoFocusItem
            >
              <div className={classes.profileMenuUser}>
                <Typography>
                  John Smith
                </Typography>
                <Typography
                  className={classes.profileMenuLink}
                  component="a"
                  color="primary"
                >
                  Reacboilerplate.com
                </Typography>
          </div>
          
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>

          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Tasks
          </MenuItem>

          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Messages
          </MenuItem>
          <div className={classes.profileMenuUser} onClick={logOut}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
          </div>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Dashboard','Overview'].map((text, index) => (
            <ListItem button key={text} onClick={() => changeRoute(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeRoundedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        {/* <Divider /> */}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}