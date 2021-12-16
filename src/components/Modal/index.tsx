/* eslint-disable */
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import Styles from './style.module.scss'
import closeIcon from '@icons/close-gray.svg'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
)

export const TransitionsModal = (props) => {
  const classes = useStyles()

  const handleClose = () => {
    props.setModalOpened(false)
  }

  return (
    <div>
      <Modal
        disablePortal={props.disablePortal}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={props.isOpenModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { opacity: props.opacity },
        }}
        style={props.style}
      >
        <Fade in={props.isOpenModal}>
          <div className={Styles.modal_container}>
            <div className={`${Styles.content} ${props.className}`}>{props.children}</div>
            {props.onClose && (
              <div
                role='presentation'
                onClick={() => {
                  props.setModalOpened(false)
                }}
                className={Styles.close_container}
              >
                <img src={closeIcon} className={Styles.close_icon} />
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
