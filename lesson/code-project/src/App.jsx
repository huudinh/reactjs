import './App.css'
import DestrArray from './components/DestrArray'

function App() {
  const data = ["Sam", 23, {
      id: 1,
      created_at: "Jan 19"
  }];
  return (
    <>
      <DestrArray info={data} />
    </>
  )
}

export default App
