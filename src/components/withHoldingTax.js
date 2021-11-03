const withHoldingTax = () => {
    return (
        <div>
    <div className = "withHoldingTax-header">
     <div className = "withHoldingTax-header-text"> 
     <h3>Upload Withholding Tax Schedule</h3>
      <p>Follow step-by-step instructions to upload and view </p>
     </div>
        </div>
            <div className = "withHoldingTax-contents">

            <h5>UPLOAD</h5>
        <p>Click on FILE RETURNS buttons on the side menu bar.</p>
        <img src="images/FILE RETURN.png" alt=""></img>

    <p>Click on UPLOAD MONTHLY WITHHOLDING TAX SCHEDULE on the upload/view page.</p>
    <img src="images/WHT/Upload WHT.png" alt=""></img>
     <ul>
       <li>Select period – this provides you with a dropdown with which you select month and year you intend to upload for.</li>
        <li>Choose csv file – Click on CHOOSE FILE to upload the file already entered correctly by the taxpayer.
        <strong>Please note that a sample is shown on the page.</strong> A download csv file button
            is provided below the page.
            This is to ensure taxpayers get the correct format to file in their Withholding Tax Schedule.</li>
        </ul>
        <p>After choosing the correct file, click on UPLOAD.</p>
        <img src="images/WHT/upload monthly WHT page.PNG" alt=""></img>
        
        <p>If all data entered are correct you should get a success message, if not, the system will throw up error message(s).</p>
         <h5>VIEW</h5>
        <p>
          To view monthly Withholding Tax Schedule uploaded, simply click on VIEW Withholding Tax Schedule
          schedule.
        </p>
        <img src="images/WHT/view WHT.png" alt=""></img>
        <p>Select year, month and click on SEARCH.</p>
        <img src="images/WHT/WHT SEARCH.png" alt=""></img>
</div>
    </div>
    )
}

export default withHoldingTax;
