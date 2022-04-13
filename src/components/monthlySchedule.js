import FileReturns from '../images/fileReturns.png';
import MonthlyRemittance from '../images/MONTHLY/MonthlyRemittance.png';
import SearchMonthly from '../images/MONTHLY/searchMonthly.png';
import UploadMonthlyRemittance from '../images/MONTHLY/uploadMonthlyRemittance.png';
import ViewMonthlyRemittance from '../images/MONTHLY/viewMonthlyRemittance.png';

const MonthlySchedule = () => {
    return (
        <div>
         <div className = "monthlySchedule-header">
         <div className = "monthlySchedule-header-text">
         <h3>Upload Monthly PAYE Returns</h3>
        <p>step-by-step instructions to upload and view </p>
         </div>
      </div>
         
         <div className = "monthlySchedule-contents">
         <h5>UPLOAD</h5>
        <p>To Upload monthly PAYE remittance schedule, click on the FILE RETURNS button on the side menu bar.</p>
        <img src= {FileReturns} alt="fileReturns"/>


        <p> Click on UPLOAD MONTHLY PAYE REMITTANCE SCHEDULE on the upload/view page.</p>
        <img src= {MonthlyRemittance} alt="MonthlyRemittance-img"></img>

        <p>On the upload monthly PAYE remittance schedule page, there are buttons to:
        <ul>
          <li>Select period – this provides you with a dropdown with which you select the month,year you intend to
            upload for, select station, select payment method.
          </li>
          <li>Choose csv file – Click on CHOOSE FILE to upload the file already entered correctly by the taxpayer.
            <strong>Please
              note
              that a sample is shown on the page,</strong> download csv file button is also provided below
            the page.
            This is to ensure taxpayers gets the correct format to file in the monthly PAYE remittance schedule.
          </li>
        </ul>

        </p>
        <p>
          After choosing the correct file, click on UPLOAD.
        </p>
        <img src= {UploadMonthlyRemittance} alt="uploadMonthlyRemittance"></img>




        <h5>VIEW</h5>
        <p>To view monthly PAYE remittance schedule uploaded, simply click on VIEW monthly PAYE remittance schedule.</p>
        <img src= {ViewMonthlyRemittance} alt="Vie wMonthlyRemittance"></img>

        <p>Select year, month and click on SEARCH.</p>
        
        <img src= {SearchMonthly} alt="SearchMonthly"></img>
         </div>
        </div>
    )
}

export default MonthlySchedule;
