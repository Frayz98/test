// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch('/users')
          .then(res => res.json())
          .then(users => setUsers(users))

    };
    fetchData().then()
  },[]);

  return (
    <div className="App">
      {users.map(item => (
        <div key={item.id}>
          {item.username}
        </div>
      ))}
    </div>
  );
}

export default App;
