import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() => ({
  container: {
    padding: '30px 0',
    textAlign: 'center',
  },
}))

const Page = ({ title, Component }) => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h3">
        {title}
      </Typography>
      <Component />
    </>
  )
}

export default Page
