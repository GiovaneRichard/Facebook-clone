import { Avatar } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';


function App() {
  return (
    <div className="App">
      <Header />

      <div className='app--body'>
        <Sidebar />
        <Feed />
        {/* Widgets */}

      </div>

    </div>
  );
}

export default App;
