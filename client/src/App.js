import './App.css';
import { Outlet } from 'react-router';
import { SideBar } from './components/SideBar/SideBar';
function App() {
  return (
    <div className="App ">
      <div className="container">
        <div className="wrapper">
        <SideBar/>
        <Outlet/>
        </div>        
      </div>
    </div>
  );
}

export default App;
