// import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom'
import Progress from "./components/Progress"
import { dataEN, dataVN } from "./api/data";


function App() {

  // Kiểm tra xem ngôn ngữ nào được sử dụng theo url ?lang="en" hay "vi"
  const [searchParams] = useSearchParams();
  const lang = searchParams.get("lang");

  return (
    <Routes>
      <Route path='/' element={
        <Progress 
         data={lang === 'en' ? dataEN : dataVN} 
        />
      } />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  )
}

export default App
