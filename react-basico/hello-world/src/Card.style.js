import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  span: {},
  word1: {},
  word2: {},

  phrase: {
    fontWeight: 'bold',

    '&:hover': {
      color: 'green'
    },

    '& span': {
      color: 'blue'
    },

    '& $word2': {
      color: 'red',
    },

    '&:hover $word1, &:hover $word2': {
      color: 'yellow'
    },

  }
  
}))

export default useStyles