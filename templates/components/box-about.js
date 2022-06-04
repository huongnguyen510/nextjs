import React, { memo } from "react";

function ShowAbout({ databoxabout = [] }) {

  let { boxtitle, summary, skillhead, skills, photo, experiance, button } = databoxabout;

  return (
    <div className="about" id="about">
      <div className="container">
        <h2 className="about__title">{boxtitle}</h2>
        <div className="about__row">
          <div className="about__left">
            <div className="about__info">{summary}</div>
            <div className="about__skill">{skillhead}</div>
            <div className="about__listprogress">
              {skills.map((skill, index) => (
                <div key="{index}" className="about__progress">
                  <div className="about__label">{skill.label}</div>
                  <div className="about__bg">
                    <div className="about__bar" style={{ width: skill.width }} />
                  </div>
                </div>
              ))}
              {button && <a href={button.url} className="about__see btn">{button.name}</a>}
            </div>
            <div className="about__right">
              <img src={photo} alt="About Me" />
              <div className="about__year">{experiance}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ShowAbout)