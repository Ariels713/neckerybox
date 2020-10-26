import React from 'react'

// reactstrap components
import { Alert, Container } from 'reactstrap'

// core components

function PreFooterNotification() {
  const [alertDanger, setAlertDanger] = React.useState(true)
  return (
    <>
      <Alert className='alert-with-icon' color='danger' isOpen={alertDanger}>
        <Container>
          <div className='alert-wrapper'>
            <button
              type='button'
              className='close'
              data-dismiss='alert'
              aria-label='Close'
              onClick={() => setAlertDanger(false)}
            >
              <i className='nc-icon nc-simple-remove' />
            </button>
            <div className='message'>
              <i className='nc-icon nc-bell-55' /> Don't forget to sign up for
              our mailing list for exclusive offers and giveaways! style.
            </div>
          </div>
        </Container>
      </Alert>

      {/* end notifications */}
    </>
  )
}

export default PreFooterNotification
