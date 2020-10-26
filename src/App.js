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
import RingCard from './components/centerCards/RingCard'
import NecklaceCard from './components/centerCards/NecklaceCard'
import PreFooterNotification from './components/preFooter/PreFooterNotification'
import Footer from './components/footer/Footer'
import New_Item from './components/newestItems/New_Item'
function App() {
  return (
    <>
      <AuthProvider>
        <Navigation />

        <Switch>
          <PrivateRoute path='/accountPageTEST' component={AccountPageTEST} />
          <Route path='/newitems/:id' component={New_Item} />
          <Route path='/' exact>
            <MainHeader />
            <NewItems />
            <CenterContent />
            <Designer />
            <EaringCard />
            <RingCard />
            <NecklaceCard />
          </Route>
        </Switch>
        <PreFooterNotification />
        <Footer />
      </AuthProvider>
    </>
  )
}

export default App
