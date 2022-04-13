import Menu  from "./components/Menu";
import MainHeader from "./components/MainHeader";
import Introduction from "./components/introduction";
import Onboarding from './components/onboarding';
import MonthlySchedule from './components/monthlySchedule';
import PaymentOption from './components/PaymentOption';
import WithHoldingTax from "./components/withHoldingTax";
import AnnaulReturns from './components/AnnaulReturns';



import { Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
      <MainHeader/>
        <Menu/>
      <Routes>
      <Route path ="tax-payers-guide/" element = {<Introduction/>}/>
      <Route path = "tax-payers-guide/onboarding"  element = {<Onboarding/>}/>
      <Route path = "tax-payers-guide/monthlySchedules" element = {<MonthlySchedule/>}/>
      <Route path = "tax-payers-guide/paymentOptions" element = {<PaymentOption/>}/>
      <Route path = "tax-payers-guide/withHoldingTax" element = {<WithHoldingTax/>}/>
      <Route path = "tax-payers-guide/annualReturns" element = {<AnnaulReturns/>}/>
      </Routes>
    </div>
  );
}

export default App;
