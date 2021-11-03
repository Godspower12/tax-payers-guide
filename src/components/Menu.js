import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div className = 'menu'>
        <div>
        <img className ="intro"
          src="https://cdn4.iconfinder.com/data/icons/miu/24/common-bookmark-book-open-outline-stroke-256.png" alt="Intro-img"></img>
            <Link  to="/"><p>Introduction</p></Link></div>
        
        <div>
        <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-one-128.png" alt="int-1"></img>
        <Link to="/onboarding"><p>Onboarding</p></Link></div>
        
       
        <div>
        <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-two-128.png" alt="int-2"></img>
        <Link to="/annualReturns"><p>Upload and View Annual Returns</p></Link></div>
            
    
        <div>
        <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-three-128.png" alt="int-3"></img>
        <Link to="/monthlySchedules"><p>Upload and View Monthly Schedule</p></Link></div>
    
        <div>
        <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-four-128.png" alt="int-4"></img>
        <Link to="/withHoldingTax"><p>Upload and View Withholding</p></Link></div>
    
        <div>
        <img src="https://cdn2.iconfinder.com/data/icons/integers/60/number-five-128.png" alt="int-5"></img>
        <Link to="/paymentOptions"><p>Make Payment</p></Link></div>
        </div>
        
    )
}

export default Menu
