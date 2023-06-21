import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/signUp';
import LogIn from './components/LogIn';

function App() {
  return (
    <div className="App">
      <LogIn/>
      <div className="app_main">
      <Routes>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
