import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../../firebase/firebase'
import { AuthContext } from '../authProvider/AuthProvider'
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from 'headroom.js'
// reactstrap components
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
            <NavbarBrand id='navbar-brand' to='/' tag={Link}>
              Neckery Box{' '}
            </NavbarBrand>
            <UncontrolledTooltip placement='bottom' target='navbar-brand'>
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
                  <DropdownItem to='/about-us' tag={Link}>
                    <i className='nc-icon nc-bank' />
                    About-us
                  </DropdownItem>
                  <DropdownItem to='/add-product' tag={Link}>
                    <i className='nc-icon nc-basket' />
                    Add Product
                  </DropdownItem>
                  <DropdownItem to='/blog-post' tag={Link}>
                    <i className='nc-icon nc-badge' />
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to='/blog-posts' tag={Link}>
                    <i className='nc-icon nc-bullet-list-67' />
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to='/contact-us' tag={Link}>
                    <i className='nc-icon nc-mobile' />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to='/discover' tag={Link}>
                    <i className='nc-icon nc-world-2' />
                    Discover
                  </DropdownItem>
                  <DropdownItem to='/e-commerce' tag={Link}>
                    <i className='nc-icon nc-send' />
                    Ecommerce
                  </DropdownItem>
                  <DropdownItem to='/landing-page' tag={Link}>
                    <i className='nc-icon nc-spaceship' />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to='/login-page' tag={Link}>
                    <i className='nc-icon nc-lock-circle-open' />
                    Login Page
                  </DropdownItem>
                  <DropdownItem to='/product-page' tag={Link}>
                    <i className='nc-icon nc-album-2' />
                    Product Page
                  </DropdownItem>
                  <DropdownItem to='/profile-page' tag={Link}>
                    <i className='nc-icon nc-single-02' />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to='/register-page' tag={Link}>
                    <i className='nc-icon nc-bookmark-2' />
                    Register Page
                  </DropdownItem>
                  <DropdownItem to='/search-with-sidebar' tag={Link}>
                    <i className='nc-icon nc-zoom-split' />
                    Search Page
                  </DropdownItem>
                  <DropdownItem to='/settings' tag={Link}>
                    <i className='nc-icon nc-settings-gear-65' />
                    Settings Page
                  </DropdownItem>
                  <DropdownItem to='/twitter-redesign' tag={Link}>
                    <i className='nc-icon nc-tie-bow' />
                    Twitter
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Button
                  className='btn-round'
                  color='danger'
                  href='https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkpr-white-navbar'
                  target='_blank'
                >
                  <i className='nc-icon nc-cart-simple' /> Cart
                </Button>
              </NavItem>
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
