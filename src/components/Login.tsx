import React, { useState } from 'react';
import {
    CircularProgress,
    Button,
    TextField,
  } from "@material-ui/core";
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { push } from 'connected-react-router'

const useStyles = makeStyles(theme => ({
  form: {
    width: 320,
    marginTop:'35%'
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
}));


const LoginComponent = () => {
    var classes = useStyles();
    const dispatch = useDispatch();

    var [isLoading, setIsLoading]         = useState(false);
    var [error, setError]                 = useState(null);
    var [loginValue, setLoginValue]       = useState("reactboilerplate.com");
    var [passwordValue, setPasswordValue] = useState("password");

    const login = () => {
        dispatch(push('/home'))
    }

    return (
        <React.Fragment>
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

        <div className={classes.formButtons}>
          {isLoading ? (
            <CircularProgress size={26} className={classes.loginLoader} />
          ) : (
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={login}
            >
              Login
            </Button>
          )}
          <Button
            color="primary"
            size="large"
            className={classes.forgetButton}
          >
            Forget Password
          </Button>
        </div>
      </React.Fragment>
    );
}

export default LoginComponent