const Modal = ({ counter, setIsOpen, shuffleBoard }) => {
  return (
    <>
      <div className='overlay-background' onClick={() => setIsOpen(false)}>
        <div className='modal-position'>
          <div className='modal'>
            <h5 className='heading'>Congratulations, you won!</h5>
            <div className='modal-content'>
              <p>You succeeded after {counter} moves.</p>
            </div>
            <button className='close-button' onClick={() => shuffleBoard()}>Play Again</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal