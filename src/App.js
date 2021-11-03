import Menu  from "./components/Menu";
import MainHeader from "./components/MainHeader";
import Introduction from "./components/introduction";
import Onboarding from './components/onboarding';
import MonthlySchedule from './components/monthlySchedule';
import PaymentOption from './components/PaymentOption';
import withHoldingTax from './components/withHoldingTax';
import AnnaulReturns from './components/AnnaulReturns';




// import { useSelector } from 'react-redux';

import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  
  return (
        <Router>
    <div className="App">
      <MainHeader/>
      <div>
        <Menu/>
        {/* <Introduction/> */}
      </div>
      <switch>
      <Route path ='/' exact component = {Introduction}/>
      <Route path = "/onboarding" component = {Onboarding}/>
      <Route path = "/monthlySchedules" component = {MonthlySchedule}/>
      <Route path = "/paymentOptions" component = {PaymentOption}/>
      <Route path = "/withHoldingTax" component = {withHoldingTax}/>
      <Route path = "/annualReturns" component = {AnnaulReturns}/>
      </switch>
    </div>
      </Router>
  );
}

export default App;
