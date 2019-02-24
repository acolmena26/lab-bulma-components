import React from 'react';

const Navbar = () => {
  return(
    <nav className="navbar is-transparent" style={{ backgroundColor: "#f6f8fa"}}>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="https://bulma.io/">Home</a>
        </div>
      </div>

        {/* <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control"><CoolButton isSmall isDanger className="is-rounded my-class">Login</CoolButton></p>
              <p className="control"><CoolButton isSmall isSuccess isPrimary>Register</CoolButton></p>
            </div>
          </div>
        </div> */}
    </nav>
  )
}

export default Navbar;