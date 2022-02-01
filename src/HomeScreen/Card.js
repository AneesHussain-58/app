import React from 'react';
// import './cardd.css'
const Card = (props) => {
  return (
      <>
            <div className="container">
            <div className="cards">
              <div className="card">
                  <img src={props.image} alt="mypic" className='card_img' style={{borderRadius:20}}/>
                  <div className="card_info">
                          <button className='card-btn'>watch now</button>
                          <p className="card_category">{props.title}</p>
                      <h3 className="card_title">{props.name}</h3>
                  </div>
              </div>
          </div>
            </div>
      </>
  );
};

export default Card;
