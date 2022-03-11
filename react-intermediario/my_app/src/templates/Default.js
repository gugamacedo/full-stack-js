import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../partials/Header'

const useStyles = makeStyles(() => ({
  container: {
    padding: '30px 0',
    textAlign: 'center'
  }
}))

const Default = ({ children }) => {
  const classes = useStyles()
  
  return (
    <>
      <Header />
      <Container className={classes.container}>
        {children}
      </Container>
    </>
  )
} 

export default Default
