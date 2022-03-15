import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import { Card, CardHeader, CardActions, Avatar, IconButton } from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from './ModalConfirm'

const useStyles = makeStyles((theme) => (
  {
    root: {
      maxWidth: 345,
    }
  }
))

const CustomerCard = ({ id, name, lastName, email, avatar, className, onRemoveCustomer, onEditCustomer }) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleToggleModal = () => setOpenModal(!openModal)

  const handleConfirmModal = async (id) => {
    await onRemoveCustomer(id)
    handleToggleModal()
  }

  const handleEditCustomer = (id) => onEditCustomer(id)

  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              G
            </Avatar>
          }
          
          title={`${name} ${lastName}`}
          subheader={email}
        />

        <CardActions disableSpacing>
          <IconButton aria-label="editar usuário" onClick={() => handleEditCustomer(id)}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="deletar usuário" onClick={handleToggleModal}>
            <DeleteIcon />
          </IconButton>
        </CardActions>

      </Card>

      <ModalConfirm 
        open={openModal}
        onClose={handleToggleModal}
        onConfirm={() => handleConfirmModal(id)}
        title='Deseja realmente excluir esse cadastro?'
        message='Essa ação não poderá ser revertida, o usuário será removido do sistema!' 
      />
    </>
  )
}

export default CustomerCard
