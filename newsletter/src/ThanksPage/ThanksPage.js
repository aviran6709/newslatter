import './ThanksPage.css'
import {useLocation} from 'react-router-dom';
const ThanksPage=(props)=>{
    const location = useLocation();

    const successIcon = require("../images/icon-success.svg");
    return(
<div className="thanks-page">
    <div className='content__text'>
        <img className='thanks__img' src={successIcon.default}></img>
    <h1 className='thanks__title'> Thanks for subscribing!</h1>
    <p className='thanks__text'>  A confirmation email has been sent to <b>{location.state}. </b>  
  Please open it and click the button inside to confirm your subscription.

  </p>
  <button className="main__btn">Dismiss message</button>
    </div>



</div>

    )
}

export default ThanksPage