import React from 'react'


const Footer = function () {
    return <footer className='container footer'>
          <div className="link">

                <h5 style={{color:"#D7B065", fontSize:25}}>Digirack</h5>
                <p>The best NFT marketplace website in the world and feel your experience in selling or buy our work</p>
              
          </div>
          <div className="link">
                    <h5>About</h5>
                <ul>
                    <li>Product</li>
                    <li>Resource</li>
                    <li>Term & Condition</li>
                    <li>FAQ</li>
                </ul>

          </div>
          <div className="link">
            <h5>Company</h5>
          <ul>
                    <li>Our Team</li>
                    <li>Partner With Us</li>
                    <li>Privacy & Policy</li>
                    <li>Features</li>
                </ul>
          </div>
          <div className="link">
            <h5>Contact</h5>
          <ul>
                    <li>+012 3456789</li>
                    <li>adorableprogrammer@gmail.com</li>
                </ul>
          </div>
    </footer>

}


export default Footer;