import React, { memo } from "react";

function ShowHome({ databoxhome = [] }) {

  let { avatar, fullname, position, introduction, socials, button } = databoxhome

  return (

    <div className="person" id="home">
      <div className="person__container">
        <div className="person__img">
          <img src={avatar} />
        </div>
        <div className="person__text">
          <h5>{fullname}</h5>
          <h1>{position}</h1>
          <p>{introduction}</p>
        </div>
        <ul className="person__social">
          {socials.map((socialicon, index) => (
            <li key={index} >
              <a href={socialicon.link} target="_blank">
                <img src={socialicon.icon} />
              </a>
            </li>
          ))}
        </ul>
        <div className="person__download">
          {button && <a href={button.url} className="btn">{button.name}</a>}
        </div>
      </div>
    </div>
  );
}

export default memo(ShowHome)