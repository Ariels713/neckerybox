import './App.css'
import { Switch, Route } from 'react-router-dom'
import { AuthProvider } from './components/authProvider/AuthProvider'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import Navigation from './components/navigation/Navigation'
// Test Route Page
import AccountPageTEST from './components/accountPage/AccountPageTEST'
import MainHeader from './components/mainHeader/MainHeader'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <MainHeader />
        <Switch>
          <PrivateRoute path='/accountPageTEST' component={AccountPageTEST} />
        </Switch>
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
