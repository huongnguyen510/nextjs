export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className='sidebar__header'>
          <div className="sidebar__logo">
            <img src="http://edinareact.ibthemespro.com/img/logo/dark.png" alt="logo" />
          </div>
        </div>
        <div className='sidebar__nav'>
          <ul id="clickmenu" className="clickmenu">
            <li className="clickmenu__item clickmenu__active">
              <a href="#home"><img className="svg custom" src="images/nav-home.svg" alt="icon" />Home</a>
            </li>
            <li className="clickmenu__item">
              <a href="#about"><img className="svg custom" src="images/nav-human.svg" alt="icon" />About</a>
            </li>
            <li className="clickmenu__item">
              <a href="#service"><img className="svg custom" src="images/nav-service.svg" alt="icon" />Service</a>
            </li>
            <li className="clickmenu__item">
              <a href="#portfolio"><img className="svg custom" src="images/nav-portfolio.svg" alt="icon" />Portfolio</a>
            </li>
            <li className="clickmenu__item">
              <a href="#testimonial"><img className="svg custom" src="images/nav-testimonial.svg" alt="icon" />Testimonial</a>
            </li>
            <li className="clickmenu__item">
              <a href="#blog"><img className="svg custom" src="images/nav-blog.svg" alt="icon" />Blog</a>
            </li>
            <li className="clickmenu__item">
              <a href="#contact"><img className="svg custom" src="images/nav-contact.svg" alt="icon" />Contact</a>
            </li>
          </ul>
        </div>
        <div class="sidebar__footer">
          <div className="sidebar__footer__avatar">
            <img src="http://edinareact.ibthemespro.com/img/about/avatar.jpg" alt="me" />
          </div>
          <div className="sidebar__footer__infor">
            <h3>Huong Nguyen</h3>
            <a href="mailto:huong@sentius.com.au">huong@sentius.com.au</a>
          </div>
        </div>
      </div>
    </>
  )
}
