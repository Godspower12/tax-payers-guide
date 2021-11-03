import { Link } from "react-router-dom"

const Onboarding = () => {
    return (
        <div>
            
    <div className='onboarding-header'>
      <div className= 'onboarding-header-text'>
      <h3>Onboarding:
        Sign up on eTax</h3>
      <p>Follow step-by-step
        instructions to successfully onboard.</p>
      </div>
    </div>

<div className = 'onbarding-content'>
<h5>ONBOARDING</h5>
     <p>
          The basic requirement to onboard on eTax portal is your TIN number ( Tax Identification Number).
          The home
          page provides you with link to create a KGTIN for yourself if you do not have.

    </p>
        
            <h5><Link to="#">SIGN UP</Link><span className=''>:For new users.</span>
            </h5>
        
            <h5><Link to="#">INDIVIDUAL KGTIN REGISTRATION</Link><span className=''>:For
                individuals without KGTIN number.</span>
            </h5>
            
        <h5><Link to="#">NON INDIVIDUAL KGTIN REGISTRATION</Link><span className=''>:For non
                individuals without KGTIN numbers.</span>
            </h5>

            <h5><Link to="#">LOGIN</Link><span class=''>:For returning users who have
                successfully on-boarded.</span>
            </h5>

            <h5><Link to="#">FORGET PASSWORD</Link><span class=''>:To retrieve forgotten
                password for a returning user.</span>
            </h5>

        
          <h5><Link to="#">Sign Up</Link></h5>
          <p>For first time users with a TIN number click on SIGNUP on the home page.
          </p>

          <img src="images/ONBOARDING/ONBOARD.png" alt=""></img>


          <p>
            Provide TIN, click on the captcha, accept terms and conditions and click on GET STARTED. A token is sent to
            the
            phone number /
            email linked to the TIN number provided.
          </p>
          <img src="images/ONBOARDING/Startup.png" alt="Onboarding-startup.jpg"></img>
          <p>
            On the validation page, enter the token sent to you, set password, click turing, accept terms and condition
            then click on
            GET STARTED.
          </p>
          <img src="images/ONBOARDING/validation.PNG" alt="Validation-img"></img>
         
          <p> Successful onboarding redirects you to your dashboard.</p>
          <img src="images/dashboard.PNG" alt="dashboard-img"></img>

          <h5>
            LOGIN</h5>
          <p>
            Onboarding is done once. For returning users, provide your TIN number, enter your password, click on the
            captcha and
            click on LOGIN.
          </p>
          <img src="images/ONBOARDING/Login.png" alt=""></img>

          <p>
            Successful login redirects you to your dashboard.</p>
</div>
        </div>
    )
}

export default Onboarding;
