import './App.css';
import SideBar from './components/SideBar';
import CurrentRequests from './components/CurrentRequests';

function App() {
  return (
    <div className='grid-layout'>
      <SideBar />
      <CurrentRequests />
      <button className='chat-now-logo'>
        <i className='fa-brands fa-weixin'></i>
      </button>
    </div>
  );
}

export default App;
