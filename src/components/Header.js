import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <header>
          <div className="App-header">
                  
                <a href="/">
          <span class="material-icons md-48">face</span><p>WindBNB</p>
                </a>


                <div className="filter">
                  <input type="text" name="location" id="location" />
                  <input type="text" name="guests" id="guests" />
                </div>
          </div>
        </header>
    )
}

export default Header
