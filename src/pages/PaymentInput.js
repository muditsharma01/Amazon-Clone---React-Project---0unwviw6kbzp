import React, { useState } from 'react';
import {logo} from "../assets/index"

function PaymentInput() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  if (cardNumber && cardName && expiryDate && cvv) {
    console.log('Form submitted:', {
      cardNumber,
      cardName,
      expiryDate,
      cvv,
    });
    // Change page here
  } else {
    alert('Please fill all fields properly');
  }
}
  

  return (
    <div className="w-full h-screen">
        <div className='flex flex-col items-center'>
                <img className='w-34 h-40' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png" alt="" />
        </div>
        
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      
        <div className='mb-4'>
        <label htmlFor="Name" className="block text-gray-700 font-bold mb-2">First Name</label>
        <input
            type="text"
            name="Name"
            id="Fname"
            className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
            focus-within:shadow-amazonInput duration-100"
            placeholder="First Name"
            maxLength="50"
            required
          />
          <label htmlFor="LastName" className="block text-gray-700 font-bold mb-2">Last Name</label>
        <input
            type="text"
            name="LastName"
            id="Lname"
            className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
            focus-within:shadow-amazonInput duration-100"
            placeholder="Last Name"
            maxLength="50"
            required
          />
        </div>
        <div className='mb-5'>
        <label className="block text-gray-700 font-bold">
            <span>Street Address <span class="required">*</span></span>
            <input type="text" name="houseadd" placeholder="House number and street name" className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
            focus-within:shadow-amazonInput duration-100" required/>
            </label>
            <label className="block text-gray-700 font-bold">
            <span>&nbsp;</span>
            <input type="text" name="apartment" className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
            focus-within:shadow-amazonInput duration-100" placeholder="Apartment, suite, unit etc. (optional)"/>
            </label>
        </div>
        <div className="mb-5">
        
          <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
            focus-within:shadow-amazonInput duration-100"
            placeholder="0000 0000 0000 0000"
            maxLength="19"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-gray-700 font-bold mb-2">Cardholder Name</label>
          <input
            type="text"
            name="cardName"
            id="cardName"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
            focus-within:shadow-amazonInput duration-100"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="mb-4 flex justify-between">
          <div className="w-1/2 mr-2">
            <label htmlFor="expiryDate" className="block text-gray-700 font-bold mb-2">Expiration Date</label>
            <input
              type="text"
              name="expiryDate"
              id="expiryDate"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
              focus-within:shadow-amazonInput duration-100"
              placeholder="MM/YY"
              maxLength="5"
              required
            />
          </div>
          <div className="w-1/2 ml-2">
            <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="border border-gray-400 py-2 px-4 w-full rounded-md mb-4 before:border border-l-amazon_blue focus-within:border-[#e77600]
              focus-within:shadow-amazonInput duration-100"
              placeholder="123"
              maxLength="3"
              required
            />
          </div>
        </div>
        <div>
        <input className='text-sm' type="radio" name="dbt" value="dbt" checked/><span> Direct Bank Transfer</span>
        </div>
        <p className='text-sm w-3/5'>
            Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div>
        <input type="radio" name="dbt" value="cd"/><span> Cash on Delivery</span>
        </div>
        <div>
        <input type="radio" name="dbt" value="cd"/> Paypal <span>
        <img src="https://www.logolynx.com/images/logolynx/c3/c36093ca9fb6c250f74d319550acac4d.jpeg" alt="" width="50"/>
        </span>
        </div>
        <div className="mt-6">
          <button  className="w-64 items-center flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amazon_yellow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" type="submit">
            Submit Payment
          </button>
        </div>
      </form>
    </div>

  )
}
export default PaymentInput;