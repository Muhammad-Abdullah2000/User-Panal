import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Login from './components/Login/Login';
// import SignUp from './components/SignUp/SignUp';
import CardContent from './CardComponent/CardContent';
import TermsAndConditions from './components/Trems/TermsAndConditions';
import All from './Catgeories/All';

function App() {

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        {/* <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route> */}
        <Route path='/cardcontent' element={<CardContent />}></Route>
        <Route path='/terms' element={<TermsAndConditions />}></Route>
        <Route path='/all' element={<All />}></Route>



      </Routes>



    </div>
  );
}

export default App;
