import React from 'react';

const Hollywood = props => {
  return(
      <div>
          <section id="hollywood">
            <div className="hollywood container">
              <div className="hollywood-main">
             <h1>{props.heading}</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Esse, perspiciatis perferendis! Dolore officiis, eum 
                perferendis obcaecati tempora ad maxime dolorum voluptas 
                voluptatem quasi corporis asperiores. Minima omnis nobis 
                iure eum?</p>
            </div>
              <div className="hollywood-info">
                  <div className="hollywood-img">
                    <img src={props.pics} alt="img"  className="hollywood-film"/>
                    <img src={props.pics} alt="img"  className="hollywood-film2"/>
                    <h3>{props.title}</h3>
                  </div>
                <div className="hollywood-btn">
                  <button className="btn"><i className="fa fa-download"></i> Download</button>
                </div>
               </div>
             </div>
          </section>
      </div>
  )
}
export default Hollywood; 