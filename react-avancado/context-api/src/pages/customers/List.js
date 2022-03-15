import axios from "axios"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import CustomerCard from '../../components/CustomerCard'

const useStyles = makeStyles((theme) => (
  {
    root: {
      flexGrow: 1,
    },
    card: {
      backgroundColor: "#00c853",
    }
  }
))

const List = () => {
  const classes = useStyles()

  const history = useHistory()

  const [customers, setCustomers] = useState([])

  useEffect(() => 
  axios.get('https://reqres.in/api/users')
  .then(response => {
    const { data } = response.data
    setCustomers(data)
  })
  , [])

  const handleRemoveCustomer = (id) => 
    axios.delete(`https://reqres.in/api/users/${id}`)
          .then(() => setCustomers(customers.filter(customer => customer.id !== id)))

  const handleEditCustomer = (id) => history.push(`/customers/edit/${id}`)

  return (
    <Grid container spacing={6}>
      {
      customers.map(item => (

        <Grid item xs={12} md={4}>
          <CustomerCard
            id={item.id}
            name={item.first_name}
            lastName={item.last_name}
            email={item.email}
            avatar={item.avatar}
            className={classes.card}
            onRemoveCustomer={handleRemoveCustomer}
            onEditCustomer={handleEditCustomer}
          />
        </Grid>
      
      ))
      }
    </Grid>
  )
} 

export default List
