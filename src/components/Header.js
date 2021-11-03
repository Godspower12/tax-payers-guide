import React from 'react'

const Header = () => {
    return (
        <div>
        <div className = "main-header">
    <nav>
    <a href='#'><img src="https://irs.kg.gov.ng/logo/klogo.png" alt=""></img>
      <span>KOGI STATE INTERNAL REVENUE SERVICE</span>
    </a>

    <button type='button' data-target="#navigation">
      <svg viewBox=" 0 0 80 100">
        <rect width="100" height="5"></rect>
        <rect y="30" width="100" height="5"></rect>
        <rect y="60" width="100" height="5"></rect>
      </svg>
    </button>

        <a href="#"><span>DASHBOARD</span>
        </a>
        <a href="#">
          <span>FILE RETURNS</span>
        </a>
        <div>
          <button href="#"  id='payment-btn'>
            PAYMENTS
            <i>arrow_drop_down</i>
          </button>
          <button id="btn"></button>
          <div id='dropdown'>
            <a href="#">Pending Invoices</a>
            <a href="#">Paid Invoices</a>
          </div>
        </div>
        {/* <!-- mobile  --> */}
        
          <div href="#">PAYMENTS</div>
          <div>
            <a href="#">Pending Invoices</a>
            <a href="#">Paid Invoices</a>
          </div>


        {/* <!-- profile  --> */}
        <div class="relative">
          <button href="#" id='pBtn'>
            <img src="./icons/baseline_person_pin_white_36dp.png" alt=""></img>
             
             <h6>Ovie Ernest</h6>
            <i class="material-icons pt-1">arrow_drop_down</i>
          </button>
          <button id="profileBtn"></button>
          <div class='hidden flex-col absolute lg:right-0 sm:left-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl'
            id='pDropdown'>
            <a href="#">Account Profile</a>
            <a href="#">Edit Profile</a>
            <a href="#">Logout</a>
          </div>
        </div>
        {/* <!-- mobile  --> */}
        <div>
          <div href="#">
            <img src="./icons/baseline_person_pin_white_36dp.png" alt=""></img>
            <h6>Ovie Ernest</h6>
          </div>
          <div id=''>
            <a href="#">Account Profile</a>
            <a href="#">Edit Profile</a>
            <a href="#">Logout</a>
          </div>
        </div>


      



  </nav>

            </div>
            <div></div>
        </div>
    )
}

export default Header
