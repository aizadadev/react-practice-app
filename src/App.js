import logo from './logo.svg';
import './App.css';
import {users} from './users.js';
import Users from './components/Users.jsx';

function App() {
  return (
    <div className="App">
      {/* <Users users={users} /> */}
      <Users users={users}/>
    </div>
  );
}

export default App;
