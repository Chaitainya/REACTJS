import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld';
import NavBar from './components/navbar';
import SideBar from './components/sidebar';

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <div id='main'>
        <SideBar />
        <HelloWorld />
      </div>
    </div>
  );
}

export default App;
