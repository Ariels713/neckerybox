import React, { useState, useReducer, useCallback } from 'react'
import { withRouter } from 'react-router'
// import { AuthContext } from "../authProvider/AuthProvider";
import firebase from '../../firebase/firebase'

// reactstrap components
import { Button, FormGroup, Input, Modal, Form, Alert } from 'reactstrap'
import { reducer, initialState } from './reducers/LogInReducer'

const AccountModal = ({ history }) => {
  //open and close modal
  const [loginModal, setLoginModal] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState)
  const {
    createUser,
    userEmail,
    userPassword,
    newUserName,
    newUserEmail,
    newUserPassword,
    isLoading,
    error,
    // isLoggedIn,
  } = state

  //Registers a new user
  const registerUser = useCallback(
    async (event) => {
      event.preventDefault()
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(newUserEmail, newUserPassword)
          .then((res) => {
            res.user.updateProfile({ displayName: newUserName }) // creates a display name.  You have access to that display name
            res.user.sendEmailVerification(() => {})
            dispatch({ type: 'REGISTERING_USER' })
            setLoginModal(false)
          })

        history.push('/accountPageTEST')
      } catch (e) {
        let errorCode = e.code
        let errMessage = e.message
        console.log(e)
        if (errorCode === 'auth/email-already-in-use') {
          // all error codes
          dispatch({ type: 'EMAIL_IN_USE' })
        } else if (errorCode === 'auth/invalid-email') {
          dispatch({ type: 'INVALID_EMAIL' })
        } else if (errorCode === 'auth/operation-not-allowed') {
          dispatch({ type: 'USER_DISABLED' })
        } else if (errorCode === 'auth/operation-not-allowed') {
          dispatch({ type: 'USER_NOT_FOUND' })
        } else if (errorCode === 'auth/weak-password') {
          dispatch({ type: 'WEAK_PASSWORD' })
        } else console.log(errMessage)
      }
    },
    [newUserEmail, newUserPassword, history, newUserName]
  )

  const logInUser = useCallback(
    async (event) => {
      event.preventDefault()
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(userEmail, userPassword) //logs in user
          .then((res) => {
            dispatch({ type: 'LOG_IN_USER' })
            setLoginModal(false)
          })
        history.push('/accountPageTEST')
      } catch (e) {
        let errorCode = e.code
        let errMessage = e.message
        console.log(e)
        if (errorCode === 'auth/wrong-password') {
          dispatch({ type: 'WRONG_PASSWORD' })
        } else if (errorCode === 'auth/invalid-email') {
          dispatch({ type: 'INVALID_EMAIL' })
        } else if (errorCode === 'auth/user-disabled') {
          dispatch({ type: 'USER_DISABLED' })
        } else if (errorCode === 'auth/user-not-found') {
          dispatch({ type: 'USER_NOT_FOUND' })
        } else if (errorCode === 'auth/weak-password') {
          dispatch({ type: 'WEAK_PASSWORD' })
        } else console.log(errMessage)
      }
    },
    [history, userEmail, userPassword]
  )

  const handleGoogleSignIn = async (e) => {
    // lets use get authenticatted with google sign in via popup
    e.preventDefault()
    const provider = new firebase.auth.GoogleAuthProvider()
    try {
      await firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          dispatch({ type: 'LOG_IN_USER' })
          setLoginModal(false)
        })
      history.push('/accountPageTEST')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button
        // className="btn-round"
        color='neutral'
        type='button'
        onClick={() => setLoginModal(true)}
      >
        My Account
      </Button>
      <Modal
        isOpen={loginModal}
        toggle={() => setLoginModal(false)}
        modalClassName='modal-register'
      >
        <div className='modal-header no-border-header text-center'>
          <button
            aria-label='Close'
            className='close'
            data-dismiss='modal'
            type='button'
            onClick={() => setLoginModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
          {createUser ? (
            <>
              <h3 className='modal-title text-center'>My Account</h3>
              <p>Log in to go to your accounts page</p>
              {error && <Alert color='danger'>{error}</Alert>}
            </>
          ) : (
            <>
              <h3 className='modal-title text-center'>Register</h3>
              <p>
                Register to create an account or register with Google Sign-in
              </p>
              {error && <Alert color='danger'>{error}</Alert>}
            </>
          )}
        </div>
        <div className='modal-body'>
          {createUser ? (
            <Form onSubmit={logInUser}>
              <FormGroup>
                <label>Email</label>
                <Input
                  placeholder='Email'
                  type='email'
                  name='userEmail'
                  value={userEmail}
                  onChange={(e) => {
                    dispatch({
                      type: 'FIELD',
                      name: 'userEmail',
                      payload: e.target.value,
                    })
                  }}
                />
              </FormGroup>
              <FormGroup>
                <label>Password</label>
                <Input
                  placeholder='Password'
                  type='password'
                  name='userPassword'
                  value={userPassword}
                  onChange={(e) => {
                    dispatch({
                      type: 'FIELD',
                      name: 'userPassword',
                      payload: e.target.value,
                    })
                  }}
                />
              </FormGroup>
              <Button block className='btn-round' color='danger'>
                {isLoading ? 'Loading...' : 'Login'}
              </Button>
            </Form>
          ) : (
            <>
              <div className='social text-center'>
                {/* <Button className="btn-just-icon mr-1" color="facebook">
                  <i className="fa fa-facebook" />
                </Button> */}
                <Button
                  className='btn-just-icon mr-1'
                  color='google'
                  onClick={handleGoogleSignIn}
                >
                  <i className='fa fa-google' />
                </Button>
                {/* <Button className="btn-just-icon" color="twitter">
                  <i className="fa fa-twitter" />
                </Button> */}
              </div>
              <Form onSubmit={registerUser}>
                <FormGroup>
                  <label>Name</label>
                  <Input
                    placeholder='Name'
                    type='text'
                    name='newUserName'
                    value={newUserName}
                    onChange={(e) => {
                      dispatch({
                        type: 'FIELD',
                        name: 'newUserName',
                        payload: e.target.value,
                      })
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Email</label>
                  <Input
                    placeholder='Email'
                    type='email'
                    name='newUserEmail'
                    value={newUserEmail}
                    onChange={(e) => {
                      dispatch({
                        type: 'FIELD',
                        name: 'newUserEmail',
                        payload: e.target.value,
                      })
                    }}
                  />
                </FormGroup>
                <FormGroup>
                  <label>Password</label>
                  <Input
                    placeholder='Password'
                    type='password'
                    name='newUserPassword'
                    value={newUserPassword}
                    onChange={(e) => {
                      dispatch({
                        type: 'FIELD',
                        name: 'newUserPassword',
                        payload: e.target.value,
                      })
                    }}
                  />
                </FormGroup>
                <Button block className='btn-round' color='danger'>
                  {isLoading ? 'Signing You Up!' : 'Register'}
                </Button>
              </Form>
            </>
          )}
        </div>
        {createUser ? (
          <div className='modal-footer no-border-footer'>
            <span className='text-muted text-center'>
              Create an{' '}
              <a
                href='#register'
                onClick={(event) => {
                  dispatch({ type: 'REGISTER' })
                }}
              >
                account
              </a>
              ?
            </span>
          </div>
        ) : (
          <div className='modal-footer no-border-footer'>
            <span className='text-muted text-center'>
              Registered?{' '}
              <a
                href='#login'
                onClick={(event) => {
                  dispatch({ type: 'LOG_IN' })
                }}
              >
                Log In
              </a>
              ?
            </span>
          </div>
        )}
      </Modal>
    </>
  )
}

export default withRouter(AccountModal)
