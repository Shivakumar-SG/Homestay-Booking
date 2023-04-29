import React from 'react'
import './Homestay1.css'

function Homestay1() {
  return (
    <div className="homestay1-container">
      <h1>Beautiful Homestay in the Mountains</h1>
      <div className="homestay1-image"></div>
      <div className="homestay1-details">
        <h2>Details</h2>
        <p>Location: Mountains</p>
        <p>Price: $100 per night</p>
        <p>Bedrooms: 2</p>
        <p>Bathrooms: 2</p>
        <p>Capacity: 4 guests</p>
      </div>
      <div className="homestay1-booking">
        <h2>Book Your Stay</h2>
        <form>
          <label htmlFor="checkin">Check-in Date:</label>
          <input type="date" id="checkin" name="checkin" required />
          <br />
          <label htmlFor="checkout">Checkout Date:</label>
          <input type="date" id="checkout" name="checkout" required />
          <br />
          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  )
}

export default Homestay1