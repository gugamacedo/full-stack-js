import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  cards: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 30
  },

  [theme.breakpoints.down(1100)] : {
    cards: {
      gridTemplateColumns: '1fr 1fr',
    }  
  },

  [theme.breakpoints.down('xs')] : {
    cards: {
      gridTemplateColumns: '1fr',
    }  
  }
  
}))

export default useStyles

