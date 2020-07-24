import React, { useState, useRef } from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'

// create the useRef and assign the value null 
Modal.setAppElement('#root')
function IdleTimerContainer() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const idleTimerRef = useRef(null)
    //session timeout need to set 
    const sessionTimeoutRef = useRef(null)
    const onIdle = () => {
        console.log('User is idle ')
        setModalIsOpen(true)
        sessionTimeoutRef.current = setTimeout(logOut, 5000)
    }
    const stayActive = () => {
        // Close the Model
        setModalIsOpen(false)
        // once reached clear the time out 
        clearTimeout(sessionTimeoutRef.current)
        console.log('User is Active ')
    }
    const logOut = () => {
        // User close the Modal and loggedOut
        setModalIsOpen(false)
        setIsLoggedIn(false)
        // once reached clear the time out 
        clearTimeout(sessionTimeoutRef.current)
        console.log('User has logged out ')
    }
    return (
        <div>
            {isLoggedIn ? <h2>Hello Sundar</h2> : <h2>Hello Guest</h2>}
            <Modal isOpen={modalIsOpen}>
                <h2>you have been idle for while!</h2>
                <p>You will be logged out soon</p>
                <button onClick={logOut}>Log me out</button>
                <button onClick={stayActive}>Keep me signed in </button>
            </Modal>
            <IdleTimer ref={idleTimerRef}
                timeout={5 * 1000}
                onIdle={onIdle}
            > </IdleTimer>
        </div>
    )
}

export default IdleTimerContainer
