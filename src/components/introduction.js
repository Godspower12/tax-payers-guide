import { Link } from "react-router-dom"
const Introduction = () => {
    return (
        <div>
    <div className='intro-header'>
      
      <div className='intro-header-text'>
        <h3>
        Introduction:
        Easy Management of PAYE and Withholding Tax </h3>
      <p>A step-by-step
        guide to filing returns / schedules.</p>

        </div>
    </div>

<div className = 'intro-content'>
            <h5>OVERVIEW</h5>
            <p>
            The eTax portal is designed to automate payment, filing of PAYE and Withholding
          taxes. Taxpayers get to see their tax history and can print receipt from this site.
            </p>

            <p>
          This guide will walk
          you through the steps to use the eTax portal.
          A document template for download is provided; taxpayers can choose convenient payment option of their
          choice.
        </p>

        <h5>APPLICATION STRUCTURE</h5>
        <p>
          The diagram below provides a visual representation of the eTax portal. This is to help understand the
          activities that can be carried out on the portal.
        </p>

        <img src="tax manager.png" alt="Tax manager"></img>

        <h5>Chapters</h5>
        <p>
          This guide is divided into four short chapters</p>


          <ol>

          <li><Link to="/onboarding">How to Onboard</Link><span>: Enter
              KGTIN
              and set
              password</span>
          </li>
          <li><Link to="/annualReturns">Upload Annual PAYE Returns</Link><span>: Enter and save data in the correct
              format,upload and view annual PAYE returns</span>
          </li>
         
          <li><Link to="/monthlySchedules">Upload Monthly Schedule</Link><span>: Enter and save data in the correct format, upload and view
              monthly schedule</span></li>
          
          <li><Link to="/withHoldingTax">Upload/View Withholding Tax Schedule</Link><span>: Enter and save data in the correct format, upload and view
              withholding tax schedule.</span></li>
         
          <li><Link to="/paymentOptions">Make Payment</Link><span>: Choose payment option most suitable for
              you and proceed to make payment</span> </li>
        </ol>
</div>
        </div>
    )
}

export default Introduction
