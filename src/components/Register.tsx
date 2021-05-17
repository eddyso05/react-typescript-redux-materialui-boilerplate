import { makeStyles } from '@material-ui/core';
import React,{useState} from 'react';
import {
    CircularProgress,
    Button,
    TextField,
} from "@material-ui/core";

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
    greeting: {
      fontWeight: 500,
      textAlign: "center",
      marginTop: theme.spacing(4),
    },
    subGreeting: {
      fontWeight: 500,
      textAlign: "center",
      marginTop: theme.spacing(2),
    },
    googleButton: {
      marginTop: theme.spacing(6),
      backgroundColor: "white",
      width: "100%",
      textTransform: "none",
    },
    googleButtonCreating: {
      marginTop: 0,
    },
    googleIcon: {
      width: 30,
      marginRight: theme.spacing(2),
    },
    creatingButtonContainer: {
      marginTop: theme.spacing(2.5),
      height: 46,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    createAccountButton: {
      height: 46,
      textTransform: "none",
    },
    formDividerContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: "flex",
      alignItems: "center",
    },
    formDividerWord: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    formDivider: {
      flexGrow: 1,
      height: 1,
      backgroundColor: theme.palette.text.hint + "40",
    },
    errorMessage: {
      textAlign: "center",
    },
    textFieldUnderline: {
      "&:before": {
        borderBottomColor: theme.palette.primary.light,
      },
      "&:after": {
        borderBottomColor: theme.palette.primary.main,
      },
      "&:hover:before": {
        borderBottomColor: `${theme.palette.primary.light} !important`,
      },
    },
    textField: {
    },
    formButtons: {
      width: "100%",
      marginTop: theme.spacing(4),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    forgetButton: {
      textTransform: "none",
      fontWeight: 400,
    },
    loginLoader: {
      marginLeft: theme.spacing(4),
    },
    copyright: {
      marginTop: theme.spacing(4),
      whiteSpace: "nowrap",
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: theme.spacing(2),
      },
    },
}));
  

const RegisterComponent = () => {
    var classes = useStyles();
    var [isLoading, setIsLoading]         = useState(false);
    var [error, setError]                 = useState(null);
    var [activeTabId, setActiveTabId]     = useState(0);
    var [nameValue, setNameValue]         = useState("");
    var [loginValue, setLoginValue]       = useState("reactboilerplate.com");
    var [passwordValue, setPasswordValue] = useState("password");
    return (
        <React.Fragment>
              
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
                margin="normal"
                placeholder="Full Name"
                type="text"
                fullWidth
              />

              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />

              <TextField
                id="password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />

              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>

              {/* <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button> */}
            </React.Fragment>
    );
}

export default RegisterComponent