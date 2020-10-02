import React from 'react';

const Hollywood = props => {
  return(
      <div>
          <section id="hollywood">
            <div className="hollywood container">
              <div className="hollywood-main">
             <h1>Watch on any platform, Free for everyhome</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Esse, perspiciatis perferendis! Dolore officiis, eum 
                perferendis obcaecati tempora ad maxime.</p>
            </div>
              <div className="hollywood-info">
                  <div className="hollywood-img">
                    <img src="/image/advet1.jpg" alt="img"  className="hollywood-film"/>
                    <h3>HOMEFRONT</h3>
                  <div className="hollywood-btn">
                  <button className="btn"><i className="fa fa-download"></i> Download</button>
                </div>
                </div>

                  <div className="hollywood-img">
                    <img src="/image/advet2.jpg" alt="img"  className="hollywood-film"/>
                    <h3>BATMAN</h3>
                  <div className="hollywood-btn">
                  <button className="btn"><i className="fa fa-download"></i> Download</button>
                </div>
                </div>
               </div>
                    
                <div className="hollywood-info">
                  <div className="hollywood-img">
                    <img src="/image/advet3.jpg" alt="img"  className="hollywood-film"/>
                    <h3>BATTLEFIELD2</h3>
                  <div className="hollywood-btn">
                  <button className="btn"><i className="fa fa-download"></i> Download</button>
                </div>
                </div>
                
                  <div className="hollywood-img">
                    <img src="/image/advet4.jpg" alt="img"  className="hollywood-film"/>
                    <h3>ASSASINCREED</h3>
                <div className="hollywood-btn">
                  <button className="btn"><i className="fa fa-download"></i> Download</button>
                </div>
               </div>
               </div>
             </div>
          </section>
      </div>
  )
}
export default Hollywood; 