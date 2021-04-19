import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import Section from './components/Section';

import './App.css';

import MockData from './mock/MockData';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Section padded={true} content={<Home featured={MockData.recipes[0]} />} />
      <Section backgroundColor="#69cd37" />
      <Section />
      <Section backgroundColor="#69cd37" />
    </div>
  );
}

export default App;
