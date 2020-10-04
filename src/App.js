import React  from 'react'; 
import Components from './Components'
import Footer from './Footer'
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
          <div>
        <input type="text" placeholder="Email address" className="input-box" />
          </div>
        <div >
        <input type="button" className="btn-cta" value="GET STARTED &gt;" />
        </div>
        </div>
        </div>
       </div>
      </section>
      <Components/>
      <Footer/>
    </div>
  );
}

export default App;