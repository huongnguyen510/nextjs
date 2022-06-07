import React, { memo } from "react";

function ShowContact({ databoxcontact = [] }) {

  let { boxtitle, description, contacts, formtitle, map } = databoxcontact

  return (
    <div className="contactform" id="contact">
      <div className="contactform__container container">
        <div className="contactform__title">
          <h2>{boxtitle}</h2>
          <p>{description}</p>
        </div>
        <div className="contactform__info">
          {contacts.map((icon, index) => (
            <div key={index} className="contactform__threecol">
              <div className="contactform__inner">
                <div className="contactform__icon">
                  <img src={icon.icon} alt={icon.title} />
                </div>
                <div className="contactform__content">
                  <h3>{icon.title}</h3>
                  <p>{icon.infor}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="contactform__formmap">
          <div className="contactform__form">
            <div className="contactform__innerform">
              <div className="contactform__formtitle">
                <p>{formtitle}</p>
              </div>
              <form>
                <div className="form-item form-type-textfield"><input name="name" type="text" placeholder="Name *" /></div>
                <div className="form-item form-type-textfield"><input name="email" type="email" placeholder="Email *" /></div>
                <div className="form-item form-type-textfield"><textarea name="message" placeholder="Message *"></textarea></div>
                <div className="form-item form-type-textfield"><button type="submit" className="color">Submit</button></div>
              </form>
            </div>
          </div>
          <div className="contactform__map">
            <iframe className="embed-responsive-item" title="my location" src={map}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ShowContact)