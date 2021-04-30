import About from './components/About';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Recipes from './components/Recipes';
import Section from './components/Section';
import SignInFormBox from './components/SignInFormBox';

import './App.css';

import MockData from './mock/MockData';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Section padded={true} content={<Home featured={MockData.recipes[3]} />} />
      <Section content={<Recipes recipes={MockData.recipes.slice(0, 4)} />} />
      <Section content={<About featured={MockData.recipes[3]} />} />
      <Section content={<SignInFormBox />} />
    </div>
  );
}

export default App;
