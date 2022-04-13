import { Link } from "react-router-dom";
import BookIntro from '../images/menu/bookintro.png'
import NumberOne from '../images/menu/number_one.png'
import NumberTwo from '../images/menu/number_two.png'
import NumberThree from '../images/menu/number_three.png'
import NumberFour from '../images/menu/number_four.png'
import NumberFive from '../images/menu/number_five.png'

const Menu = () => {
    return (
        <div className = 'menu'>
        <div>
        <img style={{width: '30%'}} src= {BookIntro} alt="Intro-img"></img>
            <Link  to="/tax-payers-guide/"><p>Introduction</p></Link></div>
        
        <div>
        <img style={{width: '30%'}} src= {NumberOne} alt="int-1"></img>
        <Link to="/tax-payers-guide/onboarding"><p>Onboarding</p></Link></div>
        
       
        <div>
        <img style={{width: '30%'}} src= {NumberTwo} alt="int-2"></img>
        <Link to="/tax-payers-guide/annualReturns"><p>Upload and View Annual Returns</p></Link></div>
            
    
        <div>
        <img style={{width: '30%'}} src= {NumberThree} alt="int-3"></img>
        <Link to="/tax-payers-guide/monthlySchedules"><p>Upload and View Monthly Schedule</p></Link></div>
    
        <div>
        <img style={{width: '30%'}} src= {NumberFour} alt="int-4"></img>
        <Link to="/tax-payers-guide/withHoldingTax"><p>Upload and View Withholding</p></Link></div>
    
        <div>
        <img style={{width: '30%'}} src= {NumberFive} alt="int-5"></img>
        <Link to="/tax-payers-guide/paymentOptions"><p>Make Payment</p></Link></div>
        </div>
        
    )
}

export default Menu
