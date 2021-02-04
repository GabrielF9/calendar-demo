import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  dialog: {
    color: "#787878 !important",
    textAlign: "center",
    borderRadius: "5px",
    width: '360px',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "16px"
  },
  dialogTitle: {
    padding: 0,
    height: '100%',
    marginBottom: "8px",
    justifyContent: "space-between",
    "& > h2": {
      display: "flex",
      flexFlow: "column",
      alignItems: "center",
      "& > svg": {
        marginBottom: "8px"
      },
      "& > span": {
        fontWeight: "bold",
        fontSize: "24px",
        color: "#000"
      }
    }
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: "100%",
    marginBottom: theme.spacing(4),
    padding: 0,
    "& > p": {
      fontSize: "14px"
    }
  },
  dialogActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    width: '100%',
    marginTop: '16px',
    '&.Mui-focused': {
      border: "1px solid #14213D",
    },
  },
  countContainer: {
    backgroundColor: '#14213D',
    color: '#FFFFFF',
    width: '10px',
    height: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '8px',
    borderRadius: '3px'
  }
}));

export default useStyles;