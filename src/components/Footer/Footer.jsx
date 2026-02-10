import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="contact">
          <p><a href="#">Questions? Call 000-800-919-1743</a></p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Help Centre</a></li>
            <li><a href="#">Account</a></li>
            <li><a href="#">Media Centre</a></li>
          </ul>

          <ul>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Ways to Watch</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>

          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">Corporate Information</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

          <ul>
            <li><a href="#">Speed Test</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Only on Netflix</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>

          <ul>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Legal Notices</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className='translate'>
          <button ><select name="language"  className='lang-btn'>
          <option value="English" >English</option>
          <option value="hindi" >Hindi</option></select>
        </button>
        </div>

        <div className="copyright">
          <p>Netflix India</p>
          <span>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer