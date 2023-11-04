import './App.css';
import { Outlet } from 'react-router';
import { SideBar } from './assets/scss/components/SideBar/SideBar';
function App() {
  return (
    <div className="App">
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
