import WidgetWrapper from "../components/WidgetWrapper";
import Typography from '@material-ui/core/Typography';
import DesktopWindowsRoundedIcon from '@material-ui/icons/DesktopWindowsRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      marginBottom: theme.spacing(1),
    },
    bottomStatsContainer: {
      display: "flex",
      justifyContent: "space-between",
      margin: theme.spacing(1) * -2,
      marginTop: theme.spacing(1),
    },
    laptopIcon: {
      fontSize:'170px'
    },
    statCell: {
      padding: theme.spacing(2),
    },
    totalValue: {
      alignItems: "baseline",
      margin:"0 auto",
      textAlign:'center'
    },
    profitArrow: {
      transform: "rotate(-45deg)",
      fill: theme.palette.success.main,
    },
    profitArrowDanger: {
      transform: "rotate(45deg)",
      fill: theme.palette.secondary.main,
    },
    selectInput: {
      padding: 10,
      paddingRight: 25,
      "&:focus": {
        backgroundColor: "white",
      },
    },
    bodyWidgetOverflow: {
      overflow: 'auto',
      textAlign:'center'
    }
  }));
  

export default function Widget() {
  var classes = useStyles();

  return (
    <WidgetWrapper
      header={
        <div className={classes.title}>
          <Typography variant="h5">Windows</Typography>
        </div>
      }
      title={'text'}
    //   upperTitle
      bodyClass={classes.bodyWidgetOverflow}
    >
      <div>
        <div className={classes.totalValue}>
          <DesktopWindowsRoundedIcon className={classes.laptopIcon}/>
        </div>
        <Button variant="contained" color="primary">
            Remove
          </Button>
      </div>
    </WidgetWrapper>
  );
}