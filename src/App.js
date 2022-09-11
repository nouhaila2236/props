import logo from './logo.svg';
import './App.css';
import Profile from './Component/Profile/Profile'
function App() {
  const onClick =e=>{
    e.preventDefault();
    alert('Hi Nouhaila this an alert message ^^');
    }
  return (
    <div className="App">
      <header className="App-header">
        <Profile FullName="Nouhaila EL ARROUM" bio="I like to enjoy everything in my life." profession=" web developer" onClick={onClick}><img src="./imageInPublic.jpg" /></Profile>
        
      </header>
    </div>
  );
}

export default App;
