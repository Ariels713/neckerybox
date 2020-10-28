import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase/firebase'
import { AuthContext } from '../authProvider/AuthProvider'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js'
// reactstrap components
import WeddingRing from '../../assets/icons/siteIcons'
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
  Form,
  FormGroup,
  Input,
  //   Label,
} from 'reactstrap'
// core components
import AccountModal from '../accountPage/AccountModal'

function Navigation() {
  const [bodyClick, setBodyClick] = useState(false)
  const [collapseOpen, setCollapseOpen] = useState(false)

  const [loggedOn, setLoggedOn] = useState(false)
  const { currentUser } = useContext(AuthContext)
  useEffect(() => {
    let headroom = new Headroom(document.getElementById('navbar-main'))
    // initialise
    headroom.init()
  })

  const logOutHandler = (e) => {
    e.preventDefault()
    firebase
      .auth()
      .signOut()
      .then(() => {
        setLoggedOn(false)
      })
      .catch((e) => {
        console.log(e, loggedOn)
      })
  }

  return (
    <>
      {bodyClick ? (
        <div
          id='bodyClick'
          onClick={() => {
            document.documentElement.classList.toggle('nav-open')
            setBodyClick(false)
            setCollapseOpen(false)
          }}
        />
      ) : null}
      <Navbar className='fixed-top' expand='lg' id='navbar-main'>
        <Container>
          <div className='navbar-translate'>
            <NavbarBrand
              id='navbar-brand'
              to='/'
              tag={Link}
              style={{ color: '#D151DB' }}
            >
              Neckery Box{' '}
            </NavbarBrand>
            <UncontrolledTooltip
              placement='bottom'
              target='navbar-brand'
              style={{ color: '#D151DB' }}
            >
              Neckery Box{' '}
            </UncontrolledTooltip>
            <button
              className='navbar-toggler'
              id='navigation'
              type='button'
              onClick={() => {
                document.documentElement.classList.toggle('nav-open')
                setBodyClick(true)
                setCollapseOpen(true)
              }}
            >
              <span className='navbar-toggler-bar bar1' />
              <span className='navbar-toggler-bar bar2' />
              <span className='navbar-toggler-bar bar3' />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className='ml-auto' navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='mr-2' color='default' caret nav>
                  Rings
                </DropdownToggle>
                <DropdownMenu className='dropdown-danger' right>
                  <DropdownItem to='/' tag={Link}>
                    All Components
                  </DropdownItem>
                  <DropdownItem to='/presentation' tag={Link}>
                    Presentation
                  </DropdownItem>
                  <DropdownItem
                    href='https://demos.creative-tim.com/paper-kit-pro-react/#/documentation/introduction?ref=pkpr-white-navbar'
                    target='_blank'
                  >
                    Documentation
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className='mr-2' color='default' caret nav>
                  Necklaces
                </DropdownToggle>
                <DropdownMenu className='dropdown-danger' right>
                  <DropdownItem to='/sections#headers' tag={Link}>
                    <i className='nc-icon nc-tile-56' />
                    Headers
                  </DropdownItem>
                  <DropdownItem to='/sections#features' tag={Link}>
                    <i className='nc-icon nc-settings' />
                    Features
                  </DropdownItem>
                  <DropdownItem to='/sections#blogs' tag={Link}>
                    <i className='nc-icon nc-bullet-list-67' />
                    Blogs
                  </DropdownItem>
                  <DropdownItem to='/sections#teams' tag={Link}>
                    <i className='nc-icon nc-single-02' />
                    Teams
                  </DropdownItem>
                  <DropdownItem to='/sections#projects' tag={Link}>
                    <i className='nc-icon nc-calendar-60' />
                    Projects
                  </DropdownItem>
                  <DropdownItem to='/sections#pricing' tag={Link}>
                    <i className='nc-icon nc-money-coins' />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to='/sections#testimonials' tag={Link}>
                    <i className='nc-icon nc-badge' />
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to='/sections#contact-us' tag={Link}>
                    <i className='nc-icon nc-mobile' />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color='default' caret nav>
                  Special Gift
                </DropdownToggle>
                <DropdownMenu className='dropdown-danger' right>
                  <DropdownItem to='/engagement' tag={Link}>
                    {/* <i>{WeddingRing}</i> */}
                    {/* <WeddingRing /> */}
                    Engagement
                  </DropdownItem>
                  <DropdownItem to='/anniversary' tag={Link}>
                    <i className='nc-icon nc-basket' />
                    Anniversary
                  </DropdownItem>
                  <DropdownItem to='/justbecause' tag={Link}>
                    <i className='nc-icon nc-badge' />
                    Just Because
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {currentUser ? (
                <>
                  <Button
                    color='neutral'
                    type='button'
                    tag={Link}
                    to='/accountPageTEST'
                  >
                    <span style={{ color: '#F5593D' }}>My Account</span>
                  </Button>

                  <Button
                    className='btn-link'
                    color='black'
                    onClick={logOutHandler}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <NavItem>
                  <AccountModal />
                </NavItem>
              )}
              <NavItem>
                <Button
                  className='btn-round'
                  style={{
                    backgroundColor: '#D151DB',
                    color: '#fff',
                    border: 'none',
                  }}
                  //   color='neutral'
                  href='https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-white-navbar'
                  target='_blank'
                >
                  <i className='nc-icon nc-cart-simple' /> Carts
                </Button>
              </NavItem>
            </Nav>
            <Form className='form-inline ml-auto'>
              <FormGroup className='has-white'>
                <Input placeholder='Search' type='text' />
              </FormGroup>
            </Form>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation
