import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './screen/Home';
import Login from './screen/Login';
import Register from './screen/Register';
import GlobalStyle from './components/GlobalStyles';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const {currentUser} = useContext(AuthContext);
 
  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }

    return children;
  }
  
  return (
    <GlobalStyle>
      <div className="App">
        <Routes>
          <Route path='/'>
            <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Route>
        </Routes>
      </div>
    </GlobalStyle>
  );
}

export default App;