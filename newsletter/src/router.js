
import App from './App'; 
import ThanksPage from './ThanksPage/ThanksPage'
import {Route,Routes} from 'react-router-dom'


function Router() {

    return (
<Routes>
<Route exact path='/' element={<App/>}/> 
<Route path='/Thanks' element={<ThanksPage/>}/> 

</Routes>
    );
  }
  export default Router;