import { 
  BrowserRouter, Routes, Route, Link 
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Routes and Route goes here*/}
    </BrowserRouter>
  );
}

