import { Routes, Route } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';
import Regist from './screen/Regist';
import Main from './screen/Main';
import GlobalStyle from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <Routes>
          <Route path='/' element={<Regist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/regist' element={<Regist />} />
          <Route path='/main' element={<Main />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;