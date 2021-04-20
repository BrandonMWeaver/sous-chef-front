import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Recipes from './components/Recipes';
import Section from './components/Section';

import './App.css';

import MockData from './mock/MockData';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Section padded={true} content={<Home featured={MockData.recipes[0]} />} />
      <Section content={<Recipes recipes={MockData.recipes.slice(0, 4)} />} />
      <Section />
      <Section />
    </div>
  );
}

export default App;
