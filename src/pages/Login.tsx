import React, { useState } from "react";
import {
  Grid,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";
import LoginComponent from '../components/Login'
import Register from '../components/Register'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    container: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      top: 0,
      left: 0,
    },
    logotypeContainer: {
      backgroundColor: theme.palette.primary.main,
      width: "60%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    logotypeImage: {
      width: 165,
      marginBottom: theme.spacing(4),
    },
    logotypeText: {
      color: "white",
      fontWeight: 500,
      fontSize: 84,
      [theme.breakpoints.down("md")]: {
        fontSize: 48,
      },
    },
    formContainer: {
      width: "40%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        width: "50%",
      },
    },
    form: {
      width: 320,
      marginTop:'35%'
    },
    tab: {
      fontWeight: 400,
      fontSize: 18,
    },
  }));
  

const Login = () =>{
    var classes = useStyles();
    var [activeTabId, setActiveTabId] = useState(0);
  
    return (
        <Grid container className={classes.container}>
            <div className={classes.logotypeContainer}>
                {/* <img src={logo} alt="logo" className={classes.logotypeImage} /> */}
                <Typography className={classes.logotypeText}>React Boilerplate</Typography>
            </div>
                <div className={classes.formContainer}>
                <div className={classes.form}>
    
                <Tabs
                value={activeTabId}
                onChange={(e, id) => setActiveTabId(id)}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                    <Tab label="Login" classes={{ root: classes.tab }} />
                    <Tab label="New User" classes={{ root: classes.tab }} />
                </Tabs>
    
                {activeTabId === 0 && (
                    <LoginComponent />
                )}
    
                
                {activeTabId === 1 && (
                    <Register />
                )}
            </div>
            </div>
        </Grid>
    );
}

export default Login