import { Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signUp/signUp';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route index element={<SignIn/>}/>
          <Route path='signUp' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
