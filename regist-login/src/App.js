import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';
import Regist from './screens/Regist';
import Main from './screens/Main';
import GlobalStyle from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyle>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
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
