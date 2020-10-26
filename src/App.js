import './App.css'
import { Switch, Route } from 'react-router-dom'
import { AuthProvider } from './components/authProvider/AuthProvider'
import PrivateRoute from './components/privateRoute/PrivateRoute'
import Navigation from './components/navigation/Navigation'
// Test Route Page
import AccountPageTEST from './components/accountPage/AccountPageTEST'
import MainHeader from './components/mainHeader/MainHeader'
import NewItems from './components/newestItems/NewItems'
import CenterContent from './components/centerContent/CenterContent'
import Designer from './components/meetDesigner/Designer'
import EaringCard from './components/centerCards/EaringCard'
import PreFooterNotification from './components/preFooter/PreFooterNotification'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />
        <MainHeader />
        <NewItems />
        <CenterContent />
        <Designer />
        <EaringCard />
        <EaringCard />
        <EaringCard />
        <Switch>
          <PrivateRoute path='/accountPageTEST' component={AccountPageTEST} />
        </Switch>
        <PreFooterNotification />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
