import React from 'react';
import Hollywood from './Hollywood';
import './index.css';

function App () {
  return (
    <div id ="container">
     <section className="img">
      <div className="heading">
        <div className="main-heading">
        <h1>Download unlimited movies</h1>
        <h3>Watch anywhere. Free download</h3>
        <p>Ready to download? Enter your email to create or restart your membership</p>
        <div className="main-input">
        <input type="text" placeholder="Email address" className="input-box" />
        <input type="button" className="btn-cta" value="GET STARTED &gt;" />
        </div>
        </div>
       </div>
      </section>
      <Hollywood heading="Watch on TV." pics="/image/advet1.jpg" title="HOMEFRONT"/>
      <Hollywood  heading="Download for free." pics="/image/advet2.jpg" title="BATMAN"/>
      <Hollywood  heading="For Every home." pics="/image/advet3.jpg" title="BATTLEFIELD2"/>
      <Hollywood  heading="Download for free." pics="/image/advet4.jpg" title="ASSASSINCREED"/>
    </div>
  );
}

export default App;