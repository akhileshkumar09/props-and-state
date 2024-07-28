import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Todo from './components/Todo';
import Toggle from './components/Toggle';
import Time from './components/Time';
import Form from './components/Form';
import Weather from './pages/Weather';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello, World</h1>
        <ul>
          <li>
          <Link to='/todo'>ToDo</Link>
          </li>
          <li>
          <Link to='/toggle'>Toggle</Link>
          </li>
          <li>
          <Link to='/clock'>Clock</Link>
          </li>
          <li>
          <Link to='/sign-in'>Sign In</Link>
          </li>
          <li>
          <Link to='/weather'>Weather</Link>
          </li>
          <li>
          <Link to='/chat'>Send Message</Link>
          </li>
          
        </ul>
        <Routes>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/toggle' element={<Toggle/>}/>
          <Route path='/clock' element={<Time/>}/>
          <Route path='/sign-in' element={<Form/>}/>
          <Route path='/weather' element={<Weather/>}/>
          <Route path='/chat' element={<Chat/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
