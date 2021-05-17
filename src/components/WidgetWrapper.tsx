import React, { ReactChildren, ReactChild } from "react";
import {
  Paper,
  Typography,
} from "@material-ui/core";
import classnames from "classnames";
import { makeStyles } from '@material-ui/core/styles' 

const useStyles = makeStyles(theme => ({
    widgetWrapper: {
      display: "flex",
      minHeight: "100%",
    },
    widgetHeader: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(1),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    // widgetRoot: {
    //   boxShadow: theme.customShadows.widget,
    // },
    widgetBody: {
      paddingBottom: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingLeft: theme.spacing(3),
    },
    noPadding: {
      padding: 0,
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      overflow: "auto",
    },
    moreButton: {
      margin: -theme.spacing(1),
      padding: 0,
      width: 40,
      height: 40,
      color: theme.palette.text.hint,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "rgba(255, 255, 255, 0.35)",
      },
    },
    noWidgetShadow: {
      boxShadow: 'none'
    },
    widgetRoot: {

    }
}));

interface WidgetProps {
    children            : ReactChild | ReactChildren;
    title               : string;
    bodyClass           : any;
    header              : any;
    // upperTitle          : string;
}

export default function WidgetWrapper({
  children,
  title,
  bodyClass,
  header,
//   upperTitle,
  ...props
}:WidgetProps) {
  var classes = useStyles();

  // local
  return (
    <div className={classes.widgetWrapper}>
      <Paper className={classes.paper} classes={{ root: classnames(classes.widgetRoot) }}>
        <div className={classnames(classes.widgetHeader)}>
          {header ? (
            header
          ) : (
            <React.Fragment>
              <Typography variant="h5" color="textSecondary" noWrap>
                {title}
              </Typography>
            
            </React.Fragment>
          )}
        </div>
        <div
          className={classnames(classes.widgetBody, {
            [bodyClass]: bodyClass,
          })}
        >
          {children}
        </div>
      </Paper>
    </div>
  );
}
