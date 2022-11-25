import Topbar from './components/topbar/Topbar.jsx'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Single from './pages/single/Single.jsx';
import Write from './pages/write/Write.jsx';
import Profile from './pages/profile/Profile.jsx';
function App() {
  return (
    <div className="App">
      
      <Topbar/>
      <Profile />
      
    </div>
  );
}

export default App;
