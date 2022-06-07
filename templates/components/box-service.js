import React, {memo} from "react";

function ShowService({ databoxservice = [] }) {

  let { boxtitle, description, itemlist } = databoxservice


  return (
    
    <div className="service" id="service">
      <div class="container">
        <div className="service__title">
          <h2>{boxtitle}</h2>
          <p>{description}</p>
        </div>
        <div className="service__row">
          {itemlist.map((icon,index) =>(
            <div key={index} className="service__col">
              <div className="service__inner">
                <img className="service__icon" src={icon.icon} alt={icon.title} />
                <h3 className="service__name">{icon.title}</h3>
                <div className="service__link">
                  { icon.btn && <a href={icon.btn.url} className="service__learn">{icon.btn.name}</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default memo(ShowService)