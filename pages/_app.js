import React, { useEffect } from "react"
import Header from '../templates/layout/header'
import Sidebar from '../templates/layout/sidebar'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.getElementById("leftsidebar__changbg").onclick = function () { functionaddclass() };
    function functionaddclass() {
      var element = document.getElementById("allsite");
      element.classList.toggle("allsite");
    }
  }, []);
  return (
    <>
      <div className="mycv dark-mode">
        <div className="header-mobile">
          <Header />
        </div>
        <div className="header-mobile">
          <Sidebar />
        </div>
        <div className="content">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default MyApp
