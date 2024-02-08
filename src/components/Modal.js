
const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className='overlay-background' onClick={() => setIsOpen(false)}>
        <div className='modal-position'>
          <div className='modal'>
            <h5 className='heading'>Congratulations, you won!</h5>
            <div className='modal-content'>
              <p>You finished the game with 15 moves.</p>
            </div>
            <button className='close-button' onClick={() => setIsOpen(false)}>Play Again</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal