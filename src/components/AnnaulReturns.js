import React from 'react'

const AnnaulReturns = () => {
    return (
        <div>

<div className = "annualReturns-header">

 <div className = "annualReturns-header-text">
 <h3>File Annual PAYE Returns</h3>
 <p>Follow step-by-step instructions to upload and view </p>
</div>
</div>

    <div className = "annualReturns-content">
  
    <h5>UPLOAD</h5>
        <p>click on the FILE RETURNS button on the side menu.</p>
        <img src="images/FILE RETURN.png" alt=""></img>


        <p>Buttons are provided to file and view on the upload and view page. Click on UPLOAD ANNUAL PAYE
          RETURNS to upload your schedule. </p>
        <img src="images/ANNUAL/Annual PAYE.png" alt=""></img>

        <p>
          On the upload annual PAYE returns page, there are options to:

        <ul>
          <li>Select year – this provides you with a dropdown with which you select the year you intend to upload for
          </li>
          <li>Choose csv file – Click on CHOOSE FILE to upload the file already entered with the right format by the
            taxpayer.
            <strong>Please note that a sample is shown on the page.</strong> Download csv file /download guide buttons
            are
            provided below
            the page.
            This is to ensure taxpayers gets the correct format to file in the annual return and guide
            taxpayers through the process.
          </li>
        </ul>
        </p>

        <p>
          After choosing the correct file click on UPLOAD.
        </p>
        <img src="images/ANNUAL/ANNUAL UPLOAD.png" alt=""></img>


        <p>
          If all data entered are in the correct format you should get a success message, if not, the system will throw
          up
          error message(s).
        </p>


        <img src="logos/up_annual.PNG" alt=""></img>

        <h5>VIEW</h5>
        <p>
          To view annual PAYE returns uploaded, simply click on VIEW ANNUAL PAYE RETURNS.
        </p>
        <img src="images/ANNUAL/View annual paye.png" alt=""></img>

        <p>Select year and click SEARCH.</p>
        <img src="images/ANNUAL/view annual  return.png" alt=""></img>

    </div>            
    </div>
    )
}

export default AnnaulReturns;
