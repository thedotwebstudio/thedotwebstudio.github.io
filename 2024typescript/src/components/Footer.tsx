function Footer() {
  return (
       <footer className="footer-wrapper">
        <div className="bg-animation">
          <div className="anim-cir"></div>
          <div className="anim-cir2"></div>
        </div>
        <div className="top">
          <div className="footer-navigation">
            <ul>
              <li>Work</li>
              <li>Studio</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="subscribe">
            Get industry insights and creative inspiration straight to your
            inbox.
          </div>
        </div>
        <div className="logo">Orange Studio</div>
        <div className="bottom">
          <div className="addr">Mumbai, INDIA.</div>
          <div className="social">
            <ul>
              <li>FB</li>
              <li>X</li>
              <li>INSTA</li>
            </ul>
          </div>
          <div className="copy-w">Copyright © mksh Studio</div>
        </div>
      </footer>
   );
}

export default Footer;
