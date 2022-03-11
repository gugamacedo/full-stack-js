import { useState } from 'react'
import { useHistory } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import PersonAdd from '@material-ui/icons/PersonAdd'
import ListAlt from '@material-ui/icons/ListAlt'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
}))

const Header = () => {
  const classes = useStyles()
  const history = useHistory()

  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggleMenu = () => setMenuOpen(!menuOpen)

  const handleMenuRoute = (route) => {
    handleToggleMenu()
    history.push(route)
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="secondary" aria-label="menu" onClick={() => handleToggleMenu()}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>

          <ListItem button onClick={() => handleMenuRoute('/')}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>

          <ListItem button onClick={() => handleMenuRoute('/customers')}>
            <ListItemIcon><ListAlt /></ListItemIcon>
            <ListItemText>Listar Clientes</ListItemText>
          </ListItem>

          <ListItem button onClick={() => handleMenuRoute('/customers/add')}>
            <ListItemIcon><PersonAdd /></ListItemIcon>
            <ListItemText>Cadastrar Clientes</ListItemText>
          </ListItem>

        </List>
      </Drawer>
    </>
  )
}

export default Header
