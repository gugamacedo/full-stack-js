import { TextField, Button } from '@material-ui/core'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Toasty from '../../components/Toasty'

const Edit = () => {
  const { id } = useParams()

  const [openToasty, setOpenToasty] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: {
      value: '',
      error: false,
    },
    job: {
      value: '',
      error: false,
    },
  })

  useEffect(
    () =>
      axios.get(`https://reqres.in/api/users/${id}`).then(response => {
        const { data } = response.data

        setForm({
          name: {
            value: data.first_name,
            error: false,
          },
          job: {
            value: data.job,
            error: false,
          },
        })
      }),
    []
  )

  const handleInputChange = (element) => {
    const { name, value } = element.target

    setForm({
      ...form,
      [name]: { value },
    })
  }

  const handleAddButton = () => {
    let hasError = false

    let newFormState = {
      ...form,
    }

    if (!form.name.value) {
      hasError = true

      newFormState.name = {
        value: form.name.value,
        error: true,
        helperText: 'Preencha este campo',
      }
    }

    if (!form.job.value) {
      hasError = true

      newFormState.job = {
        value: form.job.value,
        error: true,
        helperText: 'Preencha este campo',
      }
    }

    if (hasError) {
      return setForm(newFormState)
    }

    setLoading(true)

    axios
      .put(`https://reqres.in/api/users/${id}`, {
        name: form.name.value,
        job: form.job.value,
      })
      .then(() => {
        setOpenToasty(true)

        setLoading(false)
      })
  }

  return (
    <>
      <TextField
        error={form.name.error}
        helperText={form.name.error ? form.name.helperText : ''}
        label="Digite seu nome"
        variant="outlined"
        name="name"
        value={form.name.value}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <TextField
        error={form.job.error}
        helperText={form.name.error ? form.job.helperText : ''}
        label="Digite seu cargo"
        name="job"
        value={form.job.value}
        onChange={handleInputChange}
      />
      <br />
      <br />
      <Button variant="contained" color="secondary" onClick={handleAddButton} disabled={loading}>
        {loading ? 'Aguarde...' : 'Modificar'}
      </Button>

      <Toasty
        onClose={() => setOpenToasty(false)}
        open={openToasty}
        severity={'success'}
        message={'Cadastro alterado com sucesso'}
      />
    </>
  )
}

export default Edit
