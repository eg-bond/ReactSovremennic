import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

export const SushiLinearProgress = withStyles(theme => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 5,
    borderRadius: 3,
    marginTop: '15px',
    [theme.breakpoints.down(768)]: {
      marginTop: '1.6%',
      marginBottom: -10,
    },
  },
  colorPrimary: {
    backgroundColor: '#eeeeee',
  },
  bar: {
    borderRadius: 3,
    backgroundColor: '#d72323',
  },
}))(LinearProgress)
