import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import WaitHeader from './component/WaitHeader';
import Main from './component/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        {/* <Login/> */}
        <Main/>
        {/* <WaitHeader/> */}
      </header>
    </div>
  );
}

export default App;
