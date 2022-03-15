import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Typography } from '@material-ui/core'
import { useState } from 'react'

import useAuth from '../state/auth'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  }
}))


const Login = () => {
  const classes = useStyles()
  const history = useHistory()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  
  const [loading, setLoading] = useState(false)

  const { user, setUser } = useAuth()

  const handleInputChange = (event) => {

    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleFormSubmit = () => {
    setLoading(true)

    setTimeout(() => {
      setUser({
        logged: true,
        email: form.email
      })

      history.push('/')
    }, 4000)
  }

  return (
    <>
      <Typography variant="h3">Acesso Restrito</Typography>

      <div className={classes.wrapper}>
        <TextField label="Digite seu email" name="email" onChange={handleInputChange} type="text" />
      </div>

      <div className={classes.wrapper}>
        <TextField label="Digite sua senha" name="password" onChange={handleInputChange} type="password" />
      </div>

      <div className={classes.wrapper}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          { loading ? 'Aguarde...' : 'Entrar'}
        </Button>
      </div>
    </>
  )

} 

export default Login
