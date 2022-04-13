import FileReturns from '../images/fileReturns.png';
import AnnualPAYE from '../images/ANNUAL/annualPAYE.png';
import AnnualUpload from '../images/ANNUAL/annualUpload.png';
import viewAnnualRet from '../images/ANNUAL/viewAnnualRet.png';
import viewAnnualPaye from '../images/ANNUAL/viewAnnualPaye.png';
import Dashboard from '../images/dashboard.PNG';
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
        <img src= {FileReturns} alt="fileReturns"/>


        <p>Buttons are provided to file and view on the upload and view page. Click on UPLOAD ANNUAL PAYE
          RETURNS to upload your schedule. </p>
        <img src={AnnualPAYE} alt="annualPAYE"/>

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
        <img src={AnnualUpload} alt="annualUpload"/>


        <p>
          If all data entered are in the correct format you should get a success message, if not, the system will throw
          up
          error message(s).
        </p>


        <img src= {Dashboard} alt="logo"/>

        <h5>VIEW</h5>
        <p>
          To view annual PAYE returns uploaded, simply click on VIEW ANNUAL PAYE RETURNS.
        </p>
        <img src={viewAnnualRet} alt="viewAnnualRet"/>

        <p>Select year and click SEARCH.</p>
        <img src= {viewAnnualPaye} alt="viewAnnualPaye"/>

    </div>            
    </div>
    )
}

export default AnnaulReturns;
