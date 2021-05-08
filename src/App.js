import About from './components/About';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Recipes from './components/Recipes';
import SignInFormBox from './components/SignInFormBox';

import './App.css';

import MockData from './mock/MockData';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home featured={MockData.recipes[3]} />
      <Recipes recipes={MockData.recipes.slice(0, 4)} />
      <About featured={MockData.recipes[3]} />
      <SignInFormBox />
    </div>
  );
}

export default App;
