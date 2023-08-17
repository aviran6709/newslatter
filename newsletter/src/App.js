import "./App.css";
import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const desktopSvg = require("./images/illustration-sign-up-desktop.svg");
  const mobileSvg = require("./images/illustration-sign-up-mobile.svg");
  const iconList = require("./images/icon-list.svg");
  const [emailData, setEmailData] = useState('');
  const navigate = useNavigate();
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [imgSrc, setImgSrc] = useState(desktopSvg.default); 

const handleSubmit =(event)=>{
  if(emailData){
 
    setIsValidEmail(false) 
  }
  event.preventDefault();
  navigate('/Thanks', { state: emailData });
}

const handleChange =(event)=>{
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value);
  setIsValidEmail(isValid);
  if(isValidEmail){
    setEmailData(event.target.value)
  }
 
}


useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 476) {
      setImgSrc(mobileSvg.default);
    } else {
      setImgSrc(desktopSvg.default);
    }
  };

  handleResize(); 
  window.addEventListener('resize', handleResize);


  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  return (
    <div className="App">
      <div className="main">
        <div className="text__content">
          <h1 className="main__tittle"> Stay updated!</h1>
          <h2 className="main__subtitle">
            Join 60,000+ product managers receiving monthly updates on:
          </h2>
          <ul className="main__un_list">
            <li className="main__list">
              <img
                className="main__list__img"
                src={iconList.default}
                alt="V icon"
              />
             <span> Product discovery and building what matters</span>
            </li>
            <li className="main__list">
              <img
                className="main__list__img"
                src={iconList.default}
                alt="V icon"
              />
              <span>  Measuring to ensure updates are a success</span>
            </li>
            <li className="main__list">
              <img
                className="main__list__img"
                src={iconList.default}
                alt="V icon"
              />
             <span>  And much more!</span>
            </li>
          </ul>
<form className="main__form" onSubmit={handleSubmit} >
<label className="main__label" htmlFor="email">Email Address:{!isValidEmail?<span className="main__span-valid">valid email required</span>:""}</label>

<input className={!isValidEmail?"main__input main__input-error":"main__input"} onChange={handleChange} id="email" type='email' name="emails" required />
<button className="main__btn"  

type="submit" >  Subscribe to monthly newsletter
</button>
</form>
        </div>
        <img src={imgSrc} alt="graf-svg" />
      </div>
    </div>
  );
}

export default App;
