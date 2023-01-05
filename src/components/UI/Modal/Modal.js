import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.css'

//plano de fundo
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>
}

//modal
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {/* conteudo que será exibido */}
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  )
}
export default Modal
