import React, { useEffect } from "react"

export default function Header() {

  return (

    <div>
      <header className="header">
        <div className="header-inner">
          <div classname="logo">
            <a href="/">
              <img className="logo_dark" src="img/logo/dark.png" alt="brand" />
              <img className="logo_light" src="img/logo/light.png" alt="brand" />
            </a>
          </div>
        </div>
      </header>
    </div>
  )
}