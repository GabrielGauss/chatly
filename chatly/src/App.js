import './App.css';
import { HeroMain } from './Components/HeroMain';
import NavMain from './Components/NavMain';
import { Sponsor } from './Components/Sponsor';

function App() {

  const btn01 = "My Account"

  return (
    <div className="App">
      <NavMain />
      <HeroMain />
      <Sponsor />
    </div>
  );
}

export default App;
