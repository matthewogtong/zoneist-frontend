import React from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { leaveZone, openModal, closeModal } from "../../redux/user"
import CompletedZone from './CompletedZone'
import Timer from './Timer'
import Modal from 'react-modal'

const InTheZone = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const userId = useSelector((state) => state.user.entities[0].id)
  const currentZone = useSelector(
    (state) => state.user.entities[0].zones.slice(-1)[0]
  )
  const isInZone = useSelector(state => state.user.inZone)
  const modalState = useSelector(state => state.user.modalOpen)


  const handleClick = () => {
    dispatch(leaveZone())
    history.push("/home")
  }

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <div className="in-zone-div">
      {modalState ? (
        <Modal
          isOpen={modalState}
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={false}
          style={customStyles}
          contentLabel="Example Modal"
        />
      ) : null}
      <Timer />
      <h1>Currently in Zone</h1>
      <h3>Objective: {currentZone.objective}</h3>
      <h3>
        Total Expected Zone Time: {currentZone.totalObjectiveTime} minutes
      </h3>
      <h3>Start Time: {currentZone.zoneStart}</h3>
      <h3>Time Remaining: </h3>
      <h3>Region: {currentZone.region.name}</h3>
      <h3>Trinket being crafted: {currentZone.trinket.name}</h3>
      <button onClick={(e) => handleClick()}>End Zone</button>
    </div>
  );
}

export default InTheZone