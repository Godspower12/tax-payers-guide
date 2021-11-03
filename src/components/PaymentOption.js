import { Link } from "react-router-dom"
const PaymentOption = () => {
    return (
        <div>
           <div className = "paymentOption-header">
        <div className = "paymentOption-header-text">
        <h3>Proceed to Make Payment
      </h3>
      <p>Follow step-by-step instructions to complete payment </p>
        </div>

     </div> 
           <div className = "paymentOption-content">
           <h5>MAKING PAYMENT</h5>
        <p>Payment can be made online or through any bank branch. <strong>Please note payment should be done through
            Remita, Paystack or eTranzact(webConnect).</strong></p>

        <h5><Link to="#">Online Payment</Link></h5>
        <p>
          Upon successful filing (monthly remittance and withholding tax schedule), you will be redirected to the
          payment
          page. To continue with online payment click on
          the pending
          invoice you wish to pay for.</p>

        <img src="images/payment PG screenshot/Make payment.png" alt="" class=''></img>
        <ul>
          <li>Pay – This button is to continue payment online.
          </li>
          <li>Enter Payment Reference Number – This is to update reference number for payments made through the bank.
          </li>
          <li>Delete - To delete records.
          </li>
        </ul>

        <p> To continue with online payment, click on PAY.</p>
        <img src="images/payment PG screenshot/clickon pay.png" alt=""></img>

        <p>Select payment method and the tax station on the dropdown that pops up and click on PROCEED.</p>
        <img src="images/payment PG screenshot/proceed.png" alt=""></img>

        <p>On the service payment provider confirmation page, provide you email and phone number, click on MAKE PAYMENT.</p>
        <img src="images/payment PG screenshot/pay.png" alt=""></img>


        <p>Click SUBMIT if satisfied with all the information on the service payment provider page.</p>
        <img src="images/payment PG screenshot/remitta.png" alt=""></img>

        <p>Provide your card details and click on PAY.</p>
        <img src="images/payment PG screenshot/remitta payment.PNG" alt=""></img>


        <p>Enter one time password sent by your service provider and click PAY.</p>
        <img src="images/payment PG screenshot/pay remitta.PNG" alt=""></img>


        <p>Upon successful payment you will be redirected to the successful payment page.</p>
        <img src="images/payment PG screenshot/sucessful payment.PNG" alt=""></img>

        <h5>Bank Payment</h5>
        <p> Bank payment must be made through remita, paystack or eTranzact( webConnect) with your KGTIN. Payment can be made before or after uploading schedule. Ensure to update payment reference on the the portal after payment.
        </p>

        <p>To update Reference number from the dashboard, click on PAYMENT button.</p>
        <img src="images/payment PG screenshot/payment dashboard.png" alt=""></img>

        <p>Click on PENDING INVOICES to navigate to the payment page..</p>
        <img src="images/payment PG screenshot/pending invoices.png" alt=""></img>

        <p>
          Buttons are provided to pay, update and delete record with details of the selected invoice.Click on ENTER
          PAYMENT REFERENCE NUMBER.
        </p>
        <img src="images/payment PG screenshot/update ref page.png" alt=""></img>

        <p>Fill the dropdown provided with the Payment Reference gotten from the Bank then click on GO.</p>
        <img src="images/payment PG screenshot/go pagepng.png" alt=""></img>

        <p>Upon successful update, you will be prompted..</p>
        <img src="images/payment PG screenshot/ref update suc.png" alt=""></img>
        </div> 
        </div>
    )
}

export default PaymentOption;
