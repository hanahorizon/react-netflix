import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div class="banner">
      <div class="overlay">
        <div class="banner-content">
          <div class="headings">
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Starts at ₹149. Cancel at any time.</h3>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          <div class="email-input">
            <input type="email" placeholder="Email address" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner